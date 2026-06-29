import { CmsFilter } from "./CmsFilter";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import { CMS_FILTER_CARD_CLASS } from "../utils/cmsFilter";

export default declareComponent(CmsFilter, {
  name: "Advanced CMS Filtering",
  description:
    "Filter Cli Cards by category and tags. Set the container class on a wrapper div, then place Cli Card components inside it.",

  props: {
    sectionBg: props.Text({
      name: "Section Background Color",
      defaultValue: "#f5f7fb",
      group: "Style",
    }),

    sectionTitle: props.Text({
      name: "Section Title",
      defaultValue: "Advanced CMS Filtering",
      group: "Content",
    }),

    sectionDescription: props.Text({
      name: "Section Description",
      defaultValue: "Discover, filter, and explore our complete collection by category and tags.",
      group: "Content",
    }),

    categories: props.Text({
      name: "Categories",
      defaultValue: "Design, Development, Marketing, Branding, Analytics",
      group: "CMS Filter Attributes",
    }),

    tags: props.Text({
      name: "Tags",
      defaultValue:
        "UI/UX:#6366f1, React:#06b6d4, Figma:#f43f5e, SEO:#f97316, TypeScript:#3b82f6, Tailwind:#14b8a6, Branding:#a855f7, Analytics:#eab308, Animation:#ec4899, API:#10b981",
      group: "CMS Filter Attributes",
    }),
    
    children: props.Slot({
      name: "Cards",
      group: "Content",
    }),
  },
});
