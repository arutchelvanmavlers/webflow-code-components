import { Card } from "./Card";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Card, {
  name: "CMS Card",
  description: "Card component connected to CMS",

  props: {
    imageUrl: props.Text({
      name: "Image URL",
    }),

    title: props.Text({
      name: "Title",
      defaultValue: "Card Title",
    }),

    description: props.Text({
      name: "Description",
      defaultValue: "Card description",
    }),

    buttonText: props.Text({
      name: "Button Text",
      defaultValue: "Learn More",
    }),

    buttonLink: props.Text({
      name: "Button Link",
      defaultValue: "#",
    }),
  },
});