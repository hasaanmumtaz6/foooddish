import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
interface typesofprops {
    companyAbout: string;
    companyName: string;
    url: string;
    price: string;
    logo: StaticImageData;
}
const RestaurantsCards = ({companyAbout, companyName, url, logo, price}:typesofprops) => {
  return (
    <Link href={`${url}`} className="restaurants-cards">
      <span className="restaurants-cards-content-box">
        <b>{companyName}</b>
        <p>
        {companyAbout}
        </p>
        <b>Start from: {price}</b>
      </span>
      <span className="restaurants-cards-image-box">
        <Image src={logo} alt="restaurants-cards-pic" />
      <b className="addcart-badge-res-card">
        <FaPlusCircle />
      </b>
      </span>
    </Link>
  );
};

export default RestaurantsCards;
