"use client"
import Layout from "../components/Layout.jsx"
import Services from "../components/Services.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"

function ServicesPage({ onWhatsAppClick }) {
  const { t, isRTL } = useLanguage()

  return (
    <Layout>
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
           
          <Services onWhatsAppClick={onWhatsAppClick} />
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
