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
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Terminal size={18} />,
  Machine_Learning_Core: <Cpu size={18} />,
  Deep_Learning: <Zap size={18} />,
  NLP_and_LLMs: <Globe size={18} />,
  Vector_Databases: <Database size={18} />,
  Deployment_and_MLOps: <Layout size={18} />,
};

interface SidebarProps {
  onSelect: (id: string, name: string, category: string) => void;
  activeId: string;
  activeName: string;
  sections: { title: string }[];
  activeIndex: number;
  onSectionChange: (index: number) => void;
  onBack: () => void;
}

export default function Sidebar({
  onSelect,
  activeId,
  activeName,
  sections,
  activeIndex,
  onSectionChange,
  onBack,
}: SidebarProps) {
  // --- MODE: PAGINATED READER ---
  if (activeId !== "home") {
    return (
      <aside className="w-80 h-screen bg-slate-950 border-r border-slate-800 flex flex-col p-6 overflow-y-auto scrollbar-hide shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 mb-8 transition-colors group"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Back to Libraries
          </span>
        </button>

        <div className="mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Layers size={18} />
            <h2 className="font-bold text-lg text-white capitalize">
              {activeName}
            </h2>
          </div>
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            Chapters
          </p>
        </div>

        <nav className="space-y-1">
          {sections.length === 0 ? (
            <p className="text-sm text-slate-600 italic">No chapters found.</p>
          ) : (
            sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => onSectionChange(idx)}
                title={section.title}
                className={`w-full text-left block py-2.5 text-sm rounded-lg px-3 transition-all line-clamp-2 ${
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

  // --- MODE: DIRECTORY ---
  return (
    <aside className="w-80 h-screen bg-slate-950 border-r border-slate-800 flex flex-col p-6 overflow-y-auto scrollbar-hide shrink-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-emerald-500/20 rounded-lg">
          <BookOpen className="text-emerald-400" />
        </div>
        <h1 className="font-bold text-xl text-white tracking-tight">
          ML Agent
        </h1>
      </div>

      <nav className="space-y-8">
        {Object.entries(targets).map(([category, urls]) => (
          <div key={category} className="space-y-2">
            <div className="flex items-center gap-2 px-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
              {categoryIcons[category] || <ChevronRight size={12} />}
              <span>{category.replace(/_/g, " ")}</span>
            </div>

            <div className="space-y-1">
              {(urls as string[]).map((url: string) => {
                let hostname = new URL(url).hostname
                  .replace("docs.", "")
                  .replace("www.", "");
                const domain = hostname.split(".")[0];

                return (
                  <button
                    key={url}
                    onClick={() => onSelect(url, domain, category)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-400 hover:bg-slate-900 rounded-xl group transition-all"
                  >
                    <span className="capitalize">{domain}</span>
                    <ChevronRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 text-emerald-500 transition-opacity"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
