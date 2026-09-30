import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  Coffee,
  CreditCard,
  FolderOpen,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Phone,
  Utensils,
  UsersRound,
} from "lucide-react";

const keyBenefits = [
  { icon: FolderOpen, text: "Teczka z materiałami szkoleniowymi" },
  { icon: BadgeCheck, text: "Zaświadczenie uczestnictwa" },
];

const additionalBenefits = ["Kawa i herbata", "Poczęstunek", "Obiad"];

export default function SzkolenieIntegracjaSensoryczna() {
  return (
    <section id="szkolenie-integracja-sensoryczna" className="bg-teal-50 py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-3xl border border-teal-200 bg-white shadow-[0_24px_60px_rgba(15,118,110,0.12)]">
          <div className="bg-teal-800 px-6 py-8 text-white md:px-10 md:py-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-200">
              Szkolenie warsztatowe
            </p>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
              Szkolenie z integracji sensorycznej
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-teal-50 md:text-xl">
              „Podstawy integracji sensorycznej oraz jej znaczenie dla rozwoju i
              funkcjonowania dziecka”
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <CalendarDays className="h-5 w-5 shrink-0 text-teal-200" />
                <span className="font-semibold">
                  25 października 2026 r. – niedziela
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <Clock3 className="h-5 w-5 shrink-0 text-teal-200" />
                <span className="font-semibold">9:00–17:00</span>
              </div>
              <a
                href="https://maps.app.goo.gl/o2edU7VFSBTyoNTS6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-white/10 p-4 font-semibold transition-colors hover:bg-white/20"
              >
                <MapPin className="h-5 w-5 shrink-0 text-teal-200" />
                <span>
                  ul. Karczówkowska 11, piętro 1
                  <span className="block text-sm font-normal text-teal-100">
                    25-019 Kielce
                  </span>
                </span>
              </a>
            </div>
            <p className="mt-3 text-sm text-teal-100">
              Sensus – Centrum Terapii i Wspomagania Rozwoju Dziecka
            </p>
          </div>

          <div className="space-y-9 p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
              <div>
                <h3 className="text-xl font-bold text-gray-900">O szkoleniu</h3>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Zapraszamy na szkolenie warsztatowe poświęcone podstawom
                  integracji sensorycznej oraz jej znaczeniu dla rozwoju i
                  funkcjonowania dziecka.
                </p>
                <p className="mt-3 leading-relaxed text-gray-700">
                  Szkolenie skierowane jest przede wszystkim do studentów
                  ostatniego roku pedagogiki, pedagogiki specjalnej oraz
                  psychologii, a także osób pracujących z dziećmi, które chcą
                  poszerzyć swoją wiedzę z zakresu integracji sensorycznej.
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <UsersRound className="h-6 w-6 shrink-0 text-teal-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Wiedza i praktyka
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Kameralna grupa umożliwi aktywny udział, zadawanie pytań i
                  samodzielne wypróbowanie prezentowanych pomocy oraz
                  aktywności. Uczestnicy nie tylko zdobędą wiedzę, ale również
                  doświadczą wybranych ćwiczeń i poznają praktyczne
                  zastosowanie omawianych zagadnień.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-xl font-bold text-gray-900">
                Co otrzymuje uczestnik?
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {keyBenefits.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex min-h-24 items-center gap-4 rounded-2xl border border-teal-200 bg-teal-50 px-5 py-4 shadow-sm"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-800 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-base font-semibold text-gray-900">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="text-base font-semibold text-gray-700">
                  Dodatkowo w cenie
                </p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {additionalBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-base text-gray-700"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 border-t border-gray-100 pt-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl bg-teal-800 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
                  Cena za osobę
                </p>
                <p className="mt-2 text-4xl font-bold">499 zł</p>
                <p className="mt-3 text-sm leading-relaxed text-teal-50">
                  Cena obejmuje udział w całodziennym szkoleniu oraz wszystkie
                  wymienione świadczenia.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href="tel:516577126"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-teal-800 shadow-sm transition-colors hover:bg-teal-50"
                  >
                    <Phone className="h-5 w-5 shrink-0" />
                    Zadzwoń
                  </a>
                  <a
                    href="https://wa.me/48516577126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-600"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" />
                    WhatsApp
                  </a>
                  <a
                    href="https://m.me/61576806726313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                  >
                    <MessagesSquare className="h-5 w-5 shrink-0" />
                    Messenger
                  </a>
                  <a
                    href="mailto:sensuskielce@gmail.com?subject=Szkolenie%20SI%2025.10.2026"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-teal-100 px-3 py-3 text-sm font-semibold text-teal-900 shadow-sm transition-colors hover:bg-teal-50"
                  >
                    <Mail className="h-5 w-5 shrink-0" />
                    Napisz e-mail
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 shrink-0 text-teal-700" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Rezerwacja i płatność
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  Rezerwacja miejsca następuje po dokonaniu wpłaty. Wpłać
                  najpóźniej do 22 października 2026 r. lub do wyczerpania
                  dostępnych miejsc.
                </p>
                <div className="mt-5 space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
                  <p className="break-all">
                    <span className="font-semibold text-gray-900">
                      Numer konta:
                    </span>{" "}
                    <span className="text-gray-700">
                      78 1050 1416 1000 0090 8500 2203
                    </span>
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Tytuł przelewu:
                    </span>{" "}
                    <span className="text-gray-700">
                      „Szkolenie SI 25.10.2026 – imię i nazwisko uczestnika”
                    </span>
                  </p>
                </div>
                <p className="mt-3 text-sm font-medium text-teal-800">
                  Liczba miejsc jest ograniczona ze względu na kameralny
                  charakter i warsztatową formę szkolenia.
                </p>
              </div>
            </div>

            <p className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-gray-700">
              <span className="font-bold text-gray-900">
                Ważna informacja:{" "}
              </span>
              Szkolenie ma charakter edukacyjny i warsztatowy. Nie nadaje
              uprawnień do prowadzenia terapii integracji sensorycznej ani nie
              zastępuje specjalistycznego kształcenia i wymaganych kwalifikacji
              zawodowych.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}