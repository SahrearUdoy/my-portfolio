"use client";

import React from "react";
import {
  Code2,
  Database,
  Layers,
  Network,
  ShieldCheck,
  UserCheck,
  Cpu,
  Boxes,
} from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDaisyui,
  SiShadcnui,
  SiHeroui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
  description: string;
}

const FRONTEND_ITEMS: SkillItem[] = [
  { name: "HTML5", icon: SiHtml5, colorClass: "text-[#E34F26]", description: "Semantic markup & structure" },
  { name: "CSS3", icon: FaCss3Alt, colorClass: "text-[#1572B6]", description: "Layouts, flexbox & responsive grids" },
  { name: "JavaScript", icon: SiJavascript, colorClass: "text-[#F7DF1E]", description: "ES6+, async logic & DOM handling" },
  { name: "React", icon: SiReact, colorClass: "text-[#00B4D8] dark:text-[#61DAFB]", description: "Component-based architecture & hooks" },
  { name: "Next.js", icon: SiNextdotjs, colorClass: "text-base-content", description: "App Router, SSR & performance" },
  { name: "TypeScript", icon: SiTypescript, colorClass: "text-[#3178C6]", description: "Static typing & safe interfaces" },
  { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-[#06B6D4] dark:text-[#38BDF8]", description: "Utility-first modern styling" },
  { name: "DaisyUI", icon: SiDaisyui, colorClass: "text-[#1AD1A5]", description: "Component styling & theme systems" },
  { name: "shadcn/ui", icon: SiShadcnui, colorClass: "text-base-content", description: "Accessible headless UI components" },
  { name: "HeroUI", icon: SiHeroui, colorClass: "text-[#006FEE]", description: "Modern React component system" },
];

const BACKEND_ITEMS: SkillItem[] = [
  { name: "Node.js", icon: SiNodedotjs, colorClass: "text-[#5FA04E]", description: "JavaScript runtime environment" },
  { name: "Express.js", icon: SiExpress, colorClass: "text-base-content", description: "RESTful server & API routing" },
  { name: "MongoDB", icon: SiMongodb, colorClass: "text-[#47A248]", description: "NoSQL document database" },
  { name: "SQL", icon: Database, colorClass: "text-[#3B82F6]", description: "Relational data querying & schemas" },
  { name: "Mongoose/ODM", icon: SiMongoose, colorClass: "text-[#880000] dark:text-[#E53E3E]", description: "Schema validation & data modeling" },
];

const CONCEPT_ITEMS: SkillItem[] = [
  { name: "Modular Pattern", icon: Layers, colorClass: "text-[#8B5CF6]", description: "Separation of concerns & reusable code" },
  { name: "API Integration", icon: Network, colorClass: "text-[#10B981]", description: "Consuming & handling external endpoints" },
  { name: "Better Auth", icon: ShieldCheck, colorClass: "text-[#F59E0B]", description: "Modern authentication workflows" },
  { name: "Role-Based Access Control (RBAC)", icon: UserCheck, colorClass: "text-[#EC4899]", description: "Granular user permissions & security" },
  { name: "Git", icon: SiGit, colorClass: "text-[#F05032]", description: "Source control & branching workflows" },
  { name: "GitHub", icon: SiGithub, colorClass: "text-base-content", description: "Remote repository collaboration" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technologies and Technical Skills"
      className="scroll-mt-24 w-full card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40 overflow-hidden"
    >
      <div className="card-body p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            Technologies &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-[#6B93DC] to-secondary bg-clip-text text-transparent">
              Development Concepts
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-base-content/65 max-w-2xl font-medium">
            Tools, libraries, and architectural principles I actively build with and study.
          </p>
        </div>

        {/* 3 Grouped Sections */}
        <div className="space-y-8">
          {/* Category 1: Frontend */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-base-300/80 pb-2">
              <Cpu className="w-4 h-4 text-primary" />
              <h3 className="font-bold text-sm sm:text-base text-base-content tracking-tight">
                Frontend Architecture &amp; Interfaces
              </h3>
              <span className="text-xs text-base-content/50 font-normal ml-auto">
                {FRONTEND_ITEMS.length} Technologies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FRONTEND_ITEMS.map((item) => (
                <div
                  key={item.name}
                  role="img"
                  aria-label={item.name}
                  className="flex items-start gap-3 p-3 rounded-xl bg-base-200/50 border border-base-300/70 hover:border-primary/40 hover:bg-base-200/80 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center shrink-0 border border-base-300/80 shadow-2xs">
                    <item.icon className={`w-4 h-4 ${item.colorClass}`} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-semibold text-base-content">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-base-content/65 font-normal leading-tight">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: Backend & Data */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-base-300/80 pb-2">
              <Database className="w-4 h-4 text-secondary" />
              <h3 className="font-bold text-sm sm:text-base text-base-content tracking-tight">
                Backend Services &amp; Data Management
              </h3>
              <span className="text-xs text-base-content/50 font-normal ml-auto">
                {BACKEND_ITEMS.length} Technologies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BACKEND_ITEMS.map((item) => (
                <div
                  key={item.name}
                  role="img"
                  aria-label={item.name}
                  className="flex items-start gap-3 p-3 rounded-xl bg-base-200/50 border border-base-300/70 hover:border-primary/40 hover:bg-base-200/80 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center shrink-0 border border-base-300/80 shadow-2xs">
                    <item.icon className={`w-4 h-4 ${item.colorClass}`} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-semibold text-base-content">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-base-content/65 font-normal leading-tight">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: Development Concepts & Architecture */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-base-300/80 pb-2">
              <Boxes className="w-4 h-4 text-accent" />
              <h3 className="font-bold text-sm sm:text-base text-base-content tracking-tight">
                Development Concepts &amp; Workflow
              </h3>
              <span className="text-xs text-base-content/50 font-normal ml-auto">
                {CONCEPT_ITEMS.length} Concepts
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {CONCEPT_ITEMS.map((item) => (
                <div
                  key={item.name}
                  role="img"
                  aria-label={item.name}
                  className="flex items-start gap-3 p-3 rounded-xl bg-base-200/50 border border-base-300/70 hover:border-primary/40 hover:bg-base-200/80 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-base-100 flex items-center justify-center shrink-0 border border-base-300/80 shadow-2xs">
                    <item.icon className={`w-4 h-4 ${item.colorClass}`} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-semibold text-base-content">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-base-content/65 font-normal leading-tight">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
