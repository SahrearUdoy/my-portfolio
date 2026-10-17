/**
 * Global smooth scrolling helper.
 * Handles smooth scrolling to any element or section ID,
 * respecting prefers-reduced-motion and updating the URL hash cleanly.
 */
export function smoothScrollTo(targetIdOrHash: string, e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  if (typeof window === "undefined") return;

  const rawId = targetIdOrHash.startsWith("#") ? targetIdOrHash.slice(1) : targetIdOrHash;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior: ScrollBehavior = prefersReduced ? "auto" : "smooth";

  if (!rawId || rawId === "hero") {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
    history.pushState(null, "", rawId === "hero" ? "#hero" : "#");
    return;
  }

  const element = document.getElementById(rawId);
  if (element) {
    element.scrollIntoView({ behavior: scrollBehavior, block: "start" });
    history.pushState(null, "", `#${rawId}`);
  }
}
