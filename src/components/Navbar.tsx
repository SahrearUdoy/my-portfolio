"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/85 backdrop-blur-md border-b border-base-300/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo / Title */}
        <a
          href="#"
          className="flex items-center gap-2 text-base-content font-bold text-lg tracking-tight hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-1.5 py-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-content shadow-sm">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="font-semibold text-sm sm:text-base">[Your Name]</span>
            <span className="text-xs font-normal text-base-content/70">Web Developer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-base-content/85 hover:text-primary hover:bg-base-200/70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
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
        <div className="md:hidden border-b border-base-300 bg-base-100/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-base font-medium text-base-content hover:bg-base-200 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
