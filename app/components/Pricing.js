import { Check, Clock, Users, Star } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Konsultacja diagnostyczna",
      price: "150",
      duration: "50 min",
      description: "Kompleksowa diagnoza potrzeb dziecka",
      features: [
        "Wywiad z rodzicami",
        "Obserwacja dziecka",
        "Testy diagnostyczne",
        "Plan terapii",
        "Zalecenia dla rodziców",
        "Wymagane 3 wizyty",
      ],
      popular: false,
    },
    {
      name: "Terapia indywidualna",
      price: "120",
      duration: "50 min",
      description: "Sesja terapeutyczna dostosowana do potrzeb",
      features: [
        "Terapia 1:1",
        "Dostosowane ćwiczenia",
        "Monitoring postępów",
        "Konsultacje z rodzicami",
        "Indywidualny plan terapii",
      ],
      popular: true,
    },
    {
      name: "TUS - Terapia grupowa",
      price: "120",
      duration: "50 min",
      description: "Terapia w małej grupie dzieci",
      features: [
        "Grupa do 3-4 dzieci",
        "Rozwój społeczny",
        "Współpraca i komunikacja",
        "Wsparcie rówieśników",
        "Grupy dostosowane według wieku i potrzeb dziecka",
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    { name: "Konsultacja domowa", price: "200" },
    { name: "Trening słuchowy Warnkego (pakiet)", price: "800" },
    { name: "Ocena ergoterapeutyczna", price: "180" },
    { name: "Konsultacja z rodzicami", price: "100" },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cennik usług
          </h2>
        </div>

        {/* Main pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg border-2 p-8 ${
                plan.popular
                  ? "border-primary-500 bg-primary-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Najpopularniejsze
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">zł</span>
                </div>
                <div className="flex items-center justify-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{plan.duration}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Umów wizytę
              </a>
            </div>
          ))}
        </div>

        {/* Additional services */}
        {/* <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Dodatkowe usługi
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg"
              >
                <span className="text-gray-700">{service.name}</span>
                <span className="font-semibold text-gray-900">
                  {service.price} zł
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
