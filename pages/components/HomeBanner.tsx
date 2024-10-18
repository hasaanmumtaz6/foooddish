import React from "react";
import women1Pic from "@/public/img/character1.png";
import women2Pic from "@/public/img/character2.png";
import blob from "@/public/img/blob1.png";
import Image from "next/image";

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
      <Image src={women1Pic} alt="character-1" className="absolute right-52 z-20 top-3" width={600} />
      <div className="absolute right-0 bottom-0 z-10">
        <div className="image-illustration-pic relative">
          <Image src={blob} alt="blob-pic" width={400} />
          <Image
            src={women2Pic}
            alt="character-2"
            width={250}
            className="absolute top-[16.5%] -left-5"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;