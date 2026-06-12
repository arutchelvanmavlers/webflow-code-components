import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Hero } from "./Hero";

export default declareComponent(Hero, {
  name: "Hero",
  description: "Custom Hero Banner",
  props: {
    title: props.String({
      name: "Title",
      defaultValue: "Build Amazing Websites",
      group: "Content",
    }),

    subtitle: props.String({
      name: "Subtitle",
      defaultValue:
        "Create beautiful and responsive websites easily with Webflow custom components.",
      group: "Content",
    }),

    buttonText: props.String({
      name: "Button Text",
      defaultValue: "Get Started",
      group: "Content",
    }),

    buttonLink: props.String({
      name: "Button Link",
      defaultValue: "#",
      group: "Content",
    }),

    image: props.Image({
      name: "Hero Image",
      group: "Content",
    }),
  },
});