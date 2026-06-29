import { Calculator } from "./Calculator";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Calculator, {
  name: "Calculator PDF",
  description: "Calculator with PDF generation",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    heading: props.Text({
      name: "Heading",
      defaultValue: "Calculator",
    }),

    buttonText: props.Text({
      name: "Button Text",
      defaultValue: "Generate PDF",
    }),
  },
});