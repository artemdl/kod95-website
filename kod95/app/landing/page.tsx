import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import LandingQuiz from "@/components/LandingQuiz";
import LandingFAQ from "@/components/LandingFAQ";

export const metadata: Metadata = {
  title: "Получить Код 95 — Узнать Стоимость | KOD 95 ŁÓDŹ",
  description:
    "Узнайте стоимость получения Код 95 за 1 минуту. Ответьте на 4 вопроса и получите точный расчёт. Лицензированная академия в Польше с 2017 года.",
  robots: { index: false, follow: false },
};

/* ─── static data ─── */
const trustStats = [
  { value: "1300+", label: "Водителей обучено" },
  { value: "95%", label: "Сдают с 1-го раза" },
  { value: "0", label: "Претензий от органов" },
];

const safetyPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
    title: "Лицензированная база",
    desc: "Обучение проходит в сертифицированном учебном центре в Польше.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z" />
      </svg>
    ),
    title: "Официальный договор",
    desc: "Заключаем контракт перед началом обучения, где прописаны все обязательства.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Прозрачность",
    desc: "Ваши данные вносятся в государственный реестр Польши и общую базу ЕС.",
  },
];

const whatWeDoPoints = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
    title: "Теория и практика",
    desc: "Обучение на русском или украинском языке — никаких языковых барьеров.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
      </svg>
    ),
    title: "Подготовка к тестам",
    desc: "Разбор актуальных вопросов экзамена, на которых валятся другие.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    title: "Комфорт",
    desc: "Помощь с поиском жилья на период обучения.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#e85d04">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
    title: "Работа",
    desc: "Прямые контакты проверенных транспортных компаний, готовых взять новичка.",
  },
];

const additionalServices = [
  {
    icon: "/icon-chip.webp",
    title: "Чип-карта для тахографа",
    desc: "Оформим электронную карту водителя — обязательный документ для работы на грузовиках.",
  },
  {
    icon: "/icon-license.webp",
    title: "Замена водительских прав",
    desc: "Обменяем национальные права на польские европейского образца.",
  },
  {
    icon: "/icon-jobs.webp",
    title: "Трудоустройство",
    desc: "Помогаем найти работу водителем от 1700 € в месяц.",
  },
];

/* ═══════════════════════════════════════════════════ */

export default function LandingPage() {
  return (
    <>
      {/* ── Minimal sticky header (no full nav) ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Image
              src="/logo.png"
              alt="KOD 95 ŁÓDŹ"
              width={44}
              height={44}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.2rem",
                  color: "#f5f5f0",
                  lineHeight: 1,
                }}
              >
                KOD 95 ŁÓDŹ
              </div>
              <div
                style={{
                  fontSize: "0.55rem",
                  color: "#888",
                  letterSpacing: "0.08em",
                  lineHeight: 1.3,
                }}
              >
                Помогаем получить Код 95 и работать водителем в Европе с 2017
                года
              </div>
            </div>
          </div>
          <a
            href="tel:+48884398836"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.75rem" }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Позвонить
          </a>
        </div>
      </header>

      <main style={{ paddingTop: 72 }}>
        {/* ━━━ SECTION 1 — Hero ━━━ */}
        <section
          style={{
            position: "relative",
            padding: "100px 0 80px",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1c0800 60%, #0a0a0a 100%)",
          }}
        >
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

            <h1
              className="font-display fade-up"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              УЗНАЙ КАК ПОЛУЧИТЬ
              <br />
              <span style={{ color: "#e85d04" }}>КОД 95</span>
            </h1>

            <p
              className="fade-up"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#aaa",
                marginBottom: 48,
                maxWidth: 600,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Без стресса &bull; С гарантией &bull; Без скрытых переплат
            </p>

            <a href="#quiz" className="btn-primary fade-up" style={{ fontSize: "1rem", padding: "18px 44px" }}>
              Узнать стоимость
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

        {/* ━━━ SECTION 2 — Trust stats ━━━ */}
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
                  color: "#888",
                  maxWidth: 600,
                  margin: "0 auto",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                Мы не просто «оформляем бумаги». Мы — сертифицированный учебный
                центр в Польше.
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

        {/* ━━━ SECTION 3 — Safety ━━━ */}
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
                style={{ color: "#888", fontSize: "0.95rem" }}
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
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: "rgba(232,93,4,0.1)",
                      border: "1px solid rgba(232,93,4,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
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

        {/* ━━━ SECTION 4 — Big number ━━━ */}
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
                fontSize: "0.8rem",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 12,
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
                color: "#aaa",
                fontSize: "0.95rem",
                maxWidth: 500,
                margin: "0 auto 36px",
              }}
            >
              Наши ученики работают в ЕС и зарабатывают от 1700&nbsp;€ в месяц
            </p>

            {/* Photo strip */}
            <div
              className="fade-in"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 6,
                maxWidth: 900,
                margin: "0 auto 40px",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {[
                "/students-3.webp",
                "/students-6.webp",
                "/students-11.webp",
                "/students-13.webp",
              ].map((src, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "#1a1a1a",
                  }}
                >
                  <Image
                    src={src}
                    alt="Курсанты KOD 95"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>

            <a href="#quiz" className="btn-primary fade-up">
              Узнать стоимость
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

        {/* ━━━ SECTION 5 — What we do ━━━ */}
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
                        color: "#888",
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

        {/* ━━━ SECTION 6 — Additional services ━━━ */}
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
                  <div style={{ marginBottom: 16 }}>
                    <Image
                      src={s.icon}
                      alt={s.title}
                      width={56}
                      height={56}
                      style={{ objectFit: "contain" }}
                    />
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

        {/* ━━━ SECTION 7 — Contacts mini ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "60px 0" }}>
          <div className="container">
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#e85d04"
                    >
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                  ),
                  label: "Телефон",
                  value: "+48 884 398 836",
                  href: "tel:+48884398836",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#e85d04"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@kod95lodz.com",
                  href: "mailto:info@kod95lodz.com",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#e85d04"
                    >
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
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

        {/* ━━━ SECTION 9 — Trust closing ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "60px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <p
              className="fade-up"
              style={{
                color: "#aaa",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 650,
                margin: "0 auto 32px",
              }}
            >
              Получите официальное подтверждение квалификации в
              сертифицированной автошколе. Мы берём на себя всю бюрократию, пока
              курсанты готовятся к работе.
            </p>
            <a href="#quiz" className="btn-primary fade-up">
              Узнать стоимость
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </section>

        {/* ━━━ SECTION 10 — QUIZ ━━━ */}
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
                ОТВЕТЬТЕ НА <span style={{ color: "#e85d04" }}>4 ВОПРОСА</span>
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
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: 1fr !important; }
          .two-col-landing { grid-template-columns: 1fr !important; }
          #quiz .container { padding: 0 16px !important; }
          section > .container > div[style*="gridTemplateColumns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
