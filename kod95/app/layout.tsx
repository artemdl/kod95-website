import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOD 95 ŁÓDŹ — Szkolenia Kierowców | Kod 95 Polska",
  description: "Uzyskaj Kod 95 i pracuj jako kierowca w Europie. Profesjonalne kursy kwalifikacji w Łodzi. Od 2017 roku — ponad 1700 certyfikatów.",
  keywords: "kod 95, kwalifikacja wstępna, kierowca ciężarówki, szkolenie kierowców, Łódź, Polska, praca kierowca Europa",
  openGraph: {
    title: "KOD 95 ŁÓDŹ — Profesjonalne Szkolenia Kierowców",
    description: "Uzyskaj Kod 95 i pracuj jako kierowca w Europie. Ponad 1700 certyfikatów od 2017 roku.",
    url: "https://kod95lodz.com",
    siteName: "KOD 95 ŁÓDŹ",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
