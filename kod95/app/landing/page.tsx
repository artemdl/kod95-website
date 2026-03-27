import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import LandingQuizModal from "@/components/LandingQuizModal";
import LandingQuiz from "@/components/LandingQuiz";
import LandingFAQ from "@/components/LandingFAQ";

export const metadata: Metadata = {
  title: "Получить Код 95 — Узнать Стоимость | KOD 95 ŁÓDŹ",
  description:
    "Узнайте стоимость получения Код 95 за 1 минуту. Ответьте на 5 вопросов и получите точный расчёт. Лицензированная академия в Польше с 2017 года.",
  robots: { index: false, follow: false },
};

/* ─── static data ─── */
const trustStats = [
  { value: "1700+", label: "Водителей обучено" },
  { value: "95%", label: "Сдают с 1-го раза" },
];

const safetyPoints = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Лицензированная база",
    desc: "Обучение проходит в сертифицированном учебном центре в Польше.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Официальный договор",
    desc: "Заключаем контракт перед началом обучения, где прописаны все обязательства.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Прозрачность",
    desc: "Ваши данные вносятся в государственный реестр Польши и общую базу ЕС.",
  },
];

const whatWeDoPoints = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Теория и практика",
    desc: "Обучение на русском или украинском языке — никаких языковых барьеров.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="10 14 12 16 16 12" />
      </svg>
    ),
    title: "Подготовка к тестам",
    desc: "Разбор актуальных вопросов экзамена, на которых валятся другие.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Комфорт",
    desc: "Помощь с поиском жилья на период обучения.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Работа",
    desc: "Прямые контакты проверенных транспортных компаний, готовых взять новичка.",
  },
];

const additionalServices = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <path d="M7 15h.01M11 15h2" />
      </svg>
    ),
    title: "Чип-карта для тахографа",
    desc: "Оформим электронную карту водителя — обязательный документ для работы на грузовиках.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h6" />
        <circle cx="16" cy="16" r="3" />
        <path d="M18.5 18.5L20 20" />
      </svg>
    ),
    title: "Замена водительских прав",
    desc: "Обменяем национальные права на польские европейского образца.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <path d="M6 12h4M14 12h4" />
      </svg>
    ),
    title: "Трудоустройство",
    desc: "Помогаем найти работу водителем от 1700 € в месяц.",
  },
];

/* ═══════════════════════════════════════════════════ */

export default function LandingPage() {
  return (
    <>
      {/* ── Simple header — no menu ── */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <Image src="/logo.png" alt="KOD 95 ŁÓDŹ" width={40} height={40} style={{ borderRadius: "50%" }} />
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "#f5f5f0", lineHeight: 1 }}>KOD 95 ŁÓDŹ</div>
            </div>
            <div className="landing-tagline" style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.15)" }} />
              <div style={{ lineHeight: 1.3 }}>
                <div style={{ fontSize: "0.72rem", color: "#f5f5f0", fontWeight: 600, letterSpacing: "0.02em" }}>Помогаем получить Код 95</div>
                <div style={{ fontSize: "0.72rem", color: "#f5f5f0", fontWeight: 600, letterSpacing: "0.02em" }}>и работать водителем в Европе</div>
              </div>
            </div>
          </div>
          <a href="tel:+48575633444" className="landing-phone-btn" style={{ height: 44, borderRadius: 10, background: "rgba(232,93,4,0.12)", border: "1px solid rgba(232,93,4,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, textDecoration: "none", gap: 8, padding: "0 16px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <span className="landing-phone-text" style={{ color: "#e85d04", fontSize: "0.78rem", fontWeight: 700 }}>+48 575 633 444</span>
          </a>
        </div>
      </header>

      <main style={{ paddingTop: 68 }}>
        {/* ━━━ SECTION 1 — Hero with truck background ━━━ */}
        <section
          style={{
            position: "relative",
            padding: "100px 0 80px",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1c0800 60%, #0a0a0a 100%)",
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Truck background — using background-image like main hero to avoid black rectangle */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "60%",
              backgroundImage: "url('/truck.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "85% auto",
              backgroundPosition: "right center",
              opacity: 0.25,
              filter: "drop-shadow(0 0 80px rgba(232,93,4,0.3))",
              pointerEvents: "none",
            }}
          />

          {/* Orbs */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(232,93,4,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(232,93,4,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />

          <div
            className="container"
            style={{ position: "relative", zIndex: 2, textAlign: "center" }}
          >
            {/* Badge */}
            <div
              className="glass fade-up"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 18px",
                borderRadius: 4,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#f5f5f0",
                  opacity: 0.85,
                }}
              >
                Набор открыт
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display fade-up"
              style={{
                lineHeight: 1,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
                  color: "#f5f5f0",
                  letterSpacing: "0.15em",
                }}
              >
                УЗНАЙ КАК ПОЛУЧИТЬ
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(4.5rem, 14vw, 11rem)",
                  color: "#ffffff",
                  fontWeight: 900,
                  lineHeight: 0.95,
                }}
              >
                КОД 95
              </span>
            </h1>

            {/* Bullet icons row instead of text */}
            <div
              className="fade-up"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 40,
                marginBottom: 48,
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  ),
                  label: "Гарантия результата",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <polyline points="9 15 11 17 15 13" />
                    </svg>
                  ),
                  label: "Официальный документ ЕС",
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  ),
                  label: "Без скрытых переплат",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  {b.icon}
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#f5f5f0",
                      fontWeight: 600,
                    }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA — animated pulse button, opens quiz modal */}
            <LandingQuizModal />
          </div>
        </section>

        {/* ━━━ SECTION 2 — Trust stats (1700+) ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, marginBottom: 16 }}
              >
                ЛИЦЕНЗИРОВАННАЯ АКАДЕМИЯ
                <br />
                <span style={{ color: "#e85d04" }}>ДЛЯ ВОДИТЕЛЕЙ</span>
              </h2>
              <p
                className="fade-up"
                style={{
                  color: "#f5f5f0",
                  maxWidth: 600,
                  margin: "0 auto",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  fontWeight: 500,
                }}
              >
                Мы не просто «оформляем бумаги». Мы — сертифицированный учебный
                центр в Польше.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 24,
              }}
              className="trust-grid"
            >
              {trustStats.map((s, i) => (
                <div
                  key={i}
                  className="glass-card glass fade-up"
                  style={{
                    textAlign: "center",
                    padding: "36px 24px",
                    borderRadius: 8,
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: "3.5rem",
                      color: "#e85d04",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#aaa",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ SECTION 3 — Safety (bigger icons) ━━━ */}
        <section style={{ background: "#0a0a0a", padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1, marginBottom: 16 }}
              >
                ВАША БЕЗОПАСНОСТЬ —<br />
                <span style={{ color: "#e85d04" }}>НАШ ПРИОРИТЕТ</span>
              </h2>
              <p
                className="fade-up"
                style={{ color: "#ddd", fontSize: "1rem", fontWeight: 500 }}
              >
                Мы работаем официально, чтобы вы могли работать спокойно.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="trust-grid"
            >
              {safetyPoints.map((p, i) => (
                <div
                  key={i}
                  className="glass-card fade-up"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "32px 28px",
                    borderRadius: 8,
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 14,
                      background: "rgba(232,93,4,0.1)",
                      border: "1px solid rgba(232,93,4,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#f5f5f0",
                      marginBottom: 10,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#888",
                      lineHeight: 1.7,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ SECTION 4 — Big number with MORE photos ━━━ */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a0800 0%, #0a0a0a 100%)",
            padding: "80px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(232,93,4,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <p
              className="fade-up"
              style={{
                fontSize: "0.85rem",
                color: "#ccc",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 12,
                fontWeight: 500,
              }}
            >
              С 2017 года выпустили
            </p>
            <div
              className="font-display fade-up"
              style={{
                fontSize: "clamp(4rem, 12vw, 9rem)",
                color: "#e85d04",
                lineHeight: 1,
                marginBottom: 12,
                textShadow: "0 0 60px rgba(232,93,4,0.4)",
              }}
            >
              1700+
            </div>
            <h2
              className="font-display fade-up"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                color: "#f5f5f0",
                marginBottom: 16,
              }}
            >
              ПОЛЬСКИХ СЕРТИФИКАТОВ
            </h2>
            <p
              className="fade-up"
              style={{
                color: "#f5f5f0",
                fontSize: "1rem",
                fontWeight: 500,
                maxWidth: 500,
                margin: "0 auto 36px",
              }}
            >
              Наши ученики работают в ЕС и зарабатывают от 2000&nbsp;€ в месяц
            </p>

            {/* Photo gallery — full grid like main site */}
            <div
              className="fade-in gallery-grid"
              style={{
                maxWidth: 1100,
                margin: "0 auto 40px",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {[
                "/students-3.webp",
                "/students-2.jpg",
                "/students-4.jpg",
                "/students-5.jpg",
                "/students-6.webp",
                "/students-7.jpg",
                "/students-8.jpg",
                "/students-9.jpg",
                "/students-10.jpg",
                "/students-11.webp",
                "/students-12.webp",
                "/students-13.webp",
              ].map((src, i) => (
                <div key={i} className="gallery-item">
                  <Image
                    src={src}
                    alt="Курсанты KOD 95"
                    width={300}
                    height={220}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover", width: "100%", height: "100%", minHeight: 160 }}
                  />
                  <div className="overlay" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quiz CTA after gallery ── */}
        <div style={{ background: "#0a0a0a", padding: "40px 0", textAlign: "center" }}>
          <LandingQuizModal />
        </div>

        {/* ━━━ SECTION 5 — What we do (brighter text) ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
              >
                МЫ НЕ ПРОСТО УЧИМ —<br />
                <span style={{ color: "#e85d04" }}>
                  МЫ ДОВОДИМ ДО РЕЗУЛЬТАТА
                </span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 20,
              }}
              className="two-col-landing"
            >
              {whatWeDoPoints.map((p, i) => (
                <div
                  key={i}
                  className="glass-card fade-up"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "28px 24px",
                    borderRadius: 8,
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 10,
                      background: "rgba(232,93,4,0.1)",
                      border: "1px solid rgba(232,93,4,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#f5f5f0",
                        marginBottom: 6,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#ccc",
                        lineHeight: 1.7,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ SECTION 6 — Additional services (different icon tint) ━━━ */}
        <section style={{ background: "#0a0a0a", padding: "80px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                ДОПОЛНИТЕЛЬНЫЕ{" "}
                <span style={{ color: "#e85d04" }}>УСЛУГИ</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="trust-grid"
            >
              {additionalServices.map((s, i) => (
                <div
                  key={i}
                  className="glass-card fade-up"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "32px 24px",
                    borderRadius: 8,
                    textAlign: "center",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: 14,
                    background: "rgba(232,93,4,0.1)",
                    border: "1px solid rgba(232,93,4,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#f5f5f0",
                      marginBottom: 10,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#888",
                      lineHeight: 1.7,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ SECTION 7 — Contacts with heading ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "60px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
              >
                НАШИ <span style={{ color: "#e85d04" }}>КОНТАКТЫ</span>
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                  ),
                  label: "Телефон",
                  value: "+48 575 633 444",
                  href: "tel:+48575633444",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@kod95lodz.com",
                  href: "mailto:info@kod95lodz.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  ),
                  label: "Адрес",
                  value: "Al. Widzewska 14, Łódź",
                  href: null,
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="fade-up"
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      background: "rgba(232,93,4,0.1)",
                      border: "1px solid rgba(232,93,4,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        style={{
                          color: "#f5f5f0",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "#f5f5f0",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ SECTION 8 — FAQ ━━━ */}
        <section style={{ background: "#0a0a0a", padding: "80px 0" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                ЧАСТЫЕ <span style={{ color: "#e85d04" }}>ВОПРОСЫ</span>
              </h2>
            </div>
            <LandingFAQ />
          </div>
        </section>

        {/* ━━━ SECTION 9 — Closing headline (elegant) ━━━ */}
        <section
          style={{
            background: "linear-gradient(135deg, #0d0d0d 0%, #1a0800 50%, #0d0d0d 100%)",
            padding: "80px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 500,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(232,93,4,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <div
              className="orange-line fade-up"
              style={{ margin: "0 auto 24px" }}
            />
            <h2
              className="font-display fade-up"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
                color: "#f5f5f0",
                lineHeight: 1.3,
                maxWidth: 650,
                margin: "0 auto 12px",
                letterSpacing: "0.04em",
              }}
            >
              ПОЛУЧИТЕ ОФИЦИАЛЬНОЕ
            </h2>
            <h2
              className="font-display fade-up"
              style={{
                fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
                color: "#f5f5f0",
                lineHeight: 1.3,
                maxWidth: 650,
                margin: "0 auto 12px",
                letterSpacing: "0.04em",
              }}
            >
              ПОДТВЕРЖДЕНИЕ КВАЛИФИКАЦИИ
            </h2>
            <h2
              className="font-display fade-up"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                color: "#e85d04",
                lineHeight: 1.3,
                maxWidth: 650,
                margin: "0 auto",
                letterSpacing: "0.04em",
              }}
            >
              В СЕРТИФИЦИРОВАННОЙ АВТОШКОЛЕ
            </h2>
          </div>
        </section>

        {/* ━━━ SECTION 10 — QUIZ (static inline like original) ━━━ */}
        <section
          id="quiz"
          style={{
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a0800 60%, #0a0a0a 100%)",
            padding: "80px 0 100px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 700,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(232,93,4,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="container"
            style={{ position: "relative", zIndex: 1, maxWidth: 700 }}
          >
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div
                className="orange-line fade-up"
                style={{ margin: "0 auto 16px" }}
              />
              <h2
                className="font-display fade-up"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}
              >
                ОТВЕТЬТЕ НА <span style={{ color: "#e85d04" }}>5 ВОПРОСОВ</span>
                <br />И УЗНАЙТЕ СТОИМОСТЬ
              </h2>
              <p
                className="fade-up"
                style={{ color: "#888", fontSize: "0.9rem" }}
              >
                Это займёт меньше минуты
              </p>
            </div>

            <LandingQuiz />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollAnimations />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes ctaPulse {
          0% { box-shadow: 0 0 0 0 rgba(232,93,4,0.6), 0 4px 20px rgba(232,93,4,0.3); transform: scale(1); }
          50% { box-shadow: 0 0 0 14px rgba(232,93,4,0), 0 4px 30px rgba(232,93,4,0.5); transform: scale(1.03); }
          100% { box-shadow: 0 0 0 0 rgba(232,93,4,0), 0 4px 20px rgba(232,93,4,0.3); transform: scale(1); }
        }
        .hero-kod95 {
          -webkit-text-stroke: 2px #e85d04;
          paint-order: stroke fill;
        }
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .two-col-landing { grid-template-columns: 1fr !important; }
          .hero-kod95 { -webkit-text-stroke: 1.5px #e85d04; }
          .landing-tagline { display: none !important; }
          .landing-phone-text { display: none; }
          .landing-phone-btn { width: 44px !important; padding: 0 !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
