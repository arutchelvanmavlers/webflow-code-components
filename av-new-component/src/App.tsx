import { Hero } from "./components/Hero";
import { Tabs } from "./components/Tab";
import { CustomSlider } from "./components/Slider";
import { Accordion } from "./components/Accordion";
import { Gallery } from "./components/Gallery";
import { CardModal } from "./components/CardModal";
import { ContactForm } from "./components/ContactForm";
// import { IconCard } from "./components/IconCard";
import { PhotoGrid } from "./components/PhotoGrid";

function App() {

  return <>
  <Hero title="Build Amazing Websites" subtitle="Create beautiful and responsive websites easily with Webflow custom components." buttonText="Get Started" buttonLink="#" image={{
    src: "https://cdn.prod.website-files.com/68d14b7cbd9b430ef4422b3d/69fc5dccf9bba060240c79ef_lp_colors_City%20Palace-topaz-enhance-2.5x.jpg",
    alt: "Hero Image"
  }} />
  
  <Tabs
      sectionBg = "#a9eeff"

      sectionTitle="Custom Tab"
      sectionDescription="Best of our portfolio"

      // TAB 1
      tab1Title="Design System"
      tab1Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
      }}
      tab1Bg={{
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      }}
      tab1ContentImage={{
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      }}
      tab1Description="Create scalable and beautiful design systems for websites and applications."

      // TAB 2
      tab2Title="Development"
      tab2Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      }}
      tab2Bg={{
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      }}
      tab2ContentImage={{
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      }}
      tab2Description="Build modern applications using React, TypeScript, and Tailwind CSS."

      // TAB 3
      tab3Title="Development"
      tab3Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      }}
      tab3Bg={{
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      }}
      tab3ContentImage={{
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      }}
      tab3Description="Build modern applications using React, TypeScript, and Tailwind CSS."
    />


    <CustomSlider
      sectionBg="#f5f7fb"

      sectionTitle="Swiper Slider"
      sectionDescription="Best of our portfolio"

      slide1Title="Creative Design"
      slide1Description="Beautiful UI systems and animations."
      slide1Image={{
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
      }}

      slide2Title="Development"
      slide2Description="Modern React and Tailwind development."
      slide2Image={{
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
      }}

      slide3Title="Marketing"
      slide3Description="Improve conversions and branding."
      slide3Image={{
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      }}

      slide4Title="Analytics"
      slide4Description="Track performance using smart dashboards."
      slide4Image={{
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      }}

      slide5Title="SEO"
      slide5Description="Boost rankings with optimized strategies."
      slide5Image={{
        src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200",
      }}

      slide6Title="Branding"
      slide6Description="Build powerful brand identities."
      slide6Image={{
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
      }}

      slide7Title="Automation"
      slide7Description="Automate workflows and save time."
      slide7Image={{
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      }}

      slide8Title="Content Strategy"
      slide8Description="Plan engaging content experiences."
      slide8Image={{
        src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
      }}

      slide9Title="Growth"
      slide9Description="Scale your business efficiently."
      slide9Image={{
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
      }}
    />


    <Accordion
      sectionBg="#f5f7fb"

      sectionTitle="Custom Accordion"
      sectionDescription="Best of our portfolio"

      /* ITEM 1 */
      item1Title="Creative Design"
      item1Description="Create engaging and modern website experiences with beautiful layouts and smooth animations."
      item1Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
      }}
      item1Image1={{
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
      }}
      item1Image2={{
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      }}
      item1Image3={{
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
      }}

      /* ITEM 2 */
      item2Title="Development"
      item2Description="Build scalable React and Tailwind applications using modern frontend architecture."
      item2Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
      }}
      item2Image1={{
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
      }}
      item2Image2={{
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200",
      }}
      item2Image3={{
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      }}

      /* ITEM 3 */
      item3Title="Marketing"
      item3Description="Improve brand visibility and conversions using strategic digital marketing campaigns."
      item3Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      }}
      item3Image1={{
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      }}
      item3Image2={{
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
      }}
      item3Image3={{
        src: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200",
      }}

      /* ITEM 4 */
      item4Title="Branding"
      item4Description="Create powerful brand systems, visual identity, and consistent customer experiences."
      item4Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      }}
      item4Image1={{
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
      }}
      item4Image2={{
        src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200",
      }}
      item4Image3={{
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      }}

      /* ITEM 5 */
      item5Title="Automation"
      item5Description="Automate workflows and save time using modern automation systems and integrations."
      item5Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
      }}
      item5Image1={{
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      }}
      item5Image2={{
        src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200",
      }}
      item5Image3={{
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      }}

      /* ITEM 6 */
      item6Title="Growth"
      item6Description="Scale your business with data-driven strategies and high-performing digital systems."
      item6Icon={{
        src: "https://cdn-icons-png.flaticon.com/512/3135/3135679.png",
      }}
      item6Image1={{
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
      }}
      item6Image2={{
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
      }}
      item6Image3={{
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      }}
    />


    <Gallery
      sectionBg="#f5f7fb"

      title="Masonry Gallery"
      description="Best of our portfolio"

      image1={{
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
      }}

      image2={{
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      }}

      image3={{
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
      }}

      image4={{
        src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
      }}

      image5={{
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
      }}

      image6={{
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200",
      }}

      image7={{
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
      }}

      image8={{
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
      }}

      image9={{
        src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
      }}

      image10={{
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
      }}

      image11={{
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
      }}

      image12={{
        src: "",
      }}
    />


    <CardModal
      sectionBg="#FBFAF0"

      sectionTitle="Card Modal"
      sectionDescription="Best of our portfolio"

      card1Title="Creative Design"
      card1Description="Modern UI and UX design systems for engaging experiences."
      card1Image={{
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
      }}
      card1ButtonText="Know More"
      card1ButtonLink={{
        href: "#",
      }}

      card2Title="Development"
      card2Description="Scalable frontend architecture using React and Tailwind."
      card2Image={{
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200",
      }}
      card2ButtonText="Know More"
      card2ButtonLink={{
        href: "#",
      }}

      card3Title="Marketing"
      card3Description="Improve conversions and digital visibility."
      card3Image={{
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      }}
      card3ButtonText="Know More"
      card3ButtonLink={{
        href: "#",
      }}

      card4Title="Branding"
      card4Description="Create powerful and memorable brand systems."
      card4Image={{
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
      }}
      card4ButtonText="Know More"
      card4ButtonLink={{
        href: "#",
      }}

      card5Title="Automation"
      card5Description="Automate workflows and improve operational efficiency."
      card5Image={{
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      }}
      card5ButtonText="Know More"
      card5ButtonLink={{
        href: "#",
      }}

      card6Title="Growth"
      card6Description="Scale your business using modern digital strategies."
      card6Image={{
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
      }}
      card6ButtonText="Know More"
      card6ButtonLink={{
        href: "#",
      }}
    />


    <ContactForm
      sectionBg="#f5f7fb"

      heading="Let's Build Something Amazing"

      description="Fill out the form and our team will contact you shortly to discuss your project requirements and business goals."

      firstNamePlaceholder="First Name"
      lastNamePlaceholder="Last Name"
      emailPlaceholder="Email Address"
      phonePlaceholder="Phone Number"
      companyPlaceholder="Company Name"
      messagePlaceholder="Tell us about your project..."

      submitButtonText="Send Message"

      successMessage="Thank you for contacting us. Our team will get back to you shortly."
    />


      {/* <IconCard sectionBg="fbfaf0" heading="Success you can trust" description="Scale your business using modern digital strategies" /> */}

      <PhotoGrid
        sectionBg="#f9fafb"
        sectionTitle="JSONPlaceholder Live Feed"
        sectionDescription="This photo feed is fetched dynamically from the JSONPlaceholder REST API and rendered in a responsive React grid layout."
        limit={10}
      />
  </>
}

export default App
