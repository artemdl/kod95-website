export default function StatsBar() {
  const stats = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>, label: "Опытные инструкторы", value: "Только практики" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M20 6h-2.18c.07-.44.18-.87.18-1.33C18 2.54 15.46 0 12.33 0c-1.7 0-3.21.7-4.29 1.82L12 5.77l3.96-3.95C16.54 2.64 17 3.28 17 4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2 0-.72.46-1.36 1.04-1.68L4.29 1.82C3.21 2.9 2.52 4.42 2.52 6H2C.9 6 0 6.9 0 8v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>, label: "Практика на грузовике", value: "Реальные условия" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, label: "Помощь с жильём", value: "г. Лодзь" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#e85d04"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>, label: "С 2017 года", value: "Лучшие в Польше" },
  ];

  return (
    <div className="stats-bar glass" style={{ borderRadius: 0, borderLeft: "none", borderRight: "none" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "8px 0" }}>
              <div style={{ flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f5f5f0" }}>{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
