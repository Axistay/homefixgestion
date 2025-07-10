"use client"
import { Link } from "react-router-dom"
import { FaTools, FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"
function Footer({ onWhatsAppClick }) {
  const { t, isRTL } = useLanguage()

  const onSocialMediaClick = (link)=> {
    window.open(link, "_blank")
  }
  const services = [
    t("services.plumbing.title"),
    t("services.electrical.title"),
    t("services.general.title"),
    t("services.painting.title"),
    t("services.bathroom.title"),
    t("services.emergency.title"),
  ]

  return (
    <footer className="bg-teal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 `}>
          {/* Company Info */}
          <div className="">
          <Link to="/" className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} space-x-2 sm:space-x-3 flex-shrink-0 mb-12 `}  dir="ltr">
            <div className="relative">
              <img 
                src="/logo.png"
                alt="Homefix Gestion Logo" 
                className="h-20 w-20 rounded-full object-cover shadow-md   transition-all duration-300 hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-teal-50 leading-tight whitespace-nowrap">
                Homefix Gestion
              </h1>
              <span className="text-xs text-gray-50 font-medium hidden sm:block">
                Home Services
              </span>
            </div>
          </Link>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">{t("footer.description")}</p>
            <div className={`flex  gap-4 `}>
              <button
                onClick={() => onSocialMediaClick("https://www.instagram.com/homefixgestion/")}
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-125"
              >
                <FaInstagram size={28} />
              </button>
              <button
                onClick={() => onSocialMediaClick("https://www.facebook.com/HomeFixGestion/")}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125"
              >
                <FaFacebook size={28} />
              </button>
              <button
                onClick={() => onSocialMediaClick("https://www.tiktok.com/search?q=homefixgestion&t=1752156258010")}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
              >
                <FaTiktok size={28} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <img src="/logo.png" alt="" />
          </div>

          {/* Contact */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-2xl font-bold mb-6">{t("footer.contactUs")}</h3>
            <div className="space-y-4">
              <div
                className={`flex gap-2 items-center space-x-3 hover:text-blue-400 transition-colors duration-300  `}
              >
                <FaPhone className="text-blue-400 text-xl" />
                <span dir="ltr" className="text-gray-300 text-lg">(+212-618-269-179)</span>
              </div>
              <button
                onClick={onWhatsAppClick}
                className={`flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 group ${isRTL ? "space-x-reverse" : ""}`}
              >
                <FaWhatsapp className="group-hover:animate-bounce text-xl" />
                <span className="font-bold">{t("footer.whatsappUs")}</span>
              </button>
            </div>
          </div>
        </div>

        <div className={`border-t border-gray-700 mt-12 pt-8 text-center  `}>
          <p className="text-gray-300 text-lg">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
