"use client";

import { motion } from "framer-motion";

export function TagBadge({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "accent" | "rose";
}) {
  const tones = {
    brand: "bg-brand/10 text-brand-deep border-brand/20",
    accent: "bg-accent/15 text-accent-deep border-accent/25",
    rose: "bg-[#E50914]/10 text-[#E50914] border-[#E50914]/20",
  };

  return (
    <motion.span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold tracking-tight shadow-sm md:text-sm ${tones[tone]}`}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.06 }}
    >
      {children}
    </motion.span>
  );
}
