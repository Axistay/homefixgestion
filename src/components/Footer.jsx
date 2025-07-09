"use client"
import { Link } from "react-router-dom"
import { FaTools, FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"
import logo from '../../public/logo.png'
function Footer({ onWhatsAppClick, onSocialMediaClick }) {
  const { t, isRTL } = useLanguage()

  const services = [
    t("services.plumbing.title"),
    t("services.electrical.title"),
    t("services.general.title"),
    t("services.painting.title"),
    t("services.bathroom.title"),
    t("services.emergency.title"),
  ]

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 `}>
          {/* Company Info */}
          <div className={isRTL ? "text-right" : "text-left"}>
          <Link to="/" className={`flex items-center space-x-2 sm:space-x-3 flex-shrink-0 `}  dir="ltr">
            <div className="relative">
              <img 
                src={logo}
                alt="Homefix Gestion Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full object-cover shadow-md   transition-all duration-300 hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="jsm:text-lg xl:text-xl font-bold text-teal-600 leading-tight whitespace-nowrap">
                Homefix Gestion
              </h1>
              <span className="text-xs text-gray-600 font-medium hidden sm:block">
                Home Services
              </span>
            </div>
          </Link>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">{t("footer.description")}</p>
            <div className={`flex  gap-4 `}>
              <button
                onClick={() => onSocialMediaClick("instagram")}
                className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-125"
              >
                <FaInstagram size={28} />
              </button>
              <button
                onClick={() => onSocialMediaClick("facebook")}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125"
              >
                <FaFacebook size={28} />
              </button>
              <button
                onClick={() => onSocialMediaClick("tiktok")}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
              >
                <FaTiktok size={28} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-2xl font-bold mb-6">{t("footer.ourServices")}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <h3 className="text-2xl font-bold mb-6">{t("footer.contactUs")}</h3>
            <div className="space-y-4">
              <div
                className={`flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300  `}
              >
                <FaPhone className="text-blue-400 text-xl" />
                <span className="text-gray-300 text-lg">(0684679961)</span>
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

        <div className={`border-t border-gray-700 mt-12 pt-8 text-center ${isRTL ? "rtl" : ""}`}>
          <p className="text-gray-300 text-lg">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
