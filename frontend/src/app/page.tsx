"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Sidebar from "@/components/Sidebar";
import ChatDrawer from "@/components/ChatDrawer";
import { ExternalLink, Database, Cpu, HardDrive } from "lucide-react";

export default function App() {
  const [activeId, setActiveId] = useState("home");
  const [activeName, setActiveName] = useState("Home");
  const [isLoading, setIsLoading] = useState(false);

  // NEW: Pagination States
  const [sections, setSections] = useState<
    { title: string; content: string }[]
  >([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const processMarkdownIntoPages = (md: string) => {
    // Split the massive text at every H2 (##) to create distinct pages
    const rawSections = md.split(/\n(?=##\s+)/);

    const parsedSections = rawSections.map((sec, index) => {
      // Find the first heading to use as the button title
      const headingMatch = sec.match(/^(#{1,4})\s+(.*)$/m);
      let title = `Page ${index + 1}`;

      if (headingMatch) {
        let rawText = headingMatch[2].trim();
        // Clean Sphinx/Markdown junk
        let cleanText = rawText.replace(/\[[¶#]\]\([^)]+\)/g, "");
        cleanText = cleanText.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
        cleanText = cleanText.replace(/[*_`]/g, "").trim();

        // If the title is our crawler URL, clean it up to look nice!
        if (cleanText.startsWith("Source:")) {
          try {
            const urlStr = cleanText.replace("Source:", "").trim();
            const pathParts = new URL(urlStr).pathname
              .split("/")
              .filter(Boolean);
            let lastPart = pathParts.pop();
            if (
              lastPart &&
              (lastPart.includes(".html") || lastPart === "index")
            ) {
              lastPart = pathParts.pop() || lastPart.replace(".html", "");
            }
            title = lastPart ? lastPart.replace(/[-_]/g, " ") : "Overview";
            title = title.charAt(0).toUpperCase() + title.slice(1);
          } catch (e) {
            title = "Overview";
          }
        } else {
          title = cleanText;
        }
      }

      // If title is empty or just "Overview" multiple times, ensure uniqueness
      return { title: title || `Page ${index + 1}`, content: sec };
    });

    setSections(parsedSections);
    setActiveIndex(0); // Reset to first page
  };

  const handleNavigation = async (
    url: string,
    name: string,
    category: string,
  ) => {
    setActiveId(url);
    setActiveName(name);

    if (url === "home") {
      setSections([]);
      return;
    }

    setIsLoading(true);
    let hostname = new URL(url).hostname;
    hostname = hostname.replace("docs.", "").replace("www.", "");
    const domain = hostname.split(".")[0];
    const filename = `${category}_${domain}.md`;

    try {
      const res = await fetch(`/docs/${filename}`);
      if (res.ok) {
        const text = await res.text();
        processMarkdownIntoPages(text);
      } else {
        processMarkdownIntoPages(
          `# Document Not Found\nRun your python scraper to generate \`${filename}\`.`,
        );
      }
    } catch (err) {
      processMarkdownIntoPages("# Error loading documentation.");
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to top when changing pages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [activeIndex]);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      <Sidebar
        onSelect={handleNavigation}
        activeId={activeId}
        activeName={activeName}
        sections={sections}
        activeIndex={activeIndex}
        onSectionChange={setActiveIndex}
        onBack={() => handleNavigation("home", "Home", "")}
      />

      <main
        ref={scrollRef}
        className="flex-1 relative overflow-y-auto p-12 scroll-smooth"
      >
        {activeId === 'home' ? (
          <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-700 mt-8 pb-32">
             {/* Hero Section */}
             <div className="space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
                 System Online
               </div>
               <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]">
                 ML <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                   Knowledge Engine
                 </span>
               </h2>
               <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                 Some of the industry standard machine learning documentation available here. Select a library from the sidebar to begin exploring, or open the chat to query the vector database.
               </p>
             </div>

             {/* Tech Stack Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-colors backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <Database className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Pinecone RAG</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Vector search retrieves exact context from thousands of pages to eliminate AI hallucinations.</p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-colors backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <Cpu className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Local Embeddings</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Running `all-MiniLM-L6-v2` locally on your CPU bypasses all API rate limits for infinite scraping.</p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-colors backdrop-blur-sm">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                    <HardDrive className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Markdown Storage</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Raw HTML is converted to clean Markdown and cached locally for instantaneous UI rendering.</p>
                </div>
             </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-32">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <h2 className="text-4xl font-bold text-white capitalize">
                {activeName}
              </h2>
              <a
                href={activeId}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-2"
              >
                Official Site <ExternalLink size={14} />
              </a>
            </div>

            {isLoading ? (
              <div className="animate-pulse space-y-4 pt-4">
                <div className="h-8 bg-slate-800 rounded w-1/3"></div>
                <div className="h-4 bg-slate-800 rounded w-full"></div>
                <div className="h-4 bg-slate-800 rounded w-5/6"></div>
              </div>
            ) : (
              <article
                className="prose prose-invert prose-emerald max-w-none 
                prose-headings:text-white prose-a:text-emerald-400 prose-code:text-emerald-300
                prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 animate-in fade-in duration-300"
              >
                {/* WE ONLY RENDER THE ACTIVE SECTION NOW */}
                {sections.length > 0 && (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug]}
                  >
                    {sections[activeIndex].content}
                  </ReactMarkdown>
                )}
              </article>
            )}
          </div>
        )}
        <ChatDrawer />
      </main>
    </div>
  );
}
