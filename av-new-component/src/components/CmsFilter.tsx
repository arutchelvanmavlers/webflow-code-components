import { useState, useMemo, useCallback, useEffect } from "react";
import {
  CMS_FILTER_CARD_CLASS,
  applyFiltersToContainer,
} from "../utils/cmsFilter";

type Category = string;

interface Tag {
  label: string;
  color: string;
}

interface CmsFilterProps {
  sectionBg?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  categories?: string;
  tags?: string;
  children?: React.ReactNode;
}

export const CmsFilter = ({
  sectionBg = "#f5f7fb",
  sectionTitle = "Advanced CMS Filtering",
  sectionDescription = "...",
  categories,
  tags,
  children,
}: CmsFilterProps) => {
  const CATEGORIES = useMemo(() => {
    return categories
      ? ["All", ...categories.split(",").map((cat) => cat.trim()).filter(Boolean)]
      : ["All", "Design", "Development", "Marketing", "Branding", "Analytics"];
  }, [categories]);

  const ALL_TAGS = useMemo(() => {
    if (tags) {
      return tags
        .split(",")
        .map((tagPair) => {
          const [label, color = "#6366f1"] = tagPair.split(":").map((s) => s.trim());
          return { label, color };
        })
        .filter((tag) => tag.label);
    }
    return [
      { label: "UI/UX", color: "#6366f1" },
      { label: "React", color: "#06b6d4" },
      { label: "Figma", color: "#f43f5e" },
      { label: "SEO", color: "#f97316" },
      { label: "TypeScript", color: "#3b82f6" },
      { label: "Tailwind", color: "#14b8a6" },
      { label: "Branding", color: "#a855f7" },
      { label: "Analytics", color: "#eab308" },
      { label: "Animation", color: "#ec4899" },
      { label: "API", color: "#10b981" },
    ];
  }, [tags]);

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const toggleTag = useCallback((tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const clearAllFilters = useCallback(() => {
    setActiveCategory("All");
    setActiveTags([]);
  }, []);

  const hasActiveFilters = activeCategory !== "All" || activeTags.length > 0;

  const runFilter = useCallback(() => {
    const containerSelector = `.cms-filter-grid`;
    const container = document.querySelector(containerSelector);
    const cardSelector = `.${CMS_FILTER_CARD_CLASS}`;

    if (container) {
      const cards = container.querySelectorAll(cardSelector);
      setTotalCount(cards.length);
    } else {
      setTotalCount(0);
    }

    const visible = applyFiltersToContainer(
      "cms-filter-grid",
      CMS_FILTER_CARD_CLASS,
      activeCategory,
      activeTags
    );
    setVisibleCount(visible);
  }, ["cms-filter-grid", CMS_FILTER_CARD_CLASS, activeCategory, activeTags]);

  useEffect(() => {
    runFilter();

    const containerSelector = `.cms-filter-grid`;
    let containerObserver: MutationObserver | null = null;
    let bodyObserver: MutationObserver | null = null;

    const observeContainer = (container: Element) => {
      containerObserver = new MutationObserver(runFilter);
      containerObserver.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["data-category", "data-tags", "class"],
      });
      runFilter();
    };

    const container = document.querySelector(containerSelector);
    if (container) {
      observeContainer(container);
    } else {
      bodyObserver = new MutationObserver(() => {
        const found = document.querySelector(containerSelector);
        if (found) {
          observeContainer(found);
          bodyObserver?.disconnect();
        }
      });
      bodyObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      containerObserver?.disconnect();
      bodyObserver?.disconnect();
    };
  }, [runFilter]);

  const getTagBtnStyle = (tag: Tag): React.CSSProperties => {
    const isActive = activeTags.includes(tag.label);
    return {
      borderColor: isActive ? tag.color : "#e5e7eb",
      backgroundColor: isActive ? `${tag.color}14` : "#ffffff",
      color: isActive ? tag.color : "#4b5563",
    };
  };

  return (
    <section
      id="cms-filter"
      className="w-full py-20 px-6"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            CMS Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-8 mb-8">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-indigo-50 border-indigo-300 text-indigo-700 font-semibold"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-100 mb-5" />

          <div className="flex gap-6 flex-wrap items-start justify-between">
            <div className="flex-[2] min-w-[280px]">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Filter by Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag.label}
                    type="button"
                    onClick={() => toggleTag(tag.label)}
                    style={getTagBtnStyle(tag)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer"
                  >
                    {tag.label}
                    {activeTags.includes(tag.label) && (
                      <span className="ml-1 opacity-70">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-50 border border-red-100 text-red-800 text-xs font-semibold cursor-pointer hover:bg-red-100 transition-colors whitespace-nowrap"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                Clear all
              </button>
            )}
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeCategory !== "All" && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
                {activeCategory}
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="bg-transparent border-none text-inherit cursor-pointer p-0 leading-none text-sm"
                  aria-label={`Remove ${activeCategory} filter`}
                >
                  ×
                </button>
              </span>
            )}
            {activeTags.map((tag) => {
              const tagObj = ALL_TAGS.find((t) => t.label === tag);
              const color = tagObj?.color ?? "#6366f1";
              return (
                <span
                  key={tag}
                  style={{
                    backgroundColor: `${color}14`,
                    borderColor: `${color}40`,
                    color,
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className="bg-transparent border-none text-inherit cursor-pointer p-0 leading-none text-sm"
                    aria-label={`Remove ${tag} filter`}
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        )}

        {totalCount > 0 && (
          <p className="text-sm text-gray-500 text-center">
            Showing {visibleCount} of {totalCount} cards
          </p>
        )}

        <div className="cms-filter-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {children}
        </div>
      </div>
    </section>
  );
};
