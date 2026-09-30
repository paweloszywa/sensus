"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const eventItems = [
    { name: "Szkolenie SI", href: "#szkolenie-integracja-sensoryczna" },
    { name: "Bajkowe wieczory", href: "#bajkowe-wieczory" },
  ];

  const menuItems = [
    { name: "O nas", href: "#about" },
    { name: "Oferta", href: "#services" },
    { name: "Cennik", href: "#pricing" },
    { name: "Galeria", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-12" : "h-20"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/images/logo3.png"
                alt="Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka w Kielcach - logo"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-16"
                }`}
              />
              {/* Ukryty tekst dla SEO */}
              <div className="sr-only">
                <h1>
                  Sensus - Centrum Terapii i Wspomagania Rozwoju Dziecka w
                  Kielcach
                </h1>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Phone number */}
            <a
              href="tel:516577126"
              className="flex items-center text-primary-700 hover:text-primary-800 font-bold transition-all duration-200"
            >
              <Phone className="h-4 w-4 mr-2 text-primary-700" />
              516 577 126
            </a>

            <nav aria-label="Nawigacja główna" className="flex items-center gap-1">
              {eventItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap rounded-lg bg-primary-500 px-3 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-600 hover:shadow-md"
                >
                  {item.name}
                </a>
              ))}
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary-500"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-500 focus:outline-none focus:text-primary-500"
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-4 border-t bg-white px-2 pb-4 pt-4">
              <div>
                <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-primary-700">
                  Wydarzenia
                </p>
                <div className="space-y-1">
                  {eventItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg bg-primary-500 px-3 py-3 text-base font-bold text-white shadow-sm transition-all hover:bg-primary-600 hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Strona
                </p>
                <div className="space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating phone button */}
      <a
        href="tel:516577126"
        className="fixed bottom-6 right-6 bg-accent-400 hover:bg-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 lg:hidden"
        aria-label="Zadzwoń do centrum Sensus - 516 577 126"
      >
        <Phone className="h-6 w-6" />
      </a>
    </header>
  );
}
