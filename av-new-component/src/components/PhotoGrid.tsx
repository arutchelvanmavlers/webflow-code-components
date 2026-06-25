import { useState, useEffect } from "react";

interface PhotoItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface PhotoGridProps {
  sectionBg?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  limit?: number;
}

export const PhotoGrid = ({
  sectionBg = "#f5f7fb",
  sectionTitle = "Dynamic Photo Grid",
  sectionDescription = "Connecting React Components directly to live API feeds.",
  limit = 10,
}: PhotoGridProps) => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch photos from API");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setPhotos(data.slice(0, limit));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Something went wrong");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [limit]);

  // Detail Page Template View
  if (selectedPhoto) {
    return (
      <section
        className="w-full py-20 px-6 min-h-[700px] flex items-center"
        style={{ backgroundColor: sectionBg }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Back Action button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="flex items-center gap-2 px-6 py-3.5 bg-white text-gray-900 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 font-bold mb-12 hover:-translate-x-1 transition-all duration-200 cursor-pointer text-sm"
          >
            ← Back to Gallery
          </button>

          {/* CMS Collection style full page view card */}
          <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left side: Hero Image display */}
            <div className="lg:col-span-7 bg-gray-50 flex items-center justify-center p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="relative w-full aspect-square max-w-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side: Rich content summary */}
            <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-between">
              <div>
                {/* ID Badges */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 tracking-wider uppercase">
                    Photo ID #{selectedPhoto.id}
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 tracking-wider uppercase">
                    Album #{selectedPhoto.albumId}
                  </span>
                </div>

                {/* Big Heading Title */}
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8">
                  {selectedPhoto.title}
                </h1>

                {/* Description Mock Paragraphs mimicking Webflow CMS templates */}
                <div className="prose text-gray-600 leading-relaxed space-y-4">
                  <p>
                    This is the dynamic content page for the CMS item <strong>"{selectedPhoto.title}"</strong>. 
                    This resource is synced and fetched in real time from the external JSONPlaceholder Photos Collection API.
                  </p>
                  <p>
                    In a production site, this details page can render custom descriptions, specifications, downloads, or nested CMS relationship fields linked to this unique ID.
                  </p>
                </div>
              </div>

              {/* Technical Specifications Footer Section */}
              <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col gap-3 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Image Dimensions:</span>
                  <span className="font-semibold text-gray-900">600 x 600 px</span>
                </div>
                <div className="flex justify-between">
                  <span>Resource Type:</span>
                  <span className="font-semibold text-gray-900">JSON API Entity</span>
                </div>
                <div className="flex justify-between">
                  <span>Source URL:</span>
                  <a
                    href={selectedPhoto.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-indigo-600 hover:underline"
                  >
                    Open raw image →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Grid Collection Page View
  return (
    <section
      className="w-full py-20 px-6"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Loading Skeleton State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: limit }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse"
              >
                <div className="aspect-[4/3] bg-gray-200 w-full" />
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 rounded w-full" />
                  <div className="h-6 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center p-12 bg-red-50 border border-red-100 rounded-3xl text-center max-w-md mx-auto">
            <span className="text-red-500 text-5xl mb-4">⚠️</span>
            <h3 className="text-xl font-bold text-red-950 mb-2">Failed to Load Content</h3>
            <p className="text-red-700 text-sm mb-6">{error}</p>
            <button
              onClick={() => {
                setLoading(true);
                setError(null);
                fetch("https://jsonplaceholder.typicode.com/photos")
                  .then((res) => res.json())
                  .then((data) => {
                    setPhotos(data.slice(0, limit));
                    setLoading(false);
                  })
                  .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                  });
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Grid Content */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer"
              >
                {/* Photo Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    {/* Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3">
                      Photo ID #{item.id}
                    </span>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-sm text-gray-500">
                    <span>Album ID: {item.albumId}</span>
                    <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      View details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
