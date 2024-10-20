import React from "react";
import women1Pic from "@/public/img/character1.png";
import women2Pic from "@/public/img/character2.png";
import blob from "@/public/img/blob1.png";
import Image from "next/image";
import ReviewHomeBanner from "./ReviewHomeBanner";
import popper from "@/public/img/poper.png";
import tick from "@/public/img/TickBox.png";
import tracking from "@/public/img/Tracking.png";
import one from "@/public/img/one.png";
import two from "@/public/img/two.png";
import three from "@/public/img/three.png";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="action-text-box">
        <p className="text-sm pb-2">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h3 className="banner-home-heading-one">Feast Your Senses,</h3>
        <h3 className="banner-home-heading-two">Fast and Fresh</h3>
        <p className="text-[12px] pt-2">
          Enter a food name to see what we deliver
        </p>

        <form className="home-banner-search-form">
          <input type="search" placeholder="Enter Foood Name" />
          <button type="submit">Search</button>
        </form>
      </div>
      <Image
        src={women1Pic}
        alt="character-1"
        className="absolute right-52 z-20 bottom-0 character1-pic"
        width={550}
      />
      <div className="absolute right-0 bottom-0 z-10">
        <div className="image-illustration-pic relative">
          <Image src={blob} alt="blob-pic" width={400} className="blob-pic" />
          <Image
            src={women2Pic}
            alt="character-2"
            width={250}
            className="absolute top-[16.5%] -left-5 character2-pic"
          />
        </div>
        <ReviewHomeBanner
          classnamenumbers="w-[13px] number1pic numberpics h-auto absolute -top-7 right-[17px]"
          numberPics={one}
          title="We’ve Received your order!"
          description="Awaiting Restaurant acceptance"
          titlepic={tracking}
          classname="top-10 right-24 reviewbanner review-banner1"
        />
        <ReviewHomeBanner
          classnamenumbers="w-[20px] number2pic numberpics h-auto absolute -top-7 right-[17px]"
          numberPics={two}
          title="Order Accepted!"
          description="Your order will be delivered shortly"
          titlepic={tick}
          classname="top-[40%] right-6 reviewbanner review-banner2"
        />
        <ReviewHomeBanner
          classnamenumbers="w-[20px] number3pic numberpics h-auto absolute -top-7 right-[17px]"
          numberPics={three}
          title="Your rider's nearby"
          description="They're almost there - get ready!"
          titlepic={popper}
          classname="bottom-10 right-[52px] reviewbanner review-banner3"
        />
      </div>
    </section>
  );
};

export default HomeBanner;
