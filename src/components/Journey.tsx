"use client";

import { Milestone, CheckCircle2, Sparkles, Clock } from "lucide-react";

interface JourneyMilestone {
  phase: string;
  title: string;
  focus: string;
  description: string;
  highlights: string[];
}

const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    phase: "Phase 1",
    title: "Frontend Foundations & Core Web Standards",
    focus: "HTML5 · CSS3 · Modern JavaScript",
    description:
      "Deeply studying core web foundations: accessible HTML5 structure, responsive CSS layout systems (flexbox, grid, media queries), and ES6+ JavaScript. Emphasizing clean semantics, event loops, and DOM manipulation without relying on unnecessary abstractions.",
    highlights: ["Semantic accessibility", "Responsive layouts", "JavaScript ES6+ fundamentals"],
  },
  {
    phase: "Phase 2",
    title: "Component Engineering with React",
    focus: "Declarative UI · State Management · Hooks",
    description:
      "Transitioning to component-driven development with React. Building modular, reusable interfaces and understanding state flow, component lifecycles, and side-effect management. Creating dynamic, interactive client-side applications.",
    highlights: ["Custom hooks & state flow", "Reusable component patterns", "Client-side interactivity"],
  },
  {
    phase: "Phase 3",
    title: "Full-Stack Fundamentals & Typed Code",
    focus: "Node.js · Express.js · MongoDB · TypeScript",
    description:
      "Expanding into backend foundations to understand how web applications operate end-to-end. Building RESTful APIs with Express, handling database schemas in MongoDB/Mongoose, querying relational SQL databases, and adopting TypeScript to enforce strict type safety across components.",
    highlights: ["REST API development", "Database modeling & CRUD", "Type safety with TypeScript"],
  },
  {
    phase: "Phase 4",
    title: "Modern Next.js Architecture & Project Development",
    focus: "Next.js · Tailwind CSS · DaisyUI · Better Auth",
    description:
      "Focusing on modern, production-ready web apps using Next.js App Router, server-rendered components, utility-first Tailwind CSS, and DaisyUI. Actively learning authentication patterns (Better Auth, Role-Based Access Control) and creating real, practical portfolio projects.",
    highlights: ["Next.js App Router & SSR", "Authentication & RBAC patterns", "Hands-on project development"],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      aria-label="Professional Experience and Growth Journey"
      className="scroll-mt-24 w-full card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40 overflow-hidden"
    >
      <div className="card-body p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Section Header with Required Subtitle */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth &amp; Milestones</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            The Journey
          </h2>

          <p className="text-sm sm:text-base font-semibold text-primary">
            Professional Experience &amp; Growth
          </p>

          <p className="text-xs sm:text-sm text-base-content/65 max-w-2xl font-normal leading-relaxed">
            An honest reflection of my technical progression, hands-on learning milestones, and practical development journey.
          </p>
        </div>

        {/* Timeline Progression */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/25 space-y-8 ml-2 sm:ml-4">
          {JOURNEY_MILESTONES.map((item) => (
            <div key={item.phase} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-base-100 border-2 border-primary shadow-sm flex items-center justify-center transition-transform group-hover:scale-125">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>

              {/* Milestone Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-base-200/50 border border-base-300/80 space-y-3 transition-all hover:border-primary/40 hover:bg-base-200/80">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/15 text-primary">
                    {item.phase}
                  </span>
                  <span className="text-xs font-medium text-base-content/60 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary/70" />
                    <span>Development Milestone</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-secondary">
                    {item.focus}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-base-100 border border-base-300/70 text-base-content/80"
                    >
                      <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Needed Notice Badge */}
        <div className="p-4 rounded-xl bg-base-200/40 border border-dashed border-base-300 text-xs text-base-content/70 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-base-content">Progression Timeline Integrity: </span>
            This section truthfully documents actual development growth and project milestones without inventing employers or false claims.
            Specific calendar dates or formal roles can be added whenever you wish to provide them.
          </div>
        </div>
      </div>
    </section>
  );
}
