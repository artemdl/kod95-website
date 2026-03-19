"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/o-kod-95", label: "Всё про Код 95" },
    { href: "/uslugi", label: "Услуги" },
    { href: "/nasha-komanda", label: "Наша команда" },
    { href: "/#contact", label: "Контакт" },
  ];

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <Image src="/logo.png" alt="KOD 95 ŁÓDŹ" width={52} height={52} style={{ borderRadius: "50%" }} />
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", letterSpacing: "0.05em", color: "#f5f5f0", lineHeight: 1 }}>KOD 95 ŁÓDŹ</div>
              <div style={{ fontSize: "0.62rem", color: "#e85d04", letterSpacing: "0.15em", textTransform: "uppercase" }}>kod95lodz.com</div>
            </div>
          </Link>

          <div className="desktop-nav">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </div>

          <div className="nav-right">
            <a href="https://wa.me/48884398836" target="_blank" rel="noopener noreferrer" className="messenger-icon" title="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://t.me/kod95lodz" target="_blank" rel="noopener noreferrer" className="messenger-icon" title="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="viber://chat?number=48884398836" className="messenger-icon" title="Viber">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C5.9.1.5 4.5.5 11c0 3.3 1.3 6.2 3.4 8.4v3.1c0 .3.4.5.6.3l2.8-1.7c1.3.5 2.8.8 4.2.8 6 0 10.9-4.7 10.9-10.5S17.4-.1 11.4 0zM8.1 6.7c.2 0 .5.1.7.1.3.1.6.4.8.7.2.4.5 1 .6 1.4.1.3.1.6 0 .8L9.8 10c-.1.1-.1.3 0 .4.3.6.8 1.2 1.3 1.7.5.5 1.1 1 1.8 1.3.1.1.3 0 .4 0l.3-.4c.2-.3.4-.5.7-.5.2 0 .5.1.7.2l1.4.7c.3.2.6.4.7.7.1.2.1.5 0 .8-.3.7-.9 1.4-1.6 1.6-.4.1-.9.2-1.4 0-1-.4-2.4-1.1-3.5-2.2C9.5 12.9 8.7 11.5 8.3 10.5c-.2-.5-.3-1.1 0-1.5.2-.5.8-1.1 1.1-1.4.1-.2.1-.4 0-.5L8.6 6.8c-.1-.1-.3-.1-.5-.1z"/></svg>
            </a>

            <a href="tel:+48884398836" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.78rem" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              +48 884 398 836
            </a>

            <button onClick={() => setMenuOpen(true)} className="hamburger" style={{ background: "none", border: "none", cursor: "pointer", color: "#f5f5f0", padding: 8 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", cursor: "pointer", color: "#f5f5f0" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#f5f5f0", textDecoration: "none", letterSpacing: "0.05em" }}>
            {l.label}
          </Link>
        ))}
        <div style={{ display: "flex", gap: 20, marginTop: 8 }}>
          <a href="https://wa.me/48884398836" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="https://t.me/kod95lodz" target="_blank" rel="noopener noreferrer" style={{ color: "#2AABEE" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
          <a href="viber://chat?number=48884398836" style={{ color: "#7B3FE4" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C5.9.1.5 4.5.5 11c0 3.3 1.3 6.2 3.4 8.4v3.1c0 .3.4.5.6.3l2.8-1.7c1.3.5 2.8.8 4.2.8 6 0 10.9-4.7 10.9-10.5S17.4-.1 11.4 0zM8.1 6.7c.2 0 .5.1.7.1.3.1.6.4.8.7.2.4.5 1 .6 1.4.1.3.1.6 0 .8L9.8 10c-.1.1-.1.3 0 .4.3.6.8 1.2 1.3 1.7.5.5 1.1 1 1.8 1.3.1.1.3 0 .4 0l.3-.4c.2-.3.4-.5.7-.5.2 0 .5.1.7.2l1.4.7c.3.2.6.4.7.7.1.2.1.5 0 .8-.3.7-.9 1.4-1.6 1.6-.4.1-.9.2-1.4 0-1-.4-2.4-1.1-3.5-2.2C9.5 12.9 8.7 11.5 8.3 10.5c-.2-.5-.3-1.1 0-1.5.2-.5.8-1.1 1.1-1.4.1-.2.1-.4 0-.5L8.6 6.8c-.1-.1-.3-.1-.5-.1z"/></svg>
          </a>
        </div>
        <a href="tel:+48884398836" className="btn-primary" style={{ marginTop: 8 }}>+48 884 398 836</a>
      </div>

      <style>{`
        .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 14px 24px; max-width: 1200px; margin: 0 auto; gap: 16px; }
        .nav-link { color: #f5f5f0; text-decoration: none; font-size: 0.82rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.85; transition: color 0.2s, opacity 0.2s; white-space: nowrap; }
        .nav-link:hover { color: #e85d04; opacity: 1; }
        .nav-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .desktop-nav { display: flex; gap: 24px; align-items: center; }
        .messenger-icon { color: #888; transition: color 0.2s, transform 0.2s; display: flex; align-items: center; }
        .messenger-icon:hover { color: #e85d04; transform: translateY(-2px); }
        .hamburger { display: none !important; }
        @media (max-width: 1100px) { .desktop-nav { display: none !important; } .hamburger { display: block !important; } }
        @media (max-width: 600px) { .messenger-icon { display: none; } }
      `}</style>
    </>
  );
}
