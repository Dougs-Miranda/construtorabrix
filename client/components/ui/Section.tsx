"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "light" | "dark";
  reveal?: boolean;
}

export function Section({
  children,
  className,
  variant = "default",
  reveal = true,
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-white",
    light: "bg-slate-50",
    dark: "bg-[#0F172A] text-slate-100",
  };

  return (
    <section
      className={cn("relative", variants[variant], className)}
      {...props}
    >
      {reveal ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn("min-h-[inherit]", className)}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
}
