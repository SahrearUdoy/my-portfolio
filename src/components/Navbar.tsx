"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";
import { smoothScrollTo } from "@/utils/smoothScroll";

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Projects", href: "#launchpad", id: "launchpad" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const TRACKED_SECTION_IDS = ["hero", "about", "skills", "journey", "launchpad", "contact"] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      // 1. If near the very top of the document
      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // 2. If scrolled near the bottom of the document
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }

      // 3. Find section intersecting the reading zone (160px below top)
      const readingLineOffset = 160;
      let matchedId = "";

      for (const id of TRACKED_SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= readingLineOffset && rect.bottom > readingLineOffset) {
          matchedId = id;
          break;
        }
      }

      if (matchedId) {
        setActiveSection(matchedId);
      }
    };

    // Run on initial mount & hash navigation
    updateActiveSection();

    // Use requestAnimationFrame throttling for buttery smooth 60fps tracking
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateActiveSection();
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    // Also observe sections with IntersectionObserver for instant visibility events
    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        rootMargin: "-80px 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    for (const id of TRACKED_SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateActiveSection);
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string, id: string, e: React.MouseEvent) => {
    smoothScrollTo(href, e);
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-300/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo / Title */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick("#hero", "hero", e)}
          aria-label="Udoy - Web Developer Portfolio Home"
          aria-current={activeSection === "hero" ? "location" : undefined}
          className={`flex items-center gap-2.5 text-base-content font-bold text-lg tracking-tight hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl px-2 py-1 ${
            activeSection === "hero" ? "ring-1 ring-primary/25 bg-base-200/40" : ""
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-content shadow-sm">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-semibold text-sm sm:text-base tracking-tight">Udoy</span>
            <span className="text-xs font-normal text-base-content/70">Web Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, link.id, e)}
                aria-current={isActive ? "location" : undefined}
                className={`relative px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "bg-primary/15 text-primary border-primary/30 shadow-xs font-semibold"
                    : "text-base-content/75 hover:text-primary hover:bg-base-200/60 border-transparent font-medium"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0"
                    />
                  )}
                  <span>{link.label}</span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden btn btn-ghost btn-circle btn-sm min-h-[44px] min-w-[44px] text-base-content border border-base-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-base-300 bg-base-100/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, link.id, e)}
                aria-current={isActive ? "location" : undefined}
                className={`block px-4 py-2.5 rounded-xl text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "bg-primary/15 text-primary font-bold border-l-4 border-primary pl-3 shadow-xs"
                    : "text-base-content/85 hover:bg-base-200 hover:text-primary font-medium"
                }`}
              >
                <span className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
