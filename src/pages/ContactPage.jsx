"use client"
import Layout from "../components/Layout.jsx"
import Contact from "../components/Contact.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"

function ContactPage() {
  const { t, isRTL } = useLanguage()

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">{t("contact.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
          </div>
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
