import './globals.css'

export const metadata = {
  title: 'Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka | Kielce',
  description: 'Profesjonalne centrum terapii dziecka w Kielcach. Integracja sensoryczna, terapia ręki, trening słuchowy Warnkego, TUS. ul. Karczówkowska 11. Umów wizytę: 516 577 126',
  keywords: 'terapia dziecka Kielce, integracja sensoryczna Kielce, terapia ręki Kielce, centrum terapii Kielce, Warnke Kielce, TUS Kielce, wspomaganie rozwoju dziecka, terapeuta dziecięcy Kielce',
  verification: {
    google: 'UOAnAPOAOz4yXPwSa_snVkxD-W9i-p0JBnqQFika9Tk',
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka",
    "description": "Profesjonalne centrum terapii w Kielcach oferujące integrację sensoryczną, terapię ręki, trening słuchowy metodą Warnkego i wiele więcej.",
    "url": "https://sensuskielce.pl",
    "telephone": "+48516577126",
    "email": "sensuskielce@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Karczówkowska 11",
      "addressLocality": "Kielce",
      "postalCode": "25-019",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.8703,
      "longitude": 20.6286
    },
    "openingHours": ["Mo-Su 08:00-21:00"],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": "Kielce"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi terapeutyczne",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integracja sensoryczna",
            "description": "Terapia wspierająca dzieci w prawidłowym odbieraniu, przetwarzaniu i organizowaniu bodźców zmysłowych z otoczenia."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trening słuchowy metodą Warnkego",
            "description": "Innowacyjna metoda terapii słuchu skuteczna w leczeniu dysleksji, zaburzeń przetwarzania słuchowego APD i trudności w nauce."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terapia ręki",
            "description": "Specjalistyczna terapia usprawniająca funkcje motoryki małej, koordynację wzrokowo-ruchową i sprawność manualną."
          }
        }
      ]
    }
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
