import Head from 'next/head'
import React from 'react'
import Layout from './components/Layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Foood Dish - Home</title>
        <meta name="description" content="Bring delicious food at Home" />
      </Head>
      <div>
        <p>Home</p>
      </div>
    </Layout>
  )
}

export default Home
