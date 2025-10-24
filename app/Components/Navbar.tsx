"use client";

import Image from "next/image";
import BookACallBtn from "./BookACallBtn";

export default function Navbar() {
  return (
    <nav className="bg-main text-white px-6 md:px-12 py-4 flex flex-wrap md:flex-nowrap justify-between items-center w-full">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          width={155}
          height={35}
          alt="Company logo"
          className="h-auto w-auto"
          priority
        />
      </div>

      {/* Navigation Links */}
      <section className="flex flex-wrap justify-center gap-4 md:gap-8 py-2">
        <a href="#" className="hover:text-blue-500 transition">Featured</a>
        <a href="#" className="hover:text-blue-500 transition">Testimonial</a>
        <a href="#" className="hover:text-blue-500 transition">FAQ</a>
        <a href="#" className="hover:text-blue-500 transition">About</a>
      </section>

      {/* CTA Button */}
      <div className="mt-4 md:mt-0">
        <BookACallBtn />
      </div>
    </nav>
  );
}
