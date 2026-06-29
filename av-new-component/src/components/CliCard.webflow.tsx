import { CliCard } from "./CliCard";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(CliCard, {
  name: "Cli Card",
  description:
    "CMS card with category and tags for Advanced CMS Filtering. Place inside a div that uses the filter's Cards Container Class.",
  group: "CMS Components",

  props: {
    name: props.Text({
      name: "Name",
      defaultValue: "CMS Item Name",
    }),

    slug: props.Text({
      name: "Slug",
      defaultValue: "cms-item-name",
    }),

    cardTitle: props.Text({
      name: "Card Title",
      defaultValue: "Stunning Design Systems",
    }),

    cardDescription: props.Text({
      name: "Card Description",
      defaultValue: "Build beautiful, consistent, and scalable digital interfaces with pre-compiled modular systems.",
    }),

    cardButtonText: props.Text({
      name: "Card Button Text",
      defaultValue: "Learn More",
    }),

    cardButtonLink: props.Link({
      name: "Card Button Link",
    }),

    cardImage: props.Image({
      name: "Card Image",
    }),

    category: props.Text({
      name: "Category",
      defaultValue: "Design",
      group: "CMS Filter Attributes",
    }),

    tags: props.Text({
      name: "Tags",
      defaultValue: "UI/UX, Figma",
      group: "CMS Filter Attributes",
    }),

    badge: props.Text({
      name: "Badge",
      defaultValue: "Bestseller",
      group: "CMS Filter Attributes",
    }),
  },
});