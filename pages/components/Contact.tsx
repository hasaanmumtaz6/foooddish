import Link from "next/link";
import React, { useState } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

const Contact = () => {
  const [opner, setOpner] = useState(true);
  const mapOpner = () => {
    setOpner(true);
  };
  return (
    <section
      className="contact-section-container padding-off-box pb-10 pt-4"
      id="contact"
    >
      <h2 className="text-4xl font-bold pb-4">Contact Us</h2>
      <div className="contact-section-box">
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Reason" />
            <textarea rows={5} cols={10} placeholder="Message" />
            <button type="submit" className="submit-btn-contact-form">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-address-container">
          <h4 className="contact-address-conatiner-title">Contact Book</h4>
          <div className="contact-address-box">
            <span className="address-boxes">
              <b>Email: </b>
              <Link href="mailto:contact@foooddish.com">
                contact@foooddish.com
              </Link>
            </span>
            <span className="address-boxes">
              <b>Phone: </b>
              <Link href="tel:+923257390045">+92-325-7390045</Link>
            </span>
            <span className="address-boxes">
              <b>Address: </b>
              <Link href="#">
                Rc towana, Toranto, <b>Bonita</b> , 19876, UK
              </Link>
            </span>
            {opner && (
              <span className="address-boxes">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12204.202873728294!2d71.655469!3d29.38293055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1731636169915!5m2!1sen!2s"
                  className="map"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </span>
            )}
          </div>
          <b className="box-opner-contact-address">
            {opner ? (
              <FaAnglesUp onClick={() => setOpner(false)} />
            ) : (
              <FaAnglesDown onClick={() => setOpner(true)} />
            )}
          </b>
        </div>
        <div className="about-us-container">
          <h3>About Us</h3>
          <b>
            {"🍽️"}Foooddish: Pakistan{"'"}s Premier Food Delivery Service
          </b>
          <p>
            <b>Foooddish</b><sup>🇵🇰</sup> Pakistan{"'"}s trusted food delivery
            platform, connects you with top-tier restaurants {"🍔🍕"}. We ensure
            your favorite meals {"🚴‍♂️"} arrive fresh and on time {"⏰"} at your
            doorstep, with unmatched service quality {"⭐"}.
          </p>
          <b>🚀 Redefining Convenience, One Meal at a Time</b>
          <p>
            Our riders deliver happiness {"🥡"}, catering to diverse tastes{" "}
            {"🍛🍣"} across Pakistan {"🗺️"}. With a commitment to excellence{" "}
            {"🌟"}, we outshine ordinary delivery services, making your cravings
            our priority {"🎯"}.
          </p>
          <b>{"🙏"} Thank You for choosing Foooddish!</b>
          <p>
            Your trust and support inspire us to deliver the best {"🍴"} every
            time. {"🚀❤️"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
