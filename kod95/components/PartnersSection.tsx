export default function PartnersSection() {
  return (
    <section id="team" style={{ background: "#0d0d0d", padding: "80px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
          <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            ПОЧЕМУ <span style={{ color: "#e85d04" }}>МЫ</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#e85d04"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>, title: "Официальная лицензия", text: "Работаем на основании польской лицензии. Все документы признаются в странах ЕС." },
            { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#e85d04"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, title: "Русскоязычные инструкторы", text: "Обучение полностью на русском языке. Никаких языковых барьеров." },
            { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#e85d04"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, title: "Гарантия результата", text: "98% наших курсантов сдают экзамен с первого раза. Сопровождаем до получения документа." },
          ].map((item, i) => (
            <div key={i} className="glass-card glass fade-up" style={{ padding: "32px 28px", borderRadius: 8, animationDelay: `${i * 0.1}s` }}>
              <div style={{ marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#f5f5f0" }}>{item.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
