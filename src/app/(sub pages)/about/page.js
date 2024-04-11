"use client"
import Image from "next/image";
import bg from "../../../../public/background/about.png";
import pic from "../about/download.jpeg"
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import { Typewriter } from 'react-simple-typewriter'






export default function Home() {

  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

<div className="flex flex-col sm:flex-row space-between h-auto sm:h-80 w-full items-center">
  <div className="mb-4 sm:mb-0 sm:mr-4">
    <h3 className="text-4xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent mt-20 sm:mt-0 w-full sm:w-64">
      <Typewriter
        words={['Sikander Mirza']}
        loop={5}
        cursor
        cursorStyle='/>'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h3>
  </div>
  <div className="ml-auto">
    <Image className="rounded-full w-32 sm:w-auto" src={pic} />
  </div>
</div>


      <AboutDetails />
    </>
  );
}
