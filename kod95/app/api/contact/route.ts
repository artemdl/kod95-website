import { NextResponse } from "next/server";

const TG_TOKEN = "8196874233:AAHI-6No9bLY8qrTzo-yiy5tE6ZRQtZAybw";
const TG_CHAT_ID = "-1002582201985";
const WEB3FORMS_KEY = "8a28feac-b2de-4541-be8d-c5c2d7537083";

export async function POST(req: Request) {
  try {
    const { name, phone, category, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 });
    }

    const now = new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" });

    // ── Telegram ──
    const tgText = [
      `🔔 *Новая заявка с сайта!*`,
      ``,
      `👤 *Имя:* ${name}`,
      `📞 *Телефон:* ${phone}`,
      category ? `🚛 *Категория:* ${category}` : null,
      message ? `💬 *Сообщение:* ${message}` : null,
      ``,
      `🕐 ${now}`,
      `🌐 kod95lodz.com`,
    ].filter(Boolean).join("\n");

    const tgRes = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: tgText,
        parse_mode: "Markdown",
      }),
    });

    // ── Email via Web3Forms ──
    const emailRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Новая заявка — ${name} | KOD 95`,
        from_name: "KOD 95 Website",
        name,
        phone,
        category: category || "не указана",
        message: message || "нет",
        time: now,
      }),
    });

    if (!tgRes.ok) {
      console.error("Telegram error:", await tgRes.text());
    }
    if (!emailRes.ok) {
      console.error("Email error:", await emailRes.text());
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
