import { IconCard } from "./IconCard";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(IconCard, {
  name: "Icon Card",
  description: "Card With Icon",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    heading: props.TextNode({
      name: "Heading",
      multiline: true,
      defaultValue: "Let's Build Something Amazing",
    }),

    description: props.RichText({
      name: "Description",
      defaultValue:
        "Fill out the form and our team will get back to you shortly.",
    }),

    icon1: props.Image({
      name: "Icon 1",
    }),

    content1: props.TextNode({
      name: "Card Content 1",
      multiline: true,
      defaultValue: "Trusted by 20,000+ groups annually",
    }),

    icon2: props.Image({
      name: "Icon 2",
    }),

    content2: props.TextNode({
      name: "Card Content 2",
      multiline: true,
      defaultValue: "75+ years of fundraising success",
    }),

    icon3: props.Image({
      name: "Icon 3",
    }),

    content3: props.TextNode({
      name: "Card Content 3",
      multiline: true,
      defaultValue: "$4.7 billion raised for communities",
    }),

  },
});