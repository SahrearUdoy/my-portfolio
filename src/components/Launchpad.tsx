"use client";

import React from "react";
import { Rocket, Sparkles, ExternalLink, Code2, PlusCircle, Layers } from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiDaisyui } from "react-icons/si";

interface VerifiedProject {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: { name: string; icon: React.ComponentType<{ className?: string }> }[];
  status: string;
}

const VERIFIED_PROJECTS: VerifiedProject[] = [
  {
    title: "Personal Developer Portfolio",
    category: "Web Application · Active Project",
    description:
      "A modern developer portfolio built with Next.js 16 App Router and Tailwind CSS v4, featuring a custom celestial day/night sky engine (ciel-day & ciel-night DaisyUI themes), synchronized sun/moon orbital transitions, and a responsive component architecture.",
    highlights: [
      "Dynamic celestial atmosphere with 5 moon phases & twinkling stars",
      "Tailwind CSS v4 & custom DaisyUI v5 dual theme engine",
      "Zero-flicker theme persistence via useSyncExternalStore",
    ],
    technologies: [
      { name: "Next.js 16", icon: SiNextdotjs },
      { name: "React 19", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS 4", icon: SiTailwindcss },
      { name: "DaisyUI 5", icon: SiDaisyui },
    ],
    status: "Verified in Current Codebase",
  },
];

export default function Launchpad() {
  return (
    <section
      id="launchpad"
      aria-label="Projects and Experiments"
      className="scroll-mt-24 w-full card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40 overflow-hidden"
    >
      <div className="card-body p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Rocket className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            The Launchpad
          </h2>

          <p className="text-sm sm:text-base font-semibold text-primary">
            Projects &amp; Experiments
          </p>

          <p className="text-xs sm:text-sm text-base-content/65 max-w-2xl font-normal leading-relaxed">
            A showcase of hands-on applications, architectural explorations, and development experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Verified Portfolio Project */}
          {VERIFIED_PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col justify-between p-6 rounded-2xl bg-base-200/50 border border-base-300/80 space-y-5 transition-all hover:border-primary/40 hover:bg-base-200/80 group md:col-span-2 lg:col-span-2"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {proj.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-success/15 text-success border border-success/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span>{proj.status}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-base-content group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Key Architectural Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-base-content/80">
                  {proj.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies and Honest Action Callouts */}
              <div className="space-y-4 pt-4 border-t border-base-300/60">
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-base-100 border border-base-300/80 text-base-content/85"
                    >
                      <tech.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>

                {/* Honest Placeholder Badges (Non-deceptive, not fake dead links) */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-base-100/90 border border-dashed border-base-300 text-base-content/65 cursor-default">
                    <Code2 className="w-3.5 h-3.5 text-base-content/50" />
                    <span>Repository URL — (Add when ready)</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-base-100/90 border border-dashed border-base-300 text-base-content/65 cursor-default">
                    <ExternalLink className="w-3.5 h-3.5 text-base-content/50" />
                    <span>Live Demo — (Add deployment link)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Card 2: Future Full-Stack Project Slot (Clearly labeled placeholder) */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-base-200/30 border border-dashed border-base-300 space-y-5 transition-all hover:border-primary/40">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Full-Stack Application
                </span>
                <span className="text-[11px] font-medium text-base-content/50">
                  Slot 02
                </span>
              </div>

              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-secondary" />
                <h3 className="text-lg font-bold text-base-content">
                  Upcoming Project Slot
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-base-content/65 leading-relaxed font-normal">
                Reserved for your next verified project (e.g. Express &amp; MongoDB CRUD application, REST API integration, or authenticated full-stack app).
              </p>
            </div>

            <div className="p-3 rounded-xl bg-base-100/70 border border-base-300 text-xs text-base-content/65 space-y-1">
              <span className="font-semibold text-secondary block">To be supplied by you:</span>
              <p>Project title, description, architecture details, and repository link.</p>
            </div>
          </div>

          {/* Card 3: Interactive Frontend Experiment Slot (Clearly labeled placeholder) */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-base-200/30 border border-dashed border-base-300 space-y-5 transition-all hover:border-primary/40">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-content">
                  Frontend Experiment
                </span>
                <span className="text-[11px] font-medium text-base-content/50">
                  Slot 03
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-base-content">
                  Component / UI Exploration
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-base-content/65 leading-relaxed font-normal">
                Reserved for an interactive UI experiment, custom React hook collection, or modular design system implementation.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-base-100/70 border border-base-300 text-xs text-base-content/65 space-y-1">
              <span className="font-semibold text-accent block">To be supplied by you:</span>
              <p>Demo title, interactive features, and preview assets.</p>
            </div>
          </div>
        </div>

        {/* Informative Guidance Banner */}
        <div className="p-4 rounded-xl bg-base-200/50 border border-dashed border-base-300 text-xs text-base-content/70 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-base-content">Project Integrity Principle: </span>
            Only actual, verified work is featured above. Placeholders are clearly designated as non-clickable drafts so that visitors always know what is live versus upcoming.
          </div>
        </div>
      </div>
    </section>
  );
}
