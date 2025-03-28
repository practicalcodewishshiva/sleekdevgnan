
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const getAnimationClasses = (
  animation: string,
  isInView: boolean,
  hasAnimated: boolean,
  once: boolean
): string => {
  if ((once && hasAnimated) || isInView) {
    switch (animation) {
      case "fade-in":
        return "opacity-100";
      case "slide-up":
        return "opacity-100 translate-y-0";
      case "slide-left":
        return "opacity-100 translate-x-0";
      case "slide-right":
        return "opacity-100 -translate-x-0";
      case "scale":
        return "opacity-100 scale-100";
      default:
        return "opacity-100";
    }
  }

  switch (animation) {
    case "fade-in":
      return "opacity-0";
    case "slide-up":
      return "opacity-0 translate-y-16";
    case "slide-left":
      return "opacity-0 -translate-x-16";
    case "slide-right":
      return "opacity-0 translate-x-16";
    case "scale":
      return "opacity-0 scale-95";
    default:
      return "opacity-0";
  }
};

const AnimatedElement = ({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className,
  once = true,
}: AnimatedElementProps) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              setHasAnimated(true);
            }
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationClasses = getAnimationClasses(
    animation,
    isInView,
    hasAnimated,
    once
  );

  const style = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={cn(animationClasses, "transition-all", className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
