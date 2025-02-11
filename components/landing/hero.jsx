import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { Exo } from 'next/font/google';
import Exp from "@/components/landing/exp" 

export default function Hero() {
  return (
    <>    <section className="flex flex-col items-center text-center py-16 px-6 relative max-w-4xl mx-auto">
      {/* Greeting */}
      <Link
      href="/"
       className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-transparent shadow-md px-6 py-3 rounded-full text-sm font-medium border border-gray-300">
     <TypeAnimation
      sequence={[
        'Hello',
        2000, 
        'Hola',
        2000,
        "Kon'nichiwa",
        2000,
        'Nǐ hǎo',
        2000
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
       </Link>
      
      {/* Main Text */}
      <h1 className="text-5xl font-bold mt-5 leading-tight">
        I'm <span className="text-orange-500">Solomon</span>,<br /> Software Developer
      </h1>
    
      
      {/* Image */}
      <div className="relative mt-8 flex justify-center">
        <div className="absolute w-72 h-72 bg-orange-200 rounded-full -z-10"></div>
        <Image
          src="/path-to-jenny-image.jpg"
          alt="Jenny"
          width={240}
          height={240}
          className="object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>
      
      {/* Buttons */}
      <div className="mt-6 flex gap-6 border shadow-xl px-2 py-2 rounded-full bg-opacity-40">
        <Link
        href="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:bg-transparent gap-2  hover:text-orange-500">
          Portfolio →
        </Link>
        <Link
        href="/"
        className="hover:bg-orange-500 shadow-lg hover:text-white text-orange-500 px-6 py-3 bg-transparent rounded-full font-semibold">
          Hire me
        </Link>
      </div>
   
    </section>


    <Exp />
    </>

  );
}
