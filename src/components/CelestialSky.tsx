"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { useTheme } from "./ThemeProvider";

type MoonPhase = "waxing-crescent" | "waning-crescent" | "first-quarter" | "waxing-gibbous" | "full-moon";

const MOON_PHASES: MoonPhase[] = [
  "waxing-crescent",
  "waning-crescent",
  "first-quarter",
  "waxing-gibbous",
  "full-moon",
];

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getMoonPhaseSnapshot(): MoonPhase {
  if (typeof window === "undefined") return "full-moon";
  try {
    let phase = sessionStorage.getItem("celestial_moon_phase") as MoonPhase | null;
    if (!phase || !MOON_PHASES.includes(phase)) {
      const randomIndex = Math.floor(Math.random() * MOON_PHASES.length);
      phase = MOON_PHASES[randomIndex];
      sessionStorage.setItem("celestial_moon_phase", phase);
    }
    return phase;
  } catch {
    return "waxing-crescent";
  }
}

function getServerMoonPhaseSnapshot(): MoonPhase {
  return "full-moon";
}

// 50 deterministic stars categorized into micro, bright, and 4-point sparkle stars
type StarType = "micro" | "bright" | "sparkle";

interface StarItem {
  top: string;
  left: string;
  type: StarType;
  delay: string;
  duration: string;
}

const STARS_DATA: StarItem[] = [
  // 6 Major Four-Point Sparkle Stars
  { top: "7%", left: "18%", type: "sparkle", delay: "0.2s", duration: "5.5s" },
  { top: "14%", left: "48%", type: "sparkle", delay: "1.4s", duration: "6.2s" },
  { top: "34%", left: "26%", type: "sparkle", delay: "2.1s", duration: "5.0s" },
  { top: "42%", left: "64%", type: "sparkle", delay: "0.8s", duration: "6.8s" },
  { top: "64%", left: "12%", type: "sparkle", delay: "1.8s", duration: "5.8s" },
  { top: "78%", left: "44%", type: "sparkle", delay: "2.5s", duration: "6.0s" },

  // 16 Luminous Bright Stars
  { top: "5%", left: "32%", type: "bright", delay: "0.5s", duration: "4.2s" },
  { top: "11%", left: "82%", type: "bright", delay: "1.9s", duration: "4.8s" },
  { top: "18%", left: "8%", type: "bright", delay: "1.1s", duration: "3.9s" },
  { top: "20%", left: "74%", type: "bright", delay: "0.4s", duration: "4.5s" },
  { top: "27%", left: "40%", type: "bright", delay: "2.3s", duration: "4.1s" },
  { top: "32%", left: "90%", type: "bright", delay: "1.6s", duration: "5.2s" },
  { top: "45%", left: "18%", type: "bright", delay: "0.9s", duration: "4.4s" },
  { top: "49%", left: "86%", type: "bright", delay: "2.0s", duration: "3.8s" },
  { top: "56%", left: "34%", type: "bright", delay: "1.3s", duration: "4.7s" },
  { top: "60%", left: "70%", type: "bright", delay: "0.7s", duration: "4.9s" },
  { top: "68%", left: "24%", type: "bright", delay: "2.4s", duration: "4.3s" },
  { top: "73%", left: "82%", type: "bright", delay: "1.0s", duration: "5.1s" },
  { top: "82%", left: "16%", type: "bright", delay: "0.3s", duration: "4.0s" },
  { top: "86%", left: "62%", type: "bright", delay: "2.2s", duration: "4.6s" },
  { top: "91%", left: "30%", type: "bright", delay: "1.5s", duration: "5.4s" },
  { top: "94%", left: "78%", type: "bright", delay: "0.8s", duration: "4.2s" },

  // 28 Distant Micro-Stars
  { top: "4%", left: "8%", type: "micro", delay: "0.1s", duration: "5.8s" },
  { top: "9%", left: "60%", type: "micro", delay: "1.7s", duration: "6.5s" },
  { top: "15%", left: "22%", type: "micro", delay: "2.4s", duration: "5.2s" },
  { top: "16%", left: "94%", type: "micro", delay: "0.6s", duration: "6.0s" },
  { top: "22%", left: "52%", type: "micro", delay: "1.2s", duration: "5.7s" },
  { top: "25%", left: "15%", type: "micro", delay: "2.8s", duration: "6.3s" },
  { top: "29%", left: "68%", type: "micro", delay: "0.4s", duration: "5.1s" },
  { top: "36%", left: "4%", type: "micro", delay: "1.9s", duration: "6.6s" },
  { top: "38%", left: "52%", type: "micro", delay: "2.6s", duration: "5.5s" },
  { top: "41%", left: "38%", type: "micro", delay: "0.8s", duration: "5.9s" },
  { top: "47%", left: "74%", type: "micro", delay: "1.5s", duration: "6.2s" },
  { top: "51%", left: "10%", type: "micro", delay: "2.1s", duration: "5.3s" },
  { top: "54%", left: "58%", type: "micro", delay: "0.3s", duration: "6.7s" },
  { top: "58%", left: "92%", type: "micro", delay: "1.8s", duration: "5.6s" },
  { top: "62%", left: "44%", type: "micro", delay: "2.5s", duration: "6.1s" },
  { top: "66%", left: "80%", type: "micro", delay: "0.9s", duration: "5.4s" },
  { top: "70%", left: "6%", type: "micro", delay: "1.6s", duration: "6.8s" },
  { top: "75%", left: "54%", type: "micro", delay: "2.2s", duration: "5.7s" },
  { top: "79%", left: "94%", type: "micro", delay: "0.5s", duration: "6.3s" },
  { top: "83%", left: "38%", type: "micro", delay: "1.3s", duration: "5.0s" },
  { top: "85%", left: "72%", type: "micro", delay: "2.7s", duration: "6.5s" },
  { top: "88%", left: "8%", type: "micro", delay: "0.7s", duration: "5.8s" },
  { top: "90%", left: "50%", type: "micro", delay: "2.0s", duration: "6.4s" },
  { top: "92%", left: "88%", type: "micro", delay: "1.4s", duration: "5.3s" },
  { top: "95%", left: "22%", type: "micro", delay: "0.2s", duration: "6.6s" },
  { top: "96%", left: "64%", type: "micro", delay: "2.3s", duration: "5.9s" },
  { top: "98%", left: "42%", type: "micro", delay: "1.1s", duration: "6.1s" },
  { top: "97%", left: "96%", type: "micro", delay: "1.7s", duration: "5.5s" },
];

export default function CelestialSky() {
  const { theme, mounted } = useTheme();
  const moonPhase = useSyncExternalStore(subscribeToStorage, getMoonPhaseSnapshot, getServerMoonPhaseSnapshot);
  const [scrollRotation, setScrollRotation] = useState<number>(0);
  const rafRef = useRef<number | null>(null);

  const isDay = mounted ? theme === "ciel-day" : true;

  // Throttled scroll listener to rotate sun rays smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const rotation = (window.scrollY * 0.08) % 360;
        setScrollRotation(rotation);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-700"
    >
      {/* 1. Base Sky Gradient: airy day sky vs deep midnight navy */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDay
            ? "opacity-100 bg-gradient-to-b from-[#DCE9F8] via-[#EAF1FA] to-[#D5E3F5]"
            : "opacity-100 bg-gradient-to-b from-[#050914] via-[#081022] to-[#0D1936]"
        }`}
      />

      {/* ========================================================================= */}
      {/* 2. DAY MODE: GLOWING SUN WITH RADIANT RAYS & HORIZON TRANSITION           */}
      {/* ========================================================================= */}
      {/* Sinks gracefully 320px down towards the horizon on dark mode, rises on light */}
      <div
        className={`absolute top-20 right-6 sm:top-24 sm:right-12 md:top-24 md:right-24 lg:top-28 lg:right-36 will-change-transform ${
          isDay
            ? "translate-y-0 opacity-100 scale-100 rotate-0 transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1)"
            : "translate-y-[260px] sm:translate-y-[320px] md:translate-y-[380px] opacity-0 scale-75 rotate-12 transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Layer A: Atmospheric Warm Ambient Diffusion Glow */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] rounded-full bg-radial from-amber-300/35 via-yellow-200/15 to-transparent blur-3xl pointer-events-none" />

          {/* Layer B: Radiant Tapered Sun Rays (Scroll-Reactive Rotation + Ambient Breathing) */}
          <div
            className="absolute w-72 h-72 sm:w-88 sm:h-88 md:w-[460px] md:h-[460px] pointer-events-none will-change-transform"
            style={{ transform: `rotate(${scrollRotation}deg)` }}
          >
            {/* Inner container performs gentle breathing shimmer without interfering with scroll rotation */}
            <div className="w-full h-full animate-ray-breathe">
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-sm">
                <defs>
                  {/* Primary Shaft Gradient */}
                  <linearGradient id="primaryRayGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.75" />
                    <stop offset="35%" stopColor="#FBBF24" stopOpacity="0.55" />
                    <stop offset="70%" stopColor="#FDE68A" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                  </linearGradient>

                  {/* Secondary Shaft Gradient */}
                  <linearGradient id="secondaryRayGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.60" />
                    <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* 12 Primary Tapered Light Shafts (Expanding flared beams) */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                  <polygon
                    key={`p-${deg}`}
                    points="196,135 204,135 208,20 192,20"
                    fill="url(#primaryRayGrad)"
                    transform={`rotate(${deg} 200 200)`}
                  />
                ))}

                {/* 12 Intermediate Soft Rays (Providing rich atmospheric depth) */}
                {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
                  <polygon
                    key={`s-${deg}`}
                    points="197,135 203,135 205,55 195,55"
                    fill="url(#secondaryRayGrad)"
                    transform={`rotate(${deg} 200 200)`}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* Layer C: Golden Solar Corona Glow */}
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-amber-400/45 blur-xl pointer-events-none" />

          {/* Layer D: Luminous Sun Orb with Golden Pulse */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-yellow-100 shadow-[0_0_60px_rgba(245,158,11,0.65),0_0_100px_rgba(251,191,36,0.35)] animate-sun-pulse relative z-10 border border-amber-200/60" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. DAY MODE: SOFT DRIFTING CUMULUS CLOUDS                                 */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDay ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Cloud 1: Upper-Left, Slow Drift */}
        <div className="absolute top-24 -left-6 sm:left-4 md:left-12 w-72 sm:w-96 md:w-[420px] animate-cloud-slow">
          <svg viewBox="0 0 200 80" className="w-full h-auto drop-shadow-md">
            <defs>
              <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
                <stop offset="70%" stopColor="#EAF1FA" stopOpacity="0.78" />
                <stop offset="100%" stopColor="#C9D8EC" stopOpacity="0.58" />
              </linearGradient>
            </defs>
            <path
              d="M 30 65 A 18 18 0 0 1 48 45 A 25 25 0 0 1 85 38 A 32 32 0 0 1 140 46 A 24 24 0 0 1 172 65 A 12 12 0 0 1 162 76 L 30 76 Z"
              fill="url(#cloudGrad1)"
            />
          </svg>
        </div>

        {/* Cloud 2: Upper Center-Right, Gentle Drift */}
        <div className="absolute top-48 left-1/3 sm:left-1/2 w-64 sm:w-80 md:w-96 animate-cloud-fast">
          <svg viewBox="0 0 200 80" className="w-full h-auto drop-shadow-md">
            <defs>
              <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.82" />
                <stop offset="70%" stopColor="#DCE8F7" stopOpacity="0.68" />
                <stop offset="100%" stopColor="#C9D8EC" stopOpacity="0.48" />
              </linearGradient>
            </defs>
            <path
              d="M 28 62 A 16 16 0 0 1 46 44 A 22 22 0 0 1 80 38 A 28 28 0 0 1 130 45 A 20 20 0 0 1 158 62 A 10 10 0 0 1 150 72 L 28 72 Z"
              fill="url(#cloudGrad2)"
            />
          </svg>
        </div>

        {/* Cloud 3: Mid-Sky Left Ambient Drift */}
        <div className="absolute top-96 left-8 sm:left-16 md:left-24 w-60 sm:w-72 md:w-80 animate-cloud-slow opacity-80">
          <svg viewBox="0 0 200 80" className="w-full h-auto drop-shadow-sm">
            <path
              d="M 30 65 A 18 18 0 0 1 48 45 A 25 25 0 0 1 85 38 A 32 32 0 0 1 140 46 A 24 24 0 0 1 172 65 A 12 12 0 0 1 162 76 L 30 76 Z"
              fill="url(#cloudGrad1)"
            />
          </svg>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. NIGHT MODE: SHIMMERING ATMOSPHERIC STARFIELD                           */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          !isDay ? "opacity-100" : "opacity-0"
        }`}
      >
        {STARS_DATA.map((star, idx) => (
          <div
            key={idx}
            className="absolute will-change-transform flex items-center justify-center"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          >
            {star.type === "sparkle" && (
              // Distinct 4-Point Luminous Star Flare
              <div
                className="animate-star-sparkle flex items-center justify-center text-white"
                style={{ animationDelay: star.delay, animationDuration: star.duration }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                >
                  <path
                    d="M 12 0 Q 12 12 24 12 Q 12 12 12 24 Q 12 12 0 12 Q 12 12 12 0 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}

            {star.type === "bright" && (
              // Crisp Luminous Point with Soft Outer Halo
              <div
                className="animate-star-gentle rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.95),0_0_10px_rgba(169,196,236,0.6)]"
                style={{
                  width: "2.5px",
                  height: "2.5px",
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            )}

            {star.type === "micro" && (
              // Gentle Distant Pale Star
              <div
                className="animate-star-gentle rounded-full bg-sky-200/80 shadow-[0_0_3px_rgba(186,215,248,0.7)]"
                style={{
                  width: "1.5px",
                  height: "1.5px",
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* 5. NIGHT MODE: RECOGNIZABLE MOON & HORIZON CELESTIAL TRANSITION           */}
      {/* ========================================================================= */}
      {/* Sinks gracefully 320px down towards the horizon on light mode, rises on dark */}
      <div
        className={`absolute top-20 right-6 sm:top-24 sm:right-12 md:top-24 md:right-24 lg:top-28 lg:right-36 will-change-transform ${
          !isDay
            ? "translate-y-0 opacity-100 scale-100 rotate-0 transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1)"
            : "translate-y-[260px] sm:translate-y-[320px] md:translate-y-[380px] opacity-0 scale-75 -rotate-12 transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Layer A: Wide Celestial Blue Ambient Glow Diffusion */}
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] rounded-full bg-radial from-sky-400/25 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

          {/* Layer B: Breathing Blue-White Lunar Corona Halo */}
          <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-sky-300/25 blur-2xl pointer-events-none animate-lunar-halo" />

          {/* Layer C: Luminous Moon Disc with Restrained Luminous Edge */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full relative overflow-hidden shadow-[0_0_35px_rgba(216,230,248,0.55),0_0_75px_rgba(127,163,222,0.30)] border border-sky-200/50 bg-[#0A1329]">
            {/* Phase 1: Full Moon (Glowing pearl-silver sphere with authentic craters) */}
            {moonPhase === "full-moon" && (
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#9ABAE8] via-[#D8E6F8] to-[#FFFFFF] relative">
                {/* Authentic lunar maria crater shading */}
                <div className="absolute top-4 left-5 w-6 h-6 rounded-full bg-[#658DC9]/30 blur-[1px]" />
                <div className="absolute top-11 left-11 w-9 h-9 rounded-full bg-[#658DC9]/35 blur-[2px]" />
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#658DC9]/25 blur-[2px]" />
                <div className="absolute top-16 right-7 w-5 h-5 rounded-full bg-[#658DC9]/30 blur-[1px]" />
              </div>
            )}

            {/* Phase 2: Waxing Crescent (Illuminated right arc) */}
            {moonPhase === "waxing-crescent" && (
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-[#0B1528]" />
                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                  <path
                    d="M 50 0 A 50 50 0 0 1 50 100 A 35 50 0 0 0 50 0 Z"
                    fill="url(#moonCrescentGradR)"
                  />
                  <defs>
                    <linearGradient id="moonCrescentGradR" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#D8E5F6" />
                      <stop offset="100%" stopColor="#8EAFE2" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Subtle crater silhouette on dark portion */}
                <div className="absolute top-6 left-5 w-5 h-5 rounded-full bg-[#152545]/60 blur-[1px]" />
              </div>
            )}

            {/* Phase 3: Waning Crescent (Illuminated left arc) */}
            {moonPhase === "waning-crescent" && (
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-[#0B1528]" />
                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                  <path
                    d="M 50 0 A 50 50 0 0 0 50 100 A 35 50 0 0 1 50 0 Z"
                    fill="url(#moonCrescentGradL)"
                  />
                  <defs>
                    <linearGradient id="moonCrescentGradL" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#D8E5F6" />
                      <stop offset="100%" stopColor="#8EAFE2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-6 right-5 w-5 h-5 rounded-full bg-[#152545]/60 blur-[1px]" />
              </div>
            )}

            {/* Phase 4: First Quarter (Crisp half moon) */}
            {moonPhase === "first-quarter" && (
              <div className="w-full h-full relative bg-[#0B1528]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-[#D8E6F8] to-[#FFFFFF] rounded-r-full shadow-inner relative">
                  <div className="absolute top-6 left-2 w-4 h-4 rounded-full bg-[#7FA3DE]/35 blur-[1px]" />
                  <div className="absolute bottom-8 left-3 w-5 h-5 rounded-full bg-[#7FA3DE]/30 blur-[1px]" />
                </div>
              </div>
            )}

            {/* Phase 5: Waxing Gibbous (3/4 illuminated) */}
            {moonPhase === "waxing-gibbous" && (
              <div className="w-full h-full relative bg-[#0B1528]">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#9ABAE8] via-[#D8E6F8] to-[#FFFFFF]" />
                <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
                  <path
                    d="M 50 0 A 50 50 0 0 0 50 100 A 22 50 0 0 1 50 0 Z"
                    fill="#0B1528"
                    opacity="0.92"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
