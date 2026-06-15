import * as React from "react";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface GalleryProps {
  sectionBg: string;
  title: string;
  description: string;

  image1: GalleryImage;
  image2: GalleryImage;
  image3: GalleryImage;
  image4: GalleryImage;
  image5: GalleryImage;
  image6: GalleryImage;
  image7: GalleryImage;
  image8: GalleryImage;
  image9: GalleryImage;
  image10: GalleryImage;
  image11: GalleryImage;
  image12: GalleryImage;
}

export const Gallery = (props: GalleryProps) => {
  const images = [
    props.image1,
    props.image2,
    props.image3,
    props.image4,
    props.image5,
    props.image6,
    props.image7,
    props.image8,
    props.image9,
    props.image10,
    props.image11,
    props.image12,
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (activeIndex === null) return;

    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      (activeIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: props.sectionBg,
      }}
    >

      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col items-center text-center text-black p-6 mb-10">
          <h1 className="text-5xl font-bold mb-3">{props.title}</h1>
          <p className="text-base text-gray-700 max-w-md">{props.description}</p>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-3xl cursor-pointer group"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt || ""}
                className="w-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>

      {/* Popup */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-6">

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="cursor-pointer absolute top-6 right-6 text-white text-5xl leading-none"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="cursor-pointer absolute left-6 text-white text-6xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt || ""}
            className="max-w-full max-h-[90vh] rounded-3xl object-contain"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="cursor-pointer absolute right-6 text-white text-6xl"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
};