"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import Typewriter from "./Typewriter";
import GetStartedBtn from "./GetStartedBtn";

export default function Showcase() {
    return (
        <section className="bg-main text-white min-h-screen flex flex-col items-center">
            {/* Navbar */}
            <Navbar />

            {/* Showcase Container */}
            <div className="relative flex flex-col justify-center w-full max-w-[1440px] px-6 md:px-16 py-12 md:py-24 overflow-hidden">
                {/* Large Heading Section */}
                <div className="relative z-10">
                    <h1 className="font-extrabold text-[40px] md:text-[100px] leading-[1.1] tracking-tight">
                        DESIGNED FOR
                    </h1>

                    {/* Bunny + Typewriter Placeholder */}
                    <div className="font-extrabold text-[40px] md:text-[100px] leading-[1.1] tracking-tight">
                        <span className="text-yellow-400"><Typewriter /></span>
                    </div>
                    {/* Right-side Circular GIF */}
                    <div className="absolute right-0 top-[50px] md:top-20 md:right-[100px] z-0">
                        <div className="rounded-[100px] overflow-hidden w-[140px] h-[140px] md:w-[250px] md:h-[250px]">
                            <Image
                                src="/head-frame.gif"
                                alt="hero animation"
                                width={250}
                                height={250}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6 md:gap-10">
                        {/* Bunny Image */}
                        <div className="shrink-0">
                            <Image
                                src="/head-bunny.png"
                                alt="bunny mascot"
                                width={160}
                                height={160}
                                className="w-[90px] md:w-40 h-auto"
                                priority
                            />
                        </div>

                        {/* Text line */}
                        <h1 className="font-extrabold text-[40px] md:text-[100px] leading-[1.1] tracking-tight">
                            BUILT TO SCALE.
                        </h1>
                    </div>

                </div>



                {/* Description + CTA */}
                <div className="mt-10 md:mt-20 max-w-md">
                    <p className="text-gray-200 text-sm md:text-lg mb-6">
                        We create custom websites that make your work stand out and gets you{" "}
                        <span className="font-semibold italic text-white">paid.</span>
                    </p>

                    {/* CTA Button (styled same as BookACallBtn) */}
                    <div>
                        <GetStartedBtn />
                    </div>
                </div>
            </div>
        </section>
    );
}
