import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1c0800 60%, #0a0a0a 100%)",
    }}>
      {/* Orbs */}
      <div style={{ position: "absolute", top: "20%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,93,4,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      {/* TRUCK — using background-image for precise positioning control */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "60%",
        backgroundImage: "url('/truck.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "90% auto",
        backgroundPosition: "right 20%",   /* right edge, 20% from top */
        opacity: 0.92,
        filter: "drop-shadow(0 0 80px rgba(232,93,4,0.25))",
        animation: "float 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "46%", minWidth: 300 }}>
          {/* Badge */}
          <div className="glass fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5f5f0", opacity: 0.85 }}>Работаем с 2017 года</span>
          </div>

          <h1 className="font-display fade-up" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1, marginBottom: 10, animationDelay: "0.1s" }}>
            ПОЛУЧИТЬ<br />
            <span style={{ color: "#e85d04" }}>КОД 95</span>
          </h1>
          <h2 className="font-display fade-up" style={{ fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)", lineHeight: 1.1, marginBottom: 28, color: "#aaa", animationDelay: "0.2s" }}>
            И РАБОТАТЬ ВОДИТЕЛЕМ<br />В ЕВРОПЕ
          </h2>

          <p className="fade-up" style={{ fontSize: "0.95rem", color: "#aaa", lineHeight: 1.7, marginBottom: 40, animationDelay: "0.3s" }}>
            Профессиональное обучение на польский сертификат водителя европейского образца. Выпустили более <strong style={{ color: "#f5f5f0" }}>1700 сертификатов</strong>.
          </p>

          <div className="fade-up" style={{ display: "flex", gap: 16, flexWrap: "wrap", animationDelay: "0.4s" }}>
            <a href="#contact" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Записаться на курс
            </a>
            <a href="#about" className="btn-outline">
              Узнать больше
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up" style={{ display: "flex", gap: 32, marginTop: 48, animationDelay: "0.5s" }}>
            {[
              { num: "1700+", label: "Сертификатов" },
              { num: "7+", label: "Лет опыта" },
              { num: "98%", label: "Сдают с первого раза" },
            ].map(b => (
              <div key={b.num} style={{ textAlign: "center" }}>
                <div className="font-display" style={{ fontSize: "1.8rem", color: "#e85d04" }}>{b.num}</div>
                <div style={{ fontSize: "0.7rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.1em" }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 900px) {
          #home > div[style*="backgroundImage"] { opacity: 0.15 !important; width: 100% !important; }
          #home .container > div { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
