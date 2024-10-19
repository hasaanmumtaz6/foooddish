import React, { useState } from "react";
import Image from "next/image";
import card1Pic from "@/public/img/order.png";
import card2Pic from "@/public/img/track.png";
import card3Pic from "@/public/img/reciveorder.png";
import card4Pic from "@/public/img/card.png";
import card5Pic from "@/public/img/crypto.png";
import card6Pic from "@/public/img/cashdelivery.png";
import trackfood from "@/public/img/trackfood.png";
import discount from "@/public/img/discount.png";
import orderarea from "@/public/img/orderarea.png";
import logo from "@/public/img/logo.png";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaTwitter
} from "react-icons/fa";

const MoreAboutUs = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);

  const button1Click = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const button2Click = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
  };
  const button3Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
  };
  const button4Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
  };

  const question1Click = () => {
    setQuestion1(true);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
  };
  const question2Click = () => {
    setQuestion1(false);
    setQuestion2(true);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
  };
  const question3Click = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(true);
    setQuestion4(false);
    setQuestion5(false);
  };
  const question4Click = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(true);
    setQuestion5(false);
  };
  const question5Click = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(true);
  };

  return (
    <section className="more-about-us-box">
      <div className="header-more-about-us-box">
        <b className="header-title-more-about-us-box">Know more about us!</b>
        <span className="tabs-box-more-about-us-box">
          <button
            onClick={button1Click}
            className={
              active1
                ? "tabs-btn-box-more-about-us-active"
                : "tabs-btn-box-more-about-us"
            }
          >
            Frequent Questions
          </button>
          <button
            onClick={button2Click}
            className={
              active2
                ? "tabs-btn-box-more-about-us-active"
                : "tabs-btn-box-more-about-us"
            }
          >
            Who we are?
          </button>
          <button
            onClick={button3Click}
            className={
              active3
                ? "tabs-btn-box-more-about-us-active"
                : "tabs-btn-box-more-about-us"
            }
          >
            Partner Program
          </button>
          <button
            onClick={button4Click}
            className={
              active4
                ? "tabs-btn-box-more-about-us-active"
                : "tabs-btn-box-more-about-us"
            }
          >
            Help & Support
          </button>
        </span>
      </div>

      <div className="body-more-about-us-box">
        {active1 && (
          <div className="body-box-more-about-us-box frequent-question">
            <span className="questions-box">
              <button
                onClick={question1Click}
                className={question1 ? "question-active" : "question"}
              >
                How does Foood Dish work?
              </button>

              <button
                onClick={question2Click}
                className={question2 ? "question-active" : "question"}
              >
                What payment methods are accepted?
              </button>

              <button
                onClick={question3Click}
                className={question3 ? "question-active" : "question"}
              >
                Can I track my order in real-time?
              </button>

              <button
                onClick={question4Click}
                className={question4 ? "question-active" : "question"}
              >
                Are there any special discounts or promotions available?
              </button>

              <button
                onClick={question5Click}
                className={question5 ? "question-active" : "question"}
              >
                Is Foood Dish available in my area?
              </button>
            </span>

            <div className="question-answer-box">
              {question1 && (
                <div className="question1-answer">
                  <div className="qustion1-cards-box">
                    <span className="question1-card">
                      <b>Place an Order!</b>
                      <Image src={card1Pic} alt="question-card1-pic" />
                      <p>Place order through our website or Mobile app</p>
                    </span>
                    <span className="question1-card">
                      <b>Track Progress</b>
                      <Image src={card2Pic} alt="question-card1-pic" />
                      <p>Your can track your order status with delivery time</p>
                    </span>
                    <span className="question1-card">
                      <b>Get your Order!</b>
                      <Image src={card3Pic} alt="question-card1-pic" />
                      <p>Receive your order at a lighting fast speed!</p>
                    </span>
                  </div>
                  <p className="text-center text-sm">
                    Foood Dish simplifies the food ordering process. Browse
                    through our diverse menu, select your favorite dishes, and
                    proceed to checkout. Your delicious meal will be on its way
                    to your doorstep in no time!
                  </p>
                </div>
              )}

              {question2 && (
                <div className="question2-answer">
                  <div className="qustion2-cards-box">
                    <span className="question2-card">
                      <b>Card Payment</b>
                      <Image src={card4Pic} alt="question2-card1-pic" />
                      <p>Pay through any debit/credit card.</p>
                    </span>
                    <span className="question2-card">
                      <b>Crypto Currency</b>
                      <Image src={card5Pic} alt="question2-card1-pic" />
                      <p>Pay buy crypto network using USDT.</p>
                    </span>
                    <span className="question2-card">
                      <b>Cash on Delivery</b>
                      <Image src={card6Pic} alt="question2-card1-pic" />
                      <p>Receive your order and pay to Rider</p>
                    </span>
                  </div>
                  <p className="text-center text-sm">
                    Foood Dish accept various payment methods, including credit
                    and debit cards, cash on delivery, and cryptocurrency.
                    Choose the most convenient option for you at checkout to
                    complete your purchase easily and securely.
                  </p>
                </div>
              )}

              {question3 && (
                <span className="question3-answer">
                  <Image src={trackfood} alt="track-order" />
                  <p>
                    Yes, you can track your order in real-time. Once your order
                    is processed, a tracking number will be provided, allowing
                    you to monitor your Foood status from dispatch to delivery
                    through our tracking system.
                  </p>
                </span>
              )}

              {question4 && (
                <span className="question4-answer">
                  <Image src={discount} alt="track-order" />
                  <p>
                    Yes, special discounts are available. If a restaurant offers
                    a discount, you will receive it. Additionally, enjoy
                    exclusive discounts for using our web services, and earn
                    loyalty points for future benefits.
                  </p>
                </span>
              )}

              {question5 && (
                <span className="question5-answer">
                  <Image src={orderarea} alt="orderarea" />
                  <p>
                    Foood Dish is available in 20 cities across Pakistan,
                    including Karachi, Lahore, Islamabad, Bahawalpur,
                    Faisalabad, Quetta, Sargodha, Multan, Lodhran, Rahim Yar
                    Khan, Mandi Yazman, Murree, Rawalpindi, Gujranwala,
                    Peshawar, Sialkot, Sukkur, Kasur, Hyderabad and Larkana.
                  </p>
                </span>
              )}
            </div>
          </div>
        )}

        {active2 && (
          <span className="body-box-more-about-us-box who-we-are p-10 flex items-start justify-center flex-col">
            <span className="flex items-center justify-center w-full">
              <Image src={logo} alt="logo-foood-dish" className="w-[200px]" />
            </span>
            <b className="pb-4 text-xl">Who we are?</b>
            <p>
              Foood Dish is a leading food delivery service operating for over
              two years in 20 major cities across Pakistan, including Karachi,
              Lahore, and Islamabad. Partnering with the top restaurants in the
              country, we are committed to delivering quality meals to your
              doorstep, ensuring a seamless and enjoyable food experience for
              our customers.
            </p>
          </span>
        )}

        {active3 && (
          <span className="body-box-more-about-us-box partner-program p-10">
            <p>
              The Foood Dish Partner Program offers restaurants a unique
              opportunity to expand their customer base by joining our
              fast-growing food delivery network. As a partner, you{"’"}ll
              benefit from increased visibility in 20 cities across Pakistan,
              including Karachi, Lahore, and Islamabad, with access to a larger
              audience through our app and website. We handle the logistics
              while you focus on delivering top-quality food, ensuring a
              seamless and profitable partnership experience
            </p>
          </span>
        )}

        {active4 && (
          <span className="body-box-more-about-us-box help-and-support p-10">
            <span className="help-info border-l-[8px] border-l-[#d9d9d9] border-dotted pl-4">
              <span className="flex items-center gap-2 border-b-2 border-b-white py-5">
                <FaEnvelope />
                <Link href="mailto:hasaanmumtaz6@gmail.com">
                  hasaanmumtaz6@gmail.com
                </Link>
              </span>
              <span className="flex items-center gap-2 border-b-2 border-b-white py-5">
                <FaPhone />
                <Link href="tel:+923257390045">+92-325-7390-045</Link>
              </span>
              <span className="flex items-center gap-2 border-b-2 border-b-white py-5">
                <FaLocationDot />
                <Link href="tel:+923257390045">
                  Modal Town A, St No.04, Bahawalpur Punjab Pakistan
                </Link>
              </span>
              <span className="flex items-start flex-col gap-2 border-b-0 border-b-white py-5">
                <p>
                  <b>&#x2022;</b> Visit Our Social Media
                </p>
                <span className="flex items-center gap-4 text-white text-xl">
                  <Link href="/">
                    <FaTwitter />
                  </Link>
                  <Link href="/">
                    <FaFacebook />
                  </Link>
                  <Link href="/">
                    <FaInstagram />
                  </Link>
                  <Link href="/">
                    <FaTiktok />
                  </Link>
                </span>
              </span>
            </span>

            <form className="contact-form-more-about-us-box flex flex-col gap-2">
              <b className="text-xl">Contact Now</b>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <textarea rows={4} cols={10} placeholder="Write Message" />
              <button type="submit">Send Message</button>
            </form>
          </span>
        )}
      </div>
    </section>
  );
};

export default MoreAboutUs;
