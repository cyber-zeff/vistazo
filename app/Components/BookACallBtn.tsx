"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookACallBtn() {
  const [hover2, setHover] = useState(false);

  return (
    <div className="flex items-center justify-center gap-2 py-4 px-10">
      <motion.button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
          y: hover2 ? 6 : 0,
          boxShadow: hover2
            ? "0px 0px 0px 0px #FFFFFF"
            : "0px 6px 0px 0px #FFFFFF",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="bookACall px-6 py-3 border-2 border-white bg-main rounded-[100px]"
      >
        Book a call
      </motion.button>
    </div>
  );
}
