import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import Favicon from "../components/Favicon"
import Loader from "../components/Loader"

const BUTTON_CLASSES =
  "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex gap-1 items-center"

const TEXTS = [
  "Of course not! He is a software engineer, and He is not a slave!",
  "I'm sorry, Alex Kucun is not working right now. He is a software engineer, and He is not a slave!",
  "Maybe He works. Although He doesn't... He is a software engineer, and He is not a slave!",
  "No, and now he doesn't want to work. He is a software engineer, and He is not a slave!",
  "Well, no...",
]

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setIsChecked] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const text = TEXTS[textIndex]

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
        setIsChecked(true)
        setTextIndex(Math.floor(Math.random() * TEXTS.length))
      }, 500)
    }
  }, [isLoading])

  return (
    <>
      <Favicon />
      <Head>
        <title>Alex Kucun works?</title>
        <meta name="description" content="Alex Kucun's not personal website" />
      </Head>
      <div className="h-screen w-full flex items-center justify-center">
        <div>
          <div className="text-center">
            <Image src="/alex.jpeg" width="300" height="300" alt="Alex just relaxed" className="rounded-full" />
          </div>
          <h1 className="text-2xl">
            <span className="text-red-500">Alex Kucun</span> works?
          </h1>
          <p className="text-gray-500 h-24 w-80">{!isLoading && text}</p>
          <div className="flex justify-center mt-3">
            <button className={BUTTON_CLASSES} onClick={() => setIsLoading(true)}>
              {isLoading && <Loader />}
              {isLoading && "Checking..."}
              {!checked && !isLoading && "Check if Alex works"}
              {checked && !isLoading && "Check if Alex works again..."}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
