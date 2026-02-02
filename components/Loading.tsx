import React from 'react'
import Lottie from 'lottie-react'
import loadingAnimation from "../public/lottie/loading.json"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#11001F] z-9999">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        style={{ width: 180, height: 180 }}
      />
    </div>
  )
}
