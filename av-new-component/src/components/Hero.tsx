import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: {
    src: string;
    alt?: string;
  };
}

export const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image,
}: HeroProps) => {
  return (
    <section className="w-full bg-[#f5f7fb] px-6 md:px-10 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Content */}
        <div className="flex-1 min-w-[300px] text-center lg:text-left">
          
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight font-bold text-gray-900 mb-6">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-[600px] mx-auto lg:mx-0">
              {subtitle}
            </p>
          )}

          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white no-underline rounded-xl text-base font-semibold hover:opacity-90 transition"
            >
              {buttonText}
            </a>
          )}

        </div>

        {/* Image */}
        {image && (
          <div className="flex-1 min-w-[300px] w-full">
            <img
              src={image.src}
              alt={image.alt || ""}
              className="w-full rounded-3xl block object-cover"
            />
          </div>
        )}

      </div>
    </section>
  );
};