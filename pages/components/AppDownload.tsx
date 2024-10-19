import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/img/logo2.png";
import playstore from "@/public/img/playstore.png";
import appstore from "@/public/img/appstore.png";
import character3 from "@/public/img/character3.png";
import character3shadow from "@/public/img/character3Shadow.png";

const AppDownload = () => {
  return (
    <section className="download-app-box">
      <span className="card-character-pics-box w-full abolute">
        <Image className="image1" src={character3shadow} alt="character3-shadow" />
        <Image className="image2" src={character3} alt="character3" />
      </span>
      <div className="text-details-container-download-app-box">
        <span className="text-details-box-download-app-box">
          <span className="logo-box-download-app-section">
            <Image src={logo} alt="logo" />
            <b>is more</b>
          </span>
          <p className="highlighted-text-box">
            <b className="text-[var(--text-secondry)]">Personalised</b> &{" "}
            <b>Instant</b>
          </p>
          <p className="act-line-download-app">
            Download the Foood Dish app for faster ordering
          </p>
          <span className="mobile-store-badge-images">
            <Link href="/">
              <Image src={playstore} alt="play-store-pic" />
            </Link>
            <Link href="/">
              <Image src={appstore} alt="app-store-pic" />
            </Link>
          </span>
        </span>
      </div>
    </section>
  );
};

export default AppDownload;
