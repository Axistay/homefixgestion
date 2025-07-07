"use client"
import { Link } from "react-router-dom"
import { FaTools, FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"

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
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${isRTL ? "rtl" : ""}`}>
          {/* Company Info */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <Link
              to="/"
              className={`flex items-center space-x-3 mb-6 ${isRTL ? "space-x-reverse flex-row-reverse" : ""}`}
            >
              <FaTools className="text-3xl text-blue-400" />
              <div>
                <span className="text-2xl font-bold">RepairPro</span>
                <div className="text-sm text-gray-300">Professional Home Services</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">{t("footer.description")}</p>
            <div className={`flex space-x-4 ${isRTL ? "space-x-reverse flex-row-reverse" : ""}`}>
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
                className={`flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 ${isRTL ? "space-x-reverse flex-row-reverse" : ""}`}
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
