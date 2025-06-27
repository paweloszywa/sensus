'use client'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.42_65ece4f4.jpg",
      alt: "Sala terapii - widok 1",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.42_e8191c44.jpg",
      alt: "Sala terapii - widok 2", 
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.43_a123b59d.jpg",
      alt: "Sprzęt terapeutyczny - widok 1",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.43_d4c5150f.jpg",
      alt: "Sprzęt terapeutyczny - widok 2",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_14d68b62.jpg",
      alt: "Centrum terapii - pomieszczenia",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_18b6f103.jpg",
      alt: "Materiały i narzędzia terapeutyczne",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_9842e693.jpg",
      alt: "Sala do ćwiczeń",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_a95c1087.jpg",
      alt: "Specjalistyczny sprzęt",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_bb4064e7.jpg",
      alt: "Pokój terapeutyczny",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.44_ddbb5a78.jpg",
      alt: "Wyposażenie centrum",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.45_0fac9216.jpg",
      alt: "Przestrzeń terapeutyczna",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.45_40659133.jpg",
      alt: "Narzędzia do terapii",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.45_465769c8.jpg",
      alt: "Centrum Sensus - wnętrze",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.45_68eb9a0a.jpg",
      alt: "Profesjonalny sprzęt",
      category: "Sprzęt"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.45_c1ce8c64.jpg",
      alt: "Sala rehabilitacyjna",
      category: "Wnętrza"
    },
    {
      src: "/images/Zdjęcie WhatsApp 2025-06-27 o 21.36.45_d2b5bf2c.jpg",
      alt: "Dodatkowe wyposażenie",
      category: "Sprzęt"
    }
  ]

  const openModal = (index) => {
    setSelectedImage(images[index])
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
    setCurrentIndex(prevIndex)
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Galeria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz nasze centrum, przestrzenie terapeutyczne i przykłady 
            prowadzonych zajęć z dziećmi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                <span className="text-blue-300 text-xs">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-lg font-medium">{selectedImage.alt}</h3>
                <span className="text-blue-300">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
