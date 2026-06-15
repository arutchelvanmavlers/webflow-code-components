import { CardModal } from "./CardModal";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(CardModal, {
  name: "Card Modal Grid",
  description: "Cards with modal popup navigation",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    sectionTitle: props.Text({
      name: "Section Title",
      defaultValue: "Card Modal",
    }),

    sectionDescription: props.Text({
      name: "Section Description",
      defaultValue: "Best of our portfolio",
    }),

    // CARD 1
    card1Title: props.Text({
      name: "Card 1 Title",
      defaultValue: "Creative Design",
    }),

    card1Description: props.Text({
      name: "Card 1 Description",
      defaultValue: "Modern UI and UX design systems.",
    }),

    card1Image: props.Image({
      name: "Card 1 Image",
    }),

    card1ButtonText: props.Text({
      name: "Card 1 Button Text",
      defaultValue: "Know More",
    }),

    card1ButtonLink: props.Link({
      name: "Card 1 Button Link",
    }),

    // CARD 2
    card2Title: props.Text({
      name: "Card 2 Title",
      defaultValue: "Development",
    }),

    card2Description: props.Text({
      name: "Card 2 Description",
      defaultValue: "Scalable frontend architecture.",
    }),

    card2Image: props.Image({
      name: "Card 2 Image",
    }),

    card2ButtonText: props.Text({
      name: "Card 2 Button Text",
      defaultValue: "Know More",
    }),

    card2ButtonLink: props.Link({
      name: "Card 2 Button Link",
    }),

    // CARD 3
    card3Title: props.Text({
      name: "Card 3 Title",
      defaultValue: "Marketing",
    }),

    card3Description: props.Text({
      name: "Card 3 Description",
      defaultValue: "Improve conversions and reach.",
    }),

    card3Image: props.Image({
      name: "Card 3 Image",
    }),

    card3ButtonText: props.Text({
      name: "Card 3 Button Text",
      defaultValue: "Know More",
    }),

    card3ButtonLink: props.Link({
      name: "Card 3 Button Link",
    }),

    // CARD 4
    card4Title: props.Text({
      name: "Card 4 Title",
      defaultValue: "Branding",
    }),

    card4Description: props.Text({
      name: "Card 4 Description",
      defaultValue: "Create strong brand identity.",
    }),

    card4Image: props.Image({
      name: "Card 4 Image",
    }),

    card4ButtonText: props.Text({
      name: "Card 4 Button Text",
      defaultValue: "Know More",
    }),

    card4ButtonLink: props.Link({
      name: "Card 4 Button Link",
    }),

    // CARD 5
    card5Title: props.Text({
      name: "Card 5 Title",
      defaultValue: "Automation",
    }),

    card5Description: props.Text({
      name: "Card 5 Description",
      defaultValue: "Automate systems and workflows.",
    }),

    card5Image: props.Image({
      name: "Card 5 Image",
    }),

    card5ButtonText: props.Text({
      name: "Card 5 Button Text",
      defaultValue: "Know More",
    }),

    card5ButtonLink: props.Link({
      name: "Card 5 Button Link",
    }),

    // CARD 6
    card6Title: props.Text({
      name: "Card 6 Title",
      defaultValue: "Growth",
    }),

    card6Description: props.Text({
      name: "Card 6 Description",
      defaultValue: "Scale your business digitally.",
    }),

    card6Image: props.Image({
      name: "Card 6 Image",
    }),

    card6ButtonText: props.Text({
      name: "Card 6 Button Text",
      defaultValue: "Know More",
    }),

    card6ButtonLink: props.Link({
      name: "Card 6 Button Link",
    }),
  },
});