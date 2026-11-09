import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Nasz zespół | Sensus Kielce",
  description:
    "Poznaj zespół Centrum Terapii i Wspomagania Rozwoju Dziecka Sensus w Kielcach.",
};

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
              Poznaj nasz zespół
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Poznaj osoby, które tworzą Sensus i wspierają dzieci w rozwoju.
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
            className="mb-16 grid items-center gap-8 overflow-hidden rounded-3xl bg-primary-50 p-5 sm:grid-cols-2 sm:p-8 lg:gap-12"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                src="/images/team/Ewelina.jpg"
                alt="Ewelina, właścicielka Sensus"
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary-600">
                Z sercem do dzieci i ich rozwoju
              </p>
              <h2
                id="ewelina-heading"
                className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
              >
                Ewelina
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                W Sensus ważne są uważność, życzliwość i poczucie bezpieczeństwa.
                Ewelina dba o to, by każde dziecko mogło rozwijać się we własnym
                tempie, a rodzice czuli, że mają obok siebie wspierających ludzi.
                Z takiego podejścia powstało miejsce, w którym dzieci i ich
                rodziny mogą liczyć na troskę oraz zrozumienie.
              </p>
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
