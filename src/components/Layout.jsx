"use client"

import React, { useState } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import FloatingWhatsApp from "./FloatingWhatsApp.jsx"
import WhatsAppChatModal from "./WhatsAppChatModal.jsx"
import ScrollToTop from "./ScrollToTop.jsx"

function Layout({ children }) {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [whatsappMessage, setWhatsappMessage] = useState("Hi! I'm interested in your home repair services.")

  const phoneNumber = "1234567890" // Replace with actual phone number

  const openWhatsAppModal = (message = "Hi! I'm interested in your home repair services.") => {
    setWhatsappMessage(message)
    setShowWhatsAppModal(true)
  }

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
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
    window.open(`tel:+${phoneNumber}`, "_self")
  }

  return (
    <>
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
    </>
  )
}

export default Layout
