import { CMS_FILTER_CARD_CLASS } from "../utils/cmsFilter";

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
  category?: string;
  tags?: string | string[];
  badge?: string;
}

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  Bestseller: { bg: "#fef3c7", text: "#92400e" },
  New: { bg: "#d1fae5", text: "#065f46" },
  Popular: { bg: "#ede9fe", text: "#5b21b6" },
  Premium: { bg: "#fce7f3", text: "#9d174d" },
  Trending: { bg: "#fff7ed", text: "#c2410c" },
  Hot: { bg: "#fee2e2", text: "#991b1b" },
  Starter: { bg: "#e0f2fe", text: "#075985" },
};

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
  category = "Design",
  tags = "UI/UX, Figma",
  badge = "Bestseller",
}: CliCardProps) => {
  const badgeStyle = BADGE_COLORS[badge] ?? { bg: "#f3f4f6", text: "#374151" };

  // Parse tags: if it's a string, split by commas and trim each part
  const parsedTags = Array.isArray(tags)
    ? tags
    : tags.split(",").map((tag) => tag.trim()).filter(Boolean);

  // Data attributes string for tags
  const dataTags = parsedTags.join(",");

  return (
    <div
      className={`${CMS_FILTER_CARD_CLASS} cms-filter-card max-w-[400px] w-full bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group`}
      data-name={name}
      data-slug={slug}
      data-category={category}
      data-tags={dataTags}
    >
      
      {/* Visual media banner */}
      {cardImage?.src && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-50">
          <img
            src={cardImage.src}
            alt={cardImage.alt || cardTitle || "CMS image"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {badge && (
            <span
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                padding: "4px 10px",
                borderRadius: "100px",
                background: badgeStyle.bg,
                color: badgeStyle.text,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              {badge}
            </span>
          )}
          {category && (
            <span
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                padding: "4px 10px",
                borderRadius: "100px",
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)",
                color: "rgba(255,255,255,0.85)",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              {category}
            </span>
          )}
        </div>
      )}

      {/* Card Content container */}
      <div className="p-8 flex flex-col justify-between flex-grow gap-6">
        <div>
          {/* Tags */}
          {parsedTags && parsedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {parsedTags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Heading */}
          {cardTitle && (
            <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
              {cardTitle}
            </h3>
          )}

          {/* Body Description */}
          {cardDescription && (
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
              {cardDescription}
            </p>
          )}
        </div>

        {/* CTA */}
        <div>
          {cardButtonText && (
            <a
              href={cardButtonLink?.href || "#"}
              target={cardButtonLink?.target || "_self"}
              className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-all duration-200 text-center no-underline shadow-sm hover:shadow-md"
            >
              {cardButtonText}
            </a>
          )}
        </div>
      </div>

    </div>
  );
};