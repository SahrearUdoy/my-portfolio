"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import CelestialSky from "@/components/CelestialSky";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, CheckCircle2, Sparkles, Cloud, Compass } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-500 overflow-x-hidden">
      {/* Stage 2: Fixed Celestial Background Component */}
      <CelestialSky />

      {/* Stage 1: Sticky Navigation Bar with ThemeToggle */}
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 relative z-10">
        {/* Header Section */}
        <section className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Stage 2: Celestial Sky Background Verification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Celestial Sky & Dynamic Lighting
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-base-content/75">
            Observing the reactive sky in both themes: animated glowing Sun with scroll-reactive rays and drifting clouds
            in <code className="font-mono font-bold text-primary">ciel-day</code>; randomized recognizable Moon and
            twinkling stars in <code className="font-mono font-bold text-primary">ciel-night</code>.
          </p>

          {/* Quick Theme Switcher Card */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm">
              <span className="text-sm font-medium">Active Theme:</span>
              <div className="badge badge-primary badge-lg gap-2 font-mono">
                {mounted ? (
                  theme === "ciel-day" ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-300" /> ciel-day (Sun Active)
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-sky-200" /> ciel-night (Moon Active)
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

        {/* Stage 2 Celestial Verification Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Day Mode Features */}
          <div className="card bg-base-100/85 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40">
            <div className="card-body">
              <h2 className="card-title text-base sm:text-lg flex items-center gap-2 text-primary">
                <Sun className="w-5 h-5 text-amber-500" />
                Day Mode (ciel-day) Elements
              </h2>
              <ul className="space-y-2 mt-2 text-xs sm:text-sm text-base-content/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Sun Rise & Glow:</strong> Golden sun rises smoothly into the upper sky when daytime mode is
                    active, pulsing with a gentle halo.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Scroll-Reactive Rays:</strong> 12 subtle golden sun rays radiate outward and rotate gently
                    as you scroll this page.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Drifting Clouds:</strong> Translucent cloud layers drift slowly across the upper sky without
                    obstructing text or buttons.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Night Mode Features */}
          <div className="card bg-base-100/85 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40">
            <div className="card-body">
              <h2 className="card-title text-base sm:text-lg flex items-center gap-2 text-primary">
                <Moon className="w-5 h-5 text-sky-400" />
                Night Mode (ciel-night) Elements
              </h2>
              <ul className="space-y-2 mt-2 text-xs sm:text-sm text-base-content/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Moon Rise & Halo:</strong> The sun sets while the moon ascends into the midnight-blue
                    celestial sky with an ethereal halo.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Session-Stable Randomized Phase:</strong> The moon selects one of 5 recognizable phases on
                    initial load and remains consistent during theme switches.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>
                    <strong>Twinkling Starfield:</strong> Deterministic stars glimmer and twinkle at staggered intervals
                    across the dark sky.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scroll Demonstration Area (to test scroll-reactive ray rotation) */}
        <section className="card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm">
          <div className="card-body space-y-4">
            <h2 className="card-title text-base sm:text-lg flex items-center gap-2">
              <Compass className="w-5 h-5 text-secondary" />
              Scroll Rotation Test & Click-Through Verification
            </h2>

            <p className="text-xs sm:text-sm text-base-content/75 leading-relaxed">
              Scroll down this page to observe the sun rays smoothly rotating in real-time. All celestial objects have{" "}
              <code className="font-mono text-primary font-semibold">pointer-events-none</code>, so clicking buttons,
              selecting text, and interacting with controls remains completely responsive and unobstructed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-base-200/70 border border-base-300 text-center space-y-1">
                <div className="text-2xl font-bold text-primary">0%</div>
                <div className="text-xs text-base-content/70">Click Interference</div>
              </div>
              <div className="p-4 rounded-xl bg-base-200/70 border border-base-300 text-center space-y-1">
                <div className="text-2xl font-bold text-secondary">60fps</div>
                <div className="text-xs text-base-content/70">rAF Throttled Ray Motion</div>
              </div>
              <div className="p-4 rounded-xl bg-base-200/70 border border-base-300 text-center space-y-1">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-base-content/70">Reduced-Motion Compliant</div>
              </div>
            </div>

            {/* Generous vertical test spacing for scrolling */}
            <div className="p-8 rounded-2xl bg-base-200/50 border border-dashed border-base-300 text-center space-y-2 mt-4">
              <Cloud className="w-8 h-8 text-primary/60 mx-auto animate-bounce" />
              <p className="text-sm font-medium">Scroll down to observe the celestial rays shifting in the sky</p>
              <p className="text-xs text-base-content/60">
                Notice the sun rays in the top-right corner rotating gradually as page scroll changes.
              </p>
            </div>
          </div>
        </section>

        {/* Extra height section to allow scrolling */}
        <section className="space-y-4 py-8">
          <div className="p-6 rounded-2xl bg-base-100/70 backdrop-blur-sm border border-base-300 shadow-sm text-center">
            <h3 className="font-semibold text-sm sm:text-base">Ready for Stage 3: Hero Section & Profile Photo</h3>
            <p className="text-xs sm:text-sm text-base-content/70 mt-1 max-w-xl mx-auto">
              Once Stage 2 is verified, we will assemble your Hero section featuring the white-blue panjabi photo,
              professional title &ldquo;Web Developer&rdquo;, and call-to-action buttons.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-base-300/80 py-6 text-center text-xs text-base-content/60 relative z-10 backdrop-blur-sm">
        Stage 2 Verification · Celestial Sky Component Active
      </footer>
    </div>
  );
}
