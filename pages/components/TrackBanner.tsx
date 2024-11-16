import Image from "next/image";
import React from "react";
import trackbannerpic from "@/public/img/trackorderbanner.png";
import characterpic from "@/public/img/character6.png";
import characterills from "@/public/img/character8.png";
import Link from "next/link";

const TrackBanner = () => {
  return (
    <section className="track-banner-container padding-off-box">
      <div className="track-banner-box">
        <Image
          src={trackbannerpic}
          alt="trackbanner-pic"
          className="track-banner-pic-main"
        />
        <div className="banner-content-track-order">
          <div className="text-btn-content-track-order-banner">
            <h4>
              Track Your <b className="underline">Rider</b>
            </h4>
            <h3>Fast and Easy</h3>
            <p>Real-time tracking to your door.</p>
            <span className="text-btn-content-track-order-banner-btn-box">
                <Link className="link01" href="#track">Track Dish</Link>
                <Link className="link02" href="#contact">Contact us</Link>
            </span>
          </div>
          <div className="illustration-pic-content-order-banner">
            <span className="pic-box-track-order-banner">
              <Image src={characterpic} alt="characterpic" className="characterpic" />
            </span>
            <span className="ills-box-track-order-banner">
              <Image src={characterills} alt="characterills" className="characterills" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackBanner;
