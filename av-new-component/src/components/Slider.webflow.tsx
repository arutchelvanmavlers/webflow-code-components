import { CustomSlider } from "./Slider";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(CustomSlider, {
  name: "Custom Slider",
  description: "Responsive slick slider component",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    sectionTitle: props.Text({
      name: "Section Title",
      defaultValue: "Swiper Slider",
    }),

    sectionDescription: props.Text({
      name: "Section Description",
      defaultValue: "Best of our portfolio",
    }),

    // Slide 1
    slide1Title: props.Text({
      name: "Slide 1 Title",
      defaultValue: "Creative Design",
    }),

    slide1Description: props.Text({
      name: "Slide 1 Description",
      defaultValue:
        "Create beautiful and engaging website experiences.",
    }),

    slide1Image: props.Image({
      name: "Slide 1 Image",
    }),

    // Slide 2
    slide2Title: props.Text({
      name: "Slide 2 Title",
      defaultValue: "Development",
    }),

    slide2Description: props.Text({
      name: "Slide 2 Description",
      defaultValue:
        "Build scalable applications using React and Tailwind.",
    }),

    slide2Image: props.Image({
      name: "Slide 2 Image",
    }),

    // Slide 3
    slide3Title: props.Text({
      name: "Slide 3 Title",
      defaultValue: "Marketing",
    }),

    slide3Description: props.Text({
      name: "Slide 3 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide3Image: props.Image({
      name: "Slide 3 Image",
    }),

    // Slide 4
    slide4Title: props.Text({
      name: "Slide 4 Title",
      defaultValue: "Marketing",
    }),

    slide4Description: props.Text({
      name: "Slide 4 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide4Image: props.Image({
      name: "Slide 4 Image",
    }),

    // Slide 5
    slide5Title: props.Text({
      name: "Slide 5 Title",
      defaultValue: "Marketing",
    }),

    slide5Description: props.Text({
      name: "Slide 5 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide5Image: props.Image({
      name: "Slide 5 Image",
    }),

    // Slide 6
    slide6Title: props.Text({
      name: "Slide 6 Title",
      defaultValue: "Marketing",
    }),

    slide6Description: props.Text({
      name: "Slide 6 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide6Image: props.Image({
      name: "Slide 6 Image",
    }),

    // Slide 7
    slide7Title: props.Text({
      name: "Slide 7 Title",
      defaultValue: "Marketing",
    }),

    slide7Description: props.Text({
      name: "Slide 7 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide7Image: props.Image({
      name: "Slide 7 Image",
    }),

    // Slide 8
    slide8Title: props.Text({
      name: "Slide 8 Title",
      defaultValue: "Marketing",
    }),

    slide8Description: props.Text({
      name: "Slide 8 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide8Image: props.Image({
      name: "Slide 8 Image",
    }),

    // Slide 9
    slide9Title: props.Text({
      name: "Slide 9 Title",
      defaultValue: "Marketing",
    }),

    slide9Description: props.Text({
      name: "Slide 9 Description",
      defaultValue:
        "Improve conversions with better marketing strategies.",
    }),

    slide9Image: props.Image({
      name: "Slide 9 Image",
    }),

  },
});