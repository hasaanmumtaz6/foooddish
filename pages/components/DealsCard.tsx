import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface typesofprops {
  url: string;
  title: string;
  company: string;
  cardPic: StaticImageData;
}

const DealsCard = ({ title, company, cardPic, url }: typesofprops) => {
  return (
    <Link href={`${url}`} className="deals-card">
      <Image src={cardPic} alt="deals-card-pic" className="w-full" />
      <span className="text-box-deals-card">
        <b className="deals-card-title">{title}</b>
        <b className="deals-card-company">{company}</b>
      </span>
      <b className="delas-card-badge">-40%</b>
    </Link>
  );
};

export default DealsCard;
