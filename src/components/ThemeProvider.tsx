"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "ciel-day" | "ciel-night";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("ciel-day");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the active data-theme set by the anti-flicker script
    const currentTheme = document.documentElement.getAttribute("data-theme") as Theme;
    if (currentTheme === "ciel-day" || currentTheme === "ciel-night") {
      setThemeState(currentTheme);
    } else {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme === "ciel-day" || savedTheme === "ciel-night") {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme: Theme = prefersDark ? "ciel-night" : "ciel-day";
        setThemeState(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
      }
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // Ignore localStorage write failures in private browsing
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "ciel-day" ? "ciel-night" : "ciel-day";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
