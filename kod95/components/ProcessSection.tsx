const steps = [
  { n: "01", title: "Свяжитесь с нами", desc: "Оставьте заявку или позвоните. Бесплатно консультируем и подбираем подходящий курс." },
  { n: "02", title: "Соберите документы", desc: "Паспорт, водительское удостоверение категории C/CE. Поможем разобраться с остальным." },
  { n: "03", title: "Пройдите обучение", desc: "Теория на русском языке, практика на реальном грузовике. 2–5 дней в зависимости от программы." },
  { n: "04", title: "Получите сертификат", desc: "Официальный польский КОД 95 европейского образца. Действителен во всех странах ЕС." },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ background: "#0d0d0d", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.07) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
          <h2 className="font-display fade-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            КАК ЭТО <span style={{ color: "#e85d04" }}>РАБОТАЕТ</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, position: "relative" }}>
          <div style={{ position: "absolute", top: 38, left: "12.5%", width: "75%", height: 1, background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.3), transparent)", pointerEvents: "none" }} className="connector-line" />

          {steps.map((s, i) => (
            <div key={i} className="glass-card fade-up" style={{ padding: "32px 24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", animationDelay: `${i * 0.12}s`, position: "relative" }}>
              {/* Big visible step number */}
              <div style={{ 
                fontFamily: "'Bebas Neue', sans-serif", 
                fontSize: "4.5rem", 
                lineHeight: 1, 
                color: "#e85d04",
                opacity: 0.9,
                marginBottom: 16,
                textShadow: "0 0 30px rgba(232,93,4,0.4)"
              }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#f5f5f0" }}>{s.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ textAlign: "center", marginTop: 56 }}>
          <div className="glass-orange" style={{ display: "inline-block", padding: "28px 48px", borderRadius: 8 }}>
            <p style={{ fontSize: "1.1rem", marginBottom: 20, color: "#f5f5f0" }}>
              Готовы начать? Курсы стартуют <strong style={{ color: "#e85d04" }}>каждый месяц</strong>
            </p>
            <a href="#contact" className="btn-primary">Записаться сейчас</a>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .connector-line { display: none; } }`}</style>
    </section>
  );
}
