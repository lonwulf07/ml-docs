"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Send,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Link as LinkIcon,
  Trash2,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
}

export default function ChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Auto-open drawer if closed
    if (!isOpen) setIsOpen(true);

    try {
      const res = await fetch("https://lonwulf-ml-docs.hf.space/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
          sources: data.sources,
        },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error connecting to backend vector store.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing the drawer
    setMessages([]);
  };

  return (
    <div
      className={`fixed bottom-0 right-10 w-[500px] transition-all duration-500 z-50 ${isOpen ? "h-[650px]" : "h-14"}`}
    >
      <div className="bg-slate-900 border border-slate-800 border-b-0 rounded-t-3xl shadow-2xl h-full flex flex-col overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between px-6 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors group"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Sparkles size={18} />
            <span>Agent Chat</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-500">
            {messages.length > 0 && (
              <div
                onClick={clearChat}
                className="p-1.5 hover:bg-emerald-500/20 rounded-md transition-colors text-emerald-600 hover:text-emerald-400"
                title="Clear Chat"
              >
                <Trash2 size={16} />
              </div>
            )}
            {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </div>
        </button>

        {/* Chat Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth bg-slate-950/50">
          {messages.length === 0 && !isTyping && (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
              <Sparkles size={32} className="text-slate-700" />
              <p>Ask me anything about your indexed libraries!</p>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-emerald-600 text-white rounded-br-sm"
                    : // Tailwind Typography applied to Assistant for gorgeous code blocks
                      "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-sm prose prose-invert prose-emerald prose-p:leading-relaxed prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800 prose-code:text-emerald-300"
                }`}
              >
                {m.role === "user" ? (
                  m.content
                ) : (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                )}
              </div>

              {/* Display Sources */}
              {m.sources && m.sources.length > 0 && (
                <div className="mt-2 ml-2 flex flex-wrap gap-2 max-w-[90%]">
                  {m.sources.map((src, idx) => (
                    <a
                      key={idx}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[10px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-full hover:bg-emerald-500/20 transition-colors line-clamp-1 max-w-full"
                    >
                      <LinkIcon size={10} className="shrink-0" />
                      <span className="truncate">
                        {new URL(src).pathname.split("/").pop() || "Source"}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Dynamic Cursor / Thinking State */}
          {isTyping && (
            <div className="flex flex-col items-start">
              <div className="max-w-[85%] p-4 rounded-2xl bg-slate-800 border border-slate-700 rounded-bl-sm flex items-center gap-2 text-emerald-400">
                <span className="text-sm font-mono">Thinking</span>
                <span className="w-2 h-4 bg-emerald-400 animate-pulse block"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-950 border-t border-slate-800">
          <div className="flex gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800 focus-within:border-emerald-500/50 transition-colors shadow-inner">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Query your Local Database..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 text-white placeholder:text-slate-600 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isTyping || !input.trim()}
              className="p-3 bg-emerald-500 rounded-lg text-slate-950 hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} className={isTyping ? "opacity-50" : ""} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
