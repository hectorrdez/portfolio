import { useEffect, useRef } from "react";

export default function Background() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    root.dataset.motion = reduced ? "static" : "reactive";
    if (reduced) return;

    let ticking = false;
    let pendingMouse: { x: number; y: number } | null = null;

    const applyFrame = () => {
      ticking = false;
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
      if (pendingMouse) {
        root.style.setProperty("--mx", `${pendingMouse.x}px`);
        root.style.setProperty("--my", `${pendingMouse.y}px`);
      }
    };

    const schedule = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyFrame);
      }
    };

    const onScroll = () => schedule();
    const onMouseMove = (event: MouseEvent) => {
      pendingMouse = { x: event.clientX, y: event.clientY };
      root.dataset.hovering = "true";
      schedule();
    };
    const onMouseLeave = () => {
      root.dataset.hovering = "false";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      data-hovering="false"
      className="bg-decor fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="bg-decor__blob bg-decor__blob--primary" />
      <div className="bg-decor__blob bg-decor__blob--secondary" />
      <div className="bg-decor__blob bg-decor__blob--tertiary" />
      <div className="bg-decor__spotlight" />
    </div>
  );
}
