"use client";
import { useState } from "react";

/* ─── Quiz data ─── */
const questions = [
  {
    id: 1,
    question: "Какая у вас категория прав?",
    options: [
      { label: "C (грузовые)", value: "C" },
      { label: "CE (с прицепом)", value: "CE" },
      { label: "D (автобусы)", value: "D" },
      { label: "Несколько категорий", value: "multiple" },
    ],
  },
  {
    id: 2,
    question: "Когда была открыта категория C или D?",
    options: [
      { label: "До 2009 года", value: "before_2009" },
      { label: "После 2009 года", value: "after_2009" },
      { label: "Не помню точно", value: "unknown" },
    ],
  },
  {
    id: 3,
    question: "Проходили ли вы ранее курс Код 95?",
    options: [
      { label: "Да, проходил в ЕС", value: "yes_eu" },
      { label: "Нет, первый раз", value: "no" },
      { label: "Проходил не в ЕС", value: "yes_non_eu" },
    ],
  },
  {
    id: 4,
    question: "Когда планируете начать обучение?",
    options: [
      { label: "В ближайшие 2 недели", value: "2_weeks" },
      { label: "В течение месяца", value: "1_month" },
      { label: "Через 1–3 месяца", value: "3_months" },
      { label: "Пока просто узнаю", value: "just_asking" },
    ],
  },
];

export default function LandingQuiz() {
  const [step, setStep] = useState(0); // 0..3 = questions, 4 = contact form, 5 = done
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", messenger: "" });
  const [sent, setSent] = useState(false);

  const totalSteps = questions.length;
  const progressPercent = Math.min(((step + 1) / (totalSteps + 1)) * 100, 100);

  const selectAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    // auto-advance after short delay
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setStep(5);
  };

  /* ── Success state ── */
  if (sent) {
    return (
      <div
        className="glass fade-in visible"
        style={{
          padding: "48px 32px",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="font-display"
          style={{ fontSize: "2rem", marginBottom: 12 }}
        >
          ЗАЯВКА ОТПРАВЛЕНА!
        </h3>
        <p style={{ color: "#aaa", fontSize: "0.95rem", lineHeight: 1.7 }}>
          Мы свяжемся с вами в течение часа и расскажем точную стоимость
          обучения.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/48884398836"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 6,
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.2)",
              color: "#25D366",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать в WhatsApp
          </a>
          <a
            href="https://t.me/kod95lodz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 6,
              background: "rgba(42,171,238,0.1)",
              border: "1px solid rgba(42,171,238,0.2)",
              color: "#2AABEE",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Написать в Telegram
          </a>
        </div>
      </div>
    );
  }

  /* ── Contact form (step 4) ── */
  if (step >= totalSteps) {
    return (
      <div
        className="glass"
        style={{ padding: "36px 32px", borderRadius: 8 }}
      >
        {/* Progress bar */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: "0.75rem", color: "#888" }}>
              Почти готово!
            </span>
            <span style={{ fontSize: "0.75rem", color: "#e85d04" }}>
              Шаг 5 из 5
            </span>
          </div>
          <div
            style={{
              height: 4,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, #e85d04, #f48c06)",
                borderRadius: 2,
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>

        <h3
          className="font-display"
          style={{ fontSize: "1.6rem", marginBottom: 8 }}
        >
          КУДА ОТПРАВИТЬ РЕЗУЛЬТАТ?
        </h3>
        <p
          style={{
            color: "#888",
            fontSize: "0.85rem",
            marginBottom: 24,
          }}
        >
          Оставьте контакт и мы свяжемся с точной стоимостью
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div>
            <label
              style={{
                fontSize: "0.72rem",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: 6,
              }}
            >
              Ваше имя *
            </label>
            <input
              className="contact-input"
              type="text"
              required
              placeholder="Имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label
              style={{
                fontSize: "0.72rem",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: 6,
              }}
            >
              Телефон *
            </label>
            <input
              className="contact-input"
              type="tel"
              required
              placeholder="+48 000 000 000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label
              style={{
                fontSize: "0.72rem",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "block",
                marginBottom: 6,
              }}
            >
              Удобный мессенджер
            </label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["WhatsApp", "Telegram", "Viber", "Звонок"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setForm({ ...form, messenger: m })}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 6,
                    border:
                      form.messenger === m
                        ? "1px solid #e85d04"
                        : "1px solid rgba(255,255,255,0.1)",
                    background:
                      form.messenger === m
                        ? "rgba(232,93,4,0.15)"
                        : "rgba(255,255,255,0.03)",
                    color:
                      form.messenger === m ? "#e85d04" : "#aaa",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: 8,
              fontSize: "0.9rem",
            }}
          >
            Узнать стоимость
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Back button */}
        <button
          onClick={() => setStep(step - 1)}
          style={{
            marginTop: 16,
            background: "none",
            border: "none",
            color: "#666",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          ← Назад
        </button>
      </div>
    );
  }

  /* ── Quiz questions ── */
  const q = questions[step];

  return (
    <div
      className="glass"
      style={{ padding: "36px 32px", borderRadius: 8 }}
    >
      {/* Progress bar */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: "0.75rem", color: "#888" }}>
            Вопрос {step + 1} из {totalSteps}
          </span>
          <span style={{ fontSize: "0.75rem", color: "#e85d04" }}>
            Шаг {step + 1} из 5
          </span>
        </div>
        <div
          style={{
            height: 4,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background:
                "linear-gradient(90deg, #e85d04, #f48c06)",
              borderRadius: 2,
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>

      <h3
        className="font-display"
        style={{ fontSize: "1.6rem", marginBottom: 24 }}
      >
        {q.question}
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {q.options.map((opt) => {
          const isSelected = answers[q.id] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => selectAnswer(q.id, opt.value)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 20px",
                borderRadius: 8,
                border: isSelected
                  ? "1px solid #e85d04"
                  : "1px solid rgba(255,255,255,0.08)",
                background: isSelected
                  ? "rgba(232,93,4,0.12)"
                  : "rgba(255,255,255,0.02)",
                color: isSelected ? "#f5f5f0" : "#bbb",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: isSelected
                    ? "2px solid #e85d04"
                    : "2px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#e85d04",
                    }}
                  />
                )}
              </div>
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Back button */}
      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          style={{
            marginTop: 20,
            background: "none",
            border: "none",
            color: "#666",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          ← Назад
        </button>
      )}
    </div>
  );
}
