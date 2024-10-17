import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo.png";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
