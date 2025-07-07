"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp, FaTimes } from "react-icons/fa"

function FloatingWhatsApp({ onWhatsAppClick }) {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    setShowModal(true)
  }

  const startChat = () => {
    onWhatsAppClick("Hi there! How can we help?")
    setShowModal(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
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

      {/* WhatsApp Chat Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden animate-fadeInUp">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaWhatsapp size={24} />
                <span className="font-semibold text-lg">WhatsApp Chat</span>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-6">
              {/* Message Bubble */}
              <div className="mb-6">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 inline-block max-w-[80%]">
                  <p className="text-gray-800 text-sm">Hi there! How can we help?</p>
                </div>
              </div>

              {/* Start Chat Button */}
              <button
                onClick={startChat}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Chat
              </button>

              {/* Powered by */}
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500">
                  © Powered by <span className="text-blue-500 font-medium">RepairPro</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingWhatsApp
