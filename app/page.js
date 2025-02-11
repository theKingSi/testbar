"use client";
                      
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Navbar from "@/components/navbar"
import Hero from "@/components/landing/hero"
import Exp from "@/components/landing/exp"

export default function Home() {
  return (
    <div>
   <Navbar />
   <Hero />
   {/* <Exp /> */}
         </div>
  );
}
