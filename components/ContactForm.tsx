"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const FORMSUBMIT_URL = "https://formsubmit.co/ajax/producer@pro.ac.kr";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const inquiry = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          이름: name,
          연락처: phone,
          이메일: email,
          문의내용: inquiry,
          _subject: `[입학 상담 문의] ${name} 학생의 문의입니다.`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = (await response.json()) as {
        success?: string | boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "전송 중 오류가 발생했습니다. 전화 문의를 이용해 주세요.",
        );
      }

      setStatus("success");
      setMessage("상담 문의가 교수님께 성공적으로 전달되었습니다!");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "전송 중 오류가 발생했습니다. 전화 문의를 이용해 주세요.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 md:space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="이름" name="name" required placeholder="홍길동" />
        <Field
          label="연락처"
          name="phone"
          required
          type="tel"
          placeholder="010-0000-0000"
        />
      </div>
      <Field
        label="이메일"
        name="email"
        required
        type="email"
        placeholder="you@email.com"
      />
      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-600">문의내용</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="입학 전형, 면접, 커리큘럼 등 궁금한 점을 적어주세요."
          className="w-full resize-y rounded-2xl border border-brand/15 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-brand px-6 text-base font-bold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:min-w-48"
      >
        {status === "loading" ? "전송 중…" : "제출하기"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-brand" : "text-accent-deep"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-600">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-brand/15 bg-white px-4 py-3 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
