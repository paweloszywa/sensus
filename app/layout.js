import './globals.css'

export const metadata = {
  title: 'Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka',
  description: 'Profesjonalne centrum terapii w Kielcach oferujące integrację sensoryczną, terapię ręki, trening słuchowy metodą Warnkego i wiele więcej.',
  keywords: 'terapia dziecka, integracja sensoryczna, Kielce, terapia ręki, trening słuchowy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
