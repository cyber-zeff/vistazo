"use client";

import Image from "next/image";
import Typewriter from "./Typewriter";
import GetStartedBtn from "./GetStartedBtn";

export default function Showcase() {
  return (
    <section className="bg-main text-white min-h-screen flex flex-col items-center">

      {/* Showcase Container */}
      <div className="relative flex flex-col justify-center w-full max-w-[1440px] px-6 md:px-16 py-12 md:py-16 overflow-hidden">
        
        {/* DESKTOP / LAPTOP VERSION */}
        <div className="hidden md:block relative z-10">
          <h1 className="font-extrabold text-[100px] leading-[1.1] tracking-tight">
            DESIGNED FOR
          </h1>

          {/* Typewriter Line */}
          <div className="font-extrabold text-[100px] leading-[1.1] tracking-tight">
            <span className="text-[#F9D94D]"><Typewriter /></span>
          </div>

          {/* Right-side GIF */}
          <div className="absolute right-[200px] -top-3 z-0">
            <div className="rounded-[100px] overflow-hidden w-[300px] h-[300px]">
              <Image
                src="/head-frame.gif"
                alt="hero animation"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bunny + Heading */}
          <div className="flex items-center gap-6">
            <div className="shrink-0">
              <Image
                src="/head-bunny.png"
                alt="bunny mascot"
                width={160}
                height={160}
                className="w-40 h-auto relative -top-10 left-10"
                priority
              />
            </div>

            <h1 className="font-extrabold text-[100px] leading-[1.1] tracking-tight">
              BUILT TO SCALE.
            </h1>
          </div>

          {/* Text + CTA */}
          <div className="mt-16 max-w-md">
            <p className="text-gray-200 text-lg mb-6">
              We create custom websites that make your work stand out and get you{" "}
              <span className="font-semibold italic text-white">paid.</span>
            </p>
            <GetStartedBtn path = "#" />
          </div>
        </div>

        {/* MOBILE / TABLET VERSION */}
        <div className="block md:hidden relative z-10 text-center">
          <h1 className="font-extrabold text-[40px] sm:text-[48px] leading-[1.1] tracking-tight">
            DESIGNED FOR
          </h1>

          <div className="font-extrabold text-[40px] sm:text-[48px] leading-[1.1] tracking-tight text-[#F9D94D]">
            <Typewriter />
          </div>

          {/* Centered GIF */}
          

          {/* Bunny + Text Line */}
          <div className="mt-2 flex flex-col items-center md:gap-4 ">
            <div className="w-[100px] h-auto">
              <Image
                src="/head-bunny.png"
                alt="bunny mascot"
                width={100}
                height={100}
                className="w-full h-auto object-contain relative -top-5"
                priority
              />
            </div>

            <h1 className="font-extrabold text-[40px] sm:text-[48px] leading-[1.1] tracking-tight">
              BUILT TO SCALE.
            </h1>
          </div>

          <div className="mt-2 flex justify-center">
            <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
              <Image
                src="/head-frame.gif"
                alt="hero animation"
                width={150}
                height={150}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Description + CTA */}
          <div className="mt-10 max-w-sm mx-auto text-gray-200">
            <p className="text-sm sm:text-base mb-6">
              We create custom websites that make your work stand out and get you{" "}
              <span className="font-semibold italic text-white">paid.</span>
            </p>

            <div className="flex justify-center">
              <GetStartedBtn path = "#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
