import type { Metadata } from "next";
import Link from "next/link";
import NavClient from "@/components/NavClient";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Всё про Код 95 — Что это, курсы, документы",
  description: "Полная информация о сертификате Код 95 в Польше: что это такое, короткий и длинный курс, необходимые документы, требования к водителю, процесс получения. Обучение на русском и украинском.",
  keywords: ["что такое код 95", "код 95 документы", "код 95 курс 35 часов", "код 95 140 часов", "квалификация водителя", "kwalifikacja wstępna przyspieszona", "PKZ profil kierowcy"],
  alternates: { canonical: "https://kod95lodz.com/o-kod-95" },
  openGraph: {
    title: "Всё про Код 95 — KOD 95 ŁÓDŹ",
    description: "Что такое Код 95, виды курсов, документы и процесс получения в Польше.",
    url: "https://kod95lodz.com/o-kod-95",
  },
};

const categories = [
  { code: "C", desc: "Грузовой автомобиль свыше 3,5 тонн" },
  { code: "C1", desc: "Грузовик/микроавтобус 3,5–7,5 тонн" },
  { code: "CE", desc: "Фура — тягач с полуприцепом" },
  { code: "C1E", desc: "Транспорт C1 с прицепом до 12 тонн" },
  { code: "D", desc: "Автобус свыше 16 мест (с 24 лет)" },
  { code: "D1", desc: "Минибус до 16 мест (с 21 года)" },
  { code: "D+E", desc: "Автобус с прицепом" },
  { code: "D1E", desc: "Минибус с прицепом до 12 тонн" },
];

const topics = [
  "Рабочее время водителя", "Работа с тахографом", "Оплата дорог",
  "Оптимизация маршрута", "Прохождение дорожного контроля", "Заполнение CMR накладных",
  "Технические характеристики грузовика", "Основы экономного вождения (Eco driving)",
  "Правовые нормы Евросоюза", "Финансовая ответственность (штрафы)",
  "Права и обязанности водителя", "Размещение и крепление груза",
  "Оказание первой помощи при ДТП", "Скоростные лимиты",
];

const practical = ["Приём автомобиля", "Сцепка и расцепка прицепа", "Подъезд задом к рампе"];

const whoCanStudy = [
  "Достигшие 21 года с категорией С/D1/D1E",
  "Достигшие 24 лет с категорией D/DE",
  "Имеющие справку от врача и психолога",
  "Получившие номер ПКЗ (PKZ)",
  "Находящиеся в Польше легально",
];

const legalStatus = [
  "Карта побыта (или документы на её получение)",
  "Действующая виза",
  "Безвизовый въезд",
  "Статус беженца (уходца)",
  "Побыт другого государства-члена ЕС",
];

export default function OKod95() {
  return (
    <>
      <NavClient />
      <main style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>

        {/* Hero header */}
        <div style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0800 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "40%", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(232,93,4,0.07) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h1 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", color: "#f5f5f0", lineHeight: 1, marginBottom: 16 }}>
              ВСЁ ПРО <span style={{ color: "#e85d04" }}>КОД 95</span>
            </h1>
            <p style={{ color: "#ccc", fontSize: "1rem", maxWidth: 600 }}>
              Полное руководство — от определения сертификата до списка документов и процесса получения в Польше
            </p>
          </div>
        </div>

        {/* Quick nav */}
        <div style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0", position: "sticky", top: 80, zIndex: 50 }}>
          <div className="container" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              ["#chto-takoe", "Что такое?"],
              ["#kategorii", "Категории"],
              ["#vidy-kursov", "Виды курсов"],
              ["#kto-mozhet", "Кто может?"],
              ["#protsess", "Процесс"],
              ["#dokumenty", "Документы"],
            ].map(([href, label]) => (
              <a key={href} href={href} style={{ color: "#ccc", fontSize: "0.8rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, transition: "color 0.2s", whiteSpace: "nowrap" }}
                className="quick-nav-link">{label}</a>
            ))}
          </div>
        </div>

        <div className="container" style={{ padding: "64px 24px" }}>

          {/* ──── 1. ЧТО ТАКОЕ КОД 95 ──── */}
          <div id="chto-takoe" style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              ЧТО ТАКОЕ <span style={{ color: "#e85d04" }}>КОД 95?</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="two-col">
              <div className="fade-up">
                <p style={{ color: "#ddd", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
                  Для работы по перевозке грузов или пассажиров в транспортной фирме в странах Европейского Союза недостаточно иметь в водительском удостоверении соответствующие открытые категории. Каждый водитель обязан иметь <strong style={{ color: "#f5f5f0" }}>специальный сертификат</strong>, подтверждающий прохождение дополнительного квалификационного курса.
                </p>
                <p style={{ color: "#ddd", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: 20 }}>
                  Курс для грузоперевозок называется <strong style={{ color: "#f5f5f0" }}>kurs na przewóz rzeczy</strong> (блок C), для водителей автобусов — <strong style={{ color: "#f5f5f0" }}>kurs na przewóz osób</strong> (блок D).
                </p>
                <p style={{ color: "#ddd", lineHeight: 1.85, fontSize: "0.95rem" }}>
                  Обучение можно пройти только в аккредитованных учебных заведениях на территории ЕС. <strong style={{ color: "#f5f5f0" }}>Ни Украина, ни Беларусь, ни другие страны СНГ</strong> выдавать европейский Код 95 не могут — их сертификаты для работы в ЕС не подходят.
                </p>
              </div>
              <div className="fade-up">
                <div className="glass" style={{ padding: "24px 28px", borderRadius: 8, marginBottom: 20 }}>
                  <div style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Почему именно Польша?</div>
                  {["Обучение без визы и вида на жительство", "Экзамен на русском и украинском языках", "Одна из самых доступных цен в ЕС", "Возможность обменять права на польские"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                        <circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/>
                        <polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontSize: "0.88rem", color: "#ccc" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="glass-orange" style={{ padding: "20px 24px", borderRadius: 8 }}>
                  <div style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Срок действия</div>
                  <p style={{ color: "#f5f5f0", fontSize: "0.9rem", lineHeight: 1.6 }}>Квалификация выдаётся сроком <strong>до 5 лет</strong>. Каждые 5 лет необходимо проходить повторный квалификационный курс.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ──── 2. КАТЕГОРИИ ──── */}
          <div id="kategorii" style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              КАТЕГОРИИ <span style={{ color: "#e85d04" }}>ВОДИТЕЛЕЙ</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
              {categories.map((cat, i) => (
                <div key={i} className="glass-card fade-up" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", padding: "18px 20px", display: "flex", gap: 14, alignItems: "center", animationDelay: `${i * 0.06}s` }}>
                  <div className="font-display" style={{ fontSize: "2rem", color: "#e85d04", flexShrink: 0, minWidth: 50 }}>{cat.code}</div>
                  <span style={{ fontSize: "0.85rem", color: "#ddd", lineHeight: 1.4 }}>{cat.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ──── 3. ЧЕМУ УЧАТ ──── */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              ЧЕМУ УЧАТ НА <span style={{ color: "#e85d04" }}>КУРСАХ?</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="two-col">
              <div className="fade-up">
                <h3 style={{ fontSize: "0.75rem", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Теоретические вопросы</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {topics.map((t, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e85d04", flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: "0.88rem", color: "#eee" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fade-up">
                <h3 style={{ fontSize: "0.75rem", color: "#ccc", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Практические занятия</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {practical.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f48c06", flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: "0.88rem", color: "#eee" }}>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="glass" style={{ padding: "20px 24px", borderRadius: 8 }}>
                  <p style={{ color: "#ddd", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    Обучение не преследует цели научить правилам дорожного движения — это уже пройдено при получении категорий. Курс готовит водителя к <strong style={{ color: "#f5f5f0" }}>профессиональной деятельности в Европе</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ──── 4. ВИДЫ КУРСОВ ──── */}
          <div id="vidy-kursov" style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              КОРОТКИЙ И <span style={{ color: "#e85d04" }}>ДЛИННЫЙ КУРС</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="two-col">

              {/* Короткий */}
              <div className="fade-up glass-card course-card-gold" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 28px", borderRadius: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Kwalifikacja Okresowa (SO)</div>
                    <h3 className="font-display" style={{ fontSize: "2rem", color: "#f5f5f0" }}>КОРОТКИЙ КУРС</h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="font-display" style={{ fontSize: "2.5rem", color: "#e85d04" }}>35</div>
                    <div style={{ fontSize: "0.7rem", color: "#ccc", textTransform: "uppercase" }}>часов</div>
                  </div>
                </div>
                <p style={{ color: "#eee", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 16 }}>Кто может пройти:</p>
                {["Категория C открыта до 09.09.2009", "Категория D открыта до 09.08.2008", "Ранее уже проходили длинный курс в ЕС"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/>
                      <polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: "0.85rem", color: "#f5f5f0" }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20, padding: "12px 16px", background: "rgba(232,93,4,0.08)", borderRadius: 6 }}>
                  <p style={{ color: "#eee", fontSize: "0.82rem" }}>
                    Экзамен <strong style={{ color: "#f5f5f0" }}>не предусмотрен</strong>. Если есть актуальный АДР — курс занимает всего <strong style={{ color: "#e85d04" }}>3 дня</strong>.
                  </p>
                </div>
              </div>

              {/* Длинный */}
              <div className="fade-up glass-card course-card-silver" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "32px 28px", borderRadius: 8, animationDelay: "0.1s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Kwalifikacja Wstępna Przyspieszona (KWP)</div>
                    <h3 className="font-display" style={{ fontSize: "2rem", color: "#f5f5f0" }}>ДЛИННЫЙ КУРС</h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="font-display" style={{ fontSize: "2.5rem", color: "#e85d04" }}>140</div>
                    <div style={{ fontSize: "0.7rem", color: "#ccc", textTransform: "uppercase" }}>часов</div>
                  </div>
                </div>
                <p style={{ color: "#eee", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 16 }}>Необходим если:</p>
                {["Категория C открыта после 09.09.2009", "Категория D открыта после 09.08.2008", "Никогда ранее не проходили квалификацию"].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/>
                      <polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: "0.85rem", color: "#f5f5f0" }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20, padding: "12px 16px", background: "rgba(255,255,255,0.04)", borderRadius: 6 }}>
                  <p style={{ color: "#eee", fontSize: "0.82rem" }}>
                    130 часов теории + 10 часов практики. По окончании — <strong style={{ color: "#f5f5f0" }}>теоретический экзамен</strong> (30 вопросов). Проходится <strong style={{ color: "#f5f5f0" }}>один раз</strong> в жизни.
                  </p>
                </div>
              </div>
            </div>

            {/* Дополнительный курс */}
            <div className="fade-up glass" style={{ padding: "24px 28px", borderRadius: 8 }}>
              <div style={{ fontSize: "0.72rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Дополнительный курс (Kwalifikacja Wstępna Uzupełniająca)</div>
              <p style={{ color: "#ddd", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Если водитель уже имеет длинный курс на одну категорию (C или D) и хочет добавить вторую — он может пройти <strong style={{ color: "#f5f5f0" }}>короткий курс 35 часов</strong> с экзаменом (10 вопросов, минимум 5 правильных).
              </p>
            </div>
          </div>

          {/* ──── 5. КТО МОЖЕТ ──── */}
          <div id="kto-mozhet" style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              КТО МОЖЕТ <span style={{ color: "#e85d04" }}>ОБУЧАТЬСЯ?</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="two-col">
              <div className="fade-up">
                <h3 style={{ fontSize: "0.75rem", color: "#f5f5f0", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Требования к водителю</h3>
                {whoCanStudy.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(232,93,4,0.1)", border: "1px solid rgba(232,93,4,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="font-display" style={{ fontSize: "0.85rem", color: "#e85d04" }}>{i + 1}</span>
                    </div>
                    <span style={{ fontSize: "0.88rem", color: "#eee", lineHeight: 1.5, paddingTop: 4 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="fade-up">
                <h3 style={{ fontSize: "0.75rem", color: "#f5f5f0", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>Допустимый правовой статус в Польше</h3>
                {legalStatus.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                      <circle cx="12" cy="12" r="11" stroke="#e85d04" strokeWidth="1.5"/>
                      <polyline points="8 12 11 15 16 9" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: "0.88rem", color: "#eee" }}>{item}</span>
                  </div>
                ))}
                <div className="glass-orange" style={{ padding: "16px 20px", borderRadius: 8, marginTop: 20 }}>
                  <p style={{ color: "#f5f5f0", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    Водители с картой побыта или пребывающие в Польше более 6 месяцев по визе/статусу УКР должны <strong>предварительно заменить права на польские</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ──── 6. ПРОЦЕСС ──── */}
          <div id="protsess" style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              ПРОЦЕСС <span style={{ color: "#e85d04" }}>ПОЛУЧЕНИЯ</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, background: "rgba(255,255,255,0.04)", marginBottom: 32 }}>
              {[
                { n: "01", title: "Медосмотр и психотест", desc: "Получите справки от врача и психолога об отсутствии противопоказаний." },
                { n: "02", title: "Получить номер ПКЗ", desc: "Обратитесь в ужонд (отдел коммуникации) или повятовое старосство с необходимыми документами." },
                { n: "03", title: "Запись на курс", desc: "С номером ПКЗ записываетесь в нашу школу и начинаете обучение." },
                { n: "04", title: "Получить сертификат", desc: "После обучения (и экзамена, если требуется) получаете официальный польский документ." },
              ].map((s, i) => (
                <div key={i} className="fade-up" style={{ background: "#0d0d0d", padding: "28px 24px", animationDelay: `${i * 0.1}s` }}>
                  <div className="font-display" style={{ fontSize: "4rem", color: "#e85d04", opacity: 0.9, lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f5f5f0", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.84rem", color: "#ccc", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="glass fade-up" style={{ padding: "20px 28px", borderRadius: 8 }}>
              <p style={{ color: "#f5f5f0", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <strong style={{ color: "#e85d04" }}>PKZ (profil kierowcy zawodowego)</strong> — цифровой профиль водителя, являющийся разрешением на обучение. Оформляется в ужонде по отделу коммуникации и транспорта. В крупных городах есть электронная очередь, в отделениях старост — живая.
              </p>
            </div>
          </div>

          {/* ──── 7. ДОКУМЕНТЫ ──── */}
          <div id="dokumenty" style={{ marginBottom: 80 }}>
            <div style={{ display: "inline-block", width: 48, height: 3, background: "linear-gradient(90deg, #e85d04, #f48c06)", marginBottom: 16 }} />
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: 32 }}>
              СПИСОК <span style={{ color: "#e85d04" }}>ДОКУМЕНТОВ</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }} className="docs-grid">
              {[
                {
                  title: "С заменой прав",
                  color: "#e85d04",
                  docs: ["Паспорт (оригинал)", "Карта побыта / Zaświadczenie / печать / PESEL UKR", "Права + присяжный перевод", "Мельдунек (прописка, мин. 1 месяц)", "Справка от врача (не старше года)", "Психотесты", "Фото 3,5×4,5 (мин. 70% лица)", "Анкета (wniosek) о замене прав", "Wniosek RODO + о проживании", "Госпошлина 100 зл"],
                },
                {
                  title: "С польскими правами",
                  color: "#f48c06",
                  docs: ["Паспорт (оригинал)", "Карта побыта / Zaświadczenie / печать / PESEL UKR", "Права + копия", "Мельдунек (в некоторых ужондах)", "Справка от врача (не старше года)", "Психотесты", "Фото 3,5×4,5", "Анкета (wniosek) о замене прав", "Wniosek RODO + о проживании", "Госпошлина 100 зл"],
                },
                {
                  title: "Без замены прав",
                  color: "#ccc",
                  docs: ["Паспорт (оригинал)", "Права + копия", "Справка от врача (не старше года)", "Психотесты", "Фото 3,5×4,5", "Wniosek о выдаче Karty kwalifikacji kierowcy", "Если был старый код — предоставить его", "Госпошлина 150 зл"],
                },
              ].map((col, i) => (
                <div key={i} className="fade-up" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${col.color}30`, padding: "24px 20px", borderRadius: 4, animationDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: "0.72rem", color: col.color, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>Вариант {i + 1}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#f5f5f0", marginBottom: 16 }}>{col.title}</h3>
                  {col.docs.map((doc, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: col.color, flexShrink: 0, marginTop: 7, opacity: 0.8 }} />
                      <span style={{ fontSize: "0.82rem", color: "#ddd", lineHeight: 1.4 }}>{doc}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="glass-orange fade-up" style={{ padding: "20px 28px", borderRadius: 8 }}>
              <p style={{ color: "#f5f5f0", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <strong>Важно:</strong> если водитель находится в Польше более 185 дней подряд или суммарно, либо имеет карту побыта — возникает обязательство заменить права. Адрес во всех справках должен совпадать с адресом в мельдунке.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="fade-up" style={{ textAlign: "center", padding: "48px 0" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
              ОСТАЛИСЬ ВОПРОСЫ? <span style={{ color: "#e85d04" }}>МЫ ПОМОЖЕМ</span>
            </h2>
            <p style={{ color: "#f5f5f0", marginBottom: 32, fontSize: "1.15rem", fontWeight: 500 }}>Бесплатная консультация — позвоните или напишите</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+48575633444" className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
                +48 575 633 444
              </a>
              <Link href="/#contact" className="btn-outline">Написать нам</Link>
              <Link href="/uslugi" className="btn-outline">Все услуги</Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <ScrollAnimations />

      <style>{`
        .two-col { }
        .docs-grid { }
        .quick-nav-link:hover { color: #e85d04 !important; }
        @keyframes shimmerGold {
          0% { transform: translateX(-200%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }
        @keyframes shimmerSilver {
          0% { transform: translateX(-200%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }
        .course-card-gold { position: relative; overflow: hidden; }
        .course-card-gold::before {
          content: ''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,200,80,0.06), transparent);
          animation: shimmerGold 4s ease-in-out infinite;
          pointer-events: none;
        }
        .course-card-silver { position: relative; overflow: hidden; }
        .course-card-silver::before {
          content: ''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(200,210,230,0.06), transparent);
          animation: shimmerSilver 5s ease-in-out infinite;
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .docs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
