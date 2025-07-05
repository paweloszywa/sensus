"use client";
import { Phone, Mail, MapPin, Clock, Building2, Copy } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = () => {
    const accountNumber = "78 1050 1416 1000 0090 8500 2203";
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "516 577 126",
      description: "",
      href: "tel:516577126",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "sensuskielce@gmail.com",
      description: "",
      href: "mailto:sensuskielce@gmail.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Karczówkowska 11, piętro 1",
      description: "25-019 Kielce | Bezpłatne miejsca parkingowe",
      href: "https://maps.google.com/?q=Karczówkowska+11,+25-019+Kielce",
    },
    {
      icon: Building2,
      title: "Dane firmy",
      content: "SENSUS CENTRUM TERAPII I WSPOMAGANIA ROZWOJU DZIECKA",
      description: "Maria Cecko | NIP: 9591459805 | REGON: 386272268",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Skontaktuj się z nami, aby umówić wizytę lub dowiedzieć się więcej o
            naszych usługach. Chętnie odpowiemy na wszystkie pytania.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Informacje kontaktowe
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gray-50 rounded-lg"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-start w-full"
                    >
                      <div className="flex-shrink-0 p-3 bg-primary-100 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {info.content}
                        </p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="flex-shrink-0 p-3 bg-primary-100 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {info.content}
                        </p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-3 text-center">
                Dane bankowe:
              </h4>
              <div className="text-center">
                <p className="text-primary-700 text-sm mb-2">ING Bank Śląski</p>
                <button
                  onClick={copyAccountNumber}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  title="Kliknij aby skopiować numer konta"
                >
                  <span className="text-primary-700 text-sm">
                    78 1050 1416 1000 0090 8500 2203
                  </span>
                  <Copy className="h-4 w-4" />
                </button>
                {copied && (
                  <p className="text-green-600 text-xs mt-1">Skopiowano!</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Jak do nas dotrzeć
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.123456789!2d20.6286!3d50.8703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827f8b1234567%3A0x1234567890abcdef!2sKarczówkowska%2011%2C%2025-019%20Kielce!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja Centrum Sensus"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Karczówkowska+11,+25-019+Kielce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Otwórz w Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
