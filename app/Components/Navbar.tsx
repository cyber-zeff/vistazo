"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import BookACallBtn from "./BookACallBtn";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const links = [
    { name: "Featured", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "About", href: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-main text-white px-6 md:px-12 py-3 md:py-2 lg:py-2 flex flex-wrap md:flex-nowrap justify-between items-center w-full sticky top-0 z-50 shadow-sm">
      
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

      {/* Hamburger button for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Navigation Links + CTA */}
      <section
        className={`
          flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-4 md:py-2
          ${isOpen ? "flex" : "hidden"} md:flex
          absolute md:static top-full left-0 w-full md:w-auto bg-main md:bg-transparent
        `}
      >
        {links.map((link) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white transition-colors px-4 py-2 md:p-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {link.name}
              <motion.span
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute left-0 -bottom-1 h-0.75 bg-white"
              />
            </a>
          );
        })}

        {/* CTA Button in mobile dropdown */}
        <div className="md:hidden mt-2 w-full flex justify-center">
          <BookACallBtn path="#" />
        </div>
      </section>

      {/* CTA Button for desktop */}
      <div className="hidden md:block mt-0">
        <BookACallBtn path="#" />
      </div>
    </nav>
  );
}
