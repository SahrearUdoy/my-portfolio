"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, CheckCircle2, Palette, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-400">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Stage 1 Status Header */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Stage 1: DaisyUI v5 & Custom Celestial Theme System</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Theme & Component Verification
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-base-content/70">
            Verifying that custom themes <code className="font-mono font-bold text-primary">ciel-day</code> and{" "}
            <code className="font-mono font-bold text-primary">ciel-night</code> integrate correctly with DaisyUI v5,
            Tailwind CSS v4, and React 19.
          </p>

          {/* Active Theme Status Card */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-base-200/80 border border-base-300 shadow-sm">
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
                Toggle Theme
              </button>
            </div>
          </div>
        </section>

        {/* Verification Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: DaisyUI Color Palette */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-base sm:text-lg flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                Custom Theme Color Swatches
              </h2>
              <p className="text-xs sm:text-sm text-base-content/70">
                Colors configured for <span className="font-semibold">{theme}</span>:
              </p>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-3 rounded-xl bg-primary text-primary-content text-xs font-semibold flex items-center justify-between shadow-sm">
                  <span>Primary</span>
                  <span className="opacity-80">#4F7BC9</span>
                </div>
                <div className="p-3 rounded-xl bg-secondary text-secondary-content text-xs font-semibold flex items-center justify-between shadow-sm">
                  <span>Secondary</span>
                  <span className="opacity-80">#7FA3DE</span>
                </div>
                <div className="p-3 rounded-xl bg-accent text-accent-content text-xs font-semibold flex items-center justify-between shadow-sm">
                  <span>Accent</span>
                  <span className="opacity-80">#A9C4EC</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral text-neutral-content text-xs font-semibold flex items-center justify-between shadow-sm">
                  <span>Neutral</span>
                  <span className="opacity-80">Base Text</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: DaisyUI Components */}
          <div className="card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-base sm:text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                DaisyUI Button & Badge States
              </h2>
              <p className="text-xs sm:text-sm text-base-content/70">
                Verifying semantic styling and hover responses:
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <button type="button" className="btn btn-primary btn-sm">Primary</button>
                <button type="button" className="btn btn-secondary btn-sm">Secondary</button>
                <button type="button" className="btn btn-accent btn-sm">Accent</button>
                <button type="button" className="btn btn-outline btn-sm">Outline</button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="badge badge-primary">badge-primary</span>
                <span className="badge badge-secondary">badge-secondary</span>
                <span className="badge badge-accent">badge-accent</span>
                <span className="badge badge-outline">badge-outline</span>
              </div>
            </div>
          </div>

          {/* Card 3: Theme Persistence & Behavior */}
          <div className="card bg-base-100 border border-base-300 shadow-sm md:col-span-2">
            <div className="card-body">
              <h2 className="card-title text-base sm:text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Stage 1 Acceptance Criteria Status
              </h2>

              <ul className="space-y-2 mt-2 text-xs sm:text-sm text-base-content/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Custom DaisyUI v5 Themes:</strong> Configured in{" "}
                    <code className="font-mono text-primary font-medium">globals.css</code> with{" "}
                    <code className="font-mono text-primary font-medium">ciel-day</code> and{" "}
                    <code className="font-mono text-primary font-medium">ciel-night</code>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Zero Theme Flash:</strong> Head script in{" "}
                    <code className="font-mono text-primary font-medium">layout.tsx</code> immediately initializes{" "}
                    <code className="font-mono text-primary font-medium">data-theme</code> before render.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Persistence & OS Fallback:</strong> Theme is saved to{" "}
                    <code className="font-mono text-primary font-medium">localStorage.theme</code> with automatic fallback
                    to <code className="font-mono text-primary font-medium">prefers-color-scheme</code>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Synchronized Navbar Toggle:</strong> Sun icon displays in Day mode; Moon icon displays in
                    Night mode with keyboard & touch accessibility.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-base-300/80 py-6 text-center text-xs text-base-content/60">
        Stage 1 Verification · Ready for Stage 2 (Celestial Sky & Portfolio Sections)
      </footer>
    </div>
  );
}
