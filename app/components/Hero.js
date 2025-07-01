import { Heart, Star, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-20 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Centrum Terapii i
              <span className="text-primary-500"> Wspomagania</span>
              <br />
              <span className="text-primary-500">Rozwoju Dziecka</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Profesjonalne centrum terapii dziecka w Kielcach.
              Specjalizujemy się w integracji sensorycznej, treningu słuchowym metodą Warnkego, 
              terapii ręki, terapii pedagogicznej oraz kompleksowym wspomaganiu rozwoju dziecka. 
              Zapraszamy dzieci z Kielc i okolic - ul. Karczówkowska 11.
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
                <div className="text-sm text-gray-600">Indywidualne podejście</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="h-8 w-8 text-accent-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900">8</div>
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
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/top.jpg"
                alt="Centrum Terapii Sensus - Wspomaganie rozwoju dziecka"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-secondary-200 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-accent-200 rounded-lg -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
