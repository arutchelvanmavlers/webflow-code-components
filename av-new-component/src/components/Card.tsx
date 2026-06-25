import * as React from "react";

export function Card({
  image,
    title,
  description,
  buttonText,
  buttonLink,
}: any) {
  return (
    <div className="w-full rounded-xl overflow-hidden border shadow-md bg-white">
      {image?.url && (
        <img
          src={image.url}
          alt={image.alt || title}
          className="w-full h-56 object-cover"
        />
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="mb-4">{description}</p>

        <a
          href={buttonLink}
          className="inline-block px-4 py-2 bg-black text-white rounded-md"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}