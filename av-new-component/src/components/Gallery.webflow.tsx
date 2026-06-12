import { Gallery } from "./Gallery";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Gallery, {
  name: "Masonry Gallery",
  description: "Responsive masonry gallery with popup",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    image1: props.Image({
      name: "Image 1",
    }),

    image2: props.Image({
      name: "Image 2",
    }),

    image3: props.Image({
      name: "Image 3",
    }),

    image4: props.Image({
      name: "Image 4",
    }),

    image5: props.Image({
      name: "Image 5",
    }),

    image6: props.Image({
      name: "Image 6",
    }),

    image7: props.Image({
      name: "Image 7",
    }),

    image8: props.Image({
      name: "Image 8",
    }),

    image9: props.Image({
      name: "Image 9",
    }),

    image10: props.Image({
      name: "Image 10",
    }),

    image11: props.Image({
      name: "Image 11",
    }),

    image12: props.Image({
      name: "Image 12",
    }),
  },
});