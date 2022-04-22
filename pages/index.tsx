import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Favicon from "../components/Favicon"

const Home: NextPage = () => {
  return (
    <>
      <Favicon />
      <Head>
        <title>Alex Kucun works?</title>
        <meta name="description" content="Alex Kucun's not personal website" />
      </Head>
      <div className="h-screen w-full flex items-center justify-center">
        <div>
          <h1 className="text-2xl">
            <span className="text-red-500">Alex Kucun</span> works?
          </h1>
          <p className="text-gray-500">Of course not! He is a software engineer, and He is not a slave!</p>
        </div>
      </div>
    </>
  )
}

export default Home
