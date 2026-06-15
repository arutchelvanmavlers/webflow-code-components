import * as React from "react";
import { useState } from "react";

interface CardItem {
  title: string;
  description: string;

  image: {
    src: string;
    alt?: string;
  };

  buttonText: string;

  buttonLink: {
    href: string;
  };
}

interface CardModalProps {
  sectionBg: string;
  sectionTitle: string;
  sectionDescription: string;


  card1Title: string;
  card1Description: string;
  card1Image: {
    src: string;
    alt?: string;
  };
  card1ButtonText: string;
  card1ButtonLink: {
    href: string;
  };

  card2Title: string;
  card2Description: string;
  card2Image: {
    src: string;
    alt?: string;
  };
  card2ButtonText: string;
  card2ButtonLink: {
    href: string;
  };

  card3Title: string;
  card3Description: string;
  card3Image: {
    src: string;
    alt?: string;
  };
  card3ButtonText: string;
  card3ButtonLink: {
    href: string;
  };

  card4Title: string;
  card4Description: string;
  card4Image: {
    src: string;
    alt?: string;
  };
  card4ButtonText: string;
  card4ButtonLink: {
    href: string;
  };

  card5Title: string;
  card5Description: string;
  card5Image: {
    src: string;
    alt?: string;
  };
  card5ButtonText: string;
  card5ButtonLink: {
    href: string;
  };

  card6Title: string;
  card6Description: string;
  card6Image: {
    src: string;
    alt?: string;
  };
  card6ButtonText: string;
  card6ButtonLink: {
    href: string;
  };
}

export const CardModal = (props: CardModalProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const cards: CardItem[] = [
    {
      title: props.card1Title,
      description: props.card1Description,
      image: props.card1Image,
      buttonText: props.card1ButtonText,
      buttonLink: props.card1ButtonLink,
    },

    {
      title: props.card2Title,
      description: props.card2Description,
      image: props.card2Image,
      buttonText: props.card2ButtonText,
      buttonLink: props.card2ButtonLink,
    },

    {
      title: props.card3Title,
      description: props.card3Description,
      image: props.card3Image,
      buttonText: props.card3ButtonText,
      buttonLink: props.card3ButtonLink,
    },

    {
      title: props.card4Title,
      description: props.card4Description,
      image: props.card4Image,
      buttonText: props.card4ButtonText,
      buttonLink: props.card4ButtonLink,
    },

    {
      title: props.card5Title,
      description: props.card5Description,
      image: props.card5Image,
      buttonText: props.card5ButtonText,
      buttonLink: props.card5ButtonLink,
    },

    {
      title: props.card6Title,
      description: props.card6Description,
      image: props.card6Image,
      buttonText: props.card6ButtonText,
      buttonLink: props.card6ButtonLink,
    },
  ];

  const nextCard = () => {
    if (activeIndex === null) return;

    setActiveIndex((activeIndex + 1) % cards.length);
  };

  const prevCard = () => {
    if (activeIndex === null) return;

    setActiveIndex((activeIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: props.sectionBg,
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col items-center text-center text-black p-6 mb-5">
          <h1 className="text-5xl font-bold mb-3">{props.sectionTitle}</h1>
          <p className="text-base text-gray-700 max-w-md">{props.sectionDescription}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image.src}
                  alt={card.image.alt || ""}
                  className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-lg leading-8">
                  {card.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-6">

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="cursor-pointer absolute top-6 right-6 text-white text-5xl leading-none"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={prevCard}
            className="cursor-pointer absolute left-6 text-white text-6xl"
          >
            ‹
          </button>

          {/* Modal Content */}
          <div className="bg-white rounded-3xl overflow-hidden max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2">

            {/* Image */}
            <div>
              <img
                src={cards[activeIndex].image.src}
                alt={cards[activeIndex].image.alt || ""}
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center">

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {cards[activeIndex].title}
              </h2>

              <p className="text-lg leading-8 text-gray-600 mb-10">
                {cards[activeIndex].description}
              </p>

              <a
                href={cards[activeIndex].buttonLink?.href || "#"}
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-2xl text-lg font-semibold w-fit"
              >
                {cards[activeIndex].buttonText}
              </a>

            </div>

          </div>

          {/* Next */}
          <button
            onClick={nextCard}
            className="cursor-pointer absolute right-6 text-white text-6xl"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
};