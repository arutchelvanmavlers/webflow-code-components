import { PhotoGrid } from "./PhotoGrid";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(PhotoGrid, {
  name: "Dynamic Photo Grid",
  description: "Responsive 3-column photo grid fetching data from a external JSONPlaceholder API.",
  group: "Media",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    sectionTitle: props.Text({
      name: "Section Title",
      defaultValue: "Live Photos Feed",
    }),

    sectionDescription: props.Text({
      name: "Section Description",
      defaultValue: "Rendered dynamically using clean React states and external REST API integrations.",
    }),

    limit: props.Number({
      name: "Photos Limit",
      defaultValue: 10,
      min: 1,
      max: 100,
    }),
  },
});
