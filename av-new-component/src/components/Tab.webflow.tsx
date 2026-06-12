import { Tabs } from "./Tab";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Tabs, {
  name: "Custom Tabs",
  description: "Custom tab component",

  props: {
    sectionBg: props.Text({
        name: "Section Background",
        defaultValue: "#a9eeff",
    }),
    
    // TAB 1
    tab1Title: props.Text({
      name: "Tab 1 Title",
      defaultValue: "Design System",
    }),

    tab1Icon: props.Image({
      name: "Tab 1 Icon",
    }),

    tab1Bg: props.Image({
      name: "Tab 1 Background",
    }),

    tab1ContentImage: props.Image({
      name: "Tab 1 Content Image",
    }),

    tab1Description: props.Text({
      name: "Tab 1 Description",
      defaultValue:
        "Create scalable and beautiful design systems.",
    }),

    // TAB 2
    tab2Title: props.Text({
      name: "Tab 2 Title",
      defaultValue: "Development",
    }),

    tab2Icon: props.Image({
      name: "Tab 2 Icon",
    }),

    tab2Bg: props.Image({
      name: "Tab 2 Background",
    }),

    tab2ContentImage: props.Image({
      name: "Tab 2 Content Image",
    }),

    tab2Description: props.Text({
      name: "Tab 2 Description",
      defaultValue:
        "Build modern applications using React and Tailwind.",
    }),

    // TAB 3
    tab3Title: props.Text({
      name: "Tab 3 Title",
      defaultValue: "Development",
    }),

    tab3Icon: props.Image({
      name: "Tab 3 Icon",
    }),

    tab3Bg: props.Image({
      name: "Tab 3 Background",
    }),

    tab3ContentImage: props.Image({
      name: "Tab 3 Content Image",
    }),

    tab3Description: props.Text({
      name: "Tab 3 Description",
      defaultValue:
        "Build modern applications using React and Tailwind.",
    }),
  },
});