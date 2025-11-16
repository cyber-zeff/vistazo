export default function Simple() {
    return (
        <section className="w-full flex justify-center px-2 py-10">
            <div
                className="
                    bg-[#361E98]
                    rounded-[40px] sm:rounded-[60px] md:rounded-[100px] lg:rounded-[150px]
                    w-full max-w-[1233px]
                    h-auto lg:h-[918px]
                    mx-auto
                    py-10 md:py-8 lg:py-14
                    flex flex-col items-center
                "
            >
                {/* Heading */}
                <h2
                    className="
                        text-white font-extrabold text-center leading-tight
                        text-xl sm:text-2xl md:text-3xl lg:text-[56px]
                        px-4
                    "
                >
                    WE KEEP OUR PROCESS SIMPLE
                    <br />
                    AND RESULTS{" "}
                    <span className="text-[#F9D94D]">EXTRAORDINARY!</span>
                </h2>

                {/* Cards */}
                <div
                    className="
                        relative 
                        w-full 
                        max-w-[1120px]
                        mt-10 sm:mt-14 md:mt-16
                        flex justify-center
                        min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[436px]
                    "
                >
                    {/* --- MOBILE & TABLET LAYOUT (centered stack) --- */}
                    <div className="flex lg:hidden justify-center items-end gap-3 sm:gap-6">

                        {/* Left card mobile */}
                        <div
                            className="
                                w-[90px] sm:w-[120px] md:w-[150px]
                                h-[120px] sm:h-[150px] md:h-[180px]
                                bg-gray-300 rounded-xl
                                rotate-6
                            "
                        />

                        {/* Center card mobile */}
                        <div
                            className="
                                w-[110px] sm:w-[150px] md:w-[190px]
                                h-[150px] sm:h-[190px] md:h-[230px]
                                bg-gray-400 rounded-xl z-10
                            "
                        />

                        {/* Right card mobile */}
                        <div
                            className="
                                w-[90px] sm:w-[120px] md:w-[150px]
                                h-[120px] sm:h-[150px] md:h-[180px]
                                bg-gray-300 rounded-xl
                                -rotate-10
                            "
                        />
                    </div>

                    {/* --- DESKTOP/LAPTOP LAYOUT (your original EXACT design) --- */}
                    <div className="hidden lg:block">
                        {/* Left Card */}
                        <div
                            className="
                                w-[356px]
                                h-[436px]
                                bg-gray-300
                                rounded-xl
                                absolute left-10 top-28
                                rotate-[6.387deg]
                            "
                        />

                        {/* Center Card */}
                        <div
                            className="
                                w-[355px]
                                h-[436px]
                                bg-gray-400
                                rounded-xl
                                z-10
                                absolute left-1/2 -translate-x-1/2 top-20
                            "
                        />

                        {/* Right Card */}
                        <div
                            className="
                                w-[355px]
                                h-[435px]
                                bg-gray-300
                                rounded-xl
                                absolute right-10 top-24
                                -rotate-[9.989deg]
                                z-20
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
