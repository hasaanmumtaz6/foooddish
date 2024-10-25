import React, { useState } from "react";
import Layout from "./components/Layout";
import restaurantsLogo from "@/public/img/fries.png";
import Head from "next/head";
import RestaurantsBanner from "./components/RestaurantsBanner";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import RestaurantsOfferCard from "./components/RestaurantsOfferCard";
import offerPic from "@/public/img/offerPic.png";
import RestaurantsCards from "./components/RestaurantsCards";

const Restaurants = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [active9, setActive9] = useState(false);
  const [active10, setActive10] = useState(false);
  const [active11, setActive11] = useState(false);

  const button1Click = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button2Click = () => {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button3Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button4Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button5Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button6Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(true);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button7Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(true);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button8Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(true);
    setActive9(false);
    setActive10(false);
    setActive11(false);
  };
  const button9Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(true);
    setActive10(false);
    setActive11(false);
  };
  const button10Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(true);
    setActive11(false);
  };
  const button11Click = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
    setActive8(false);
    setActive9(false);
    setActive10(false);
    setActive11(true);
  };

  return (
    <Layout>
      <Head>
        <title>Restaurants - FooodDish</title>
        <meta
          name="description"
          content="FooodDish Restaurants help you get delicious and healthy food"
        />
      </Head>
      <main className="reataurants-box">
        <section className="padding-off-box">
          <RestaurantsBanner />
          <div className="reataurants-search-header-box">
            <h4>Find FooodDish top Restaurants Food</h4>
            <form className="reataurants-search-box">
              <label htmlFor="searchBox">
                <FaSearch />
              </label>
              <input
                type="search"
                placeholder="Search resturants, food..."
                className="searchBox"
                id="searchBox"
              />
            </form>
          </div>
        </section>

        <section className="restaurants-navbar padding-off-box">
          <Link
            onClick={button1Click}
            href="#Offer"
            className={
              active1
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Offer
          </Link>
          <Link
            onClick={button2Click}
            href="#Burgers"
            className={
              active2
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Burgers
          </Link>
          <Link
            onClick={button3Click}
            href="#Fries"
            className={
              active3
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Fries
          </Link>
          <Link
            onClick={button4Click}
            href="#Snacks"
            className={
              active4
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Snacks
          </Link>
          <Link
            onClick={button5Click}
            href="#Salads"
            className={
              active5
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Salads
          </Link>
          <Link
            onClick={button6Click}
            href="#Colddrinks"
            className={
              active6
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Cold drinks
          </Link>
          <Link
            onClick={button7Click}
            href="#Happymeal"
            className={
              active7
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Happy Meal
          </Link>
          <Link
            onClick={button8Click}
            href="#Desserts"
            className={
              active8
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Desserts
          </Link>
          <Link
            onClick={button9Click}
            href="#Hotdrinks"
            className={
              active9
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Hot Drinks
          </Link>
          <Link
            onClick={button10Click}
            href="#Sauces"
            className={
              active10
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Sauces
          </Link>
          <Link
            onClick={button11Click}
            href="#Orbits"
            className={
              active11
                ? "restaurants-navbar-links-active"
                : "restaurants-navbar-links"
            }
          >
            Orbits
          </Link>
        </section>

        {/* restaurants offer */}
        <section className="padding-off-box" id="Offer">
          <RestaurantsOfferCard
            companyAbout="lorem ipsum dollar"
            companyName="Dollar Sit Amit Constructor"
            discounts="-20%"
            url="#Offer"
            cardPic={offerPic}
          />
          <RestaurantsOfferCard
            companyAbout="lorem ipsum dollar"
            companyName="Dollar Sit Amit Constructor"
            discounts="-90%"
            url="#Offer"
            cardPic={offerPic}
          />
          <RestaurantsOfferCard
            companyAbout="lorem ipsum dollar"
            companyName="Dollar Sit Amit Constructor"
            discounts="-50%"
            url="#Offer"
            cardPic={offerPic}
          />
        </section>
        {/* restaurants offer */}

        {/* restaurants Burgers */}
        <section className="padding-off-box burgers-cart-rest-box" id="Burgers">
          <h3 className={active2 ? "active-heading" : "inactive-heading"}>
            Burgers
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Burgers */}

        {/* restaurants Fries */}
        <section className="padding-off-box" id="Fries">
          <h3 className={active3 ? "active-heading" : "inactive-heading"}>
            Fries
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Fries */}

        {/* restaurants Snacks */}
        <section className="padding-off-box" id="Snacks">
          <h3 className={active4 ? "active-heading" : "inactive-heading"}>
            Snacks
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Snacks */}

        {/* restaurants Salads */}
        <section className="padding-off-box" id="Salads">
          <h3 className={active5 ? "active-heading" : "inactive-heading"}>
            Salads
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Salads */}

        {/* restaurants Colddrinks */}
        <section className="padding-off-box" id="Colddrinks">
          <h3 className={active6 ? "active-heading" : "inactive-heading"}>
            Cold Drinks
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Colddrinks */}

        {/* restaurants Happymeal */}
        <section className="padding-off-box" id="Happymeal">
          <h3 className={active7 ? "active-heading" : "inactive-heading"}>
            Happy Meal
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Happymeal */}

        {/* restaurants Desserts */}
        <section className="padding-off-box" id="Desserts">
          <h3 className={active8 ? "active-heading" : "inactive-heading"}>
            Desserts
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Desserts */}

        {/* restaurants Hotdrinks */}
        <section className="padding-off-box" id="Hotdrinks">
          <h3 className={active9 ? "active-heading" : "inactive-heading"}>
            Hot Drinks
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Hotdrinks */}

        {/* restaurants Sauces */}
        <section className="padding-off-box" id="Sauces">
          <h3 className={active10 ? "active-heading" : "inactive-heading"}>
            Sauces
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
        {/* restaurants Sauces */}

        {/* restaurants Orbits */}
        <section className="padding-off-box" id="Orbits">
          <h3 className={active11 ? "active-heading" : "inactive-heading"}>
            Orbits
          </h3>
          <div className="restaurants-card-box">
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
            <RestaurantsCards
              companyAbout={
                "hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo, hello deja bo"
              }
              companyName={"dejabo dejabo rest"}
              url={"#Burgers"}
              logo={restaurantsLogo}
              price={"320PKR"}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Restaurants;
