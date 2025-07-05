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
          <div className="hidden md:flex items-center space-x-8">
            {/* Phone number */}
            <a
              href="tel:516577126"
              className="flex items-center text-primary-700 hover:text-primary-800 font-bold transition-all duration-200"
            >
              <Phone className="h-4 w-4 mr-2 text-primary-700" />
              516 577 126
            </a>

            <nav className="flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-500 px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating phone button */}
      <a
        href="tel:516577126"
        className="fixed bottom-6 right-6 bg-accent-400 hover:bg-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 md:hidden"
        aria-label="Zadzwoń do centrum Sensus - 516 577 126"
      >
        <Phone className="h-6 w-6" />
      </a>
    </header>
  );
}
