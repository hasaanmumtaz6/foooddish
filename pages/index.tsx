import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/HomeBanner";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Foood Dish - Home</title>
        <meta name="description" content="Bring delicious food at Home" />
      </Head>
      <section>
        <HomeBanner />
      </section>
    </Layout>
  );
};

export default Home;
