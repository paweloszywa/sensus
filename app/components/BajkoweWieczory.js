"use client";

import { useEffect, useState } from "react";
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
import andrzejkowyPoster from "../../images/posters/bajkowe-wieczory-do-28-11.jpeg";

export default function BajkoweWieczory() {
  const [showAndrzejkowyPoster, setShowAndrzejkowyPoster] = useState(false);

  useEffect(() => {
    const endTime = new Date("2026-11-28T17:00:00+01:00").getTime();
    const updatePoster = () => {
      setShowAndrzejkowyPoster(Date.now() < endTime);
    };

    updatePoster();
    const remainingTime = endTime - Date.now();
    const timeout =
      remainingTime > 0
        ? window.setTimeout(updatePoster, remainingTime)
        : null;
    return () => {
      if (timeout !== null) window.clearTimeout(timeout);
    };
  }, []);

  const highlights = [
    showAndrzejkowyPoster
      ? { icon: BookOpen, text: "Czytanie bajek terapeutycznych" }
      : { icon: BookOpen, text: "Bajki wspierające rozwój emocjonalny" },
    showAndrzejkowyPoster
      ? { icon: HeartHandshake, text: "Andrzejkowe wróżby i zabawy" }
      : { icon: Music2, text: "Muzyka relaksacyjna grana przez DJ-a" },
    showAndrzejkowyPoster
      ? { icon: Moon, text: "Magiczna atmosfera i niespodzianki" }
      : { icon: Leaf, text: "Relaksacyjne nuty zapachowe" },
    showAndrzejkowyPoster
      ? { icon: Leaf, text: "Relaks i wspólna zabawa" }
      : {
          icon: HeartHandshake,
          text: "Rozmowy o emocjach i poczuciu bezpieczeństwa",
        },
    showAndrzejkowyPoster
      ? { icon: Music2, text: "Wyjątkowy wieczór pełen magii" }
      : { icon: Moon, text: "Chwila spokoju, relaksu i wyobraźni" },
  ];

  return (
    <section
      id="bajkowe-wieczory"
      className="overflow-hidden bg-orange-50 py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(280px,440px)_1fr] lg:gap-16 lg:px-8">
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <Image
            src={showAndrzejkowyPoster ? andrzejkowyPoster : poster}
            alt={
              showAndrzejkowyPoster
                ? "Plakat wydarzenia Bajkowy Wieczór Andrzejkowy w centrum Sensus"
                : "Plakat wydarzenia Bajkowe wieczory w centrum Sensus"
            }
            className="h-auto w-full rounded-lg shadow-xl"
            sizes="(max-width: 1024px) 90vw, 440px"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
            {showAndrzejkowyPoster
              ? "Wieczór pełen magii i niespodzianek"
              : "Jesienny cykl dla dzieci"}
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {showAndrzejkowyPoster
              ? "Bajkowy Wieczór Andrzejkowy"
              : "Bajkowe wieczory"}
          </h2>
          <p className="mb-7 max-w-2xl text-lg leading-relaxed text-gray-700">
            {showAndrzejkowyPoster
              ? "Zapraszamy na magiczny wieczór z czytaniem bajek, andrzejkowymi wróżbami i zabawami dla dzieci."
              : "Małe historie mogą wywoływać wielkie emocje. Zapraszamy dzieci w wieku 4-8 lat na wyjątkowe 45 minut pełne bajek, rozmów o emocjach i wyciszenia."}
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
              {showAndrzejkowyPoster
                ? "28 listopada, godz. 17:00"
                : "Czwartki, godz. 19:00"}
            </span>
            <span className="font-semibold">
              {showAndrzejkowyPoster ? "Cena: 40 zł" : "Grupy 8-10 osób"}
            </span>
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

    </section>
  );
}