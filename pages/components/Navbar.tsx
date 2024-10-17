import Image from "next/image";
import React from "react";
import star from "@/public/img/star.png";
import { FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="offer-line-navbar">
        <Image src={star} alt="star-ico" />
        <p>
          Get 5% Off your first order,{" "}
          <b className="promomo-code-navbar">
            Promo: RJ9&TY4
          </b>
        </p>
      </span>
      <span className="location-line-navbar">
        <FaLocationDot />
        <p>Regent Street, A4, A4201, London</p>
        <button className="location-btn-navbar">Change Location</button>
      </span>
      <span className="wallet-line-navbar">
        <span className="wallet-line-cont !text-[26px]">
          <RiShoppingBasketFill className="cursor-pointer" />
        </span>
        <span className="wallet-line-cont">23 Items</span>
        <span className="wallet-line-cont">
          <FaMoneyCheckDollar />
          <b>90.9</b>
        </span>
        <span className="wallet-line-cont2">
          <FaArrowCircleDown className="cursor-pointer" />
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
