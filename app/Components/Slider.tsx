"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


const slides = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "TLL" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
];

export default function WorkSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: "trimSnaps",
        skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);

        // Set the very first render to CENTER slide instantly
        emblaApi.scrollTo(0, true);

        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full flex flex-col items-center mt-24">
            {/* Top labels */}
            <div className="hidden md:flex w-full justify-around gap-x-48 mb-6">
                <span className="text-6xl font-extrabold text-[#6755CF]">RECENT</span>
                <span className="text-6xl font-extrabold text-[#6755CF]">WORK</span>
            </div>

            {/* Slider */}
            <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex">

                    {slides.map((slide, index) => {
                        const isCenter = index === selectedIndex;

                        return (
                            <div
                                key={slide.id}
                                className="flex-[0_0_75%] md:flex-[0_0_32%] px-4 flex justify-center" // ! check for items-center
                            >
                                <motion.div
                                    animate={{
                                        height: isCenter ? 549 : 380,
                                        opacity: isCenter ? 1 : 0.65,
                                    }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className={`
                    bg-gray-200 rounded-3xl w-full 
                    p-6 flex flex-col justify-end
                    shadow-md
                  `}
                                >
                                    <span className="text-3xl font-black">{slide.title}</span>

                                    {/* Buttons */}
                                    <div className="flex gap-3 mt-4">
                                        <div className="bg-white rounded-full px-6 py-2 shadow text-sm flex items-center gap-2">
                                            <FiExternalLink size={16} />
                                            Live
                                        </div>

                                        <div className="bg-white rounded-full px-6 py-2 shadow text-sm flex items-center gap-2">
                                            <FaGithub size={16} />
                                            Code
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}

                </div>
            </div>

            {/* Pagination */}
            <div className="flex gap-3 mt-6">
                {scrollSnaps.map((_, idx) => {
                    const isActive = idx === selectedIndex;

                    return (
                        <motion.div
                            key={idx}
                            animate={{
                                width: isActive ? 32 : 10,
                                height: 8,
                                borderRadius: isActive ? 6 : "50%",
                                backgroundColor: isActive ? "#bfbfbf" : "#e3e3e3",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
