"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const PATH_MAIN =
  "M 120 40 C 420 20 620 180 980 110 C 1280 40 1380 260 1080 360 C 760 470 220 430 180 620 C 140 820 520 780 860 860 C 1220 950 1360 1120 980 1240 C 560 1380 160 1320 200 1560 C 250 1820 780 1720 1080 1880 C 1400 2060 1180 2280 760 2320 C 320 2360 120 2580 280 2780 C 480 3020 1100 2920 1240 3180 C 1380 3440 720 3480 420 3660 C 120 3840 260 4120 620 4180 C 1080 4260 1320 4520 980 4680 C 620 4840 240 4780 180 4980";

const PATH_ACCENT =
  "M 980 80 C 1280 160 1180 300 760 340 C 360 390 80 560 260 740 C 460 940 1020 900 1180 1100 C 1360 1320 860 1420 480 1500 C 80 1580 60 1860 420 1960 C 820 2070 1360 2140 1200 2420 C 1020 2720 360 2620 220 2900 C 80 3180 640 3280 980 3440 C 1360 3620 1280 3960 820 4040 C 360 4120 80 4400 360 4580 C 700 4780 1200 4720 1320 4980";

export default function ConnectingRibbon() {
  const { scrollYProgress } = useScroll();
  const drawMain = useTransform(scrollYProgress, [0, 0.88], [0.12, 1]);
  const drawAccent = useTransform(scrollYProgress, [0.04, 0.95], [0.08, 1]);
  const shift = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.78, 0.5]);
  const thickOffset = useTransform(scrollYProgress, [0, 1], [0, -520]);
  const thinOffset = useTransform(scrollYProgress, [0, 1], [0, -280]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: shift, opacity: glow }}>
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 5100"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="ribbon-main" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="18%" stopColor="#e11d8c" />
              <stop offset="36%" stopColor="#22d3ee" />
              <stop offset="54%" stopColor="#34d399" />
              <stop offset="72%" stopColor="#fb923c" />
              <stop offset="88%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#e11d8c" />
            </linearGradient>
            <linearGradient id="ribbon-soft" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="40%" stopColor="#f9a8d4" />
              <stop offset="70%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#a5b4fc" />
            </linearGradient>
            <filter id="ribbon-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <motion.path
            d={PATH_MAIN}
            stroke="url(#ribbon-main)"
            strokeWidth="56"
            strokeLinecap="round"
            filter="url(#ribbon-blur)"
            opacity="0.22"
            strokeDasharray="140 90 40 160 220 70"
            style={{ pathLength: drawMain, strokeDashoffset: thickOffset }}
          />
          <motion.path
            d={PATH_MAIN}
            stroke="url(#ribbon-main)"
            strokeWidth="38"
            strokeLinecap="round"
            strokeDasharray="70 130 30 200 110 80"
            opacity="0.85"
            style={{ pathLength: drawMain, strokeDashoffset: thickOffset }}
          />
          <motion.path
            d={PATH_MAIN}
            stroke="url(#ribbon-main)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.95"
            style={{ pathLength: drawMain }}
          />
          <motion.path
            d={PATH_ACCENT}
            stroke="url(#ribbon-soft)"
            strokeWidth="24"
            strokeLinecap="round"
            strokeDasharray="50 170 18 240 90 120"
            opacity="0.7"
            style={{ pathLength: drawAccent, strokeDashoffset: thinOffset }}
          />
          <motion.path
            d={PATH_ACCENT}
            stroke="url(#ribbon-soft)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
            style={{ pathLength: drawAccent }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
