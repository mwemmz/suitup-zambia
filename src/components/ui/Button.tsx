"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MotionProps } from "framer-motion";

interface ButtonProps extends MotionProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  primary: "bg-wine-600 text-ivory hover:bg-wine-500 border border-transparent shadow-sm shadow-wine-600/20",
  secondary: "bg-ivory text-charcoal-950 hover:bg-ivory-dark border border-transparent",
  outline: "bg-transparent text-ivory border border-charcoal-500 hover:border-ivory hover:text-ivory",
  ghost: "bg-transparent text-charcoal-200 hover:text-ivory hover:bg-charcoal-800 border border-transparent",
};

const sizes = {
  sm: "px-5 py-2 text-[11px] tracking-[0.2em]",
  md: "px-8 py-3 text-xs tracking-[0.2em]",
  lg: "px-10 py-4 text-xs tracking-[0.2em]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", children, className, as = "button", href, type = "button", disabled, onClick, ...rest }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium uppercase transition-all duration-300",
      variants[variant],
      sizes[size],
      disabled && "opacity-40 cursor-not-allowed pointer-events-none",
      className
    );

    if (as === "a" && href) {
      return (
        <motion.a
          href={href}
          className={classes}
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          {...rest}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        onClick={onClick}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
