"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Until mounted on client, render a placeholder button with accessible layout
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle celestial theme"
        className={`btn btn-ghost btn-circle btn-sm sm:btn-md min-h-[44px] min-w-[44px] text-base-content border border-base-300 shadow-sm ${className}`}
      >
        <span className="loading loading-spinner loading-xs" />
      </button>
    );
  }

  const isDay = theme === "ciel-day";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label={isDay ? "Switch to night mode (ciel-night)" : "Switch to day mode (ciel-day)"}
      title={isDay ? "Switch to night mode" : "Switch to day mode"}
      className={`btn btn-ghost btn-circle btn-sm sm:btn-md min-h-[44px] min-w-[44px] relative overflow-hidden transition-all duration-300 border border-base-300 hover:border-primary/50 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
        isDay
          ? "bg-amber-100/60 text-amber-600 hover:bg-amber-100"
          : "bg-indigo-950/70 text-sky-200 hover:bg-indigo-900/90"
      } ${className}`}
    >
      <div
        className={`transition-transform duration-500 flex items-center justify-center ${
          isDay ? "rotate-0 scale-100" : "-rotate-90 scale-0 absolute"
        }`}
      >
        <Sun className="w-5 h-5 drop-shadow-sm" />
      </div>
      <div
        className={`transition-transform duration-500 flex items-center justify-center ${
          !isDay ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"
        }`}
      >
        <Moon className="w-5 h-5 drop-shadow-sm" />
      </div>
    </button>
  );
}
