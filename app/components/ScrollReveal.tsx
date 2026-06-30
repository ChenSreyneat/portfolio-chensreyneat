"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.8,
  className = ""
}: ScrollRevealProps) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: { 
        duration: duration, 
        ease: [0.25, 0.25, 0, 1] as const, // Custom cubic-bezier for smooth reveal
        delay: delay 
      } 
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Trigger slightly before it comes into full view
      className={className}
    >
      {children}
    </motion.div>
  );
}
