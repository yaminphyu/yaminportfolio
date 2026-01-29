import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  cusCss?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit"
}
export default function Button({
  children,
  cusCss,
  onClick,
  type = 'button'
}: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm md:text-base text-center hover:hover:bg-[#11072f]
        ${cusCss}
      `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
