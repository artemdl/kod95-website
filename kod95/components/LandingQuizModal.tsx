"use client";
import { useState, useEffect } from "react";
import LandingQuiz from "./LandingQuiz";

export default function LandingQuizModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* CTA button with pulse animation */}
      <button
        onClick={() => setOpen(true)}
        className="btn-primary fade-up"
        style={{
          fontSize: "1rem",
          padding: "18px 44px",
          animation: "ctaPulse 2s infinite",
          cursor: "pointer",
        }}
      >
        Узнать стоимость
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          {/* Backdrop — darker for better contrast with quiz panel */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          />

          {/* Modal content */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 560,
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: 16,
              animation: "modalIn 0.3s ease",
            }}
          >
            {/* Close button — brighter, more visible */}
            <button
              onClick={() => setOpen(false)}
              className="quiz-close-btn"
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#ccc",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                fontFamily: "'Montserrat', sans-serif",
                transition: "all 0.2s",
              }}
            >
              ✕
            </button>

            <LandingQuiz />
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .quiz-close-btn:hover {
          background: rgba(232,93,4,0.2) !important;
          border-color: rgba(232,93,4,0.4) !important;
          color: #e85d04 !important;
        }
      `}</style>
    </>
  );
}
