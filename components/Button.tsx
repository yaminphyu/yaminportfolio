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
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-semibold text-sm md:text-base text-center cursor-pointer
        border border-gray-500 dark:border-white/30
        text-[#11001F] dark:text-white
        bg-transparent hover:bg-gray-100
        dark:hover:bg-[#18012B]
        transition-all duration-200 active:scale-95
        ${cusCss}
      `}
    >
      {children}
    </button>
  )
}
