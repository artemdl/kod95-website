"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", category: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(232,93,4,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Left */}
          <div>
            <div className="orange-line fade-up" />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, marginBottom: 24 }}>
              ПОЛУЧИТЕ БЕСПЛАТНУЮ<br /><span style={{ color: "#e85d04" }}>КОНСУЛЬТАЦИЮ</span>
            </h2>
            <p className="fade-up" style={{ color: "#888", lineHeight: 1.8, marginBottom: 40, fontSize: "0.95rem" }}>
              Оставьте заявку и мы свяжемся с вами в течение часа. Бесплатно расскажем о программе и стоимости обучения.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>, label: "Телефон", value: "+48 575 633 444", href: "tel:+48575633444" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, label: "Email", value: "info@kod95lodz.com", href: "mailto:info@kod95lodz.com" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, label: "Адрес", value: "Al. Widzewska 14, Łódź, Poland", href: null },
              ].map((c, i) => (
                <div key={i} className="fade-up" style={{ display: "flex", alignItems: "center", gap: 16, animationDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(232,93,4,0.1)", border: "1px solid rgba(232,93,4,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ color: "#f5f5f0", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>{c.value}</a>
                    ) : (
                      <div style={{ color: "#f5f5f0", fontSize: "0.9rem", fontWeight: 500 }}>{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Working hours */}
            <div className="glass fade-up" style={{ marginTop: 32, padding: "20px 24px", borderRadius: 8 }}>
              <div style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Часы работы</div>
              <div style={{ display: "flex", justifyContent: "space-between", color: "#f5f5f0", fontSize: "0.9rem" }}>
                <span>Пн — Пт</span>
                <span style={{ color: "#e85d04", fontWeight: 600 }}>09:00 — 19:00</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card fade-in" style={{ padding: "40px 36px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(232,93,4,0.15)", border: "1px solid rgba(232,93,4,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#e85d04"><polyline points="20 6 9 17 4 12" stroke="#e85d04" strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
                </div>
                <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: 12 }}>ЗАЯВКА ОТПРАВЛЕНА</h3>
                <p style={{ color: "#888", fontSize: "0.9rem" }}>Мы свяжемся с вами в течение часа</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display" style={{ fontSize: "1.6rem", marginBottom: 28 }}>ОСТАВИТЬ ЗАЯВКУ</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Ваше имя *</label>
                    <input className="contact-input" type="text" required placeholder="Имя и фамилия"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Телефон *</label>
                    <input className="contact-input" type="tel" required placeholder="+48 000 000 000"
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Категория прав</label>
                    <select className="contact-input" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                      <option value="">Выберите категорию</option>
                      <option value="C">Категория C (грузовые)</option>
                      <option value="CE">Категория CE (с прицепом)</option>
                      <option value="D">Категория D (автобусы)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>Сообщение</label>
                    <textarea className="contact-input" rows={3} placeholder="Ваш вопрос..."
                      value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      style={{ resize: "none" }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                    Отправить заявку
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
