import { Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Oferta', href: '#services' },
    { name: 'Cennik', href: '#pricing' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' }
  ]

  const services = [
    'Integracja sensoryczna',
    'Trening słuchowy metodą Warnkego',
    'Terapia ręki',
    'Terapia pedagogiczna',
    'TUS',
    'Terapia neurotaktylna',
    'Korekcja wad postawy',
    'Trening koncentracji uwagi'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo1.png" 
                alt="Sensus Logo" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Sensus</h3>
                <p className="text-sm text-gray-400">Centrum Terapii</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Profesjonalne centrum terapii i wspomagania rozwoju dziecka w Kielcach. 
              Pomagamy dzieciom rozwijać swój potencjał poprzez specjalistyczne terapie.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-secondary-300" />
              Stworzone z pasją dla dzieci
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nasze usługi</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
              <li className="text-primary-500 text-sm font-medium">
                <a href="#services">Zobacz wszystkie usługi →</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">516 577 126</div>
                  <div className="text-gray-400 text-sm">Pon-Pt: 8:00-18:00</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-secondary-300 flex-shrink-0" />
                <div>
                  <div className="text-white">sensuskielce@gmail.com</div>
                  <div className="text-gray-400 text-sm">Odpowiadamy w 24h</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white">ul. Karczówkowska 11</div>
                  <div className="text-gray-400 text-sm">25-019 Kielce</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka. 
              Wszystkie prawa zastrzeżone.
            </div>
            <div className="text-gray-400 text-sm">
              <span className="mr-4">NIP: 9591459805</span>
              <span>ING Bank Śląski</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>
              Centrum powstało z myślą o dzieciach potrzebujących wsparcia w rozwoju. 
              Każde dziecko zasługuje na profesjonalną pomoc i troskliwą opiekę.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
