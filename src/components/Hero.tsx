"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Sparkles,
  Database,
  Layers,
  Network,
  ShieldCheck,
  UserCheck,
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
}

const FRONTEND_SKILLS: SkillItem[] = [
  { name: "HTML5", icon: SiHtml5, colorClass: "text-[#E34F26]" },
  { name: "CSS3", icon: FaCss3Alt, colorClass: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, colorClass: "text-[#F7DF1E]" },
  { name: "React", icon: SiReact, colorClass: "text-[#00B4D8] dark:text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, colorClass: "text-base-content" },
  { name: "TypeScript", icon: SiTypescript, colorClass: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-[#06B6D4] dark:text-[#38BDF8]" },
  { name: "DaisyUI", icon: SiDaisyui, colorClass: "text-[#1AD1A5]" },
  { name: "shadcn/ui", icon: SiShadcnui, colorClass: "text-base-content" },
  { name: "HeroUI", icon: SiHeroui, colorClass: "text-[#006FEE]" },
];

const BACKEND_SKILLS: SkillItem[] = [
  { name: "Node.js", icon: SiNodedotjs, colorClass: "text-[#5FA04E]" },
  { name: "Express.js", icon: SiExpress, colorClass: "text-base-content" },
  { name: "MongoDB", icon: SiMongodb, colorClass: "text-[#47A248]" },
  { name: "SQL", icon: Database, colorClass: "text-[#3B82F6]" },
  { name: "Mongoose/ODM", icon: SiMongoose, colorClass: "text-[#880000] dark:text-[#E53E3E]" },
];

const CONCEPT_SKILLS: SkillItem[] = [
  { name: "Modular Pattern", icon: Layers, colorClass: "text-[#8B5CF6]" },
  { name: "API Integration", icon: Network, colorClass: "text-[#10B981]" },
  { name: "Better Auth", icon: ShieldCheck, colorClass: "text-[#F59E0B]" },
  { name: "Role-Based Access Control (RBAC)", icon: UserCheck, colorClass: "text-[#EC4899]" },
  { name: "Git", icon: SiGit, colorClass: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, colorClass: "text-base-content" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction and Overview"
      className="scroll-mt-24 relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14 lg:py-16"
    >
      {/* Explicit Two-Column Layout (CSS Grid minmax(0, 1.2fr) minmax(0, 0.8fr) on Desktop) */}
      <div className="hero-two-column-layout">
        {/* ========================================================================= */}
        {/* COLUMN 1: INTRODUCTION, SKILLS & CTAS (LEFT ON DESKTOP)                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6 w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm text-base-content/85 transition-all hover:border-primary/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Available for web projects &amp; creative collaboration</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-base-content leading-[1.14]">
              Hi, I’m <span className="text-primary">Udoy</span>.
              <span className="block mt-1 bg-gradient-to-r from-primary via-[#6B93DC] to-secondary bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
          </div>

          {/* Introductory Text */}
          <p className="text-sm sm:text-base md:text-lg text-base-content/80 max-w-xl leading-relaxed font-normal">
            Hi, I’m Udoy. I build responsive web experiences and enjoy turning ideas into useful, interactive websites.
          </p>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-1">
            {/* Primary Action: Explore Projects */}
            <a
              href="#launchpad"
              className="btn btn-primary w-full sm:w-auto min-h-[46px] px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary via-[#5D85CE] to-secondary text-primary-content border-0 shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary Action: Get in Touch */}
            <a
              href="#contact"
              className="btn btn-outline w-full sm:w-auto min-h-[46px] px-6 rounded-xl font-semibold text-sm border-base-300 hover:border-primary hover:bg-base-200/80 bg-base-100/70 backdrop-blur-md text-base-content hover:text-primary hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* ===================================================================== */}
          {/* COMPLETE TECHNOLOGIES & SKILLS AREA (ORGANIZED, AUTHENTIC ICONS + LABELS) */}
          {/* ===================================================================== */}
          <div className="w-full space-y-4 pt-4 border-t border-base-300/60">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Technologies &amp; Concepts
              </span>
              <span className="text-xs text-base-content/50">— Learning &amp; Building With</span>
            </div>

            <div className="space-y-3 w-full text-left">
              {/* 1. Frontend Group */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-base-content/60 uppercase tracking-wide">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-2">
                  {FRONTEND_SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      role="img"
                      aria-label={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-base-100/80 backdrop-blur-md border border-base-300 shadow-xs hover:border-primary/40 hover:bg-base-200/60 transition-all text-xs font-medium text-base-content/85"
                    >
                      <skill.icon className={`w-3.5 h-3.5 ${skill.colorClass} shrink-0`} aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Backend & Data Group */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-base-content/60 uppercase tracking-wide">
                  Backend &amp; Data
                </span>
                <div className="flex flex-wrap gap-2">
                  {BACKEND_SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      role="img"
                      aria-label={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-base-100/80 backdrop-blur-md border border-base-300 shadow-xs hover:border-primary/40 hover:bg-base-200/60 transition-all text-xs font-medium text-base-content/85"
                    >
                      <skill.icon className={`w-3.5 h-3.5 ${skill.colorClass} shrink-0`} aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Development Concepts Group */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-base-content/60 uppercase tracking-wide">
                  Development Concepts &amp; Architecture
                </span>
                <div className="flex flex-wrap gap-2">
                  {CONCEPT_SKILLS.map((skill) => (
                    <div
                      key={skill.name}
                      role="img"
                      aria-label={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-base-100/80 backdrop-blur-md border border-base-300 shadow-xs hover:border-primary/40 hover:bg-base-200/60 transition-all text-xs font-medium text-base-content/85"
                    >
                      <skill.icon className={`w-3.5 h-3.5 ${skill.colorClass} shrink-0`} aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 2: PORTRAIT PHOTO (RIGHT ON DESKTOP, TOP ON MOBILE)                */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center md:justify-end w-full">
          <div className="relative w-[210px] h-[260px] sm:w-[240px] sm:h-[300px] md:w-[260px] md:h-[320px] lg:w-[280px] lg:h-[340px] max-h-[340px] flex items-center justify-center">
            {/* Atmospheric Celestial Halo Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/25 to-amber-300/20 blur-2xl pointer-events-none scale-105" />

            {/* Subtle orbital ring */}
            <div className="absolute inset-2 rounded-full border border-primary/25 pointer-events-none" />

            {/* Cutout Portrait: Object-contain, proportional (300-340px on desktop) */}
            <Image
              src="/images/me-cutout.png"
              alt="Udoy - Web Developer portrait in white and blue panjabi"
              fill
              priority
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 260px, 210px"
              className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(79,123,201,0.25)] select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
