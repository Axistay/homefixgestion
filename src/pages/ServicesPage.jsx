"use client"
import Layout from "../components/Layout.jsx"
import Services from "../components/Services.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"

function ServicesPage() {
  const { t, isRTL } = useLanguage()

  return (
    <Layout>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              {t("services.title")} <span className="text-blue-600">{t("services.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
          </div>
          <Services />
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
