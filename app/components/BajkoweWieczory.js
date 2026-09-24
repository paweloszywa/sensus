import Image from "next/image";
import {
  BookOpen,
  CalendarClock,
  HeartHandshake,
  Leaf,
  Moon,
  Music2,
  Phone,
} from "lucide-react";
import poster from "../../images/posters/bajkowe-wieczory.webp";

export default function BajkoweWieczory() {
  const highlights = [
    { icon: BookOpen, text: "Bajki wspierające rozwój emocjonalny" },
    { icon: Music2, text: "Muzyka relaksacyjna grana przez DJ-a" },
    { icon: Leaf, text: "Relaksacyjne nuty zapachowe" },
    { icon: HeartHandshake, text: "Rozmowy o emocjach i poczuciu bezpieczeństwa" },
    { icon: Moon, text: "Chwila spokoju, relaksu i wyobraźni" },
  ];

  return (
    <section
      id="bajkowe-wieczory"
      className="overflow-hidden bg-orange-50 py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(280px,440px)_1fr] lg:gap-16 lg:px-8">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={poster}
            alt="Plakat wydarzenia Bajkowe wieczory w centrum Sensus"
            className="h-auto w-full rounded-lg shadow-xl"
            sizes="(max-width: 1024px) 90vw, 440px"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            Jesienny cykl dla dzieci
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Bajkowe wieczory
          </h2>
          <p className="mb-7 max-w-2xl text-lg leading-relaxed text-gray-700">
            Małe historie mogą wywoływać wielkie emocje. Zapraszamy dzieci w
            wieku 4-8 lat na wyjątkowe 45 minut pełne bajek, rozmów o emocjach
            i wyciszenia.
          </p>

          <ul className="mb-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-gray-700">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 text-gray-800">
            <span className="inline-flex items-center gap-2 font-semibold">
              <CalendarClock className="h-5 w-5 text-orange-600" />
              Czwartki, godz. 19:00
            </span>
            <span className="font-semibold">Grupy 8-10 osób</span>
          </div>

          <a
            href="tel:516577126"
            className="inline-flex items-center gap-3 rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-800"
          >
            <Phone className="h-5 w-5" />
            Zapisy: 516 577 126
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-violet-50 p-6 shadow-[0_18px_40px_rgba(14,116,144,0.08)] ring-1 ring-sky-100 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-sky-600 px-3 py-1 text-sm font-semibold text-white shadow-sm">
                Wkrótce w Sensus
              </span>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Szkolenia z integracji sensorycznej
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700 md:text-lg">
                W Sensus przygotowujemy cykl warsztatowych szkoleń dla studentów
                i przyszłych specjalistów, poświęconych integracji sensorycznej.
                To praktyczne zajęcia, które pomogą lepiej zrozumieć, jak
                odbieranie bodźców sensorycznych wpływa na rozwój dziecka,
                koncentrację, samoregulację i funkcjonowanie emocjonalne.
              </p>
            </div>

            <div className="lg:min-w-[230px] lg:text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Start
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                koniec października
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Szczegółowy program i zapisy pojawią się wkrótce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}