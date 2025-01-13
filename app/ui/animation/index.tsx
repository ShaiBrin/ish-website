"use client";

import { motion } from "framer-motion";

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start from slightly below the viewport
      animate={{ opacity: 1, y: 0 }}  // Move to its original position
      exit={{ opacity: 0, y: 20 }}    // Slide down when exiting
      transition={{ duration: 0.3 }}  // Adjust duration for smoothness
    >
      {children}
    </motion.div>
  );
}
