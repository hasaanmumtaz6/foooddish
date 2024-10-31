import React from "react";
import Layout from "./components/Layout";
import Head from "next/head";
import TrackBanner from "./components/TrackBanner";

const Tracker = () => {
  return (
    <Layout>
      <Head>
        <title>Track Order - FooodDish</title>
      </Head>
      <main className="track-order-container">
        <TrackBanner />
      </main>
    </Layout>
  );
};

export default Tracker;
