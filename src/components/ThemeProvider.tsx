"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Theme = "ciel-day" | "ciel-night";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const emptySubscribe = () => () => {};

function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes" && m.attributeName === "data-theme") {
        callback();
      }
    }
  });

  if (typeof document !== "undefined") {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }

  return () => {
    window.removeEventListener("storage", callback);
    observer.disconnect();
  };
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "ciel-day";
  const attr = document.documentElement.getAttribute("data-theme") as Theme;
  if (attr === "ciel-day" || attr === "ciel-night") return attr;
  return "ciel-day";
}

function getServerSnapshot(): Theme {
  return "ciel-day";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const currentTheme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);
  const mounted = useMounted();

  const setTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // Ignore in restricted environments
    }
  };

  const toggleTheme = () => {
    const nextTheme = currentTheme === "ciel-day" ? "ciel-night" : "ciel-day";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme, setTheme, mounted }}>
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
