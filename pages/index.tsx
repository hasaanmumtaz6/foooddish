import Head from 'next/head'
import React from 'react'
import Layout from './components/Layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Food Dish - Home</title>
        <meta name="description" content="Bring delicious food at Home" />
      </Head>
    </Layout>
  )
}

export default Home
