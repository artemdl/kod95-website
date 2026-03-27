"use client";
import { useState } from "react";
import Image from "next/image";

const team = [
  { img: "/team-2.jpg", name: "Ольга", role: "Менеджер" },
  { img: "/team-3.jpg", name: "Евгения", role: "Менеджер" },
  { img: "/team-4.jpg", name: "Томек", role: "Сооснователь / Инструктор" },
  { img: "/team-7.jpg", name: "Магда", role: "Преподаватель" },
  { img: "/team-5.jpg", name: "Артём", role: "Сооснователь / CEO" },
  { img: "/team-1.jpg", name: "Виола", role: "Сооснователь / Зам. директора" },
  { img: "/team-6.webp", name: "Дмитрий", role: "Маркетолог" },
];

const doubled = [...team, ...team];

function Card({ m }: { m: typeof team[0] }) {
  return (
    <div style={{ flexShrink: 0, width: 200, overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "50% 15%" }} sizes="200px" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px" }}>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 2 }}>{m.name}</h3>
          <p style={{ fontSize: "0.6rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      style={{ overflow: "hidden", position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
    >
      {/* Fade edges */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(to right, #0a0a0a, transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(to left, #0a0a0a, transparent)", zIndex: 2, pointerEvents: "none" }} />

      {/* Scrolling track */}
      <div
        className="team-marquee"
        style={{
          display: "flex",
          gap: 16,
          width: "max-content",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((m, i) => (
          <Card key={`${m.name}-${i}`} m={m} />
        ))}
      </div>

      <style>{`
        @keyframes teamMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .team-marquee {
          animation: teamMarquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
