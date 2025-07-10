"use client"
import Layout from "../components/Layout.jsx"
import Contact from "../components/Contact.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"

function ContactPage({ onWhatsAppClick }) {
  const { t, isRTL } = useLanguage()

  return (
    <Layout>
        <div className=" ">
         
          <Contact onWhatsAppClick={onWhatsAppClick} />
        </div>
    </Layout>
  )
}

export default ContactPage
