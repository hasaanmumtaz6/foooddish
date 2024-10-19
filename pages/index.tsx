import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/HomeBanner";
import Deals from "./components/Deals";
import PopularCategories from "./components/PopularCategories";
import PopularRestaurants from "./components/PopularRestaurants";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Foood Dish - Home</title>
        <meta name="description" content="Bring delicious food at Home" />
      </Head>
      <section>
        <HomeBanner />
        <Deals />
        <PopularCategories />
        <PopularRestaurants />
      </section>
    </Layout>
  );
};

export default Home;
