import Image from "next/image";
import Link from "next/link";
import NavClient from "@/components/NavClient";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

/* ─── CTA reusable ─── */
function CTAButton() {
  return (
    <a href="#contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: "0.85rem", textAlign: "center" }}>
      Получить бесплатную консультацию
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>
  );
}

/* ─── Team data ─── */
const team = [
  { img: "/team-4.jpg", name: "Томек", role: "Сооснователь / Главный инструктор" },
  { img: "/team-1.jpg", name: "Виола", role: "Сооснователь / Заместитель директора" },
  { img: "/team-5.jpg", name: "Артём", role: "Сооснователь / CEO" },
  { img: "/team-2.jpg", name: "Ольга", role: "Менеджер по работе с курсантами" },
  { img: "/team-3.jpg", name: "Евгения", role: "Менеджер по работе с курсантами" },
  { img: "/team-6.webp", name: "Дмитрий", role: "Маркетолог" },
];

export default function Home() {
  return (
    <>
      <NavClient />
      <main>

        {/* ━━━ 1. HERO ━━━ */}
        <section id="home" style={{
          position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1c0800 60%, #0a0a0a 100%)",
        }}>
          {/* Orb */}
          <div style={{ position: "absolute", top: "20%", left: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.18) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
          {/* Grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,93,4,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 1 }} />
          {/* Truck — full background, dimmed */}
          <div style={{ position: "absolute", right: "-5%", top: 0, bottom: 0, width: "70%", backgroundImage: "url('/truck.webp')", backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right center", opacity: 0.18, filter: "brightness(1.2)", pointerEvents: "none" }} />
          {/* Left darkening gradient over truck */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0a0a0a 35%, rgba(10,10,10,0.6) 60%, transparent 100%)", pointerEvents: "none", zIndex: 1 }} />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: 700 }}>
              {/* Badge */}
              <div className="glass fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px", borderRadius: 4, marginBottom: 28 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5f5f0", opacity: 0.85 }}>Работаем с 2017 года</span>
              </div>

              <h1 className="font-display fade-up" style={{ lineHeight: 1.1, marginBottom: 24 }}>
                <span style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>ПОЛУЧИ </span>
                <span className="hero-kod" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", color: "#fff", textShadow: "0 0 20px rgba(232,93,4,0.7), 0 0 40px rgba(232,93,4,0.4), inset 0 0 10px rgba(232,93,4,0.3)", WebkitTextStroke: "1px #e85d04", paintOrder: "stroke fill" as never }}>КОД 95</span>
                <br />
                <span style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>в г.Лодзь</span>
              </h1>
              <p className="fade-up" style={{ fontSize: "1.3rem", color: "#f5f5f0", lineHeight: 1.7, marginBottom: 32, maxWidth: 550, fontWeight: 600 }}>
                с гарантией допуска к работе в ЕС
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  "Обучение на украинском / русском / английском",
                  "Под ключ без лишней бюрократии",
                  "Подходит для работы по всей Европе",
                  "Работаем по всей Польше",
                  "Возможность обучаться онлайн",
                ].map((item, i) => (
                  <div key={i} className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, animationDelay: `${0.2 + i * 0.1}s` }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/><polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontSize: "1.05rem", color: "#f5f5f0", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="fade-up" style={{ animationDelay: "0.5s" }}>
                <CTAButton />
              </div>
            </div>
          </div>

          <style>{`
            @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
            @media (max-width: 900px) {
              #home .container > div { max-width: 100% !important; }
            }
          `}</style>
        </section>


        {/* ━━━ 2. ЭТО ДЛЯ ВАС, ЕСЛИ... ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                ЭТО ДЛЯ ВАС, <span style={{ color: "#e85d04" }}>ЕСЛИ...</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></svg>, text: "У вас есть права категории C / CE" },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: "Хотите работать водителем в ЕС" },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, text: "Работодатель требует Код 95" },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Срок Код 95 закончился" },
              ].map((item, i) => (
                <div key={i} className="glass-card fade-up" style={{
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                  padding: "28px 24px", borderRadius: 8, display: "flex", gap: 16, alignItems: "center",
                  animationDelay: `${i * 0.1}s`,
                }}>
                  <div style={{ width: 52, height: 52, borderRadius: 10, background: "rgba(232,93,4,0.1)", border: "1px solid rgba(232,93,4,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "#ddd", lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ━━━ 3. СИСТЕМА ━━━ */}
        <section style={{ background: "#0a0a0a", padding: "100px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,93,4,0.07) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
                МЫ С 2017 ГОДА ВЫСТРОИЛИ <span style={{ color: "#e85d04" }}>СИСТЕМУ</span>
              </h2>
              <p className="fade-up" style={{ color: "#f5f5f0", marginTop: 16, fontSize: "0.95rem" }}>где вы:</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {[
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: "Чётко понимаете каждый шаг", desc: "Прозрачный процесс без сюрпризов — вы всегда знаете что происходит." },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "Не теряете время", desc: "Оптимизированный процесс — минимум бюрократии, максимум результата." },
                { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: "Получаете результат без стресса", desc: "Мы берём на себя организацию — вам остаётся только учиться." },
              ].map((item, i) => (
                <div key={i} className="glass-card glass fade-up" style={{ padding: "32px 28px", borderRadius: 8, animationDelay: `${i * 0.1}s` }}>
                  <div style={{ marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#f5f5f0" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ━━━ 4. КАК ВСЁ ПРОХОДИТ ━━━ */}
        <section id="process" style={{ background: "#0d0d0d", padding: "100px 0", position: "relative", overflow: "hidden" }}>
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                КАК ВСЁ <span style={{ color: "#e85d04" }}>ПРОХОДИТ</span>
              </h2>
              <p className="fade-up" style={{ color: "#f5f5f0", marginTop: 12, fontSize: "0.95rem" }}>Простой и понятный процесс — без лишней бюрократии</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: 2, position: "relative" }}>
              <div style={{ position: "absolute", top: 38, left: "8%", width: "84%", height: 1, background: "linear-gradient(90deg, transparent, rgba(232,93,4,0.3), transparent)", pointerEvents: "none" }} className="connector-line" />
              {[
                { n: "01", title: "Оставляете заявку" },
                { n: "02", title: "Получаете консультацию и план действий" },
                { n: "03", title: "Помогаем с документами" },
                { n: "04", title: "Проходите обучение" },
                { n: "05", title: "Сдаёте экзамен" },
                { n: "06", title: "Получаете Код 95" },
              ].map((s, i) => (
                <div key={i} className="glass-card fade-up" style={{ padding: "28px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", animationDelay: `${i * 0.1}s` }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", lineHeight: 1, color: "#e85d04", opacity: 0.9, marginBottom: 12, textShadow: "0 0 30px rgba(232,93,4,0.4)" }}>{s.n}</div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#f5f5f0", lineHeight: 1.4 }}>{s.title}</h3>
                </div>
              ))}
            </div>

            <div className="fade-up" style={{ textAlign: "center", marginTop: 48 }}>
              <p style={{ color: "#f5f5f0", fontSize: "0.95rem", marginBottom: 24 }}>Мы сопровождаем вас на каждом этапе</p>
              <CTAButton />
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .connector-line { display: none; } }`}</style>
        </section>


        {/* ━━━ 5. ПОЧЕМУ МЫ ━━━ */}
        <section style={{ background: "#0a0a0a", padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                ПОЧЕМУ <span style={{ color: "#e85d04" }}>МЫ</span>
              </h2>
              <p className="fade-up" style={{ color: "#f5f5f0", marginTop: 12, fontSize: "0.95rem" }}>Лицензированная академия для водителей</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
              {[
                { value: "1700+", label: "водителей уже успешно прошли обучение и работают в крупнейших автопарках Европы" },
                { value: "95%", label: "курсантов сдают теоретический тест с первого раза благодаря нашей методике" },
                { value: "0", label: "вопросов от контролирующих органов: выдаём только легальные документы, которые проходят любую проверку" },
              ].map((s, i) => (
                <div key={i} className="glass-card glass fade-up" style={{ padding: "36px 28px", borderRadius: 8, animationDelay: `${i * 0.12}s` }}>
                  <div className="font-display" style={{ fontSize: "3.5rem", color: "#e85d04", lineHeight: 1, marginBottom: 12 }}>{s.value}</div>
                  <p style={{ fontSize: "0.9rem", color: "#aaa", lineHeight: 1.7 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ━━━ 6. ФОТО ━━━ */}
        <GallerySection />
        <div style={{ background: "#0a0a0a", padding: "40px 0", textAlign: "center" }}>
          <CTAButton />
        </div>


        {/* ━━━ 7. ЧТО ВЫ ПОЛУЧАЕТЕ ━━━ */}
        <section style={{ background: "#0d0d0d", padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                ЧТО ВЫ <span style={{ color: "#e85d04" }}>ПОЛУЧАЕТЕ</span>
              </h2>
              <p className="fade-up" style={{ color: "#f5f5f0", marginTop: 12, fontSize: "0.95rem" }}>работая с нами</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }} className="benefits-grid">
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, text: "Полное сопровождение «под ключ»" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, text: "Подготовка к экзамену до результата" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, text: "Обучение на понятном языке" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Экономия времени и нервов" },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e85d04" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: "Актуальные требования ЕС" },
              ].map((item, i) => (
                <div key={i} className="fade-up" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, textAlign: "center", animationDelay: `${i * 0.08}s` }}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(232,93,4,0.1)", border: "1px solid rgba(232,93,4,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#f5f5f0", fontWeight: 500, lineHeight: 1.4 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`@media (max-width: 900px) { .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 500px) { .benefits-grid { grid-template-columns: 1fr !important; } }`}</style>

        {/* ━━━ 8. ПОШАГОВЫЙ ПЛАН CTA ━━━ */}
        <section style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0800 50%, #0a0a0a 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(232,93,4,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: 16 }}>
              ПОЛУЧИТЕ <span style={{ color: "#e85d04" }}>ПОШАГОВЫЙ ПЛАН</span>
            </h2>
            <p className="fade-up" style={{ color: "#f5f5f0", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px", fontWeight: 500 }}>
              Без обязательств — просто разберём вашу ситуацию и скажем, как быстрее получить Код 95
            </p>
            <div className="fade-up">
              <CTAButton />
            </div>
          </div>
        </section>


        {/* ━━━ 9. ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ ━━━ */}
        <section id="services" style={{ background: "#0d0d0d", padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                ДОПОЛНИТЕЛЬНЫЕ <span style={{ color: "#e85d04" }}>УСЛУГИ</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 1, background: "rgba(255,255,255,0.05)" }}>
              {[
                { img: "/icon-adr.webp", title: "Код 95 — Категория C и D", desc: "Короткий и полный курс. Официальный польский документ европейского образца для работы водителем по всему ЕС.", href: "/uslugi#kod95-c" },
                { img: "/icon-chip.webp", title: "Чип-карта для тахографа", desc: "Электронная карта водителя — обязательный документ для работы на грузовых автомобилях в Европе.", href: "/uslugi#chip-card" },
                { img: "/icon-license.webp", title: "Замена водительских прав", desc: "Замените национальные права на польские европейского образца. Подскажем документы и ускорим процесс.", href: "/uslugi#license" },
                { img: "/icon-jobs.webp", title: "Трудоустройство", desc: "После получения Код 95 помогаем найти работу. Партнёрские вакансии для водителей — от 1700 € в месяц.", href: "/uslugi#jobs" },
              ].map((s, i) => (
                <div key={i} className="service-card glass-card fade-up" style={{ background: "#0d0d0d", animationDelay: `${i * 0.1}s` }}>
                  <div style={{ marginBottom: 20 }}>
                    <Image src={s.img} alt={s.title} width={64} height={64} style={{ objectFit: "contain" }} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "#f5f5f0" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{s.desc}</p>
                  <Link href={s.href} style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: "#e85d04", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", transition: "gap 0.2s" }} className="learn-more-link">
                    Узнать подробнее
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`.learn-more-link:hover { gap: 10px !important; }`}</style>
        </section>


        {/* ━━━ 10. НАША КОМАНДА ━━━ */}
        <section style={{ background: "#0a0a0a", padding: "100px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="orange-line fade-up" style={{ margin: "0 auto 16px" }} />
              <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                НАША <span style={{ color: "#e85d04" }}>КОМАНДА</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
              {team.map((m, i) => (
                <div key={i} className="fade-up" style={{ overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", animationDelay: `${i * 0.1}s` }}>
                  <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                    <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "50% 15%" }} sizes="(max-width: 768px) 50vw, 20vw" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 2 }}>{m.name}</h3>
                      <p style={{ fontSize: "0.65rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-up" style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/nasha-komanda" className="btn-outline" style={{ fontSize: "0.8rem" }}>
                Подробнее о команде
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        </section>


        {/* ━━━ 11. КОНТАКТЫ ━━━ */}
        <ContactSection />

      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
