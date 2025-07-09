"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp, FaTimes } from "react-icons/fa"

function FloatingWhatsApp({ onWhatsAppClick }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => onWhatsAppClick && onWhatsAppClick("Hello")}
        className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110 group ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <FaWhatsapp size={32} className="group-hover:animate-bounce" />

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold text-white">!</span>
        </div>

        {/* Online Status */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </button>
    </>
  )
}

export default FloatingWhatsApp
