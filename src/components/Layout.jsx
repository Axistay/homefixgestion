"use client"

import React, { useState } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import FloatingWhatsApp from "./FloatingWhatsApp.jsx"
import WhatsAppChatModal from "./WhatsAppChatModal.jsx"
import ScrollToTop from "./ScrollToTop.jsx"

export default function Layout({ children }) {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [whatsappMessage, setWhatsappMessage] = useState(null)
  const phoneNumber = "0618269179" // Updated WhatsApp number

  const openWhatsAppModal = (message = "") => {
    setWhatsappMessage(message)
    setShowWhatsAppModal(true)
  }

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/212${phoneNumber.slice(1)}?text=${encodedMessage}`, "_blank")
  }

  const openSocialMedia = (platform) => {
    const urls = {
      instagram: "https://instagram.com/homerepairpro",
      facebook: "https://facebook.com/homerepairpro",
      tiktok: "https://tiktok.com/@homerepairpro",
    }
    window.open(urls[platform], "_blank")
  }

  const makeCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  return (
    <div className="bg-teal-100">
      <Header onWhatsAppClick={() => openWhatsAppModal()} onCallClick={makeCall} />

        {/* <div className="h-16 md:h-20"></div> */}

      <main>
        {React.cloneElement(children, {
          onWhatsAppClick: openWhatsAppModal,
          onCallClick: makeCall,
          onSocialMediaClick: openSocialMedia,
        })}
      </main>

      <Footer onWhatsAppClick={() => openWhatsAppModal()} onSocialMediaClick={openSocialMedia} />
      <FloatingWhatsApp onWhatsAppClick={() => openWhatsAppModal()} />
      <ScrollToTop />

      {/* WhatsApp Chat Modal */}
      <WhatsAppChatModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
        onStartChat={openWhatsApp}
        customMessage={whatsappMessage}
      />
    </div>
  )
}
