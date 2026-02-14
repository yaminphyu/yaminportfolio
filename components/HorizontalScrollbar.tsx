import React from 'react'
import { motion, useScroll } from "motion/react"

export default function HorizontalScrollbar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      className='fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-pink-500'
      style={{
        scaleX: scrollYProgress,
        originX: 0,
      }}
    />
  );
}
