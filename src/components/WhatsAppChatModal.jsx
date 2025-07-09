"use client"

import { useState } from "react"
import { FaWhatsapp, FaTimes, FaUser } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"

function WhatsAppChatModal({ isOpen, onClose, onStartChat, customMessage = "Hi there! How can we help?" }) {
  const [message, setMessage] = useState("")
  const { t } = useLanguage()

  const handleStartChat = () => {
    const finalMessage = message.trim() || customMessage
    onStartChat(finalMessage)
    onClose()
    setMessage("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fadeInUp">
        {/* Header */}
        <div className="bg-green-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <FaWhatsapp size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{t("whatsappModal.title")}</h3>
              <p className="text-xs text-green-100">{t("whatsappModal.subtitle")}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors duration-200 p-1">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Chat Content */}
        <div className="p-6">
          {/* Agent Info */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <FaUser className="text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{t("whatsappModal.support")}</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">{t("whatsappModal.onlineNow")}</span>
              </div>
            </div>
          </div>

          {/* Message Bubble */}
          <div className="mb-6">
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 inline-block max-w-[85%]">
              <p className="text-gray-800 text-sm">{customMessage || t("whatsappModal.defaultMessage")}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">{t("whatsappModal.justNow")}</p>
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("whatsappModal.placeholder")}
              className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="3"
            />
          </div>

          {/* Start Chat Button */}
          <button
            onClick={handleStartChat}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <FaWhatsapp size={20} />
            <span>{t("whatsappModal.startChat")}</span>
          </button>

          {/* Quick Messages */}
          <div className="mt-4">
            <p className="text-xs text-gray-600 mb-2">{t("whatsappModal.quickMessagesLabel") || "Quick Messages"}</p>
            <div className="flex flex-wrap gap-2">
              {(typeof t("whatsappModal.quickMessages") === 'object' && t("whatsappModal.quickMessages") !== null
                ? Object.values(t("whatsappModal.quickMessages"))
                : []).map((quickMsg) => (
                <button
                  key={quickMsg}
                  onClick={() => setMessage(quickMsg)}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  {quickMsg}
                </button>
              ))}
            </div>
          </div>

          {/* Powered by */}
          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              © {t("whatsappModal.poweredBy")} <span className="text-blue-500 font-medium">HomeFix Gestion</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppChatModal
