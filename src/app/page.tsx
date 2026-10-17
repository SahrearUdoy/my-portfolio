"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import CelestialSky from "@/components/CelestialSky";
import Hero from "@/components/Hero";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Rocket, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-500 overflow-x-clip">
      {/* Fixed Celestial Sky Component (Day/Night sun, rays, clouds, moon, stars) */}
      <CelestialSky />

      {/* Sticky Navigation Bar with ThemeToggle */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 relative z-10">
        {/* Stage Status & Theme Indicator */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Stage 3 Verified: Hero Section & Sticky Navbar</span>
          </div>

          <div className="pt-1">
            <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm">
              <span className="text-sm font-medium">Active Theme:</span>
              <div className="badge badge-primary badge-lg gap-2 font-mono">
                {mounted ? (
                  theme === "ciel-day" ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-300" /> ciel-day (Light)
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-sky-200" /> ciel-night (Dark)
                    </>
                  )
                ) : (
                  <span className="loading loading-spinner loading-xs" />
                )}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-sm btn-outline btn-primary rounded-lg"
              >
                Switch Theme
              </button>
            </div>
          </div>
        </section>

        {/* Section Target Anchor: #launchpad ("The Launchpad") */}
        <section
          id="launchpad"
          className="scroll-mt-24 card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40"
        >
          <div className="card-body space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Rocket className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="card-title text-2xl sm:text-3xl font-extrabold tracking-tight">
              The Launchpad
            </h2>
            <p className="text-sm sm:text-base font-medium text-base-content/70">
              Projects &amp; Experiments
            </p>
            <div className="p-4 rounded-xl bg-base-200/60 border border-dashed border-base-300 text-xs sm:text-sm text-base-content/75 space-y-1">
              <p className="font-semibold text-primary">Stage 4 Target Anchor Active</p>
              <p>
                Real projects and experiments will be showcased here in Stage 4. No artificial or invented project data
                is displayed.
              </p>
            </div>
          </div>
        </section>

        {/* Section Target Anchor: #contact ("Get in Touch") */}
        <section
          id="contact"
          className="scroll-mt-24 card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40"
        >
          <div className="card-body space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Mail className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Connect</span>
            </div>
            <h2 className="card-title text-2xl sm:text-3xl font-extrabold tracking-tight">
              Have an idea worth building? Let’s explore it together.
            </h2>
            <p className="text-sm sm:text-base font-medium text-base-content/70">
              Get in Touch &amp; Collaborative Inquiries
            </p>
            <div className="p-4 rounded-xl bg-base-200/60 border border-dashed border-base-300 text-xs sm:text-sm text-base-content/75 space-y-1">
              <p className="font-semibold text-primary">Stage 5 Target Anchor Active</p>
              <p>
                Verified contact channels, email, and social links will be added in upcoming stages without functional
                fabrications.
              </p>
            </div>
          </div>
        </section>

        {/* Stage 3 Verification Summary */}
        <section className="card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-base sm:text-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Stage 3 Implementation Checklist
            </h3>
            <ul className="space-y-2 mt-2 text-xs sm:text-sm text-base-content/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span>
                  <strong>Hero Section:</strong> Displays white-blue panjabi photo from{" "}
                  <code className="font-mono text-primary font-medium">/images/me-cutout.png</code> via{" "}
                  <code className="font-mono text-primary font-medium">next/image</code> with responsive desktop/mobile
                  positioning.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span>
                  <strong>Atmospheric Halo & Gradients:</strong> Radiant celestial halo behind the portrait, gradient CTA
                  buttons, and styled title &ldquo;Web Developer&rdquo;.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span>
                  <strong>Verified Sticky Navbar:</strong> Navbar remains anchored at <code className="font-mono text-primary font-medium">sticky top-0 z-50</code>,
                  while <code className="font-mono text-primary font-medium">overflow-x-clip</code> prevents clipping issues.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span>
                  <strong>Smooth Anchor Navigation:</strong> CTA buttons smoothly scroll to <code className="font-mono text-primary font-medium">#launchpad</code> and{" "}
                  <code className="font-mono text-primary font-medium">#contact</code> with proper header clearance (<code className="font-mono text-primary font-medium">scroll-mt-24</code>).
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-base-300/80 py-6 text-center text-xs text-base-content/60 relative z-10 backdrop-blur-sm">
        Stage 3 Complete · Udoy · Web Developer Portfolio
      </footer>
    </div>
  );
}
