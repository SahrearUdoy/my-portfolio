"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Copy, Check, Send, ShieldAlert, Share2 } from "lucide-react";
import { SocialLinksGroup } from "./SocialLinks";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  // Email detected from local repository git author configuration
  const gitEmail = "sahrearkalam@gmail.com";

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(gitEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="scroll-mt-24 w-full card bg-base-100/80 backdrop-blur-md border border-base-300 shadow-sm transition-all hover:border-primary/40 overflow-hidden"
    >
      <div className="card-body p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-base-content leading-tight">
            Have an idea worth building?{" "}
            <span className="bg-gradient-to-r from-primary via-[#6B93DC] to-secondary bg-clip-text text-transparent">
              Let’s explore it together.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-base-content/65 max-w-2xl font-normal leading-relaxed">
            I am always interested in discussing modern web development, architectural ideas, and creative technical projects.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Channel 1: Direct Email Channel */}
          <div className="p-6 rounded-2xl bg-base-200/50 border border-base-300/80 space-y-4 transition-all hover:border-primary/40 hover:bg-base-200/80">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
              <Mail className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-base sm:text-lg text-base-content">
                Direct Email
              </h3>
              <p className="text-xs text-base-content/70 font-normal">
                Reach out directly for project conversations, feedback, or collaborative inquiries.
              </p>
            </div>

            {/* Email Address Display Box */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
              <div className="px-3.5 py-2.5 rounded-xl bg-base-100 border border-base-300 font-mono text-xs text-base-content/90 select-all overflow-x-auto">
                {gitEmail}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-sm btn-outline border-base-300 hover:border-primary text-xs flex-1 sm:flex-initial"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-success" />
                      <span className="text-success font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${gitEmail}`}
                  className="btn btn-sm btn-primary text-xs flex-1 sm:flex-initial"
                  aria-label="Send email"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </a>
              </div>
            </div>

            <p className="text-[11px] text-base-content/50 italic">
              Verified from Git author profile. If you have an alternate public inbox, you can easily update it here.
            </p>
          </div>

          {/* Channel 2: Online Profiles & Networks */}
          <div className="p-6 rounded-2xl bg-base-200/50 border border-base-300/80 space-y-4 transition-all hover:border-primary/40 hover:bg-base-200/80">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center border border-secondary/25">
              <Share2 className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-base sm:text-lg text-base-content">
                Online Profiles &amp; Networks
              </h3>
              <p className="text-xs text-base-content/70 font-normal">
                Connect with me on LinkedIn, explore my visual updates on Instagram, or inspect my repositories and commits on GitHub.
              </p>
            </div>

            {/* Reusable Interactive Social Links */}
            <div className="pt-2">
              <SocialLinksGroup />
            </div>

            <p className="text-[11px] text-base-content/50 italic">
              Hover or focus any icon to reveal profile details. Click to open in a new tab.
            </p>
          </div>
        </div>

        {/* Honest Communication Transparency Box */}
        <div className="p-4 rounded-xl bg-base-200/40 border border-dashed border-base-300 text-xs text-base-content/70 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-base-content">Direct Communication Guarantee: </span>
            This portfolio uses verified direct channels rather than a decorative form that fails silently.
            Messages sent to the verified email address reach my inbox directly.
          </div>
        </div>
      </div>
    </section>
  );
}
