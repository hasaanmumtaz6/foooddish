import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/HomeBanner";
import Deals from "./components/Deals";
import PopularCategories from "./components/PopularCategories";
import PopularRestaurants from "./components/PopularRestaurants";
import AppDownload from "./components/AppDownload";
import SignupCards from "./components/SignupCards";
import MoreAboutUs from "./components/MoreAboutUs";
import Counterdetail from "./components/Counterdetail";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home - FooodDish</title>
        <meta name="description" content="Bring delicious food at Home" />
      </Head>
      <section className="home-page-box padding-off-box">
        <HomeBanner />
        <Deals />
        <PopularCategories />
        <PopularRestaurants />
        <AppDownload />
        <SignupCards />
        <MoreAboutUs />
        <Counterdetail />
      </section>
    </Layout>
  );
};

export default Home;
