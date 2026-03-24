import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image src="/logo.png" alt="KOD 95 ŁÓDŹ" width={48} height={48} style={{ borderRadius: "50%" }} />
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#f5f5f0" }}>KOD 95 ŁÓDŹ</div>
                <div style={{ fontSize: "0.65rem", color: "#e85d04", letterSpacing: "0.15em" }}>KOD95LODZ.COM</div>
              </div>
            </div>
            <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 300, marginBottom: 20 }}>
              Профессиональное обучение водителей с 2017 года. Польский сертификат КОД 95 европейского образца для работы в ЕС.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="https://wa.me/48575633444" target="_blank" rel="noopener noreferrer" className="footer-messenger whatsapp" title="WhatsApp">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="https://t.me/kod95lodz" target="_blank" rel="noopener noreferrer" className="footer-messenger telegram" title="Telegram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </a>
              <a href="viber://chat?number=48575633444" className="footer-messenger viber" title="Viber">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 0C5.9.1.5 4.5.5 11c0 3.3 1.3 6.2 3.4 8.4v3.1c0 .3.4.5.6.3l2.8-1.7c1.3.5 2.8.8 4.2.8 6 0 10.9-4.7 10.9-10.5S17.4-.1 11.4 0zM8.1 6.7c.2 0 .5.1.7.1.3.1.6.4.8.7.2.4.5 1 .6 1.4.1.3.1.6 0 .8L9.8 10c-.1.1-.1.3 0 .4.3.6.8 1.2 1.3 1.7.5.5 1.1 1 1.8 1.3.1.1.3 0 .4 0l.3-.4c.2-.3.4-.5.7-.5.2 0 .5.1.7.2l1.4.7c.3.2.6.4.7.7.1.2.1.5 0 .8-.3.7-.9 1.4-1.6 1.6-.4.1-.9.2-1.4 0-1-.4-2.4-1.1-3.5-2.2C9.5 12.9 8.7 11.5 8.3 10.5c-.2-.5-.3-1.1 0-1.5.2-.5.8-1.1 1.1-1.4.1-.2.1-.4 0-.5L8.6 6.8c-.1-.1-.3-.1-.5-.1z"/></svg>
                Viber
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Навигация</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {([["/#about","Всё про Код 95"],["/o-kod-95","О сертификате"],["/#services","Услуги"],["/nasha-komanda","Наша команда"],["/#contact","Контакт"]] as [string,string][]).map(([href, label]) => (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.75rem", color: "#666", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Контакты</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:+48575633444" className="footer-link">+48 575 633 444</a>
              <a href="mailto:info@kod95lodz.com" className="footer-link">info@kod95lodz.com</a>
              <span style={{ color: "#888", fontSize: "0.85rem" }}>Al. Widzewska 14, Łódź</span>
              <span style={{ color: "#666", fontSize: "0.8rem" }}>Пн–Пт: 09:00 – 19:00</span>
            </div>
          </div>
        </div>

        {/* Partners row with hover highlight and links */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.72rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.12em", flexShrink: 0 }}>Наши партнёры:</span>
            <a href="https://eurodriver.online" target="_blank" rel="noopener noreferrer" className="partner-link">
              <Image src="/partner-eurodriver.png" alt="EuroDriver KOD 95" width={160} height={45} style={{ objectFit: "contain", height: 32, width: "auto" }} />
            </a>
            <a href="https://www.ockkt.pl" target="_blank" rel="noopener noreferrer" className="partner-link">
              <Image src="/partner-ockt.webp" alt="OCKT" width={160} height={45} style={{ objectFit: "contain", height: 38, width: "auto" }} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "#444", fontSize: "0.78rem" }}>© 2025–2026 KOD 95 ŁÓDŹ. Все права защищены.</span>
          <span style={{ color: "#444", fontSize: "0.78rem" }}>Poland, Łódź — Al. Widzewska 14</span>
        </div>
      </div>

      <style>{`
        .footer-link { color: #888; text-decoration: none; font-size: 0.85rem; transition: color 0.2s; }
        .footer-link:hover { color: #e85d04; }
        .footer-messenger { display: inline-flex; align-items: center; gap: 7px; padding: 7px 13px; border-radius: 6px; font-size: 0.78rem; font-weight: 600; text-decoration: none; transition: opacity 0.2s, transform 0.2s; }
        .footer-messenger:hover { opacity: 0.8; transform: translateY(-1px); }
        .whatsapp { background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.2); color: #25D366; }
        .telegram { background: rgba(42,171,238,0.1); border: 1px solid rgba(42,171,238,0.2); color: #2AABEE; }
        .viber { background: rgba(121,63,228,0.1); border: 1px solid rgba(121,63,228,0.2); color: #7B3FE4; }
        /* Partner hover: glow on hover */
        .partner-link { display: inline-flex; align-items: center; padding: 10px 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); transition: all 0.3s ease; filter: grayscale(1) brightness(0.55); }
        .partner-link:hover { filter: grayscale(0) brightness(1); border-color: rgba(232,93,4,0.3); background: rgba(232,93,4,0.06); box-shadow: 0 0 20px rgba(232,93,4,0.1); transform: translateY(-2px); }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </footer>
  );
}
