import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { Navigation, Pagination } from "swiper/modules";

interface SliderProps {
  sectionBg: string;
  sectionTitle: string;
  sectionDescription: string;

  slide1Title: string;
  slide1Description: string;
  slide1Image: {
    src: string;
    alt?: string;
  };

  slide2Title: string;
  slide2Description: string;
  slide2Image: {
    src: string;
    alt?: string;
  };

  slide3Title: string;
  slide3Description: string;
  slide3Image: {
    src: string;
    alt?: string;
  };

  slide4Title: string;
    slide4Description: string;
    slide4Image: {
    src: string;
    alt?: string;
    };

    slide5Title: string;
    slide5Description: string;
    slide5Image: {
    src: string;
    alt?: string;
    };

    slide6Title: string;
    slide6Description: string;
    slide6Image: {
    src: string;
    alt?: string;
    };

    slide7Title: string;
    slide7Description: string;
    slide7Image: {
    src: string;
    alt?: string;
    };

    slide8Title: string;
    slide8Description: string;
    slide8Image: {
    src: string;
    alt?: string;
    };

    slide9Title: string;
    slide9Description: string;
    slide9Image: {
    src: string;
    alt?: string;
    };
}


export const CustomSlider = (props: SliderProps) => {
  const slides = [
  {
    title: props.slide1Title,
    description: props.slide1Description,
    image: props.slide1Image,
  },

  {
    title: props.slide2Title,
    description: props.slide2Description,
    image: props.slide2Image,
  },

  {
    title: props.slide3Title,
    description: props.slide3Description,
    image: props.slide3Image,
  },

  {
    title: props.slide4Title,
    description: props.slide4Description,
    image: props.slide4Image,
  },

  {
    title: props.slide5Title,
    description: props.slide5Description,
    image: props.slide5Image,
  },

  {
    title: props.slide6Title,
    description: props.slide6Description,
    image: props.slide6Image,
  },

  {
    title: props.slide7Title,
    description: props.slide7Description,
    image: props.slide7Image,
  },

  {
    title: props.slide8Title,
    description: props.slide8Description,
    image: props.slide8Image,
  },

  {
    title: props.slide9Title,
    description: props.slide9Description,
    image: props.slide9Image,
  },
];

  return (
    <section
      className="w-full py-20 px-6 overflow-hidden"
      style={{
        backgroundColor: props.sectionBg,
      }}
    >
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col items-center text-center text-black p-6 mb-5">
          <h1 className="text-5xl font-bold mb-3">{props.sectionTitle}</h1>
          <p className="text-base text-gray-700 max-w-md">{props.sectionDescription}</p>
        </div>

        <Swiper
          modules={[Navigation,Pagination]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={24}
          slidesPerView={3}

          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>

              <div className="relative overflow-hidden rounded-3xl min-h-[500px]">

                {/* BG */}
                <img
                  src={slide.image.src}
                  alt={slide.image.alt || ""}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8">

                  <h3 className="text-white text-3xl font-bold mb-4">
                    {slide.title}
                  </h3>

                  <p className="text-white/90 text-lg leading-7">
                    {slide.description}
                  </p>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};