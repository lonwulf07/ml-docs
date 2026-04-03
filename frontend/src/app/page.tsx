"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Sidebar from "@/components/Sidebar";
import ChatDrawer from "@/components/ChatDrawer";
import { ExternalLink, Database, Cpu, Cloud, Menu } from "lucide-react";

export default function App() {
  const [activeLibrary, setActiveLibrary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile state

  const [sections, setSections] = useState<
    { title: string; url: string; content?: string }[]
  >([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update this to your deployed Hugging Face Space URL!
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const handleNavigation = async (libName: string) => {
    setActiveLibrary(libName);
    setSections([]);
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/library/index`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ library_name: libName }),
      });
      const data = await res.json();

      const newSections = data.urls.map((url: string) => {
        let title =
          new URL(url).pathname.split("/").filter(Boolean).pop() || "Overview";
        title = title.replace(/[-_]/g, " ").replace(".html", "");
        return { title: title.charAt(0).toUpperCase() + title.slice(1), url };
      });

      setSections(newSections);
      if (newSections.length > 0) loadPageContent(newSections, 0);
      else setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const loadPageContent = async (currentSections: any[], index: number) => {
    setIsLoading(true);
    setActiveIndex(index);
    if (currentSections[index].content) {
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/library/page`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: currentSections[index].url }),
      });
      const data = await res.json();
      const updatedSections = [...currentSections];
      updatedSections[index].content = data.content;
      setSections(updatedSections);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo(0, 0);
  }, [activeIndex]);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar
        onSelect={handleNavigation}
        activeLibrary={activeLibrary}
        sections={sections}
        activeIndex={activeIndex}
        onSectionChange={(idx) => loadPageContent(sections, idx)}
        onBack={() => {
          setActiveLibrary(null);
          setSections([]);
        }}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main
        ref={scrollRef}
        className="flex-1 relative overflow-y-auto scroll-smooth w-full"
      >
        {/* Mobile Header Menu */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 sticky top-0 z-20">
          <h1 className="font-bold text-white tracking-tight">ML Agent V2</h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-slate-900 rounded-lg text-emerald-400"
          >
            <Menu size={20} />
          </button>
        </div>

        <div className="p-6 md:p-12">
          {!activeLibrary ? (
            /* HERO VIEW */
            <div className="max-w-5xl mx-auto space-y-12 md:space-y-16 animate-in fade-in duration-700 md:mt-8 pb-32">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Cloud Reader Online
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]">
                  ML <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Knowledge Engine
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                  Select a library from the sidebar to browse the cloud
                  documentation manually, or open the chat to query the vector
                  database directly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <Database className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Pinecone RAG
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Vector search retrieves exact context from thousands of
                    pages.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <Cloud className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Cloud Storage
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Pristine Markdown is hosted in Supabase for on-demand
                    streaming.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <Cpu className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    FastAPI Backend
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Lightning-fast orchestration of database retrieval and AI
                    context generation.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* CLOUD READER VIEW */
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-32">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 md:mt-8 gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white capitalize break-words">
                  {sections[activeIndex]?.title || "Loading..."}
                </h2>
                {sections[activeIndex] && (
                  <a
                    href={sections[activeIndex].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-2 text-sm shrink-0"
                  >
                    Original Source <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {isLoading ? (
                <div className="animate-pulse space-y-4 pt-4">
                  <div className="h-8 bg-slate-800 rounded w-1/3"></div>
                  <div className="h-4 bg-slate-800 rounded w-full"></div>
                  <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                </div>
              ) : (
                <article className="max-w-3xl mx-auto w-full animate-in fade-in duration-300 pb-20">
                  {sections[activeIndex]?.content ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1
                            className="text-3xl md:text-4xl font-black text-white mt-12 mb-6 tracking-tight"
                            {...props}
                          />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2
                            className="text-2xl md:text-3xl font-bold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-2"
                            {...props}
                          />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3
                            className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4"
                            {...props}
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="text-base md:text-[1.05rem] leading-[1.8] text-slate-300 mb-6"
                            {...props}
                          />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul
                            className="list-disc list-outside ml-6 mb-8 text-slate-300 space-y-3 leading-relaxed"
                            {...props}
                          />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol
                            className="list-decimal list-outside ml-6 mb-8 text-slate-300 space-y-3 leading-relaxed"
                            {...props}
                          />
                        ),
                        a: ({ node, ...props }) => (
                          <a
                            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30"
                            target="_blank"
                            rel="noopener noreferrer"
                            {...props}
                          />
                        ),
                        blockquote: ({ node, ...props }) => (
                          <blockquote
                            className="border-l-4 border-emerald-500 bg-emerald-500/5 px-4 md:px-6 py-4 rounded-r-xl my-6 text-slate-300 italic"
                            {...props}
                          />
                        ),
                        code: ({
                          node,
                          inline,
                          className,
                          children,
                          ...props
                        }: any) => {
                          const match = /language-(\w+)/.exec(className || "");
                          const isInline = inline || !match;
                          return isInline ? (
                            <code
                              className="bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded-md text-[0.9em] font-mono break-all"
                              {...props}
                            >
                              {children}
                            </code>
                          ) : (
                            <div className="relative my-8 rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-xl max-w-full">
                              <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
                                <div className="flex gap-2">
                                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                </div>
                                <span className="ml-4 text-xs font-mono text-slate-500 uppercase">
                                  {match[1] || "text"}
                                </span>
                              </div>
                              <pre className="p-4 md:p-5 overflow-x-auto text-[0.85rem] md:text-[0.9rem] font-mono text-slate-300 leading-[1.7]">
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              </pre>
                            </div>
                          );
                        },
                      }}
                    >
                      {/* V3 MAGIC: Direct injection. No more messy formatRawCodeBlocks() needed! */}
                      {sections[activeIndex].content}
                    </ReactMarkdown>
                  ) : (
                    <p className="text-slate-500 italic text-center mt-20">
                      No content available.
                    </p>
                  )}
                </article>
              )}
            </div>
          )}
        </div>
        <ChatDrawer />
      </main>
    </div>
  );
}
