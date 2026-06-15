import { ContactForm } from "./ContactForm";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(ContactForm, {
  name: "Contact Form",
  description: "Modern contact form component",
  group: "Forms",

  props: {
    sectionBg: props.Text({
      name: "Section Background",
      defaultValue: "#f5f7fb",
    }),

    heading: props.Text({
      name: "Heading",
      defaultValue: "Let's Build Something Amazing",
    }),

    description: props.Text({
      name: "Description",
      defaultValue:
        "Fill out the form and our team will get back to you shortly.",
    }),

    firstNamePlaceholder: props.Text({
      name: "First Name Placeholder",
      defaultValue: "First Name",
    }),

    lastNamePlaceholder: props.Text({
      name: "Last Name Placeholder",
      defaultValue: "Last Name",
    }),

    emailPlaceholder: props.Text({
      name: "Email Placeholder",
      defaultValue: "Email Address",
    }),

    phonePlaceholder: props.Text({
      name: "Phone Placeholder",
      defaultValue: "Phone Number",
    }),

    companyPlaceholder: props.Text({
      name: "Company Placeholder",
      defaultValue: "Company Name",
    }),

    messagePlaceholder: props.Text({
      name: "Message Placeholder",
      defaultValue: "Tell us about your project...",
    }),

    submitButtonText: props.Text({
      name: "Submit Button Text",
      defaultValue: "Send Message",
    }),

    successMessage: props.Text({
      name: "Success Message",
      defaultValue:
        "Your form has been submitted successfully.",
    }),
  },
});