import { Award, Users, Heart, Target } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Doświadczenie",
      description: "Wykwalifikowana kadra terapeutów z wieloletnim doświadczeniem w pracy z dziećmi."
    },
    {
      icon: Heart,
      title: "Indywidualne podejście",
      description: "Każde dziecko jest wyjątkowe - dostosowujemy terapię do jego potrzeb."
    },
    {
      icon: Target,
      title: "Kompleksowość",
      description: "Oferujemy szeroką gamę terapii w jednym miejscu."
    },
    {
      icon: Users,
      title: "Współpraca z rodzicami",
      description: "Wspieramy rodziców i uczymy technik do zastosowania w domu."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O naszym centrum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jesteśmy zespołem doświadczonych terapeutów, którzy z pasją i zaangażowaniem 
            pomagają dzieciom w ich rozwoju i pokonywaniu trudności.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_bb4064e7.jpg"
              alt="Wnętrze centrum terapii Sensus"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Profesjonalna pomoc dla każdego dziecka
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nasze centrum powstało z myślą o dzieciach, które potrzebują wsparcia 
              w rozwoju. Oferujemy nowoczesne metody terapeutyczne w przyjaznym, 
              bezpiecznym środowisku. Nasz zespół składa się z wykwalifikowanych 
              specjalistów, którzy stale podnoszą swoje kwalifikacje.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Wierzymy, że każde dziecko ma potencjał do rozwoju i naszą misją jest 
              pomóc mu go odkryć i rozwinąć. Współpracujemy ściśle z rodzicami, 
              przekazując im wiedzę i narzędzia do wspierania terapii w domu.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
