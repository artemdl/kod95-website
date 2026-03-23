"use client";
import { useState } from "react";

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
  {
    id: 5,
    question: "Каким мессенджером Вам удобнее пользоваться?",
    options: [
      { label: "WhatsApp", value: "whatsapp" },
      { label: "Telegram", value: "telegram" },
      { label: "Viber", value: "viber" },
      { label: "Звонок", value: "call" },
    ],
  },
];

/* Solid dark panel — key fix: NOT using .glass (translucent) but a solid bg */
const panelStyle: React.CSSProperties = {
  padding: "40px 36px",
  borderRadius: 16,
  background: "#161616",
  border: "1px solid rgba(232,93,4,0.22)",
  boxShadow: "0 12px 48px rgba(0,0,0,0.6), 0 0 80px rgba(232,93,4,0.08)",
};

export default function LandingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const totalSteps = questions.length + 1;
  const progressPercent = Math.min(((step + 1) / totalSteps) * 100, 100);

  const selectAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setStep(6);
  };

  /* ── Success ── */
  if (sent) {
    return (
      <div style={{ ...panelStyle, textAlign: "center", padding: "56px 36px" }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "rgba(34,197,94,0.15)", border: "2px solid rgba(34,197,94,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display" style={{ fontSize: "2.4rem", marginBottom: 16, color: "#f5f5f0" }}>СПАСИБО!</h3>
        <p style={{ color: "#f5f5f0", fontSize: "1.1rem", fontWeight: 600, marginBottom: 8 }}>Ваши данные приняты</p>
        <p style={{ color: "#bbb", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 420, margin: "0 auto" }}>
          Наш эксперт свяжется с Вами в ближайшее время и предоставит полную информацию о Коде 95
        </p>
      </div>
    );
  }

  /* ── Phone step ── */
  if (step >= questions.length) {
    return (
      <div style={panelStyle}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Почти готово!</span>
            <span style={{ fontSize: "0.75rem", color: "#e85d04", fontWeight: 600 }}>Шаг 6 из 6</span>
          </div>
          <div style={{ height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #e85d04, #f48c06)", borderRadius: 3 }} />
          </div>
        </div>

        <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: 8, color: "#f5f5f0" }}>ОСТАВЬТЕ ВАШ ТЕЛЕФОН</h3>
        <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: 28 }}>Мы перезвоним и сообщим точную стоимость</p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input
            type="tel"
            required
            placeholder="+48 000 000 000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: "100%", padding: "18px 22px",
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.18)",
              borderRadius: 10, color: "#f5f5f0",
              fontFamily: "'Montserrat', sans-serif", fontSize: "1.05rem",
              outline: "none", transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#e85d04")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}
          />
          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8, fontSize: "0.95rem", padding: "18px 36px" }}>
            Отправить
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <button
          onClick={() => setStep(step - 1)}
          className="quiz-back-btn"
          style={{ marginTop: 20, background: "none", border: "none", color: "#888", fontSize: "0.82rem", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", transition: "color 0.2s" }}
        >
          ← Назад
        </button>
      </div>
    );
  }

  /* ── Question step ── */
  const q = questions[step];

  return (
    <div style={panelStyle}>
      {/* Progress bar */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Вопрос {step + 1} из {questions.length}</span>
          <span style={{ fontSize: "0.75rem", color: "#e85d04", fontWeight: 600 }}>Шаг {step + 1} из 6</span>
        </div>
        <div style={{ height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: `${progressPercent}%`, height: "100%", background: "linear-gradient(90deg, #e85d04, #f48c06)", borderRadius: 3, transition: "width 0.5s ease" }} />
        </div>
      </div>

      <h3 className="font-display" style={{ fontSize: "1.8rem", marginBottom: 28, color: "#f5f5f0" }}>{q.question}</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.options.map((opt) => {
          const isSelected = answers[q.id] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => selectAnswer(q.id, opt.value)}
              className="quiz-option"
              style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "18px 22px", borderRadius: 10,
                border: isSelected ? "1.5px solid #e85d04" : "1.5px solid rgba(255,255,255,0.12)",
                background: isSelected ? "rgba(232,93,4,0.15)" : "rgba(255,255,255,0.04)",
                color: isSelected ? "#f5f5f0" : "#ddd",
                fontSize: "0.95rem", fontWeight: 500, cursor: "pointer",
                textAlign: "left", transition: "all 0.2s",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                border: isSelected ? "2.5px solid #e85d04" : "2px solid rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.2s",
                background: isSelected ? "rgba(232,93,4,0.1)" : "transparent",
              }}>
                {isSelected && <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#e85d04" }} />}
              </div>
              {opt.label}
            </button>
          );
        })}
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="quiz-back-btn"
          style={{ marginTop: 20, background: "none", border: "none", color: "#888", fontSize: "0.82rem", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", transition: "color 0.2s" }}
        >
          ← Назад
        </button>
      )}

      <style>{`
        .quiz-option:hover {
          border-color: rgba(232,93,4,0.5) !important;
          background: rgba(232,93,4,0.08) !important;
          color: #f5f5f0 !important;
        }
        .quiz-back-btn:hover { color: #e85d04 !important; }
      `}</style>
    </div>
  );
}
