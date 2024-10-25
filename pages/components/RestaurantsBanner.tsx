import Image from "next/image";
import React from "react";
import bannerPic from "@/public/img/resurantsbannerbg1.png";
import starrate from "@/public/img/starrating.png";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";

const RestaurantsBanner = () => {
  return (
    <section className="restaurants-banner-box">
      <Image
        src={bannerPic}
        alt="banner-back-pic"
        className="restaurants-pic-bg-banner"
      />
      <div className="content-box-banner-restaurants">
        <span className="text-content-banner-restaurants">
          <p className="act-line-banner-restaurants">
            I{"'"}m lovin{"'"} it!
          </p>
          <h3>Best Restaurants of FooodDish For You....</h3>
          <span className="banner-reataurants-btns-box">
            <span className="banner-reataurants-btn">
              <FaClipboardList />
              <p>Minimum Order: 300 PKR</p>
            </span>
            <span className="banner-reataurants-btn">
              <MdOutlineDirectionsBike />
              <p>Delivery in 20-25 Minutes</p>
            </span>
          </span>
        </span>
        <span className="image-rate-content-banner-restaurants">
          <Image
            src={bannerPic}
            alt="banner-back-pic"
            className="restaurants-pic-banner"
          />
          <span className="badge-box-image-rate-content-banner-restaurants">
            <b>3.5</b>
            <Image src={starrate} alt="star-rate" />
            <p>1200 reviews</p>
          </span>
        </span>
      </div>
      <span className="banner-badge-box-restaurants">
        <LuClock3 />
        <p>Open until 3 AM</p>
      </span>
    </section>
  );
};

export default RestaurantsBanner;
