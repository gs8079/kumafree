"use client";

import { motion } from "framer-motion";

/** Soft Shadow 카드 — 밝고 가벼운 입체감 */
export function SoftCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-slate-200/60 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function SoftMotionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-3xl border border-white/80 bg-white/90 shadow-xl shadow-slate-200/60 backdrop-blur-sm ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 20px 40px rgba(148,163,184,0.35), 0 0 24px rgba(229,9,20,0.12)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
