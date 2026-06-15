import * as React from "react";
import { useState } from "react";

interface TabsProps {
    sectionBg: string;
    sectionTitle: string;
  sectionDescription: string;

  tab1Title: string;
  tab1Icon: { src: string; alt?: string };
  tab1Bg: { src: string; alt?: string };
  tab1ContentImage: { src: string; alt?: string };
  tab1Description: string;

  tab2Title: string;
  tab2Icon: { src: string; alt?: string };
  tab2Bg: { src: string; alt?: string };
  tab2ContentImage: { src: string; alt?: string };
  tab2Description: string;

  tab3Title: string;
  tab3Icon: { src: string; alt?: string };
  tab3Bg: { src: string; alt?: string };
  tab3ContentImage: { src: string; alt?: string };
  tab3Description: string;
}

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      title: props.tab1Title,
      icon: props.tab1Icon,
      bg: props.tab1Bg,
      image: props.tab1ContentImage,
      description: props.tab1Description,
    },
    {
      title: props.tab2Title,
      icon: props.tab2Icon,
      bg: props.tab2Bg,
      image: props.tab2ContentImage,
      description: props.tab2Description,
    },
    {
      title: props.tab3Title,
      icon: props.tab3Icon,
      bg: props.tab3Bg,
      image: props.tab3ContentImage,
      description: props.tab3Description,
    },
  ];

  const currentTab = tabs[activeTab - 1];

  return (
    <section
  className="w-full py-20 px-6"
  style={{
    backgroundColor: props.sectionBg,
  }}
>

        <div className="flex flex-col items-center text-center text-black p-6 mb-5 max-w-[1200px] mx-auto">
          <h1 className="text-5xl font-bold mb-3">{props.sectionTitle}</h1>
          <p className="text-base text-gray-700 max-w-md">{props.sectionDescription}</p>
        </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10">

        {/* Left Side */}
        <div className="flex flex-col gap-5">

          {tabs.map((tab, index) => (
            <button
  key={index}
  onClick={() => setActiveTab(index + 1)}
  className={`cursor-pointer relative overflow-hidden rounded-3xl min-h-[120px] p-6 text-left border transition-all duration-300 ${
    activeTab === index + 1
      ? "border-2 border-solid border-black bg-white shadow-xl"
      : "border-2 border-solid border-gray-200"
  }`}
>
              {/* Background Image Only for Inactive Tabs */}
            {activeTab !== index + 1 && (
            <>
                <img
                src={tab.bg.src}
                alt={tab.bg.alt || ""}
                className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />
            </>
            )}

              {/* Content */}
              <div className="relative z-10 flex items-center gap-4">

                <div
  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
    activeTab === index + 1
      ? "bg-black"
      : "bg-white/20 backdrop-blur"
  }`}
>
                  <img
                    src={tab.icon.src}
                    alt={tab.icon.alt || ""}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <h3
  className={`text-xl font-semibold ${
    activeTab === index + 1
      ? "text-gray-900"
      : "text-white"
  }`}
>
                  {tab.title}
                </h3>

              </div>
            </button>
          ))}

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm">

          <img
            src={currentTab.image.src}
            alt={currentTab.image.alt || ""}
            className="w-full rounded-3xl object-cover mb-8"
          />

          <p className="text-lg leading-8 text-gray-600">
            {currentTab.description}
          </p>

        </div>

      </div>
    </section>
  );
};