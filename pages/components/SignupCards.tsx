import Image from "next/image";
import React from "react";
import character4 from "@/public/img/character4.png";
import character5 from "@/public/img/character5.png";
import Link from "next/link";

const SignupCards = () => {
  return (
    <section className="signup-cards-box">
      <div className="sign-up-business">
        <Image src={character4} alt="character4" />
        <span className="signup-card-details">
          <p>Signup as a business</p>
          <b>Partner with us</b>
          <Link href="/">Get Started</Link>
        </span>
        <b className="signup-card-badge">Earn more with lower fees</b>
      </div>
      <div className="sign-up-rider">
        <Image src={character5} alt="character5" />
        <span className="signup-card-details">
          <p>Signup as a business</p>
          <b>Partner with us</b>
          <Link href="/">Get Started</Link>
        </span>
        <b className="signup-card-badge">Earn more with lower fees</b>
      </div>
    </section>
  );
};

export default SignupCards;
