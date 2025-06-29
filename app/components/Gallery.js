"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/images/1.jpg",
      alt: "Sala terapii - widok 1",
      category: "Wnętrza",
    },
    {
      src: "/images/2.jpg",
      alt: "Sala terapii - widok 2",
      category: "Wnętrza",
    },
    {
      src: "/images/3.jpg",
      alt: "Sprzęt terapeutyczny - widok 1",
      category: "Sprzęt",
    },
    {
      src: "/images/5.jpg",
      alt: "Sprzęt terapeutyczny - widok 2",
      category: "Sprzęt",
    },
    {
      src: "/images/6.jpg",
      alt: "Centrum terapii - pomieszczenia",
      category: "Wnętrza",
    },
    {
      src: "/images/7.jpg",
      alt: "Materiały i narzędzia terapeutyczne",
      category: "Sprzęt",
    },
    {
      src: "/images/8.jpg",
      alt: "Sala do ćwiczeń",
      category: "Wnętrza",
    },
    {
      src: "/images/9.jpg",
      alt: "Specjalistyczny sprzęt",
      category: "Sprzęt",
    },
    {
      src: "/images/10.jpg",
      alt: "Pokój terapeutyczny",
      category: "Wnętrza",
    },
    {
      src: "/images/11.jpg",
      alt: "Wyposażenie centrum",
      category: "Sprzęt",
    },
    {
      src: "/images/12.jpg",
      alt: "Przestrzeń terapeutyczna",
      category: "Wnętrza",
    },
    {
      src: "/images/13.jpg",
      alt: "Narzędzia do terapii",
      category: "Sprzęt",
    },
    {
      src: "/images/14.jpg",
      alt: "Centrum Sensus - wnętrze",
      category: "Wnętrza",
    },
    {
      src: "/images/15.jpg",
      alt: "Profesjonalny sprzęt",
      category: "Sprzęt",
    },
    {
      src: "/images/16.jpg",
      alt: "Sala rehabilitacyjna",
      category: "Wnętrza",
    },
    {
      src: "/images/17.jpg",
      alt: "Dodatkowe wyposażenie",
      category: "Sprzęt",
    },
  ];

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Obsługa klawiatury
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      switch (event.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Galeria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz nasze centrum i przykłady prowadzonych zajęć z dziećmi.
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
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"></div>
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
