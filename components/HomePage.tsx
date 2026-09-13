"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import ConnectingRibbon from "@/components/ConnectingRibbon";
import FloatingBar from "@/components/FloatingBar";
import Marquee from "@/components/Marquee";
import SiteHeader from "@/components/SiteHeader";
import { TagBadge } from "@/components/TagBadge";
import {
  FadeIn,
  GlowCard,
  MotionButton,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import {
  awards,
  curriculumSteps,
  deptIntro,
  heroStats,
  onlyPoints,
  placementMajors,
  quickLinks,
  siteConfig,
  specials,
} from "@/lib/site-data";

export default function HomePage() {
  const tel = siteConfig.phoneTel || "0448509031";

  return (
    <main id="top" className="relative overflow-x-hidden pb-24 lg:pb-0">
      <div className="hero-bright pointer-events-none fixed inset-0 -z-10" />
      <ConnectingRibbon />
      <SiteHeader />

      <section className="relative z-10 min-h-[100svh] w-full overflow-hidden">
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-10 pt-24 md:px-8 md:pt-28 md:pb-16 lg:px-10">
          <FadeIn className="mx-auto w-full max-w-xl text-center">
            <p className="text-sm font-semibold text-accent-deep md:text-base">
              {siteConfig.yearLabel} {siteConfig.school} 신입생 모집안내
            </p>
            <p className="mt-2 text-sm font-bold text-brand md:text-base">
              입학 후 전공학과 선택과 교과목 설계가 자유로운
            </p>
            <h1 className="mt-2 break-keep font-[family-name:var(--font-display)] text-[1.85rem] leading-[1.2] font-black tracking-tight text-brand sm:text-5xl md:text-6xl lg:text-7xl">
              {siteConfig.brand}
            </h1>
          </FadeIn>

          <div className="pointer-events-none relative mx-auto mt-3 flex h-[200px] w-full max-w-lg items-end justify-center sm:h-[240px] md:mt-4 md:h-[280px]">
            <motion.div
              className="absolute left-[18%] top-2 w-[110px] sm:left-[22%] sm:w-[140px] md:w-[170px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/assets/cover-art2.png"
                  alt=""
                  width={258}
                  height={247}
                  unoptimized
                  className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(225,29,140,0.2)]"
                  priority
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute right-[16%] top-6 w-[120px] sm:right-[20%] sm:w-[160px] md:top-4 md:w-[190px]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/assets/cover-art1.png"
                  alt=""
                  width={303}
                  height={455}
                  unoptimized
                  className="h-auto w-full object-contain drop-shadow-[0_22px_36px_rgba(14,116,144,0.16)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          <FadeIn className="relative z-10 mx-auto mt-2 w-full max-w-xl text-center md:mt-4">
            <p className="hero-tagline break-keep font-[family-name:var(--font-display)] text-[1.5rem] leading-[1.25] font-black sm:text-3xl md:text-4xl lg:text-5xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <TagBadge tone="rose">교과 100% 🎯</TagBadge>
              <TagBadge tone="brand">면접·실기 없음 ✨</TagBadge>
              <TagBadge tone="accent">3년제 탐색 후 배치 🎬</TagBadge>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <MotionButton
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand px-6 text-base font-bold text-white shadow-xl shadow-pink-200/70"
              >
                💬 카카오 상담
              </MotionButton>
              <MotionButton
                href="#curriculum"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border-2 border-accent/50 bg-white/80 px-6 text-base font-bold text-accent-deep shadow-xl shadow-slate-200/60"
              >
                🎥 교육과정 보기
              </MotionButton>
            </div>
          </FadeIn>

          <Stagger className="mt-14 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 md:mt-20">
            {heroStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <GlowCard className="soft-panel rounded-3xl px-5 py-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-black text-slate-900">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{stat.note}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="relative z-10">
        <Marquee />
      </div>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
        <FadeIn>
          <SectionHeading
            emoji="🎬"
            eyebrow="About"
            title={deptIntro.title}
            desc={deptIntro.body}
          />
          <p className="mt-4 text-sm font-bold text-brand md:text-base">
            {deptIntro.admissionNote}
          </p>
        </FadeIn>

        <FadeIn className="mt-12">
          <p className="font-[family-name:var(--font-display)] text-3xl font-black italic text-brand md:text-4xl">
            Only
          </p>
          <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-extrabold text-slate-900 md:text-3xl">
            영상자율전공학과만이 가능해요!
          </h3>
        </FadeIn>
        <Stagger className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {onlyPoints.map((point) => (
            <StaggerItem key={point.title}>
              <GlowCard className="soft-panel h-full rounded-3xl p-5 md:p-7">
                <p className="text-lg font-extrabold text-slate-900 md:text-xl">
                  {point.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {point.note}
                </p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-10">
          <p className="text-sm font-bold text-accent-deep">수강신청 및 배치가능학과</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {placementMajors.map((major) => (
              <span
                key={major}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-brand/15"
              >
                {major}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      <section
        id="curriculum"
        className="relative z-10 border-y border-brand/10 bg-white/25 backdrop-blur-[2px]"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <FadeIn className="mb-8 flex justify-center sm:mb-10 md:mb-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/1.png"
                alt="탐색과 설계 — 다양한 직무를 알아가는 학생들"
                width={226}
                height={227}
                unoptimized
                className="h-auto w-[200px] object-contain drop-shadow-[0_16px_28px_rgba(225,29,140,0.16)] sm:w-[240px] md:w-[280px]"
              />
            </motion.div>
          </FadeIn>
          <FadeIn>
            <SectionHeading
              emoji="📚"
              eyebrow="Curriculum"
              title="교육과정"
              desc="1학년 1학기는 탐색, 2학기부터는 희망 학과에서 전공을 심화합니다."
            />
          </FadeIn>
          <Stagger className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {curriculumSteps.map((step) => (
              <StaggerItem key={step.step}>
                <GlowCard className="h-full rounded-3xl bg-[#3730a3] p-6 text-white md:p-8">
                  <p className="text-sm font-bold tracking-wide text-cyan-200">
                    {step.step} · {step.term}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-black md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/90">
                    {step.body}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cyan-100">
                    {step.extra}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CharacterBreak
        left={{
          src: "/assets/7.png",
          alt: "영상연출 캐릭터",
          width: 220,
          height: 344,
        }}
        right={{
          src: "/assets/10.png",
          alt: "영상촬영조명 캐릭터",
          width: 188,
          height: 259,
        }}
      />

      <section id="specials" className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
        <FadeIn>
          <SectionHeading
            emoji="🌟"
            eyebrow="Only Here"
            title="영상자율전공학과만의 특별함"
          />
        </FadeIn>
        <FadeIn className="mt-6 md:mt-8">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-pink-200/50">
            <Image
              src="/assets/life-01.jpg"
              alt="친해지길바라 · 새내기 교류 현장"
              width={2000}
              height={1333}
              className="h-[240px] w-full object-cover sm:h-[320px] md:h-[420px] lg:h-[520px]"
            />
          </div>
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.65fr_1.35fr]">
          <FadeIn className="mx-auto w-full max-w-sm lg:mx-0">
            <Image
              src="/assets/life-set.png"
              alt="영상자율전공학과 캐릭터"
              width={491}
              height={600}
              unoptimized
              className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(225,29,140,0.18)]"
            />
          </FadeIn>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specials.map((item) => (
              <StaggerItem key={item.no}>
                <GlowCard className="soft-panel h-full rounded-3xl p-5 md:p-6">
                  <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-black text-white">
                    {item.no}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-extrabold text-slate-900 md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.body}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CharacterBreak
        left={{
          src: "/assets/9.png",
          alt: "영상편집 캐릭터",
          width: 153,
          height: 229,
        }}
      />

      <section id="admissions" className="relative z-10 border-y border-brand/10 bg-white/35 backdrop-blur-[2px]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <FadeIn>
            <SectionHeading
              emoji="📝"
              eyebrow="Admissions"
              title="2027 입학 전형"
              desc="영상자율전공학과는 면접·실기 없이 교과 학생부 100%로 선발합니다."
            />
          </FadeIn>
          <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => {
              const tone =
                link.tone === "rose"
                  ? "bg-brand text-white"
                  : link.tone === "sky"
                    ? "bg-accent text-white"
                    : "bg-[#3730a3] text-white";
              return (
                <StaggerItem key={link.id}>
                  <MotionButton
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex min-h-[5.5rem] w-full flex-col justify-center rounded-3xl px-5 py-4 shadow-md ${tone}`}
                  >
                    <span className="text-lg font-extrabold">{link.label}</span>
                    <span className="mt-1 text-sm opacity-90">{link.hint}</span>
                  </MotionButton>
                </StaggerItem>
              );
            })}
          </Stagger>
          <FadeIn className="mt-10">
            <p className="text-sm font-bold text-slate-500">대학 인증 · 선정</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {awards.map((award) => (
                <span
                  key={award}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 md:text-sm"
                >
                  {award}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CharacterBreak
        right={{
          src: "/assets/8.png",
          alt: "음향제작 캐릭터",
          width: 164,
          height: 240,
        }}
      />

      <section id="contact" className="relative z-10 bg-[#fff0f7]/45">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <FadeIn className="mx-auto max-w-xl">
            <SectionHeading
              emoji="💬"
              eyebrow="Contact"
              title="입시상담 바로가기"
              desc="카카오톡 오픈채팅으로 바로 문의하거나, 아래 전화로 연락해 주세요."
            />
            <div className="soft-panel mt-6 space-y-4 rounded-3xl p-5 md:p-6">
              <a
                href={siteConfig.kakaoOpenChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#FEE500] px-5 text-base font-extrabold text-[#191919] shadow-md transition hover:brightness-95"
              >
                카카오톡 오픈채팅 상담
              </a>
              <p className="text-sm leading-relaxed text-slate-600">
                모바일에서는 카카오톡이 바로 열립니다. PC에서는 카카오 페이지에서 접속용 QR이 표시됩니다.
              </p>
              <div className="space-y-3 border-t border-slate-100 pt-4">
                <a
                  href={`tel:${tel}`}
                  className="block font-[family-name:var(--font-display)] text-2xl font-black text-brand-deep"
                >
                  {siteConfig.phoneNumber}
                </a>
                <p className="text-sm font-semibold text-slate-700">
                  영상자율전공학과 {siteConfig.deptPhone}
                </p>
                <p className="text-sm text-slate-500">
                  {siteConfig.postalCode} {siteConfig.address}
                </p>
                <a
                  href={siteConfig.admissionsUrl}
                  className="inline-flex text-sm font-bold text-accent-deep underline"
                >
                  입시홈페이지 ipsi.pro.ac.kr
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="relative z-10 border-t border-brand/10 py-10 text-center text-sm text-slate-500">
        <p className="font-[family-name:var(--font-display)] text-base font-extrabold text-slate-800">
          {siteConfig.slogan} {siteConfig.school} {siteConfig.brand}
        </p>
        <p className="mt-2">{siteConfig.tagline}</p>
        <p className="mt-3">
          <a href={`tel:${tel}`} className="font-semibold text-brand-deep hover:underline">
            {siteConfig.phoneNumber}
          </a>
        </p>
        <p className="mt-1">
          {siteConfig.postalCode} {siteConfig.address}
        </p>
      </footer>

      <FloatingBar />
    </main>
  );
}

type CharacterAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function CharacterFigure({
  src,
  alt,
  width,
  height,
  side,
}: CharacterAsset & { side: "left" | "right" }) {
  return (
    <FadeIn>
      <motion.div
        animate={{ y: [0, side === "right" ? 10 : -10, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          className={`h-auto w-[168px] object-contain drop-shadow-[0_16px_24px_rgba(15,23,42,0.12)] sm:w-[210px] md:w-[250px] ${
            side === "right" ? "rotate-3" : "-rotate-3"
          }`}
        />
      </motion.div>
    </FadeIn>
  );
}

function CharacterBreak({
  left,
  right,
}: {
  left?: CharacterAsset;
  right?: CharacterAsset;
}) {
  const justify =
    left && right ? "justify-between" : right ? "justify-end" : "justify-start";

  return (
    <div
      className={`relative z-10 mx-auto flex max-w-7xl items-end ${justify} gap-4 px-3 py-12 sm:gap-8 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10`}
    >
      {left ? <CharacterFigure {...left} side="left" /> : null}
      {right ? <CharacterFigure {...right} side="right" /> : null}
    </div>
  );
}

function SectionHeading({
  emoji,
  eyebrow,
  title,
  desc,
}: {
  emoji?: string;
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="text-on-deco max-w-3xl">
      <p className="text-xs font-bold tracking-[0.25em] text-brand uppercase md:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {emoji ? <span className="mr-2">{emoji}</span> : null}
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
