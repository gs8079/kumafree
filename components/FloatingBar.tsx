"use client";

import { siteConfig } from "@/lib/site-data";

const TEL = siteConfig.phoneTel || "0448509031";

export default function FloatingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/15 bg-white/90 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={siteConfig.kakaoOpenChatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-accent px-3 text-center text-sm font-bold text-white transition active:scale-[0.98]"
        >
          카카오 상담 💬
        </a>
        <a
          href={`tel:${TEL}`}
          className="inline-flex min-h-12 flex-col items-center justify-center rounded-2xl bg-brand px-3 text-center font-bold text-white transition active:scale-[0.98]"
        >
          <span className="text-sm">전화 문의 📞</span>
          <span className="text-[11px] font-semibold tracking-wide opacity-95">
            {siteConfig.phoneNumber}
          </span>
        </a>
      </div>
    </div>
  );
}
