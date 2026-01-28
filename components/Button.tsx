import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  cusCss?: string;
}
export default function Button({
  children,
  cusCss
}: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm md:text-base text-center hover:hover:bg-[#11072f]
        ${cusCss}
      `}>
      {children}
    </button>
  )
}
