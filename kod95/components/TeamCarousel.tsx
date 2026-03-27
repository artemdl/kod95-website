"use client";
import { useRef, useEffect, useState } from "react";
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

export default function TeamCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto-scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (paused) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 220, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 5000)}
    >
      {/* Left arrow */}
      <button onClick={() => scroll(-1)} className="carousel-arrow carousel-arrow-left" aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Cards */}
      <div ref={ref} className="team-scroll" style={{ display: "flex", gap: 16, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 8, scrollBehavior: "smooth" }}>
        {team.map((m, i) => (
          <div key={i} style={{ flexShrink: 0, width: 200, overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", scrollSnapAlign: "start" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover", objectPosition: "50% 15%" }} sizes="200px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#f5f5f0", letterSpacing: "0.05em", marginBottom: 2 }}>{m.name}</h3>
                <p style={{ fontSize: "0.6rem", color: "#e85d04", textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button onClick={() => scroll(1)} className="carousel-arrow carousel-arrow-right" aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <style>{`
        .team-scroll::-webkit-scrollbar { height: 4px; }
        .team-scroll::-webkit-scrollbar-track { background: transparent; }
        .team-scroll::-webkit-scrollbar-thumb { background: rgba(232,93,4,0.3); border-radius: 2px; }
        .carousel-arrow {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 10;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(10,10,10,0.8); border: 1px solid rgba(255,255,255,0.15);
          color: #f5f5f0; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.2s; backdrop-filter: blur(8px);
        }
        .carousel-arrow:hover { background: rgba(232,93,4,0.3); border-color: rgba(232,93,4,0.5); }
        .carousel-arrow-left { left: -20px; }
        .carousel-arrow-right { right: -20px; }
        @media (max-width: 768px) {
          .carousel-arrow-left { left: 4px; }
          .carousel-arrow-right { right: 4px; }
        }
      `}</style>
    </div>
  );
}
