import { Accordion } from "./Accordion";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Accordion, {
  name: "Custom Accordion",
  description: "Accordion component with images",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    // ITEM 1
    item1Title: props.Text({
      name: "Item 1 Title",
      defaultValue: "Creative Design",
    }),

    item1Description: props.Text({
      name: "Item 1 Description",
      defaultValue:
        "Create engaging and modern website experiences.",
    }),

    item1Icon: props.Image({
      name: "Item 1 Icon",
    }),

    item1Image1: props.Image({
      name: "Item 1 Image 1",
    }),

    item1Image2: props.Image({
      name: "Item 1 Image 2",
    }),

    item1Image3: props.Image({
      name: "Item 1 Image 3",
    }),

    // ITEM 2
    item2Title: props.Text({
      name: "Item 2 Title",
      defaultValue: "Development",
    }),

    item2Description: props.Text({
      name: "Item 2 Description",
      defaultValue:
        "Build scalable applications using React.",
    }),

    item2Icon: props.Image({
      name: "Item 2 Icon",
    }),

    item2Image1: props.Image({
      name: "Item 2 Image 1",
    }),

    item2Image2: props.Image({
      name: "Item 2 Image 2",
    }),

    item2Image3: props.Image({
      name: "Item 2 Image 3",
    }),

    // ITEM 3
    item3Title: props.Text({
      name: "Item 3 Title",
      defaultValue: "Marketing",
    }),

    item3Description: props.Text({
      name: "Item 3 Description",
      defaultValue:
        "Improve conversions and brand visibility.",
    }),

    item3Icon: props.Image({
      name: "Item 3 Icon",
    }),

    item3Image1: props.Image({
      name: "Item 3 Image 1",
    }),

    item3Image2: props.Image({
      name: "Item 3 Image 2",
    }),

    item3Image3: props.Image({
      name: "Item 3 Image 3",
    }),

    // ITEM 4
    item4Title: props.Text({
      name: "Item 4 Title",
      defaultValue: "Branding",
    }),

    item4Description: props.Text({
      name: "Item 4 Description",
      defaultValue:
        "Create powerful brand systems and visuals.",
    }),

    item4Icon: props.Image({
      name: "Item 4 Icon",
    }),

    item4Image1: props.Image({
      name: "Item 4 Image 1",
    }),

    item4Image2: props.Image({
      name: "Item 4 Image 2",
    }),

    item4Image3: props.Image({
      name: "Item 4 Image 3",
    }),

    // ITEM 5
    item5Title: props.Text({
      name: "Item 5 Title",
      defaultValue: "Automation",
    }),

    item5Description: props.Text({
      name: "Item 5 Description",
      defaultValue:
        "Automate workflows and improve efficiency.",
    }),

    item5Icon: props.Image({
      name: "Item 5 Icon",
    }),

    item5Image1: props.Image({
      name: "Item 5 Image 1",
    }),

    item5Image2: props.Image({
      name: "Item 5 Image 2",
    }),

    item5Image3: props.Image({
      name: "Item 5 Image 3",
    }),

    // ITEM 6
    item6Title: props.Text({
      name: "Item 6 Title",
      defaultValue: "Growth",
    }),

    item6Description: props.Text({
      name: "Item 6 Description",
      defaultValue:
        "Scale your business using modern strategies.",
    }),

    item6Icon: props.Image({
      name: "Item 6 Icon",
    }),

    item6Image1: props.Image({
      name: "Item 6 Image 1",
    }),

    item6Image2: props.Image({
      name: "Item 6 Image 2",
    }),

    item6Image3: props.Image({
      name: "Item 6 Image 3",
    }),
  },
});