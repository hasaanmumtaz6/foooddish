import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo2.png";
import appstore from "@/public/img/appstore.png";
import playstore from "@/public/img/playstore.png";
import Link from "next/link";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tabs-action_btn-box">
        <span className="logo-info-about">
          <Image src={logo} alt="logo" />
          <span className="mobile-stors-icon">
            <Link href="/"><Image src={appstore} alt="app-store" /></Link>
            <Link href="/"><Image src={playstore} alt="play-store" /></Link>
          </span>
          <p className="text-sm">
            Company # 490039-445, Registered <br /> with House of companies.
          </p>
        </span>
        <div className="tabs-action-subscription">
          <div className="subscription-social_icons-box">
            <b className="pb-4">Get Exclusive Deals in your Inbox</b>
            <form className="subscription-footer-form pt-2">
              <input type="email" placeholder="abcd@xyz.com" />
              <button type="submit">Subscribe</button>
            </form>
            <p className="text-sm pt-2 px-4">
              we wont spam, read our{" "}
              <Link href="/" className="underline">
                email policy
              </Link>
            </p>
            <span className="social-icons-footer">
              <Link href="/">
                <FaSquareInstagram />
              </Link>
              <Link href="/">
                <FaSquareFacebook />
              </Link>
              <Link href="/">
                <AiFillTikTok />
              </Link>
            </span>
          </div>
          <span className="footer-tabs-box legal-page-tabs">
            <b className="pb-4">Legal Pages</b>
            <Link href="/">Terms and Condition</Link>
            <Link href="/">Privacy</Link>
            <Link href="/">Cookies</Link>
            <Link href="/">Modern Slavery Statement</Link>
          </span>
          <span className="footer-tabs-box Important-page-tabs">
            <b className="pb-4">Important Links</b>
            <Link href="/">Get help</Link>
            <Link href="/">Add your restaurants</Link>
            <Link href="/">Sign up to deliver</Link>
            <Link href="/">Create a business account</Link>
          </span>
        </div>
      </div>
      <div className="copyright-line">
        <p>Foood Dish &copy; Copyright 2024, All Rights Reserved.</p>
        <span className="footer-tabs">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms</Link>
          <Link href="/">Pricing</Link>
          <p>Do not sell or share my personal information</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
