import {
  Brain,
  Ear,
  Hand,
  BookOpen,
  Target,
  Waves,
  Zap,
  Eye,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Integracja sensoryczna",
      description:
        "Terapia wspierająca dzieci w prawidłowym odbieraniu, przetwarzaniu i organizowaniu bodźców zmysłowych z otoczenia.",
      details: [
        "Usprawnia koncentrację",
        "Poprawia koordynację",
        "Redukuje nadwrażliwość",
        "Rozwija świadomość ciała",
        "Wspiera planowanie motoryczne",
      ],
    },
    {
      icon: Ear,
      title: "Trening słuchowy metodą Warnkego",
      description:
        "Innowacyjna metoda terapii słuchu skuteczna w leczeniu dysleksji, zaburzeń przetwarzania słuchowego APD i trudności w nauce.",
      details: [
        "Wspiera dzieci z dysleksją",
        "Poprawia przetwarzanie słuchowe",
        "Rozwija umiejętności czytania i pisania",
        "Pomaga w problemach z wymową",
      ],
    },
    {
      icon: Hand,
      title: "Terapia ręki",
      description:
        "Specjalistyczna terapia usprawniająca funkcje motoryki małej, koordynację wzrokowo-ruchową i sprawność manualną w codziennych czynnościach.",
      details: [
        "Usprawnia chwyt",
        "Przygotowuje do pisania",
        "Rozwija precyzję ruchów",
        "Poprawia koordynację wzrokowo-ruchową",
      ],
    },
    {
      icon: BookOpen,
      title: "Terapia pedagogiczna",
      description:
        "Wsparcie w nauce i rozwijaniu umiejętności szkolnych dostosowane do potrzeb dziecka.",
      details: [
        "Wspiera naukę czytania",
        "Rozwija umiejętności matematyczne",
        "Buduje motywację do nauki",
        "Pomaga w trudnościach z pisaniem",
        "Rozwija umiejętności poznawcze",
      ],
    },
    {
      icon: Target,
      title: "TUS (Trening Umiejętności Społecznych)",
      description:
        "Program rozwijający kompetencje społeczne i umiejętności komunikacyjne.",
      details: [
        "Uczy zasad współpracy",
        "Rozwija empatię",
        "Buduje pewność siebie",
        "Wspiera umiejętności komunikacyjne",
        "Pomaga w nawiązywaniu relacji",
      ],
    },
    {
      icon: Waves,
      title: "Terapia neurotaktylna",
      description:
        "Metoda stymulacji dotykowej wspierająca rozwój układu nerwowego.",
      details: [
        "Usprawnia percepcję dotykową",
        "Redukuje napięcie",
        "Wspiera rozwój neuromotoryczny",
        "Poprawa samoregulacji",
        "Poprawa zachowania i funkcjonowania emocjonalnego",
      ],
    },
    {
      icon: Zap,
      title: "Korekcja wad postawy",
      description:
        "Kompleksowa terapia usprawniająca postawę ciała i funkcje motoryczne.",
      details: [
        "Poprawia sylwetkę",
        "Wzmconienie mięśni posturalnych",
        "Uczy prawidłowych wzorców ruchowych",
        "Poprawia równowagę i stabilność",
        "Zwiększa elastyczność i ruchomość",
      ],
    },
    {
      icon: Eye,
      title: "Trening koncentracji uwagi",
      description:
        "Specjalistyczny program rozwijający zdolność skupienia i kontroli uwagi.",
      details: [
        "Poprawia zdolność skupienia na zadaniu",
        "Zwiększenie tempa pracy",
        "Usprawnia pamięć i organizację",
        "Rozwija funkcje wykonawcze",
        "Poprawia zdolność planowania",
        "Rozwija umiejętność ignorowania rozpraszaczy",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nasza oferta
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferujemy szeroki zakres specjalistycznych terapii dostosowanych do
            indywidualnych potrzeb każdego dziecka.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="h-12 w-12 text-secondary-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  );
}
