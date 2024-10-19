import Image, { StaticImageData } from "next/image";
import React from "react";

interface typesofprops {
  title: string;
  company: string;
  cardPic: StaticImageData;
}

const DealsCard = ({ title, company, cardPic }: typesofprops) => {
  return (
    <span className="deals-card">
      <Image src={cardPic} alt="deals-card-pic" className="w-full" />
      <span className="text-box-deals-card">
        <b className="deals-card-title">{title}</b>
        <b className="deals-card-company">{company}</b>
      </span>
      <b className="delas-card-badge">-40%</b>
    </span>
  );
};

export default DealsCard;
