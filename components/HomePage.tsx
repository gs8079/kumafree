"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import ConnectingRibbon from "@/components/ConnectingRibbon";
import ContactForm from "@/components/ContactForm";
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
  campusPhotos,
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

        <motion.div
          className="pointer-events-none absolute left-[4%] top-[18%] w-[140px] sm:left-[8%] sm:w-[180px] md:top-[14%] md:w-[210px]"
          initial={{ opacity: 0, x: -24, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
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
          className="pointer-events-none absolute right-[2%] bottom-[18%] w-[170px] sm:right-[6%] sm:bottom-[12%] sm:w-[220px] md:w-[260px] lg:right-[8%] lg:w-[280px]"
          initial={{ opacity: 0, x: 28, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/assets/cover-art1.png"
              alt="너의 미래를 자유롭게 그려봐! 영상자율전공학과"
              width={303}
              height={455}
              unoptimized
              className="h-auto w-full object-contain drop-shadow-[0_22px_36px_rgba(14,116,144,0.16)]"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-28 md:justify-center md:px-8 md:pb-16 lg:px-10">
          <FadeIn className="max-w-xl rounded-3xl bg-white/55 p-5 shadow-lg shadow-pink-100/40 backdrop-blur-md md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
            <p className="text-sm font-semibold text-accent-deep md:text-base">
              {siteConfig.yearLabel} {siteConfig.school} 신입생 모집안내
            </p>
            <p className="mt-3 text-sm font-bold text-brand md:text-base">
              입학 후 전공학과 선택과 교과목 설계가 자유로운
            </p>
            <h1 className="mt-2 break-keep font-[family-name:var(--font-display)] text-[1.85rem] leading-[1.2] font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-brand">{siteConfig.brand}</span>
              <span className="mt-2 block text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl">
                {siteConfig.tagline}
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <TagBadge tone="rose">교과 100% 🎯</TagBadge>
              <TagBadge tone="brand">면접·실기 없음 ✨</TagBadge>
              <TagBadge tone="accent">3년제 탐색 후 배치 🎬</TagBadge>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MotionButton
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand px-6 text-base font-bold text-white shadow-xl shadow-pink-200/70"
              >
                💬 카카오·이메일 상담
              </MotionButton>
              <MotionButton
                href="#curriculum"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border-2 border-accent/50 bg-white/80 px-6 text-base font-bold text-accent-deep shadow-xl shadow-slate-200/60"
              >
                🎥 교육과정 보기
              </MotionButton>
            </div>
          </FadeIn>

          <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12">
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

      <section id="specials" className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
        <FadeIn>
          <SectionHeading
            emoji="🌟"
            eyebrow="Only Here"
            title="영상자율전공학과만의 특별함"
          />
        </FadeIn>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
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
          <FadeIn>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-pink-200/50">
              <Image
                src="/assets/life-01.png"
                alt="친해지길바라 · 새내기 교류 현장"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {campusPhotos.slice(1).map((photo) => (
                <div
                  key={photo.src}
                  className="overflow-hidden rounded-2xl shadow-lg shadow-slate-200/70"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="h-40 w-full object-cover md:h-44"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

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

      <section id="contact" className="relative z-10 bg-[#fff0f7]/45">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <FadeIn>
              <SectionHeading
                emoji="💬"
                eyebrow="Contact"
                title="입시상담 바로가기"
                desc="카카오톡 오픈채팅 QR을 찍거나, 아래 전화·메일로 문의하세요."
              />
              <div className="soft-panel mt-6 flex flex-col items-center gap-4 rounded-3xl p-5 sm:flex-row sm:items-start">
                <Image
                  src="/assets/qr-kakao.png"
                  alt="입시상담 카카오톡 오픈채팅 QR"
                  width={220}
                  height={220}
                  className="h-44 w-44 rounded-2xl object-cover ring-1 ring-brand/15"
                />
                <div className="space-y-3 text-center sm:text-left">
                  <p className="font-extrabold text-slate-900">카카오톡 오픈채팅방</p>
                  <p className="text-sm text-slate-600">
                    리플렛과 동일한 입시상담 QR입니다. 스마트폰으로 스캔해 주세요.
                  </p>
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
            <FadeIn>
              <div className="soft-panel rounded-3xl p-5 md:p-7">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-extrabold text-slate-900">
                  1:1 이메일 상담
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  이름·연락처·이메일을 남겨주시면 담당자에게 전달됩니다.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
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
