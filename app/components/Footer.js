import { Heart, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "O nas", href: "#about" },
    { name: "Oferta", href: "#services" },
    { name: "Cennik", href: "#pricing" },
    { name: "Galeria", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
  ];

  const services = [
    "Integracja sensoryczna",
    "Trening słuchowy metodą Warnkego",
    "Terapia ręki",
    "Terapia pedagogiczna",
    "TUS",
    "Terapia neurotaktylna",
    "Korekcja wad postawy",
    "Trening koncentracji uwagi",
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/images/logo3.png"
                alt="Sensus Logo"
                className="h-16 w-auto rounded-lg bg-white p-2"
              />
              {/* Ukryty tekst dla SEO */}
              <div className="sr-only">
                <span>Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka</span>
                <span>Profesjonalne terapie dla dzieci w Kielcach</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profesjonalne centrum terapii i wspomagania rozwoju dziecka w
              Kielcach. Pomagamy dzieciom rozwijać swój potencjał poprzez
              specjalistyczne terapie.
            </p>
            <div className="flex items-center text-sm text-gray-300">
              <Heart className="h-4 w-4 mr-2 text-secondary-300" />
              Stworzone z pasją dla dzieci
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nasze usługi</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
              <li className="text-white text-sm font-medium">
                <a
                  href="#services"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Zobacz wszystkie usługi →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent-400 flex-shrink-0" />
                <div>
                  <a
                    href="tel:516577126"
                    className="text-white font-medium hover:text-gray-300 transition-colors duration-200"
                  >
                    516 577 126
                  </a>
                  <div className="text-gray-300 text-sm">
                    Pon-Nd: 8:00-21:00
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-secondary-300 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:sensuskielce@gmail.com"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    sensuskielce@gmail.com
                  </a>
                  <div className="text-gray-300 text-sm">Odpowiadamy w 24h</div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="https://maps.google.com/?q=Karczówkowska+11,+25-019+Kielce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    ul. Karczówkowska 11
                  </a>
                  <div className="text-gray-300 text-sm">25-019 Kielce</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="text-gray-300 text-sm mb-4">
              © {currentYear} Sensus - Centrum Terapii i Wspomagania Rozwoju
              Dziecka. Wszystkie prawa zastrzeżone.
            </div>
          </div>

          <div className="mt-4 text-center text-gray-500 text-xs">
            <p>
              Centrum powstało z myślą o dzieciach potrzebujących wsparcia w
              rozwoju. Każde dziecko zasługuje na profesjonalną pomoc i
              troskliwą opiekę.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
