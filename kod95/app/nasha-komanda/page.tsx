import type { Metadata } from "next";
import Image from "next/image";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Наша команда | KOD 95 ŁÓDŹ",
  description: "Познакомьтесь с командой KOD 95 ŁÓDŹ — профессионалы с многолетним опытом в подготовке водителей-международников.",
};

const team = [
  {
    img: "/team-4.jpg",
    name: "Томек",
    role: "Сооснователь / Главный инструктор",
    desc: "Практикующий инструктор с многолетним опытом. Лично проводит обучение и готовит каждого курсанта к успешной сдаче экзамена.",
    founder: true,
  },
  {
    img: "/team-1.jpg",
    name: "Виола",
    role: "Сооснователь / Заместитель директора",
    desc: "Отвечает за административные вопросы и организацию работы школы. Следит за тем, чтобы каждый курсант получил максимальный комфорт и поддержку.",
    founder: true,
  },
  {
    img: "/team-5.jpg",
    name: "Артём",
    role: "Сооснователь / CEO",
    desc: "Руководит развитием проекта и стратегическими вопросами. Строит партнёрства и открывает новые возможности для курсантов.",
    founder: true,
  },
  {
    img: "/team-2.jpg",
    name: "Ольга",
    role: "Менеджер по работе с курсантами",
    desc: "Сопровождает курсантов на каждом этапе — от первого звонка до получения сертификата. Всегда на связи и готова помочь.",
    founder: false,
  },
  {
    img: "/team-3.jpg",
    name: "Евгения",
    role: "Менеджер по работе с курсантами",
    desc: "Помогает курсантам с организационными вопросами, документами и подготовкой к обучению. Сделает процесс максимально простым.",
    founder: false,
  },
];

export default function NashaKomanda() {
  return (
    <>
      <NavClient />
      <main style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>

        {/* Hero header */}
        <div style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0800 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "40%", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(232,93,4,0.08) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", color: "#f5f5f0", lineHeight: 1, marginBottom: 16 }}>
              НАША <span style={{ color: "#e85d04" }}>КОМАНДА</span>
            </h1>
            <p style={{ color: "#888", fontSize: "1rem", maxWidth: 520 }}>
              Люди, которые каждый день помогают водителям получить Код 95 и начать работать в Европе
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "70px 24px 80px" }}>

          {/* Founders - big cards */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 32, height: 2, background: "#e85d04" }} />
              <span style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.15em" }}>Основатели</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="founders-grid">
              {team.filter(m => m.founder).map((member, i) => (
                <div key={i} className="fade-up glass-card"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", animationDelay: `${i * 0.12}s` }}>
                  {/* Photo */}
                  <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                    <Image src={member.img} alt={member.name} fill
                      style={{ objectFit: "cover", objectPosition: "50% 15%" }}
                      sizes="(max-width: 768px) 100vw, 33vw" />
                    {/* Gradient overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)" }} />
                    {/* Founder badge */}
                    <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(232,93,4,0.9)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: 4 }}>
                      <span style={{ fontSize: "0.65rem", color: "#fff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Основатель</span>
                    </div>
                    {/* Name on photo */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
                      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 4 }}>{member.name}</h2>
                      <p style={{ fontSize: "0.75rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.1em" }}>{member.role}</p>
                    </div>
                  </div>
                  {/* Description */}
                  <div style={{ padding: "20px 24px" }}>
                    <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", margin: "48px 0" }} />

          {/* Managers - smaller cards */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 32, height: 2, background: "#888" }} />
              <span style={{ fontSize: "0.72rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em" }}>Команда</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 700 }} className="managers-grid">
              {team.filter(m => !m.founder).map((member, i) => (
                <div key={i} className="fade-up glass-card"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", display: "flex", gap: 0, flexDirection: "column", animationDelay: `${i * 0.12}s` }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    <Image src={member.img} alt={member.name} fill
                      style={{ objectFit: "cover", objectPosition: "50% 15%" }}
                      sizes="(max-width: 768px) 100vw, 350px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 2 }}>{member.name}</h3>
                      <p style={{ fontSize: "0.7rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.1em" }}>{member.role}</p>
                    </div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontSize: "0.82rem", color: "#888", lineHeight: 1.7 }}>{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="fade-up" style={{ textAlign: "center", marginTop: 72 }}>
            <div className="glass-orange" style={{ display: "inline-block", padding: "32px 56px", borderRadius: 8 }}>
              <p style={{ fontSize: "1.1rem", marginBottom: 8, color: "#f5f5f0" }}>Готовы работать с нашей командой?</p>
              <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: 24 }}>Свяжитесь с нами — ответим на все вопросы</p>
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
        @media (max-width: 900px) { .founders-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .managers-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
