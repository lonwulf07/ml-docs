"use client";
import React from "react";
import targets from "../data/targets.json";
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Globe,
  Zap,
  Database,
  Terminal,
  Layout,
  Layers,
  X,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Core Frameworks": <Terminal size={18} />,
  "Machine Learning Core": <Cpu size={18} />,
  "Deep Learning": <Zap size={18} />,
  "NLP & LLMs": <Globe size={18} />,
  "Vector Databases": <Database size={18} />,
  "Deployment & MLOps": <Layout size={18} />,
  "Data Engineering & Math": <Layers size={18} />,
};

interface SidebarProps {
  onSelect: (libraryName: string) => void;
  activeLibrary: string | null;
  sections: { title: string; url: string }[];
  activeIndex: number;
  onSectionChange: (index: number) => void;
  onBack: () => void;
  isOpen: boolean; // For mobile toggle
  setIsOpen: (isOpen: boolean) => void; // For mobile toggle
}

export default function Sidebar({
  onSelect,
  activeLibrary,
  sections,
  activeIndex,
  onSectionChange,
  onBack,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  // Mobile responsive classes: Slides in on mobile, fixed grid on desktop
  const sidebarClasses = `fixed md:static inset-y-0 left-0 z-40 w-80 h-screen bg-slate-950 border-r border-slate-800 flex flex-col p-6 overflow-y-auto scrollbar-hide shrink-0 transform transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`;

  const renderMobileClose = () => (
    <button
      onClick={() => setIsOpen(false)}
      className="md:hidden absolute top-6 right-6 text-slate-400 hover:text-white"
    >
      <X size={24} />
    </button>
  );

  // --- CLOUD READER MODE ---
  if (activeLibrary) {
    return (
      <aside className={sidebarClasses}>
        {renderMobileClose()}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 mb-8 transition-colors group w-fit"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Back
          </span>
        </button>

        <div className="mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Layers size={18} />
            <h2 className="font-bold text-lg text-white capitalize">
              {activeLibrary}
            </h2>
          </div>
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            Cloud Chapters
          </p>
        </div>

        <nav className="space-y-1">
          {sections.length === 0 ? (
            <p className="text-sm text-slate-600 italic">
              Loading cloud index...
            </p>
          ) : (
            sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSectionChange(idx);
                  if (window.innerWidth < 768) setIsOpen(false); // Auto-close on mobile
                }}
                title={section.url}
                className={`w-full text-left block py-2.5 text-sm rounded-lg px-3 transition-all truncate ${
                  activeIndex === idx
                    ? "bg-emerald-500/10 text-emerald-400 font-medium border-l-2 border-emerald-500 rounded-l-none"
                    : "text-slate-400 hover:text-emerald-400 hover:bg-slate-900/50"
                }`}
              >
                {section.title}
              </button>
            ))
          )}
        </nav>
      </aside>
    );
  }

  // --- MAIN DIRECTORY MODE ---
  return (
    <aside className={sidebarClasses}>
      {renderMobileClose()}
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <BookOpen className="text-emerald-400" />
        </div>
        <h1 className="font-bold text-xl text-white tracking-tight">
          ML Agent
        </h1>
      </div>

      <nav className="space-y-8">
        {Object.entries(targets).map(([category, libraries]) => (
          <div key={category} className="space-y-2">
            <div className="flex items-center gap-2 px-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
              {categoryIcons[category] || <ChevronRight size={12} />}
              <span>{category.replace(/_/g, " ")}</span>
            </div>
            <div className="space-y-1">
              {(libraries as string[]).map((libName: string) => (
                <button
                  key={libName}
                  onClick={() => onSelect(libName)}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-400 hover:bg-slate-900 rounded-xl group transition-all"
                >
                  <span className="capitalize">{libName}</span>
                  <ChevronRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
