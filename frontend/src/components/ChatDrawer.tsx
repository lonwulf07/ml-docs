"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Send, Sparkles, X, MessageSquare, Trash2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // ROBUST URL ROUTING: Ensures we always hit the /chat endpoint, regardless of trailing slashes in the env var
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const API_URL = baseUrl.endsWith("/chat")
    ? baseUrl
    : `${baseUrl.replace(/\/$/, "")}/chat`;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    if (!isOpen) setIsOpen(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      // Explicitly catch HTTP errors (like 500 or 404) so it doesn't fail silently
      if (!res.ok) {
        throw new Error(`Backend returned status ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (e) {
      console.error("Chat Fetch Error:", e);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Error connecting to the AI backend. It may be waking up, or the API URL is incorrect.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMessages([]);
  };

  return (
    <>
      {/* 1. FLOATING CHAT BUBBLE (Visible when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        >
          <MessageSquare size={24} />
          {/* Subtle online pulse indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* 2. CHAT WINDOW (Visible when open) */}
      <div
        className={`fixed bottom-0 right-0 md:bottom-10 md:right-10 w-full md:w-[450px] transition-all duration-300 z-50 ${
          isOpen
            ? "h-[85vh] md:h-[650px] opacity-100 translate-y-0"
            : "h-0 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900 border border-slate-800 rounded-t-3xl md:rounded-3xl shadow-2xl h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-emerald-500/10 border-b border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Sparkles size={18} />
              <span>Agent Chat</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-500">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="p-1.5 hover:bg-emerald-500/20 rounded-md text-emerald-600 hover:text-emerald-400 transition-colors"
                  title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>
              )}
              {/* Close Button replaces the Chevron */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-emerald-500/20 rounded-md text-emerald-600 hover:text-emerald-400 transition-colors"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-6 bg-slate-950/50 scroll-smooth">
            {messages.length === 0 && !isTyping && (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
                <Sparkles size={32} className="text-slate-700" />
                <p className="text-sm text-center px-4">
                  Ask me anything about your indexed libraries!
                </p>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[95%] md:max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-emerald-600 text-white rounded-br-sm"
                      : "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-sm prose prose-invert prose-emerald prose-p:leading-relaxed prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800 prose-code:text-emerald-300"
                  }`}
                >
                  {m.role === "user" ? (
                    m.content
                  ) : (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:underline"
                          />
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 rounded-bl-sm flex items-center gap-2 text-emerald-400">
                  <span className="text-sm font-mono">Thinking</span>
                  <span className="w-2 h-4 bg-emerald-400 animate-pulse block"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <div className="flex gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800 focus-within:border-emerald-500/50 shadow-inner transition-colors">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Query the Cloud Database..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 text-white placeholder:text-slate-600 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="p-3 bg-emerald-500 rounded-lg text-slate-950 hover:bg-emerald-400 disabled:opacity-50 transition-colors"
              >
                <Send size={16} className={isTyping ? "opacity-50" : ""} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
