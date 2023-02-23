import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Hello World</h1> */}
        {/* Header */}
        <Header/>
        {/* Banner */}
        <Banner/>
    </div>
  )
}

export default Home
