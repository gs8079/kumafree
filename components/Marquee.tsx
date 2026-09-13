"use client";

import { marqueeItems } from "@/lib/site-data";

export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="works-marquee overflow-hidden border-y border-brand/10 bg-white/70 py-3">
      <div className="works-marquee-track flex w-max gap-3">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="rounded-full bg-brand/10 px-4 py-1.5 text-sm font-bold text-brand-deep"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
