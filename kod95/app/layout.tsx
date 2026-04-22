import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kod95lodz.com"),
  title: {
    default: "KOD 95 ŁÓDŹ — Kod 95 dla kierowców | Szkolenia w Łodzi",
    template: "%s | KOD 95 ŁÓDŹ",
  },
  description: "Uzyskaj Kod 95 i pracuj jako kierowca w Europie. Profesjonalne kursy kwalifikacji wstępnej i okresowej w Łodzi. Od 2017 roku — ponad 1700 certyfikatów. Szkolenie po ukraińsku i rosyjsku.",
  keywords: [
    // Польские запросы
    "kod 95", "kod 95 łódź", "kod 95 polska", "kod 95 cena", "kod 95 kurs",
    "kwalifikacja wstępna", "kwalifikacja wstępna przyspieszona", "kwalifikacja okresowa",
    "szkolenie kierowców łódź", "kurs na kod 95", "kod 95 ile kosztuje",
    "kierowca ciężarówki praca", "praca kierowca europa", "prawo jazdy kategoria C",
    "karta kierowcy tachograf", "szkolenie po ukraińsku", "szkolenie po rosyjsku",
    // Русские запросы
    "код 95", "код 95 лодзь", "код 95 польша", "код 95 цена", "код 95 стоимость",
    "код 95 для украинцев", "код 95 обучение", "код 95 курс", "код 95 сколько стоит",
    "обучение водителей польша", "работа водителем в европе", "права категории C",
    "квалификация водителя польша", "карта тахографа", "замена прав на польские",
    "код 95 на русском", "код 95 на украинском", "автошкола для водителей лодзь",
    // Украинские запросы
    "код 95 польща", "код 95 навчання", "код 95 для українців", "код 95 ціна",
    "робота водієм в європі", "права категорії С", "курси для водіїв польща",
  ],
  openGraph: {
    title: "KOD 95 ŁÓDŹ — Kod 95 dla kierowców w Europie",
    description: "Uzyskaj Kod 95 i pracuj jako kierowca w Europie. Ponad 1700 certyfikatów od 2017 roku. Szkolenie po ukraińsku i rosyjsku.",
    url: "https://kod95lodz.com",
    siteName: "KOD 95 ŁÓDŹ",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KOD 95 ŁÓDŹ — Szkolenia Kierowców" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOD 95 ŁÓDŹ — Kod 95 dla kierowców",
    description: "Uzyskaj Kod 95 i pracuj jako kierowca w Europie. Ponad 1700 certyfikatów od 2017 roku.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kod95lodz.com" },
  verification: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        {/* Google tag (gtag.js) — Google Ads + Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9D89FM8KT" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M9D89FM8KT');
          gtag('config', 'AW-11367151533');
        `}} />
        {/* Fonts — preload for non-blocking, reduced weights */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;900&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        {/* Defer font apply script */}
        <script dangerouslySetInnerHTML={{ __html: `
          if ('fonts' in document) {
            document.fonts.ready.then(function() {
              document.documentElement.classList.add('fonts-loaded');
            });
          }
        `}} />
        {/* Structured Data — Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "KOD 95 ŁÓDŹ",
          url: "https://kod95lodz.com",
          logo: "https://kod95lodz.com/logo.png",
          description: "Profesjonalne szkolenia kierowców — Kod 95 w Łodzi. Kwalifikacja wstępna i okresowa dla kategorii C i D.",
          address: { "@type": "PostalAddress", streetAddress: "Al. Widzewska 14", addressLocality: "Łódź", postalCode: "92-311", addressCountry: "PL" },
          telephone: "+48575633444",
          email: "info@kod95lodz.com",
          foundingDate: "2017",
          sameAs: ["https://wa.me/48575633444", "https://t.me/kod95lodz"],
          areaServed: { "@type": "Country", name: "Poland" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Szkolenia kierowców",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Course", name: "Kod 95 — Kwalifikacja Okresowa (35h)", description: "Krótki kurs Kod 95 dla doświadczonych kierowców" }},
              { "@type": "Offer", itemOffered: { "@type": "Course", name: "Kod 95 — Kwalifikacja Wstępna Przyspieszona (140h)", description: "Pełny kurs Kod 95 — teoria i praktyka" }},
            ],
          },
        })}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
