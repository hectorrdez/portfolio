import { useState, useRef, useEffect, useLayoutEffect, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";
import StringUtils from "@utils/StringUtils";

// --- Types ---

export type DropdownItemDef = {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

type Coords = { top: number; left: number };
type MousePos = { x: number; y: number };

type DropdownFloatingProps = {
  items: DropdownItemDef[];
  children: ReactNode;
  className?: string;
};

// --- Position calculator ---
//
// Uses mouse position to decide vertical direction:
//   enough space below cursor  → open downward
//   not enough space below     → open upward
// Then clamps horizontally and applies a final safety clamp on both axes.

const GAP = 4;

function calcSafeCoords(trigger: HTMLElement, panel: HTMLElement, mouse: MousePos): Coords {
  const t = trigger.getBoundingClientRect();
  const p = panel.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Vertical: prefer below unless there isn't enough room under the cursor
  const spaceBelow = vh - mouse.y;
  let top = spaceBelow >= p.height + GAP
    ? t.bottom + GAP          // open below trigger
    : t.top - p.height - GAP; // flip above trigger

  // Horizontal: align to trigger left, push left if overflows right edge
  let left = t.left;
  if (left + p.width > vw - GAP) left = vw - p.width - GAP;

  // Safety clamp — covers extreme edge cases (panel taller than viewport, etc.)
  if (top + p.height > vh - GAP) top = vh - p.height - GAP;
  if (top < GAP) top = GAP;
  if (left < GAP) left = GAP;

  return { top, left };
}

// --- Item sub-component ---

function DropdownFloatingItem({ label, icon, onClick, disabled }: DropdownItemDef) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left rounded-md hover:bg-secondary hover:text-on-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {icon && (
        <span className="w-4 h-4 flex items-center justify-center shrink-0">{icon}</span>
      )}
      <span>{label}</span>
    </button>
  );
}

// --- Main component ---

export default function DropdownFloating({ items, children, className }: DropdownFloatingProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>({ top: 0, left: 0 });

  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<MousePos>({ x: 0, y: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !panelRef.current) return;
    setCoords(calcSafeCoords(triggerRef.current, panelRef.current, mouseRef.current));
  }, []);

  // useLayoutEffect: fires after DOM mutation, before paint — panel has real size, no flash
  useLayoutEffect(() => {
    if (open) updatePosition();
  }, [open, updatePosition]);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const handleTriggerEnter = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    cancelClose();
    setOpen(true);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleTriggerEnter}
        onMouseLeave={scheduleClose}
        className="inline-block"
      >
        {children}
      </div>

      {open &&
        createPortal(
          <div
            ref={panelRef}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{ top: coords.top, left: coords.left }}
            className={StringUtils.JoinClassName(
              "fixed z-50 min-w-40 p-1 rounded-lg shadow-lg bg-white border border-secondary",
              className
            )}
          >
            {items.map((item, i) => (
              <DropdownFloatingItem key={i} {...item} />
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
