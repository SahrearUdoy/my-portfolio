"use client";

import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";
import { SocialLinksGroup } from "./SocialLinks";
import { smoothScrollTo } from "@/utils/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Launchpad", href: "#launchpad" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    smoothScrollTo("#hero", e);
  };

  return (
    <footer className="relative z-10 w-full bg-base-100/70 backdrop-blur-md border-t border-base-300/80 mt-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand, Professional Title & Reusable Social Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2 text-base-content font-bold text-lg tracking-tight">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-primary-content shadow-sm">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>Udoy</span>
            </div>
            <p className="text-xs font-medium text-primary">
              Web Developer
            </p>
            <p className="text-xs text-base-content/60 max-w-sm">
              Building responsive, intuitive web experiences with modern architecture.
            </p>
            {/* Reusable Interactive Social Profiles with Connected Tooltips */}
            <div className="pt-1">
              <SocialLinksGroup />
            </div>
          </div>

          {/* In-Page Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            {footerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => smoothScrollTo(link.href, e)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-base-content/75 hover:text-primary hover:bg-base-200/60 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-sm btn-ghost border border-base-300/80 hover:border-primary text-xs flex items-center gap-1.5 text-base-content/80 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Line & Dynamic Copyright */}
        <div className="pt-6 border-t border-base-300/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/60 text-center sm:text-left">
          <p>© {currentYear} Udoy. All rights reserved.</p>
          <p className="text-[11px] text-base-content/50">
            Crafted with Next.js, React, Tailwind CSS, &amp; DaisyUI
          </p>
        </div>
      </div>
    </footer>
  );
}
