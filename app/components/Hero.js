import { CalendarDays, Heart, Star, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex flex-col gap-3 rounded-2xl border border-primary-200 border-l-4 border-l-primary-500 bg-primary-50 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:gap-8 lg:rounded-2xl lg:border-primary-700 lg:bg-primary-500 lg:px-8 lg:py-6 lg:shadow-[0_18px_40px_rgba(30,58,95,0.2)]">
          <div className="flex items-center gap-2 font-bold text-primary-700 lg:gap-3 lg:text-white">
            <CalendarDays className="h-5 w-5 shrink-0" />
            <div>
              <span className="lg:text-lg">Wydarzenia w Sensus</span>
              <span className="hidden text-sm font-normal text-primary-100 lg:block">
                Poznaj nasze najbliższe wydarzenia
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#szkolenie-integracja-sensoryczna"
              className="rounded-lg bg-primary-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600 lg:bg-white lg:px-5 lg:py-3 lg:text-base lg:text-primary-700 lg:shadow-sm lg:hover:bg-primary-50"
            >
              Szkolenie SI · 31.01.2027
            </a>
            <a
              href="#bajkowe-wieczory"
              className="rounded-lg bg-primary-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600 lg:bg-white lg:px-5 lg:py-3 lg:text-base lg:text-primary-700 lg:shadow-sm lg:hover:bg-primary-50"
            >
              Bajkowe wieczory
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Centrum Terapii i
              <span className="text-primary-500"> Wspomagania</span>
              <br />
              <span className="text-primary-500">Rozwoju Dziecka</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Profesjonalne centrum terapii dziecka w Kielcach. Specjalizujemy
              się w integracji sensorycznej, treningu słuchowym metodą Warnkego,
              terapii ręki, terapii pedagogicznej oraz kompleksowym wspomaganiu
              rozwoju dziecka. Zapraszamy dzieci z Kielc i okolic - ul.
              Karczówkowska 11.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 text-center"
              >
                Umów wizytę
              </a>
              <a
                href="#services"
                className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-colors duration-200 text-center"
              >
                Zobacz ofertę
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="h-8 w-8 text-secondary-300" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">
                  Indywidualne podejście
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-accent-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10</div>
                <div className="text-sm text-gray-600">Rodzajów terapii</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Lat doświadczenia</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-secondary-100/70 blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[45%] bg-gradient-to-b from-primary-50 via-white to-secondary-50">
              <Image
                src="/images/team/EwelinaTop.jpg"
                alt="Ewelina Cecko, założycielka Sensus"
                fill
                className="object-contain mix-blend-multiply"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
