import { Award, Users, Heart, Target } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Doświadczenie",
      description:
        "Wieloletnie doświadczenie w pracy z dziećmi i stałe doskonalenie metod terapeutycznych.",
    },
    {
      icon: Heart,
      title: "Indywidualne podejście",
      description:
        "Każde dziecko jest wyjątkowe - dostosowujemy terapię do jego potrzeb.",
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
        "Wspieramy rodziców i uczymy technik do zastosowania w domu.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O naszym centrum
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nasze centrum oferuje profesjonalną pomoc terapeutyczną, prowadzoną
            z pasją i zaangażowaniem w rozwoju dzieci i pokonywaniu trudności.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/16.jpg"
              alt="Wnętrze centrum terapii Sensus"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Profesjonalna pomoc dla każdego dziecka
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nasze centrum powstało z myślą o dzieciach, które potrzebują
              wsparcia w rozwoju. Oferujemy nowoczesne metody terapeutyczne w
              przyjaznym, bezpiecznym środowisku. Zapewniamy wysoką jakość usług
              dzięki stałemu podnoszeniu kwalifikacji i śledzeniu najnowszych
              badań naukowych.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Wierzymy, że każde dziecko ma potencjał do rozwoju i naszą misją
              jest pomóc mu go odkryć i rozwinąć. Stosujemy holistyczne
              podejście, które uwzględnia wszystkie aspekty rozwoju dziecka -
              fizyczny, emocjonalny, społeczny i poznawczy. Współpracujemy
              ściśle z rodzicami, przekazując im wiedzę i narzędzia do
              wspierania terapii w domu.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-secondary-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
