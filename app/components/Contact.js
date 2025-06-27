'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Building2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Tu można dodać logikę wysyłania formularza
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Państwem w ciągu 24 godzin.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "516 577 126",
      description: "Pon-Pt: 8:00-18:00"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "sensuskielce@gmail.com",
      description: "Odpowiadamy w ciągu 24h"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Karczówkowska 11",
      description: "25-019 Kielce"
    },
    {
      icon: Building2,
      title: "Dane firmy",
      content: "NIP: 9591459805",
      description: "ING Bank Śląski"
    }
  ]

  const schedule = [
    { day: "Poniedziałek", hours: "8:00 - 18:00" },
    { day: "Wtorek", hours: "8:00 - 18:00" },
    { day: "Środa", hours: "8:00 - 18:00" },
    { day: "Czwartek", hours: "8:00 - 18:00" },
    { day: "Piątek", hours: "8:00 - 16:00" },
    { day: "Sobota", hours: "Zamknięte" },
    { day: "Niedziela", hours: "Zamknięte" }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skontaktuj się z nami, aby umówić wizytę lub dowiedzieć się więcej 
            o naszych usługach. Chętnie odpowiemy na wszystkie pytania.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Napisz do nas
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Opisz potrzeby dziecka lub zadaj pytanie..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informacje kontaktowe
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-700 font-medium">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Godziny otwarcia
              </h4>
              <div className="space-y-2">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700">{item.day}</span>
                    <span className={`font-medium ${
                      item.hours === 'Zamknięte' ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h5 className="font-semibold text-blue-900 mb-2">Dane bankowe:</h5>
              <p className="text-blue-800 text-sm">
                ING Bank Śląski<br />
                78 1050 1416 1000 0090 8500 2203
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Jak do nas dotrzeć
          </h3>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">ul. Karczówkowska 11, 25-019 Kielce</p>
              <p className="text-sm">Mapa Google będzie dostępna wkrótce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
