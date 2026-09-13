import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "모든 항목을 입력해 주세요." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "이메일 형식이 올바르지 않습니다." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "서버 메일 설정이 없습니다. RESEND_API_KEY / CONTACT_TO_EMAIL을 확인해 주세요.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[영상자율전공학과 입학상담] ${name}님 문의`,
      text: [
        "영상자율전공학과 입학 상담 문의가 도착했습니다.",
        "",
        `이름: ${name}`,
        `연락처: ${phone}`,
        `이메일: ${email}`,
        "",
        "질문 내용:",
        message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "메일 전송에 실패했습니다." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "요청을 처리할 수 없습니다." },
      { status: 500 },
    );
  }
}
