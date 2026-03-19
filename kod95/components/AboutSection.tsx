import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" style={{ background: "#0d0d0d" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
          {/* Left: Card image — no badge */}
          <div className="fade-in" style={{ position: "relative" }}>
            <div style={{ position: "relative", zIndex: 2 }}>
              <div className="glass-card glass" style={{ padding: 6, borderRadius: 12 }}>
                <Image src="/card95.webp" alt="Карта квалификации водителя КОД 95" width={600} height={400}
                  style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
              </div>
            </div>
            <div style={{ position: "absolute", top: "30%", left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
          </div>

          {/* Right: Content */}
          <div>
            <div className="orange-line fade-up" />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, marginBottom: 24 }}>
              ЧТО ТАКОЕ<br /><span style={{ color: "#e85d04" }}>КОД 95?</span>
            </h2>
            <p className="fade-up" style={{ color: "#aaa", lineHeight: 1.8, marginBottom: 20, fontSize: "0.95rem" }}>
              Код 95 — обязательный европейский сертификат для профессиональных водителей категорий C и D. Без него нельзя легально работать водителем в странах ЕС.
            </p>
            <p className="fade-up" style={{ color: "#aaa", lineHeight: 1.8, marginBottom: 36, fontSize: "0.95rem" }}>
              Мы предлагаем курсы Код 95 для категорий <strong style={{ color: "#f5f5f0" }}>C и D</strong> — как короткий, так и полный курс. По окончании вы получаете <strong style={{ color: "#f5f5f0" }}>официальный польский документ европейского образца</strong>, признанный во всех странах Евросоюза.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
              {[
                "Обучение на русском языке",
                "Официальный документ ЕС",
                "Категории C и D",
                "Короткий и полный курс",
              ].map((item, i) => (
                <div key={i} className="fade-up" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/>
                    <polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontSize: "0.85rem", color: "#ccc" }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="/uslugi" className="btn-primary fade-up">
              Все услуги
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
