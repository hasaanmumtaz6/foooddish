import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
interface typesofprops {
    companyAbout: string;
    companyName: string;
    discounts: string;
    url: string;
    cardPic: StaticImageData;
}

const RestaurantsOfferCard = ({companyAbout, companyName, discounts, url, cardPic}:typesofprops) => {
  return (
    <Link href={`${url}`} className="restaurants-offer-card">
      <span className="rest-content-box-offer-card">
        <b>{companyAbout}</b>
        <p>{companyName}</p>
      </span>
      <span className="rest-image-box-offer-card">
        <Image src={cardPic} alt="card-pic-offer-box" />
      </span>
      <b className="dis-badge-res-offer-card">{discounts}</b>
      <b className="addcart-badge-res-offer-card">
        <FaPlusCircle />
      </b>
    </Link>
  );
};

export default RestaurantsOfferCard;
