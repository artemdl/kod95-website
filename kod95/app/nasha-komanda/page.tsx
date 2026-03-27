import type { Metadata } from "next";
import Image from "next/image";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Наша команда — Преподаватели и менеджеры",
  description: "Познакомьтесь с командой KOD 95 ŁÓDŹ — сертифицированные инструкторы и менеджеры с многолетним опытом подготовки водителей-международников. Обучение на русском и украинском.",
  keywords: ["команда kod 95", "инструкторы код 95", "преподаватели код 95 лодзь", "обучение водителей на русском"],
  alternates: { canonical: "https://kod95lodz.com/nasha-komanda" },
  openGraph: {
    title: "Наша команда — KOD 95 ŁÓDŹ",
    description: "Профессиональная команда инструкторов и менеджеров для подготовки водителей.",
    url: "https://kod95lodz.com/nasha-komanda",
  },
};

const managers = [
  { img: "/team-2.jpg", name: "Ольга", role: "Менеджер по работе с курсантами", desc: "Сопровождает курсантов на каждом этапе — от первого звонка до получения сертификата. Всегда на связи и готова помочь." },
  { img: "/team-3.jpg", name: "Евгения", role: "Менеджер по работе с курсантами", desc: "Помогает курсантам с организационными вопросами, документами и подготовкой к обучению. Сделает процесс максимально простым." },
];

const teachers = [
  { img: "/team-4.jpg", name: "Томек", role: "Сооснователь / Главный инструктор", desc: "Практикующий инструктор с многолетним опытом. Лично проводит обучение и готовит каждого курсанта к успешной сдаче экзамена." },
  { img: "/team-7.jpg", name: "Магда", role: "Преподаватель", desc: "Ведёт теоретическую подготовку курсантов. Доступно объясняет материал и помогает разобраться в сложных темах." },
  { img: "/team-5.jpg", name: "Артём", role: "Сооснователь / CEO", desc: "Руководит развитием проекта и стратегическими вопросами. Строит партнёрства и открывает новые возможности для курсантов." },
  { img: "/team-1.jpg", name: "Виола", role: "Сооснователь / Зам. директора", desc: "Отвечает за административные вопросы и организацию работы школы. Следит за тем, чтобы каждый курсант получил максимальный комфорт и поддержку." },
];

const marketing = [
  { img: "/team-6.webp", name: "Дмитрий", role: "Маркетолог", desc: "Отвечает за продвижение и узнаваемость школы. Помогает будущим курсантам узнать о наших курсах и возможностях." },
];

/* Reusable card component */
function TeamCard({ member, i }: { member: { img: string; name: string; role: string; desc: string }; i: number }) {
  return (
    <div className="fade-up glass-card"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", animationDelay: `${i * 0.1}s` }}>
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        <Image src={member.img} alt={member.name} fill
          style={{ objectFit: "cover", objectPosition: "50% 15%" }}
          sizes="(max-width: 768px) 100vw, 300px" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 4 }}>{member.name}</h2>
          <p style={{ fontSize: "0.7rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.1em" }}>{member.role}</p>
        </div>
      </div>
      <div style={{ padding: "20px 24px" }}>
        <p style={{ fontSize: "0.85rem", color: "#ccc", lineHeight: 1.7 }}>{member.desc}</p>
      </div>
    </div>
  );
}

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
              НАША <span style={{ color: "#f5f5f0" }}>КОМАНДА</span>
            </h1>
            <p style={{ color: "#ddd", fontSize: "1rem", maxWidth: 520 }}>
              Люди, которые каждый день помогают водителям получить Код 95 и начать работать в Европе
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "70px 24px 80px" }}>

          {/* ── Менеджеры ── */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "#e85d04" }} />
              <span style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.15em" }}>Менеджеры</span>
            </div>
            <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 28, maxWidth: 600 }}>
              Сопровождают курсантов на каждом этапе — от первого звонка до получения сертификата. Всегда на связи и готовы помочь с любым вопросом.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="team-grid-4">
              {managers.map((m, i) => (
                <div key={m.name} className="fade-up" style={{ overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", animationDelay: `${i * 0.1}s` }}>
                  <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                    <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "50% 15%" }} sizes="(max-width: 768px) 50vw, 200px" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px" }}>
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 2 }}>{m.name}</h3>
                      <p style={{ fontSize: "0.65rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", margin: "0 0 56px" }} />

          {/* ── Преподаватели ── */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 32, height: 2, background: "#e85d04" }} />
              <span style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.15em" }}>Преподаватели</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="team-grid-4">
              {teachers.map((m, i) => <TeamCard key={m.name} member={m} i={i} />)}
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", margin: "0 0 56px" }} />

          {/* ── Отдел маркетинга ── */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 32, height: 2, background: "#e85d04" }} />
              <span style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.15em" }}>Отдел маркетинга</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="team-grid-4">
              {marketing.map((m, i) => <TeamCard key={m.name} member={m} i={i} />)}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="fade-up" style={{ textAlign: "center", marginTop: 72 }}>
            <div className="glass-orange" style={{ display: "inline-block", padding: "32px 56px", borderRadius: 8 }}>
              <p style={{ fontSize: "1.4rem", marginBottom: 8, color: "#f5f5f0", fontWeight: 600 }}>Готовы работать с нашей командой?</p>
              <p style={{ fontSize: "1rem", color: "#ddd", marginBottom: 24 }}>Свяжитесь с нами — ответим на все вопросы</p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="tel:+48575633444" className="btn-primary">
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
        @media (max-width: 900px) { .team-grid-4 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .team-grid-2 { grid-template-columns: 1fr !important; } .team-grid-4 { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
