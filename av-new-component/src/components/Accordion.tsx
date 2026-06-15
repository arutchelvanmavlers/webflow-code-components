import * as React from "react";
import { useState } from "react";

interface AccordionItem {
  title: string;
  description: string;

  icon: {
    src: string;
    alt?: string;
  };

  image1: {
    src: string;
    alt?: string;
  };

  image2: {
    src: string;
    alt?: string;
  };

  image3: {
    src: string;
    alt?: string;
  };
}

interface AccordionProps {
  sectionBg: string;
  sectionTitle: string;
  sectionDescription: string;

  item1Title: string;
  item1Description: string;
  item1Icon: { src: string; alt?: string };
  item1Image1: { src: string; alt?: string };
  item1Image2: { src: string; alt?: string };
  item1Image3: { src: string; alt?: string };

  item2Title: string;
  item2Description: string;
  item2Icon: { src: string; alt?: string };
  item2Image1: { src: string; alt?: string };
  item2Image2: { src: string; alt?: string };
  item2Image3: { src: string; alt?: string };

  item3Title: string;
  item3Description: string;
  item3Icon: { src: string; alt?: string };
  item3Image1: { src: string; alt?: string };
  item3Image2: { src: string; alt?: string };
  item3Image3: { src: string; alt?: string };

  item4Title: string;
  item4Description: string;
  item4Icon: { src: string; alt?: string };
  item4Image1: { src: string; alt?: string };
  item4Image2: { src: string; alt?: string };
  item4Image3: { src: string; alt?: string };

  item5Title: string;
  item5Description: string;
  item5Icon: { src: string; alt?: string };
  item5Image1: { src: string; alt?: string };
  item5Image2: { src: string; alt?: string };
  item5Image3: { src: string; alt?: string };

  item6Title: string;
  item6Description: string;
  item6Icon: { src: string; alt?: string };
  item6Image1: { src: string; alt?: string };
  item6Image2: { src: string; alt?: string };
  item6Image3: { src: string; alt?: string };
}

export const Accordion = (props: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: AccordionItem[] = [
    {
      title: props.item1Title,
      description: props.item1Description,
      icon: props.item1Icon,
      image1: props.item1Image1,
      image2: props.item1Image2,
      image3: props.item1Image3,
    },

    {
      title: props.item2Title,
      description: props.item2Description,
      icon: props.item2Icon,
      image1: props.item2Image1,
      image2: props.item2Image2,
      image3: props.item2Image3,
    },

    {
      title: props.item3Title,
      description: props.item3Description,
      icon: props.item3Icon,
      image1: props.item3Image1,
      image2: props.item3Image2,
      image3: props.item3Image3,
    },

    {
      title: props.item4Title,
      description: props.item4Description,
      icon: props.item4Icon,
      image1: props.item4Image1,
      image2: props.item4Image2,
      image3: props.item4Image3,
    },

    {
      title: props.item5Title,
      description: props.item5Description,
      icon: props.item5Icon,
      image1: props.item5Image1,
      image2: props.item5Image2,
      image3: props.item5Image3,
    },

    {
      title: props.item6Title,
      description: props.item6Description,
      icon: props.item6Icon,
      image1: props.item6Image1,
      image2: props.item6Image2,
      image3: props.item6Image3,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundColor: props.sectionBg,
      }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-5">

        <div className="flex flex-col items-center text-center text-black p-6 mb-5">
          <h1 className="text-5xl font-bold mb-3">{props.sectionTitle}</h1>
          <p className="text-base text-gray-700 max-w-md">{props.sectionDescription}</p>
        </div>

        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden border transition-all duration-300 ${
                isOpen
                  ? "bg-white border-2 border-solid border-black shadow-xl"
                  : "bg-white border-2 border-solid border-gray-200"
              }`}
            >
              {/* Trigger */}
              <button
                onClick={() => toggleAccordion(index)}
                className="cursor-pointer w-full flex items-center justify-between gap-5 p-6 text-left"
              >
                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon.src}
                      alt={item.icon.alt || ""}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                </div>

                {/* Arrow */}
                <div className="text-3xl text-gray-900 shrink-0">
                  {isOpen ? "−" : "+"}
                </div>
              </button>

              {/* Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">

                  <div className="px-6 pb-8">

                    {/* Content Title */}
                    <h4 className="text-3xl font-bold text-gray-900 mb-5">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-lg leading-8 text-gray-600 mb-10">
                      {item.description}
                    </p>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                      <img
                        src={item.image1.src}
                        alt={item.image1.alt || ""}
                        className="w-full h-[240px] object-cover rounded-3xl"
                      />

                      <img
                        src={item.image2.src}
                        alt={item.image2.alt || ""}
                        className="w-full h-[240px] object-cover rounded-3xl"
                      />

                      <img
                        src={item.image3.src}
                        alt={item.image3.alt || ""}
                        className="w-full h-[240px] object-cover rounded-3xl"
                      />

                    </div>

                  </div>

                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};