import { useState } from "react";

interface CliCardProps {
  name?: string;
  slug?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardButtonText?: string;
  cardButtonLink?: {
    href: string;
    target?: string;
  };
  cardImage?: {
    src: string;
    alt?: string;
  };
}

export const CliCard = ({
  name = "Feature Item",
  slug = "feature-item",
  cardTitle = "Stunning Design Systems",
  cardDescription = "Build beautiful, consistent, and scalable digital interfaces with pre-compiled modular systems.",
  cardButtonText = "Learn More",
  cardButtonLink = { href: "#", target: "_self" },
  cardImage = {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    alt: "Design Showcase",
  },
}: CliCardProps) => {
  return (
    <div className="max-w-[400px] w-full bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      
      {/* Visual media banner */}
      {cardImage?.src && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-50">
          <img
            src={cardImage.src}
            alt={cardImage.alt || cardTitle || "CMS image"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/* Card Content container */}
      <div className="p-8 flex flex-col justify-between flex-grow gap-6">
        <div>
          {/* Metadata tags */}
          {name && (
            <span className="inline-flex px-3.5 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wider border border-gray-100">
              {name}
            </span>
          )}

          {/* Heading */}
          {cardTitle && (
            <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
              {cardTitle}
            </h3>
          )}

          {/* Body Description */}
          {cardDescription && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
              {cardDescription}
            </p>
          )}
        </div>

        {/* CTA link */}
        {cardButtonText && (
          <a
            href={cardButtonLink?.href || "#"}
            target={cardButtonLink?.target || "_self"}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-all duration-200 w-full text-center no-underline shadow-sm hover:shadow-md"
          >
            {cardButtonText}
          </a>
        )}
      </div>

    </div>
  );
};
