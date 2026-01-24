"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "brutal" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "brutal", size = "md", asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-heading font-bold uppercase tracking-wide transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          // Variants
          {
            brutal: [
              "bg-white",
              "border-3 border-black",
              "shadow-brutal",
              "hover:translate-x-[2px] hover:translate-y-[2px]",
              "hover:shadow-none",
              "active:translate-x-[4px] active:translate-y-[4px]",
              "font-display",
              "[&]:text-black",
            ],
            outline: [
              "bg-transparent text-white",
              "border-3 border-white",
              "hover:bg-white hover:text-black",
            ],
            ghost: [
              "bg-transparent text-white",
              "border-b-3 border-white",
              "hover:bg-white/10",
            ],
          }[variant],
          // Sizes
          {
            sm: "px-grid-3 py-grid-1 text-body-sm",
            md: "px-grid-4 py-grid-2 text-body-md",
            lg: "px-grid-6 py-grid-3 text-body-lg",
          }[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
