import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ewelina Cecko | Sensus Kielce",
  description:
    "Poznaj Ewelinę Cecko, założycielkę Sensus Centrum Terapii i Wspomagania Rozwoju Dziecka w Kielcach.",
};

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

const teamMembers = [
  {
    name: "Karolina Giersz",
    role: "Pedagog specjalna",
    image: "/images/team/Karolina.jpg",
    description:
      "Pracuje z dziećmi w wieku przedszkolnym i szkolnym, uwzględniając ich zróżnicowane potrzeby rozwojowe i edukacyjne. Łączy wiedzę z pedagogiki specjalnej i integracji sensorycznej, wspierając samodzielność oraz rozwój poznawczy, społeczny i emocjonalny. W relacji z dzieckiem stawia na zaufanie, poczucie bezpieczeństwa i wzmacnianie jego mocnych stron.",
    therapies: [
      "Integracja sensoryczna",
      "Terapia ręki",
      "Terapia pedagogiczna",
      "Zajęcia wspierające rozwój dzieci z niepełnosprawnością intelektualną",
    ],
    education: [
      "Pedagogika specjalna — resocjalizacja (studia licencjackie)",
      "Pedagogika specjalna — edukacja i rehabilitacja uczniów z niepełnosprawnością intelektualną (studia magisterskie)",
      "Diagnoza, terapia i edukacja osób z zaburzeniami ze spektrum autyzmu (studia podyplomowe)",
      "Integracja sensoryczna (studia podyplomowe)",
      "Terapia ręki — diagnoza, terapia i masaż; liczne szkolenia, kursy i webinaria",
    ],
  },
  {
    name: "Klaudia Szczerek",
    role: "Magister fizjoterapii, terapeutka integracji sensorycznej",
    image: "/images/team/Klaudia.jpg",
    description:
      "Wspiera rozwój dzieci, pomagając im lepiej poznawać swoje ciało, rozumieć odbierane bodźce i radzić sobie z codziennymi wyzwaniami. Nieustannie poszerza wiedzę, by jak najlepiej odpowiadać na potrzeby małych podopiecznych. Czerpie satysfakcję z obserwowania ich postępów i towarzyszenia im w odkrywaniu własnych możliwości.",
    therapies: ["Integracja sensoryczna", "Terapia neurotaktylna"],
    education: [
      "Studia magisterskie na kierunku Fizjoterapia — Uniwersytet Jana Kochanowskiego w Kielcach",
      "Kurs Kinesiotapingu",
      "Integracja sensoryczna I stopnia — neurobiologiczne podstawy rozwoju (PSTIS)",
      "Integracja sensoryczna II stopnia — diagnoza i terapia (PSTIS)",
      "Kurs Globalnej Terapii Stopy",
      "Kurs Terapii NeuroTaktylnej",
      "Studentka Akademii Osteopatii w Krakowie",
    ],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary-600">
              Sensus · Kielce
            </p>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              O nas
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Poznaj Sensus i Ewelinę Cecko — założycielkę centrum, która z
              pasją wspiera rozwój dzieci i ich rodzin.
            </p>
          </div>

          <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-xl sm:aspect-[16/9]">
            <Image
              src="/images/team/DSC_8600.jpg"
              alt="Cały zespół Sensus podczas wspólnego zdjęcia"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
              <p className="text-lg font-semibold text-white sm:text-xl">
                Zespół Sensus
              </p>
            </div>
          </div>

          <section
            aria-labelledby="ewelina-heading"
            className="mb-12 grid items-center gap-8 overflow-hidden rounded-3xl bg-primary-50 p-5 sm:grid-cols-2 sm:p-8 lg:gap-12"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/team/Ewelina.jpg"
                alt="Ewelina Cecko"
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary-600">
                Założycielka Sensus
              </p>
              <h2
                id="ewelina-heading"
                className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                Ewelina Cecko
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Z pasji do pracy z dziećmi stworzyłam miejsce, w którym każde
                dziecko jest traktowane indywidualnie, a rodzice otrzymują
                profesjonalną pomoc, zrozumienie i życzliwe wsparcie.
              </p>
            </div>
          </section>

          <div className="mx-auto mb-14 max-w-4xl space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              Sensus powstało z potrzeby wspierania rozwoju dzieci i
              przekonania, że każde z nich jest wyjątkowe. Od początku zależało
              mi na stworzeniu miejsca, w którym dzieci i ich rodzice poczują
              się bezpiecznie i otrzymają pomoc dopasowaną do swoich potrzeb.
            </p>
            <p>
              Prowadzę szkolenia i warsztaty dla osób pracujących z dziećmi,
              dzieląc się wiedzą, doświadczeniem i praktycznymi rozwiązaniami.
              Nieustannie rozwijam swoje kompetencje — wierzę, że w pracy
              terapeutycznej nauka nigdy się nie kończy.
            </p>
            <p>
              Moja rola to także rozwijanie centrum, organizowanie jego
              codziennego funkcjonowania i dbanie o to, by Sensus było
              przyjaznym miejscem dla dzieci i ich rodziców.
            </p>
            <blockquote className="border-l-4 border-secondary-300 py-2 pl-5 text-xl font-medium text-primary-700">
              Wierzę, że za każdym małym sukcesem dziecka stoją uważność,
              cierpliwość, odpowiednie wsparcie i relacja oparta na zaufaniu.
              Cieszę się, że mogę pomagać dzieciom odkrywać ich możliwości i
              rozwijać skrzydła.
            </blockquote>
          </div>

          <section aria-labelledby="therapies-heading" className="mb-14">
            <div className="mb-6 text-center">
              <h2
                id="therapies-heading"
                className="text-2xl font-bold text-gray-900 sm:text-3xl"
              >
                W czym wspieram dzieci
              </h2>
            </div>
            <ul className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="grid gap-8 lg:grid-cols-2">
            <section
              aria-labelledby="education-heading"
              className="rounded-3xl bg-gray-50 p-6 sm:p-8"
            >
              <h2
                id="education-heading"
                className="mb-6 text-2xl font-bold text-gray-900"
              >
                Wykształcenie
              </h2>
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
              aria-labelledby="courses-heading"
              className="rounded-3xl bg-gray-50 p-6 sm:p-8"
            >
              <h2
                id="courses-heading"
                className="mb-6 text-2xl font-bold text-gray-900"
              >
                Kursy i szkolenia
              </h2>
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

          <section aria-labelledby="team-members-heading" className="mt-16">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2
                id="team-members-heading"
                className="text-3xl font-bold text-gray-900"
              >
                Poznaj nasz zespół
              </h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
                >
                  <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
                    <div className="relative min-h-80 bg-gray-100 sm:min-h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="mb-2 text-sm font-semibold text-secondary-600">
                        {member.role}
                      </p>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="mb-6 leading-relaxed text-gray-600">
                        {member.description}
                      </p>
                      <h4 className="mb-3 font-semibold text-gray-900">
                        Prowadzone terapie
                      </h4>
                      <ul className="mb-6 list-inside list-disc space-y-1 text-gray-600">
                        {member.therapies.map((therapy) => (
                          <li key={therapy}>{therapy}</li>
                        ))}
                      </ul>
                      <h4 className="mb-3 font-semibold text-gray-900">
                        Wykształcenie i kursy
                      </h4>
                      <ul className="space-y-2 text-sm leading-relaxed text-gray-600">
                        {member.education.map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-primary-200 pl-3"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-14 text-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Skontaktuj się z nami
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
