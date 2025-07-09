"use client"
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"

function Contact({ onWhatsAppClick, onCallClick, onSocialMediaClick }) {
  const { t, isRTL } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20  `}>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">{t("contact.title")}</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          

          {/* Contact Information */}
          <div className="bg-white rounded-3xl p-4 md:p-6 lg:p-10 shadow-2xl mb-16">
            <h3 className={`text-3xl font-bold text-gray-800 mb-10 text-center `}>
              {t("contact.contactInfo")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className={`flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-4  `}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <FaPhone className="text-blue-600 text-2xl" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="font-bold text-gray-800 text-xl">(123) 456-7890</div>
                  <div className="text-gray-600">{t("contact.emergency")}</div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div
                className={`flex items-center space-x-6 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-4`}
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <FaWhatsapp className="text-green-600 text-2xl" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <button
                    onClick={() => onWhatsAppClick && onWhatsAppClick("Hello")}
                    className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-300 hover:scale-105 font-bold"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>{t("footer.whatsappUs")}</span>
                  </button>
                  <div className="text-gray-600 mt-2">{t("contact.whatsappDesc")}</div>
                </div>
              </div>

              <div
                className={`flex items-center space-x-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-4  `}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <FaClock className="text-orange-600 text-2xl" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="font-bold text-gray-800 text-xl">{t("contact.workingHours")}</div>
                  <div className="text-gray-600">{t("contact.schedule")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-3xl p-4 md:p-6 lg:p-10 shadow-2xl">
            <h3 className={`text-3xl font-bold text-gray-800 mb-10 text-center  `}>
              {t("contact.followSocial")}
            </h3>
            <div className="space-y-2 md:space-y-8">
              {/* Instagram and Facebook - Top row on mobile */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
                {/* Instagram */}
                <button
                  onClick={() => onSocialMediaClick("instagram")}
                  className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-2 lg:p-6 text-white text-center hover:scale-105 transition-all duration-300 shadow-xl group"
                >
                  <FaInstagram size={60} className="mx-auto mb-6 group-hover:animate-pulse" />
                  <h4 className="text-2xl font-bold mb-4">Instagram</h4>
                  <p className="opacity-90 mb-2">{t("contact.beforeAfter")}</p>
                  <div className="text-sm opacity-75">15.2K {t("contact.followers")}</div>
                </button>

                {/* Facebook */}
                <button
                  onClick={() => onSocialMediaClick("facebook")}
                  className="bg-blue-600 rounded-3xl p-2 py-8 lg:p-6 text-white text-center hover:scale-105 transition-all duration-300 shadow-xl group"
                >
                  <FaFacebook size={60} className="mx-auto mb-6 group-hover:animate-pulse" />
                  <h4 className="text-2xl font-bold mb-4">Facebook</h4>
                  <p className="opacity-90 mb-2">{t("contact.customerUpdates")}</p>
                  <div className="text-sm opacity-75">8.7K {t("contact.likes")}</div>
                </button>
              </div>

              {/* TikTok - Full width below */}
              <div className="grid grid-cols-1 md:grid-cols-1">
                <button
                  onClick={() => onSocialMediaClick("tiktok")}
                  className="bg-black rounded-3xl p-8 text-white text-center hover:scale-105 transition-all duration-300 shadow-xl group"
                >
                  <FaTiktok size={60} className="mx-auto mb-6 group-hover:animate-pulse" />
                  <h4 className="text-2xl font-bold mb-4">TikTok</h4>
                  <p className="opacity-90 mb-2">{t("contact.diyTips")}</p>
                  <div className="text-sm opacity-75">23.1K {t("contact.followers")}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact