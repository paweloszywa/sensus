import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sensuskielce.pl"),
  title:
    "Sensus - Centrum Terapii Dziecka | Integracja Sensoryczna i Trening Warnkego Kielce",
  description:
    "Specjalistyczna integracja sensoryczna i trening słuchowy metodą Warnkego w Kielcach. Profesjonalna terapia dzieci z trudnościami sensorycznymi i słuchowymi. Umów wizytę: 516 577 126",
  keywords:
    "integracja sensoryczna Kielce, trening Warnkego Kielce, terapia sensoryczna dzieci Kielce, metoda Warnkego Kielce, zaburzenia przetwarzania słuchowego Kielce, terapia słuchu Kielce, dysleksja terapia Kielce, SI terapia Kielce, centrum integracji sensorycznej Kielce, terapeuta Warnke Kielce",
  verification: {
    google: "UOAnAPOAOz4yXPwSa_snVkxD-W9i-p0JBnqQFika9Tk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://sensuskielce.pl",
    title:
      "Integracja Sensoryczna i Trening Warnkego Kielce | Sensus - Centrum Terapii Dziecka",
    description:
      "Specjalistyczna integracja sensoryczna i trening słuchowy metodą Warnkego w Kielcach. Profesjonalna terapia dzieci z trudnościami sensorycznymi i słuchowymi.",
    siteName: "Sensus Kielce",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sensuskielce.pl/#/schema/LocalBusiness/1",
    name: "Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka",
    legalName: "SENSUS CENTRUM TERAPII I WSPOMAGANIA ROZWOJU DZIECKA",
    alternateName: "Sensus Kielce",
    description:
      "Profesjonalne centrum terapii w Kielcach oferujące integrację sensoryczną, terapię ręki, trening słuchowy metodą Warnkego i wiele więcej.",
    url: "https://sensuskielce.pl",
    telephone: "+48516577126",
    email: "sensuskielce@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Karczówkowska 11",
      addressLocality: "Kielce",
      addressRegion: "Świętokrzyskie",
      postalCode: "25-019",
      addressCountry: {
        "@type": "Country",
        name: "PL",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8677709,
      longitude: 20.6160554,
    },
    openingHours: ["Mo-Su 08:00-21:00"],
    priceRange: "$$",
    serviceArea: {
      "@type": "City",
      name: "Kielce",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+48516577126",
      email: "sensuskielce@gmail.com",
    },
    image: {
      "@type": "ImageObject",
      "@id": "https://sensuskielce.pl/#/schema/logo",
      url: "https://sensuskielce.pl/images/logo3.png",
      contentUrl: "https://sensuskielce.pl/images/logo3.png",
      caption: "Sensus Logo",
    },
    logo: {
      "@type": "ImageObject",
      "@id": "https://sensuskielce.pl/#/schema/logo",
      caption: "Logo Sensus",
      url: "https://sensuskielce.pl/images/logo3.png",
      contentUrl: "https://sensuskielce.pl/images/logo3.png",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi terapeutyczne",
      itemListElement: [
        {
          "@type": "Offer",
          "@id":
            "https://sensuskielce.pl/#/schema/Service/integracja-sensoryczna",
          name: "Integracja Sensoryczna Kielce",
          category: "Terapia Integracji Sensorycznej",
          priceRange: "$$",
          availability: "https://schema.org/InStock",
          areaServed: {
            "@type": "City",
            name: "Kielce",
          },
          itemOffered: {
            "@type": "Service",
            "@id":
              "https://sensuskielce.pl/#/schema/Service/integracja-sensoryczna",
            name: "Integracja Sensoryczna",
            alternateName: [
              "SI Terapia",
              "Terapia Sensoryczna",
              "Integracja Sensoryczna dla dzieci",
            ],
            description:
              "Profesjonalna terapia integracji sensorycznej (SI) w Kielcach. Wspieramy dzieci w prawidłowym odbieraniu, przetwarzaniu i organizowaniu bodźców zmysłowych z otoczenia. Specjalistyczne podejście do zaburzeń przetwarzania sensorycznego.",
            provider: {
              "@type": "LocalBusiness",
              "@id": "https://sensuskielce.pl/#/schema/LocalBusiness/1",
            },
            serviceType: "Terapia Integracji Sensorycznej",
            serviceAudience: {
              "@type": "Audience",
              audienceType: "Dzieci z zaburzeniami sensorycznymi",
            },
          },
        },
        {
          "@type": "Offer",
          "@id": "https://sensuskielce.pl/#/schema/Service/trening-warnkego",
          name: "Trening Słuchowy Metodą Warnkego Kielce",
          category: "Trening Słuchowy Warnke",
          priceRange: "$$",
          availability: "https://schema.org/InStock",
          areaServed: {
            "@type": "City",
            name: "Kielce",
          },
          itemOffered: {
            "@type": "Service",
            "@id": "https://sensuskielce.pl/#/schema/Service/trening-warnkego",
            name: "Trening Słuchowy Metodą Warnkego",
            alternateName: [
              "Metoda Warnkego",
              "Warnke Kielce",
              "Trening Warnke",
              "Terapia Słuchu Warnke",
            ],
            description:
              "Trening słuchowy metodą Warnkego w Kielcach - innowacyjna metoda terapii słuchu skuteczna w leczeniu dysleksji, zaburzeń przetwarzania słuchowego APD i trudności w nauce. Profesjonalna diagnostyka i terapia Warnke.",
            provider: {
              "@type": "LocalBusiness",
              "@id": "https://sensuskielce.pl/#/schema/LocalBusiness/1",
            },
            serviceType: "Trening Słuchowy Warnke",
            serviceAudience: {
              "@type": "Audience",
              audienceType: "Dzieci z dysleksją i zaburzeniami słuchu",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Terapia ręki",
            description:
              "Specjalistyczna terapia usprawniająca funkcje motoryki małej, koordynację wzrokowo-ruchową i sprawność manualną.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Terapia pedagogiczna",
            description:
              "Wsparcie dzieci z trudnościami w nauce, problemy z koncentracją, trudności w czytaniu i pisaniu.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "TUS - Terapia Ustno-Słuchowa",
            description:
              "Specjalistyczna terapia dla dzieci z wadami słuchu, wspomaganie rozwoju mowy i komunikacji.",
          },
        },
      ],
    },
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HFWCVMNQMP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HFWCVMNQMP');
            `,
          }}
        />
        {/* Favicon - Complete Set for Better Google Recognition */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#4F46E5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Microsoft aplikacje */}
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://sensuskielce.pl/",
              url: "https://sensuskielce.pl/",
              name: "Integracja Sensoryczna i Trening Warnkego Kielce | Sensus - Centrum Terapii Dziecka",
              description:
                "Specjalistyczna integracja sensoryczna i trening słuchowy metodą Warnkego w Kielcach. Profesjonalna terapia dzieci z trudnościami sensorycznymi i słuchowymi. Umów wizytę: 516 577 126",
              keywords:
                "integracja sensoryczna Kielce, trening Warnkego Kielce, terapia sensoryczna, metoda Warnkego",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://sensuskielce.pl/#/schema/WebSite/1",
                url: "https://sensuskielce.pl/",
                name: "Sensus",
                alternateName: "Sensus Kielce",
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                "@id": "https://sensuskielce.pl/#/schema/logo",
                caption: "Logo Sensus",
                url: "https://sensuskielce.pl/images/logo3.png",
                contentUrl: "https://sensuskielce.pl/images/logo3.png",
              },
            }),
          }}
        />

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://sensuskielce.pl/#/schema/FAQPage/1",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Co to jest integracja sensoryczna?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Integracja sensoryczna to proces neurologiczny, w którym układ nerwowy odbiera, organizuje i interpretuje informacje zmysłowe z otoczenia. Terapia integracji sensorycznej w Kielcach pomaga dzieciom z trudnościami w przetwarzaniu bodźców sensorycznych.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czym jest trening słuchowy metodą Warnkego?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Trening Warnkego to innowacyjna metoda terapii słuchu skuteczna w leczeniu dysleksji, zaburzeń przetwarzania słuchowego APD i trudności w nauce. W Kielcach oferujemy profesjonalny trening metodą Warnkego dla dzieci.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Gdzie znajdę specjalistę od integracji sensorycznej w Kielcach?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Centrum Sensus w Kielcach przy ul. Karczówkowskiej 11 oferuje profesjonalną terapię integracji sensorycznej. Nasi specjaliści mają wieloletnie doświadczenie w pracy z dziećmi z zaburzeniami sensorycznymi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Czy metoda Warnkego pomaga przy dysleksji?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tak, trening słuchowy metodą Warnkego jest skuteczny w terapii dysleksji. Pomaga poprawić przetwarzanie słuchowe, koncentrację i umiejętności czytania. W Centrum Sensus w Kielcach oferujemy kompleksową diagnostykę i terapię Warnke.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Service-specific Schema for Integracja Sensoryczna */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id":
                "https://sensuskielce.pl/#/schema/Service/integracja-sensoryczna-detailed",
              name: "Integracja Sensoryczna Kielce",
              alternateName: [
                "SI Terapia Kielce",
                "Terapia Sensoryczna Kielce",
                "Integracja Sensoryczna dla dzieci Kielce",
              ],
              description:
                "Profesjonalna terapia integracji sensorycznej (SI) w Kielcach. Specjalistyczne podejście do zaburzeń przetwarzania sensorycznego u dzieci. Doświadczeni terapeuci, nowoczesne metody.",
              provider: {
                "@type": "LocalBusiness",
                "@id": "https://sensuskielce.pl/#/schema/LocalBusiness/1",
                name: "Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka",
              },
              areaServed: {
                "@type": "City",
                name: "Kielce",
              },
              serviceType: "Terapia Integracji Sensorycznej",
              category: "Terapia dzieci z zaburzeniami sensorycznymi",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceRange: "$$",
              },
            }),
          }}
        />

        {/* Service-specific Schema for Trening Warnkego */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id":
                "https://sensuskielce.pl/#/schema/Service/trening-warnkego-detailed",
              name: "Trening Słuchowy Metodą Warnkego Kielce",
              alternateName: [
                "Metoda Warnkego Kielce",
                "Warnke Kielce",
                "Trening Warnke Kielce",
                "Terapia Słuchu Warnke Kielce",
              ],
              description:
                "Trening słuchowy metodą Warnkego w Kielcach - skuteczna terapia dysleksji, zaburzeń przetwarzania słuchowego APD i trudności w nauce. Profesjonalna diagnostyka i kompleksowa terapia.",
              provider: {
                "@type": "LocalBusiness",
                "@id": "https://sensuskielce.pl/#/schema/LocalBusiness/1",
                name: "Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka",
              },
              areaServed: {
                "@type": "City",
                name: "Kielce",
              },
              serviceType: "Trening Słuchowy Warnke",
              category: "Terapia dysleksji i zaburzeń słuchu",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceRange: "$$",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
