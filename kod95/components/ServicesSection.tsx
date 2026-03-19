import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "kod95-c",
    img: "/icon-adr.webp",
    title: "Код 95 — Категория C и D",
    desc: "Короткий и полный курс. Официальный польский документ европейского образца для работы водителем по всему ЕС.",
  },
  {
    id: "chip-card",
    img: "/icon-chip.webp",
    title: "Чип-карта для тахографа",
    desc: "Электронная карта водителя — обязательный документ для работы на грузовых автомобилях в Европе. Оформим быстро.",
  },
  {
    id: "license",
    img: "/icon-license.webp",
    title: "Замена водительских прав",
    desc: "Замените национальные права на польские европейского образца. Подскажем документы и ускорим процесс.",
  },
  {
    id: "jobs",
    img: "/icon-jobs.webp",
    title: "Трудоустройство",
    desc: "После получения Код 95 помогаем найти работу. Партнёрские вакансии для водителей — от 1700 € в месяц.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "#0a0a0a" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
          <h2 className="font-display fade-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            НАШИ <span style={{ color: "#e85d04" }}>УСЛУГИ</span>
          </h2>
          <p className="fade-up" style={{ color: "#888", maxWidth: 500, margin: "16px auto 0", fontSize: "0.9rem" }}>
            Комплексное сопровождение от документов до трудоустройства
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "rgba(255,255,255,0.05)" }}>
          {services.map((s, i) => (
            <div key={i} className="service-card glass-card fade-up" style={{ background: "#0d0d0d", animationDelay: `${i * 0.1}s` }}>
              <div style={{ marginBottom: 20 }}>
                <Image src={s.img} alt={s.title} width={64} height={64} style={{ objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "#f5f5f0" }}>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{s.desc}</p>
              <Link href={`/uslugi#${s.id}`} style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: "#e85d04", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", transition: "gap 0.2s" }}
                className="learn-more-link">
                Узнать подробнее
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/uslugi" className="btn-outline">
            Все услуги подробно
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
      <style>{`.learn-more-link:hover { gap: 10px !important; }`}</style>
    </section>
  );
}
