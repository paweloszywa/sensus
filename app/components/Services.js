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
    {
      icon: Brain,
      title: "Biofeedback",
      description:
        "Nowoczesny trening samoregulacji pracy organizmu i układu nerwowego.",
      details: [
        "Poprawa koncentracji i uwagi",
        "Lepsza pamięć",
        "Większa stabilność emocjonalna",
        "Obniżenie poziomu napięcia i lęku",
        "Zwiększenie odporności na stres",
        "Lepsza jakość snu",
        "Bezpieczna, nieinwazyjna metoda",
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
          {services.map((service, index) => {
            // Center the last card if it's alone in the last row (e.g., 9 cards, 4 per row)
            const isLast = index === services.length - 1;
            const isAloneInRow = services.length % 4 === 1 && isLast;
            if (isAloneInRow) {
              return (
                <div key={index} className="col-span-full flex justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 max-w-sm w-full">
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
                </div>
              );
            }
            return (
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
            );
          })}
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

      <div className="mt-16 bg-white p-8 rounded-lg border border-gray-100 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Biofeedback – nowoczesny trening samoregulacji
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Biofeedback to nowoczesna i bezpieczna metoda treningowa, która uczy
          świadomej regulacji pracy organizmu, w szczególności układu nerwowego.
          Dzięki informacji zwrotnej otrzymywanej w czasie rzeczywistym możliwe
          jest realne wpływanie na koncentrację, poziom stresu, wyciszenie oraz
          relaksację.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Podczas treningu osoba ćwicząca otrzymuje czytelne sygnały pokazujące,
          jak funkcjonuje jej organizm – m.in. mózg, mięśnie, rytm serca czy
          reakcje skórne. Informacje te przedstawiane są w przyjaznej formie,
          często jako gra komputerowa, co zwiększa motywację i zaangażowanie.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          Jak działa biofeedback?
        </h4>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Biofeedback opiera się na mechanizmie biologicznego sprzężenia
          zwrotnego. Oznacza to, że reakcja organizmu wpływa na sygnał, który ją
          wywołał – wzmacniając lub osłabiając określone procesy.
        </p>
        <p className="text-gray-700 mb-2">
          W trakcie treningów osoba ćwiczona:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>uczy się rozpoznawać reakcje swojego ciała,</li>
          <li>świadomie wpływa na ich zmianę,</li>
          <li>stopniowo wzmacnia korzystne wzorce funkcjonowania.</li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Proces ten wykorzystuje plastyczność układu nerwowego, czyli jego
          zdolność do uczenia się i adaptacji. Regularne treningi sprzyjają
          powstawaniu nowych połączeń nerwowych oraz wzmacnianiu już
          istniejących, co przekłada się na poprawę funkcjonowania w codziennym
          życiu.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          Aktywna rola osoby trenowanej
        </h4>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Biofeedback nie jest bierną terapią. Skuteczność treningu opiera się
          na aktywnym zaangażowaniu osoby ćwiczącej. Poprzez koncentrację,
          sposób myślenia i regulację emocji osoba uczy się wpływać na przebieg
          treningu i własne reakcje.
        </p>
        <p className="text-gray-700 mb-2">Dodatkowo:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>pozytywne wzmocnienia,</li>
          <li>wsparcie i uważność trenera,</li>
          <li>motywująca forma zajęć</li>
        </ul>
        <p className="text-gray-700 mb-4 leading-relaxed">
          sprzyjają wydzielaniu neuroprzekaźników (m.in. dopaminy i serotoniny),
          które wspierają proces uczenia się oraz stabilizację układu nerwowego.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          Rodzaje biofeedbacku
        </h4>
        <p className="text-gray-700 mb-2">
          W zależności od monitorowanych funkcji organizmu wyróżniamy m.in.:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Neurofeedback (EEG Biofeedback) – związany z aktywnością ośrodkowego
            układu nerwowego: EEG Biofeedback, HEG Biofeedback
          </li>
          <li>Biofeedback obwodowy: GSR / SCL – reakcja skórno-galwaniczna</li>
          <li>ST – biofeedback temperatury</li>
          <li>SEMG – biofeedback mięśniowy</li>
          <li>RSA – biofeedback zmienności rytmu serca</li>
        </ul>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          Efekty treningów biofeedback
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>poprawa koncentracji i uwagi</li>
          <li>lepsza pamięć</li>
          <li>większa stabilność emocjonalna</li>
          <li>obniżenie poziomu napięcia i lęku</li>
          <li>zwiększenie odporności na stres</li>
          <li>poprawa nastroju</li>
          <li>lepsza jakość snu</li>
          <li>wzrost pewności siebie</li>
          <li>poprawa koordynacji ruchowej</li>
          <li>lepsza organizacja i planowanie działań</li>
          <li>rozwój umiejętności społecznych i komunikacyjnych</li>
          <li>wsparcie umiejętności szkolnych (czytanie, pisanie)</li>
        </ul>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          Dla kogo przeznaczony jest biofeedback?
        </h4>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Biofeedback jest przeznaczony dla dzieci od 5. roku życia, młodzieży
          oraz osób dorosłych. Poprawa funkcjonowania układu nerwowego wpływa
          pozytywnie na rozwój emocjonalny, poznawczy i jakość codziennego
          życia.
        </p>
        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          Bezpieczeństwo
        </h4>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Biofeedback to metoda: nieinwazyjna, całkowicie bezpieczna, pozbawiona
          skutków ubocznych.
        </p>
      </div>
    </section>
  );
}
