import React, { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-16 bg-black text-white flex items-center px-10 shadow-lg z-50 mx-auto max-w-4xl rounded-full mt-8">
      <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
        {/* Left Section */}
        <ul className="hidden md:flex gap-8">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-orange-500 cursor-pointer">About</li>
          </Link>
          <Link href="/service">
            <li className="hover:text-orange-500 cursor-pointer">Service</li>
          </Link>
        </ul>

        {/* Logo */}
        <div className="text-center font-bold text-lg flex items-center gap-2">
          <Link 
          href="/"
          className="bg-orange-500 p-2 rounded-full text-black font-bold">KT</Link>
          king'sTech
        </div>

        {/* Right Section */}
        <ul className="hidden md:flex gap-8">
          <Link href="/resume">
            <li className="hover:text-orange-500 cursor-pointer">Resume</li>
          </Link>
          <Link href="/project">
            <li className="hover:text-orange-500 cursor-pointer">Project</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-5 flex flex-col items-center md:hidden">
          <Link href="/">
            <li className="bg-orange-500 px-4 py-2 rounded-full font-semibold cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-orange-500 cursor-pointer my-2">About</li>
          </Link>
          <Link href="/service">
            <li className="hover:text-orange-500 cursor-pointer my-2">Service</li>
          </Link>
          <Link href="/resume">
            <li className="hover:text-orange-500 cursor-pointer my-2">Resume</li>
          </Link>
          <Link href="/project">
            <li className="hover:text-orange-500 cursor-pointer my-2">Project</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-orange-500 cursor-pointer my-2">Contact</li>
          </Link>
        </div>
      )}
    </nav>
  );
}
