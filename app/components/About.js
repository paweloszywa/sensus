import Image from "next/image";
import { Award, Users, Heart, Target } from "lucide-react";

const therapies = [
  "Integracja sensoryczna",
  "Trening Biofeedback",
  "Trening słuchowy metodą Warnkego",
  "Terapia ręki",
  "Terapia pedagogiczna",
  "Terapia neurotaktylna",
];

const education = [
  "Studia licencjackie na kierunku Pedagogika, w zakresie zintegrowanej edukacji wczesnoszkolnej i przedszkolnej z logopedią szkolną",
  "Studia magisterskie na kierunku Pedagogika, w specjalności pedagogika opiekuńczo-wychowawcza",
  "Studia podyplomowe na kierunku Integracja sensoryczna",
  "Studia podyplomowe na kierunku Terapia pedagogiczna",
  "Studia podyplomowe na kierunku Edukacja, rewalidacja i wspomaganie osób z autyzmem i zespołem Aspergera",
];

const courses = [
  "Polskie Standaryzowane Testy Integracji Sensorycznej",
  "Szkolenie HPM — Trener Easy Biofeedback I stopnia",
  "Metoda Warnkego — trening słuchowy, wzrokowy i motoryczny",
  "Zaburzenia słuchu u dzieci w kontekście pracy terapeuty integracji sensorycznej",
  "MNRI — Terapia NeuroTaktylna",
  "MNRI — Integracja odruchów dynamicznych i posturalnych",
  "Terapia ręki i zaburzeń motoryki małej I i II stopnia: diagnoza, terapia i masaż",
  "Symultaniczno-sekwencyjna nauka czytania",
  "Dziecko zagrożone dysleksją, z dysleksją i innymi zaburzeniami — wspomaganie rozwoju",
  "Trening umiejętności społecznych — efektywne kształtowanie kluczowych kompetencji psychospołecznych oraz życiowych",
];

const features = [
  {
    icon: Award,
    title: "Doświadczenie",
    description:
      "Nieustannie rozwijamy wiedzę i umiejętności, by jak najlepiej wspierać dzieci.",
  },
  {
    icon: Heart,
    title: "Indywidualne podejście",
    description:
      "Każde dziecko jest wyjątkowe — dostosowujemy wsparcie do jego potrzeb.",
  },
  {
    icon: Target,
    title: "Kompleksowość",
    description: "Oferujemy szeroką gamę terapii w jednym miejscu.",
  },
  {
    icon: Users,
    title: "Współpraca z rodzicami",
    description:
      "Zapewniamy rodzicom zrozumienie, wskazówki i życzliwe wsparcie.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            O nas
          </h2>
          <p className="text-xl text-gray-700">
            Poznaj Sensus i osobę, która dba o to, by dzieci i ich rodziny
            otrzymały profesjonalne, życzliwe wsparcie.
          </p>
        </div>

        <div className="relative mx-auto mb-16 w-full max-w-5xl overflow-hidden rounded-3xl bg-gray-100 shadow-lg">
          <Image
            src="/images/team/DSC_8600.jpg"
            alt="Zespół Sensus"
            width={1800}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gray-200 shadow-xl">
              <Image
                src="/images/team/Ewelina.jpg"
                alt="Ewelina Cecko"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-secondary-600">
              Założycielka Sensus
            </p>
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Nazywam się Ewelina Cecko
            </h3>
            <div className="space-y-5 leading-relaxed text-gray-700">
              <p>
                Jestem założycielką Sensus Centrum Terapii i Wspomagania Rozwoju
                Dziecka. Sensus powstało z pasji do pracy z dziećmi i potrzeby
                wspierania ich rozwoju. Wierzę, że każde dziecko jest wyjątkowe
                i zasługuje na indywidualne podejście.
              </p>
              <p>
                Zależało mi na stworzeniu miejsca, w którym dzieci i ich rodzice
                otrzymają profesjonalną pomoc, zrozumienie i życzliwe wsparcie.
                W codziennej pracy ważne są dla mnie uważność, cierpliwość i
                relacja oparta na zaufaniu — to one pomagają dzieciom rozwijać
                skrzydła.
              </p>
              <p>
                Prowadzę również szkolenia i warsztaty dla osób pracujących z
                dziećmi, dzieląc się wiedzą, doświadczeniem i praktycznymi
                rozwiązaniami. Nieustannie rozwijam swoje kompetencje,
                uczestnicząc w kursach, szkoleniach i warsztatach.
              </p>
              <p>
                Moją rolą jest także rozwijanie centrum, organizowanie jego
                codziennego funkcjonowania i dbanie o to, by Sensus było
                przyjazne zarówno dzieciom, jak i ich rodzicom.
              </p>
            </div>
          </div>
        </div>

        <section aria-labelledby="about-therapies" className="mb-16">
          <h3
            id="about-therapies"
            className="mb-7 text-center text-2xl font-bold text-gray-900"
          >
            Prowadzę zajęcia z zakresu
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {therapies.map((therapy) => (
              <li
                key={therapy}
                className="rounded-xl border border-gray-100 bg-white p-4 text-center font-medium text-gray-700 shadow-sm"
              >
                {therapy}
              </li>
            ))}
          </ul>
        </section>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <section
            aria-labelledby="about-education"
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
          >
            <h3
              id="about-education"
              className="mb-6 text-2xl font-bold text-gray-900"
            >
              Wykształcenie
            </h3>
            <ul className="space-y-4">
              {education.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-secondary-300 pl-4 leading-relaxed text-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="about-courses"
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
          >
            <h3
              id="about-courses"
              className="mb-6 text-2xl font-bold text-gray-900"
            >
              Kursy i szkolenia
            </h3>
            <ul className="space-y-4">
              {courses.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-primary-200 pl-4 leading-relaxed text-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-100 bg-white p-6 text-center transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <feature.icon className="h-12 w-12 text-secondary-300" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
