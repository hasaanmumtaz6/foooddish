import React from "react";
import Layout from "./components/Layout";
import Head from "next/head";
import TrackBanner from "./components/TrackBanner";
import TrackDish from "./components/TrackDish";
import Contact from "./components/Contact";

const Tracker = () => {
  return (
    <Layout>
      <Head>
        <title>Track Order - FooodDish</title>
      </Head>
      <main className="track-order-container">
        <TrackBanner />
        <TrackDish /> 
        <Contact />
      </main>
    </Layout>
  );
};

export default Tracker;
