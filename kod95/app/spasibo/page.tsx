import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Спасибо за заявку! | KOD 95 ŁÓDŹ",
  description: "Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
  robots: { index: false, follow: false },
};

export default function SpasiboPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1c0800 60%, #0a0a0a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div style={{ position: "absolute", top: "20%", left: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,93,4,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 560 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 48 }}>
          <Image src="/logo.png" alt="KOD 95 ŁÓDŹ" width={48} height={48} style={{ borderRadius: "50%" }} />
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#f5f5f0", lineHeight: 1 }}>KOD 95 ŁÓDŹ</div>
            <div style={{ fontSize: "0.62rem", color: "#e85d04", letterSpacing: "0.15em", textTransform: "uppercase" }}>kod95lodz.com</div>
          </div>
        </div>

        {/* Success icon */}
        <div style={{
          width: 100, height: 100, borderRadius: "50%",
          background: "rgba(34,197,94,0.12)",
          border: "2px solid rgba(34,197,94,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 32px",
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          color: "#f5f5f0",
          lineHeight: 1,
          marginBottom: 16,
          letterSpacing: "0.04em",
        }}>
          СПАСИБО ЗА <span style={{ color: "#e85d04" }}>ЗАЯВКУ!</span>
        </h1>

        <p style={{ color: "#ccc", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 12, fontWeight: 500 }}>
          Ваши данные успешно приняты.
        </p>
        <p style={{ color: "#999", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 48 }}>
          Наш эксперт свяжется с Вами в ближайшее время и предоставит полную информацию о получении Кода 95.
        </p>

        {/* Contact info */}
        <div style={{
          background: "#161616",
          border: "1px solid rgba(232,93,4,0.2)",
          borderRadius: 12,
          padding: "24px 32px",
          marginBottom: 40,
        }}>
          <p style={{ fontSize: "0.78rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Или свяжитесь с нами сами</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <a href="tel:+48575633444" style={{ color: "#f5f5f0", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#e85d04"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              +48 575 633 444
            </a>
            <a href="https://wa.me/48575633444" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://t.me/kod95lodz" target="_blank" rel="noopener noreferrer" style={{ color: "#2AABEE", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>
          </div>
        </div>

        {/* CTA button */}
        <Link href="/" className="btn-primary" style={{ fontSize: "0.95rem", padding: "18px 48px" }}>
          Вернуться на главную
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>
    </div>
  );
}
