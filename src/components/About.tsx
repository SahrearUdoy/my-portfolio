"use client";

import { User, Compass, Laptop, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="scroll-mt-24 w-full card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40 overflow-hidden"
    >
      <div className="card-body p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-base-content">
            Crafting Web Experiences Through{" "}
            <span className="bg-gradient-to-r from-primary via-[#6B93DC] to-secondary bg-clip-text text-transparent">
              Continuous Learning
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-base-content/65 max-w-2xl font-medium">
            A developer perspective grounded in practical building, curiosity, and code craftsmanship.
          </p>
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-base-content/80 leading-relaxed font-normal">
          <div className="space-y-4">
            <p>
              I am a web developer with a genuine enthusiasm for creating modern, responsive, and intuitive web interfaces.
              After taking a break from coding, I have dedicated myself to hands-on development—transforming fresh concepts into
              interactive, functional web applications.
            </p>
            <p>
              My focus is on understanding technology deeply rather than relying on surface-level shortcuts. By exploring
              the latest capabilities of React, Next.js, and TypeScript, I enjoy solving interface challenges and turning
              design ideas into clean code that feels natural to use.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              Beyond the visual frontend, I actively explore backend fundamentals, API integrations, and database architectures.
              I appreciate writing clean, modular code and continually refining my workflows using modern developer tools.
            </p>
            <p>
              I believe consistent practice and curiosity are the best teachers. Every project represents an opportunity to learn
              a new architectural pattern, optimize a workflow, and build experiences that make a tangible difference.
            </p>
          </div>
        </div>

        {/* Highlights / Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Highlight 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-base-200/60 border border-base-300/80 space-y-2.5 transition-all hover:border-primary/40 hover:bg-base-200/80">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
              <Laptop className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-base-content">
              Modern Frontend
            </h3>
            <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
              Building typed, component-driven interfaces with Next.js, React, TypeScript, and modern utility-first CSS.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-base-200/60 border border-base-300/80 space-y-2.5 transition-all hover:border-primary/40 hover:bg-base-200/80">
            <div className="w-9 h-9 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center border border-secondary/25">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-base-content">
              Full-Stack Curiosity
            </h3>
            <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
              Connecting frontends with Express and Node.js APIs, handling data models in MongoDB, and exploring secure auth patterns.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-base-200/60 border border-base-300/80 space-y-2.5 transition-all hover:border-primary/40 hover:bg-base-200/80">
            <div className="w-9 h-9 rounded-xl bg-accent/20 text-accent-content flex items-center justify-center border border-accent/30">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-base-content">
              Pragmatic Growth
            </h3>
            <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
              Learning through practical iteration, clean documentation, Git version control, and modular architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
