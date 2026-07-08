"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type JSX,
  type ReactNode,
  type Ref,
} from "react";

type RevealProps = {
  /** Element to render; defaults to a plain div. */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** Transition delay in ms, for staggering sibling reveals. */
  delay?: number;
  children: ReactNode;
};

/**
 * Fades and slides its content up once it scrolls into view.
 * Styling lives in globals.css under [data-reveal]; the hidden state only
 * applies when scripting is enabled, so content stays visible without JS.
 */
export function Reveal({
  as = "div",
  className,
  delay = 0,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      data-reveal=""
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
