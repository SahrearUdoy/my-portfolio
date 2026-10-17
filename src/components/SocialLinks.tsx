"use client";

import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

export interface SocialProfile {
  platform: "LinkedIn" | "Instagram" | "GitHub";
  url: string;
  handle: string;
  actionText: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sahrear-kalam-udoy-438446398/",
    handle: "sahrear-kalam-udoy",
    actionText: "Visit profile ↗",
    icon: FaLinkedin,
    colorClass: "text-[#0A66C2]",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/sahrear_udoy/",
    handle: "@sahrear_udoy",
    actionText: "Visit profile ↗",
    icon: FaInstagram,
    colorClass: "text-[#E4405F]",
  },
  {
    platform: "GitHub",
    url: "https://github.com/SahrearUdoy",
    handle: "SahrearUdoy",
    actionText: "Visit profile ↗",
    icon: FaGithub,
    colorClass: "text-base-content",
  },
];

export function SocialLink({ profile }: { profile: SocialProfile }) {
  const Icon = profile.icon;

  return (
    <div className="relative group inline-flex items-center justify-center">
      {/* Primary Accessible Anchor Button */}
      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${profile.platform}: ${profile.handle} (${profile.actionText})`}
        className="w-10 h-10 rounded-xl bg-base-100/90 hover:bg-base-200/90 border border-base-300/80 hover:border-primary/50 shadow-xs flex items-center justify-center text-base-content hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95"
      >
        <Icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${profile.colorClass}`} />
      </a>

      {/* Connected Hover/Focus Popover Tooltip */}
      <div
        role="tooltip"
        className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2.5 z-40 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 ease-out"
      >
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block p-3 rounded-xl bg-base-100/95 backdrop-blur-md border border-base-300 shadow-xl hover:border-primary/50 transition-colors duration-150 text-left min-w-[170px] cursor-pointer"
        >
          <div className="flex items-center justify-between gap-2 border-b border-base-300/60 pb-1.5 mb-1.5">
            <div className="flex items-center gap-1.5">
              <Icon className={`w-3.5 h-3.5 ${profile.colorClass}`} />
              <span className="text-xs font-bold text-base-content tracking-tight">
                {profile.platform}
              </span>
            </div>
            <ExternalLink className="w-3 h-3 text-base-content/40" />
          </div>

          <div className="space-y-0.5">
            <span className="block font-mono text-[11px] font-medium text-base-content/75 truncate max-w-[150px]">
              {profile.handle}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
              {profile.actionText}
            </span>
          </div>

          {/* Downward triangle pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2.5 border-4 border-transparent border-t-base-300" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[11px] border-4 border-transparent border-t-base-100" />
        </a>
      </div>
    </div>
  );
}

export function SocialLinksGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_PROFILES.map((profile) => (
        <SocialLink key={profile.platform} profile={profile} />
      ))}
    </div>
  );
}
