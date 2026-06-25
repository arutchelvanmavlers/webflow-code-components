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
          // Take the first N items
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
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer no-underline"
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
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
