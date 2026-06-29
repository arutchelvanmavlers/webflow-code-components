export const CMS_FILTER_CARD_CLASS = "cms-filter-card";

export function normalizeClassName(className: string): string {
  return className.trim().replace(/^\./, "");
}

export function parseTagList(tags: string | string[] | undefined): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags.map((t) => t.trim()).filter(Boolean);
  return tags.split(",").map((t) => t.trim()).filter(Boolean);
}

export function cardMatchesFilters(
  itemCategory: string,
  itemTags: string[],
  activeCategory: string,
  activeTags: string[]
): boolean {
  const categoryMatch = activeCategory === "All" || itemCategory === activeCategory;
  const tagsMatch =
    activeTags.length === 0 || activeTags.some((tag) => itemTags.includes(tag));
  return categoryMatch && tagsMatch;
}

export function applyFiltersToContainer(
  containerClass: string,
  cardClass: string,
  activeCategory: string,
  activeTags: string[]
): number {
  const container = document.querySelector(`.${normalizeClassName(containerClass)}`);
  if (!container) return 0;

  const cards = container.querySelectorAll(`.${normalizeClassName(cardClass)}`);
  let visibleCount = 0;

  cards.forEach((card) => {
    const el = card as HTMLElement;
    const itemCategory = el.dataset.category ?? "";
    const itemTags = parseTagList(el.dataset.tags);

    const visible = cardMatchesFilters(itemCategory, itemTags, activeCategory, activeTags);
    el.style.display = visible ? "" : "none";
    el.hidden = !visible;
    el.setAttribute("aria-hidden", visible ? "false" : "true");
    if (visible) visibleCount += 1;
  });

  return visibleCount;
}
