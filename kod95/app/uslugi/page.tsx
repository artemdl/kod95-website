import type { Metadata } from "next";
import Image from "next/image";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Услуги | KOD 95 ŁÓDŹ",
  description: "Все услуги KOD 95 ŁÓDŹ: Код 95 для категорий C и D, замена прав, чип-карта для тахографа, трудоустройство.",
};

const services = [
  {
    id: "kod95-c",
    icon: "/icon-adr.webp",
    title: "Код 95 — Категория C",
    subtitle: "Грузовые автомобили",
    desc: "Обязательный сертификат для водителей грузовых автомобилей свыше 3,5 тонны. Без Кода 95 категории C работать дальнобойщиком в Европе невозможно.",
    features: [
      "Короткий курс — от 35 часов (для опытных водителей)",
      "Полный курс — 140 часов (первичное получение)",
      "Обучение на русском языке",
      "Официальный экзамен в центре WORD",
      "Польский документ европейского образца",
    ],
    color: "#e85d04",
  },
  {
    id: "kod95-d",
    icon: "/icon-adr.webp",
    title: "Код 95 — Категория D",
    subtitle: "Пассажирские автобусы",
    desc: "Сертификат для водителей автобусов и пассажирского транспорта. Открывает возможность работать в европейских транспортных компаниях.",
    features: [
      "Короткий курс — от 35 часов",
      "Полный курс — 140 часов",
      "Теория и практика вождения",
      "Помощь в подготовке к экзамену",
      "Сертификат действителен по всему ЕС",
    ],
    color: "#e85d04",
  },
  {
    id: "chip-card",
    icon: "/icon-chip.webp",
    title: "Чип-карта для тахографа",
    subtitle: "Электронная карта водителя",
    desc: "Электронная карта водителя — обязательный документ для работы на грузовых и пассажирских транспортных средствах, оборудованных цифровым тахографом.",
    features: [
      "Оформление документов под ключ",
      "Помощь с подачей заявления",
      "Сопровождение до получения карты",
      "Действует 5 лет",
      "Признаётся во всех странах ЕС",
    ],
    color: "#f48c06",
  },
  {
    id: "license",
    icon: "/icon-license.webp",
    title: "Замена водительских прав",
    subtitle: "Обмен на европейские права",
    desc: "Замените свои национальные водительские права на польские европейского образца. Мы подскажем какие документы нужны и ускорим процесс.",
    features: [
      "Консультация по необходимым документам",
      "Помощь с переводом документов",
      "Сопровождение процедуры обмена",
      "Права категорий C, CE, D",
      "Польские права действуют по всему ЕС",
    ],
    color: "#f48c06",
  },
  {
    id: "jobs",
    icon: "/icon-jobs.webp",
    title: "Трудоустройство",
    subtitle: "Помощь в поиске работы",
    desc: "После получения Кода 95 помогаем найти работу водителем в европейских компаниях. Наши партнёры предлагают вакансии с достойной зарплатой.",
    features: [
      "База вакансий у партнёрских компаний",
      "Зарплата от 1700 € в месяц",
      "Работа в странах ЕС",
      "Помощь с оформлением трудового договора",
      "Поддержка на начальном этапе работы",
    ],
    color: "#22c55e",
  },
];

export default function UslugiPage() {
  return (
    <>
      <NavClient />
      <main style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0800 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "30%", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(232,93,4,0.08) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#f5f5f0", lineHeight: 1, marginBottom: 16 }}>
              НАШИ <span style={{ color: "#e85d04" }}>УСЛУГИ</span>
            </h1>
            <p style={{ color: "#888", fontSize: "1rem", maxWidth: 500 }}>
              Полное сопровождение — от обучения до трудоустройства в Европе
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="container" style={{ padding: "60px 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {services.map((s, i) => (
              <div key={s.id} id={s.id} className="fade-up glass-card"
                style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", padding: "48px 40px", animationDelay: `${i * 0.1}s` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="service-detail-grid">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                      <div style={{ width: 56, height: 56, borderRadius: 12, background: `rgba(232,93,4,0.1)`, border: `1px solid rgba(232,93,4,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Image src={s.icon} alt={s.title} width={32} height={32} style={{ objectFit: "contain" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.7rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>{s.subtitle}</div>
                        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#f5f5f0", letterSpacing: "0.03em" }}>{s.title}</h2>
                      </div>
                    </div>
                    <p style={{ color: "#999", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 28 }}>{s.desc}</p>
                    <a href="/#contact" className="btn-primary" style={{ fontSize: "0.8rem", padding: "12px 28px" }}>
                      Записаться
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Что включено:</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {s.features.map((f, fi) => (
                        <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                            <circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/>
                            <polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span style={{ fontSize: "0.88rem", color: "#bbb", lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="fade-up" style={{ textAlign: "center", marginTop: 64 }}>
            <div className="glass-orange" style={{ display: "inline-block", padding: "32px 56px", borderRadius: 8 }}>
              <p style={{ fontSize: "1.1rem", marginBottom: 8, color: "#f5f5f0" }}>Остались вопросы?</p>
              <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: 24 }}>Позвоните или напишите — ответим в течение часа</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="tel:+48884398836" className="btn-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                  Позвонить
                </a>
                <a href="/#contact" className="btn-outline">Написать нам</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollAnimations />
      <style>{`
        @media (max-width: 768px) {
          .service-detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
}
