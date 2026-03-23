"use client";
import { useState } from "react";

const faqs = [
  {
    q: "А если не сдам?",
    a: "Не переживайте, в 95% случаев наши студенты сдают с первого раза. Если возникнут сложности, мы предоставляем дополнительные консультации и возможность пересдачи. Мы сопровождаем вас до момента получения сертификата.",
  },
  {
    q: "Нужен ли польский язык?",
    a: "Нет. Весь учебный процесс, материалы и поддержка организованы на понятном вам языке. Для работы водителем в Европе достаточно базовых фраз, которыми мы тоже поделимся.",
  },
  {
    q: "Сколько времени занимает обучение?",
    a: "В зависимости от ваших прав (категория С открыта до или после 2009 года), курс занимает от 5 (короткий курс) до 10 рабочих дней (длинный курс).",
  },
  {
    q: "Это точно легально?",
    a: "Абсолютно. Вы получаете пластиковую карту или запись в водительских правах (код 95), выданную государственным органом Польши. Все документы легитимны во всех странах Евросоюза.",
  },
  {
    q: "Где проходит обучение?",
    a: "Обучение проходит в наших учебных центрах в Польше (города уточняйте у менеджера). Мы обеспечиваем встречу и помощь в размещении.",
  },
];

export default function LandingFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="fade-up"
            style={{
              background: isOpen
                ? "rgba(232,93,4,0.06)"
                : "rgba(255,255,255,0.02)",
              border: isOpen
                ? "1px solid rgba(232,93,4,0.2)"
                : "1px solid rgba(255,255,255,0.06)",
              borderRadius: 8,
              transition: "all 0.3s ease",
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: "100%",
                padding: "18px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isOpen ? "#f5f5f0" : "#ccc",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 600,
                textAlign: "left",
                gap: 16,
              }}
            >
              {faq.q}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isOpen ? "#e85d04" : "#666"}
                strokeWidth="2"
                style={{
                  flexShrink: 0,
                  transition: "transform 0.3s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease, padding 0.3s ease",
                padding: isOpen ? "0 24px 18px" : "0 24px 0",
              }}
            >
              <p
                style={{
                  color: "#888",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
