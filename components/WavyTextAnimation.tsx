import React from 'react'
import { motion } from 'framer-motion'

export default function WavyTextAnimation({
  text
}: {
  text: string
}) {
  return (
    <p className="text-center font-semibold text-2xl md:text-5xl mt-5 text-[#11001F] dark:text-white">
      {
        text.split("").map((char, index) => {
          return (
            <motion.span
              key={index}
              style={{ display: "inline-block" }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.08,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          )
        })
      }
    </p>
  )
}
