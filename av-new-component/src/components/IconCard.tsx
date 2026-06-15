import * as React from "react";

interface IconCardImage {
  src: string;
  alt?: string;
}

interface IconCardProps {
  sectionBg: string;
  heading: string;
  description: string;
  icon1: IconCardImage;
  content1: string;
  icon2: IconCardImage;
  content2: string;
  icon3: IconCardImage;
  content3: string;

}

export const IconCard = ({
  sectionBg,
  heading,
  description,
  icon1,
  content1,
  icon2,
  content2,
  icon3,
  content3,
}: IconCardProps) => {

  return (
    <section className="iconCardSec w-full py-20 px-6" style={{ backgroundColor: sectionBg }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="iconCardSecTitle">
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
        <div className="iconCardRow">
            <div className="iconCardCol">
                <div className="iconCardImg">
                    <img src={icon1.src} alt={icon1.alt} />
                </div>
                <h4>{content1}</h4>
            </div>
            <div className="iconCardCol">
                <div className="iconCardImg">
                    <img src={icon2.src} alt={icon2.alt} />
                </div>
                <h4>{content2}</h4>
            </div>
            <div className="iconCardCol">
                <div className="iconCardImg">
                    <img src={icon3.src} alt={icon3.alt} />
                </div>
                <h4>{content3}</h4>
            </div>
        </div>
      </div>
    </section>
  );
};
