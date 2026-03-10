import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  arialLabel?: string;
  cusCss?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}
export default function Button({
  children,
  arialLabel,
  cusCss,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  return (
    <button
      type={type}
      aria-label={arialLabel}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-full font-semibold text-sm md:text-base text-center
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
