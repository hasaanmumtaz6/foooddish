import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <div className="header-desktop">
        <Link href="/" className="logo-Box">
          <Image src={logo} alt="logo" />
        </Link>
        <span className="tabs-Box">
          <span className="tabs">
            <Link href="/">Home</Link>
            <Link href="/">Special Offer</Link>
            <Link href="/">Restaurants</Link>
            <Link href="/">Track Order</Link>
          </span>
          <span className="reg-log-btn">
            <FaUserCircle />
            <p>Login/Signup</p>
          </span>
        </span>
      </div>
      <div className="header-mobile">
        <span className="w-1/2 px-4 py-3 text-white flex items-center justify-center text-xl gap-2 bg-[var(--background-primary)]">
          <FaUserCircle />
          <p>Login/Signup</p>
        </span>
        <span className="w-1/2 px-4 py-3 text-white flex items-center justify-center text-xl gap-2 bg-[var(--background-sixth)]">
        <RiShoppingBasketFill className="cursor-pointer" />
        <p>$90.99</p>
        </span>
      </div>
    </header>
  );
};

export default Header;
