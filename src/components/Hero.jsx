"use client"

import { useEffect, useState } from "react"
import { FaClock, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaUsers, FaTools, FaAward, FaStar } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"

function Hero({ onWhatsAppClick, onCallClick }) {
  const [isVisible, setIsVisible] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: <FaUsers className="text-3xl text-blue-600" />, number: "5000+", label: t("stats.happyCustomers") },
    { icon: <FaTools className="text-3xl text-green-600" />, number: "15000+", label: t("stats.jobsCompleted") },
    { icon: <FaAward className="text-3xl text-yellow-500" />, number: "15+", label: t("stats.yearsExperience") },
    { icon: <FaStar className="text-3xl text-orange-500" />, number: "4.9", label: t("stats.averageRating") },
  ]

  const serviceAreas = ["Downtown", "Suburbs", "Metro Area", "Industrial District"]

  return (
    <section className="bg-gradient-to-br min-h-[100vh]  from-[#FFEB3B] via-blue-200 to-[#388E3C] py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFEB3B] rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-20 md:mt-36">
        <div className={`text-center max-w-5xl mx-auto  `}>
          {/* Emergency Badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-red-500 text-white px-8 py-4 rounded-full mb-8 transform transition-all duration-1000 hover:scale-105 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            } ${isRTL ? "space-x-reverse" : ""}`}
          >
            <FaClock className="animate-spin text-xl" />
            <span className="font-semibold text-xl">{t("hero.emergency")}</span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold text-gray-800 mb-8 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {t("hero.title")}{" "}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>{" "}
            {t("hero.titleEnd")}
          </h1>

          <p
            className={`text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {t("hero.subtitle")} <span className="font-semibold text-blue-600">{t("hero.subtitleHighlight")}</span>.
          </p>
 
 

        
        </div>
      </div>
    </section>
  )
}

export default Hero
