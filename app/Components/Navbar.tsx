"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import BookACallBtn from "./BookACallBtn";

export default function Navbar() {
  const links = [
    { name: "Featured", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="bg-main text-white px-6 md:px-12 py-2 flex flex-wrap md:flex-nowrap justify-between items-center w-full sticky top-0 z-50 shadow-sm">
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
        {links.map((link) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white transition-colors"
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
      </section>

      {/* CTA Button */}
      <div className="mt-4 md:mt-0">
        <BookACallBtn path="#" />
      </div>
    </nav>
  );
}
