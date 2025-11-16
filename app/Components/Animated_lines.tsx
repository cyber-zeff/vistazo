"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Animated() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, -600], [-80, 60]);
  const rotateText = useTransform(scrollY, [0, 600], [15, 0]);

  const textItems = [
    "* LOGO & BRAND IDENTITY",
    "* WEBSITE COPYWRITING",
    "* SEO OPTIMIZATION",
    "* WEB DEVELOPMENT",
    "* WEBSITE DESIGN",
  ];

  return (
    <main className="min-h-screen bg-main text-white overflow-hidden font-sans mb-10">
      <section className="relative min-h-screen flex flex-col justify-end px-4 sm:px-8 md:px-16 lg:px-24">

        {/* Animated Diagonal Text */}
        <motion.div
          style={{ y: textY, rotate: rotateText }}
          className="
                absolute
                bottom-6
                sm:bottom-10
                md:bottom-20
                lg:bottom-24  /* laptop/desktop unchanged */
                right-4 sm:right-10 md:right-20
                flex flex-col gap-4
                transform rotate-25
              "
        >

          {textItems.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.25,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative flex items-center"
            >
              {/* EXTREME ULTRAWIDE SUPPORT */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "400vw" }}
                transition={{
                  delay: index * 0.25 + 0.2,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-1/2 h-[3px] bg-white/25"
              />

              <p
                className="relative font-extrabold whitespace-nowrap
                  text-[clamp(0.8rem,1.8vw,2.5rem)]
                "
                style={{
                  transform: `translateY(-6px) scale(${1 + index * 0.08})`,
                }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* PROCESS Section */}
        <div
          className="
            absolute
            bottom-6 sm:bottom-10 md:bottom-14 lg:bottom-16
            left-4 sm:left-10 md:left-16 lg:left-20
          "
        >
          <h2 className="
            font-extrabold leading-none
            text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem]
          ">
            WE KEEP OUR
          </h2>

          <div className="relative inline-block sm:mt-2">
            <h2 className="
              font-extrabold leading-none
              text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem]
            ">
              PROCESS
            </h2>

            {/* Badge: And */}
            <span
              className="
                absolute 
                -top-3 sm:-top-4 md:-top-3
                left-6 sm:left-10 md:left-14
                bg-black text-white 
                px-3 py-0.5 rounded-full 
                text-xs sm:text-sm md:text-base
                font-black 
                -rotate-5
              "
            >
              And
            </span>

            {/* Badge: Results */}
            <span
              className="
                absolute 
                -top-2 sm:-top-3 md:-top-3
                right-6 sm:right-10 md:right-14
                bg-[#6755CF] text-white 
                px-3 py-0.5 rounded-full 
                text-xs sm:text-sm md:text-base
                font-black 
                rotate-3
              "
            >
              Results
            </span>

            {/* Badge: Extraordinary */}
            <span
              className="
                absolute 
                -bottom-3 sm:-bottom-5 md:-bottom-6
                left-10 sm:left-16 md:left-20
                bg-[#F9D94D] text-[#361E98] 
                px-4 py-1 rounded-full 
                text-xs sm:text-sm md:text-base
                font-black 
                -rotate-3
              "
            >
              Extraordinary!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
