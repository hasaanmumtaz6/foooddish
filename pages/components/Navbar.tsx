import Image from "next/image";
import React from "react";
import star from "@/public/img/star.png";
import { FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import logo from "@/public/img/logo.png";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-desktop">
        <span className="offer-line-navbar">
          <Image src={star} alt="star-ico" />
          <p>
            Get 5% Off your first order,{" "}
            <b className="promomo-code-navbar">Promo: RJ9&TY4</b>
          </p>
        </span>
        <span className="location-line-navbar">
          <FaLocationDot />
          <p>Regent Street, A4, A4201, London</p>
          <button className="location-btn-navbar">Change Location</button>
        </span>
        <span className="wallet-line-navbar">
          <span className="wallet-line-cont shoping-baskit-navabr !text-[26px]">
            <RiShoppingBasketFill className="cursor-pointer" />
          </span>
          <span className="wallet-line-cont number-of-dishes-navbar">
            23 Dishes
          </span>
          <span className="wallet-line-cont balance-navbar">
            <FaMoneyCheckDollar />
            <b>90.9</b>
          </span>
          <span className="wallet-line-cont2 top-up-navbar">
            <FaArrowCircleDown className="cursor-pointer" />
          </span>
        </span>
      </div>
      <div className="navbar-mobile">
        <span className="navbar-logo-box-mobile">
          <Image
            src={logo}
            alt="logo-pic-nvbar"
            className="logo-mob-navbar-pic"
          />
        </span>
        <button className="menu-navbar-icon">
          <MdMenu className="menu-icon-mob-navbar" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
