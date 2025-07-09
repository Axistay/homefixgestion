"use client"

import { useState } from "react"
import {
  FaHome,
  FaBuilding,
  FaHotel,
  FaHospital,
  FaBriefcase,
  FaIndustry,
  FaBolt,
  FaWrench,
  FaHammer,
  FaUserTie,
  FaIndustry as FaCorporate,
  FaShoppingCart,
  FaUsers,
  FaCogs,
  FaWhatsapp,
  FaPhone,
  FaStar,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"
import { FaElevator } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

function Services({ onWhatsAppClick = () => {}, number }) {
  const [selectedService, setSelectedService] = useState(null)
  const { t, isRTL } = useLanguage()
  const navigate = useNavigate();

  const services = [
    {
      id: "homeCleaning",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaHome className="text-4xl sm:text-5xl lg:text-6xl text-blue-600" />,
      title: t("services.homeCleaning.title"),
      description: t("services.homeCleaning.desc"),
      features: t("services.homeCleaning.features"),
      price: `${t("services.startingFrom")} $99`,
      rating: 4.9,
      whatsappMessage: t("services.homeCleaning.whatsapp"),
    },
    {
      id: "hotelCleaning",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaHotel className="text-4xl sm:text-5xl lg:text-6xl text-purple-600" />,
      title: t("services.hotelCleaning.title"),
      description: t("services.hotelCleaning.desc"),
      features: t("services.hotelCleaning.features"),
      price: `${t("services.startingFrom")} $200/day`,
      rating: 4.8,
      whatsappMessage: t("services.hotelCleaning.whatsapp"),
    },
    {
      id: "clinicCleaning",
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      icon: <FaHospital className="text-4xl sm:text-5xl lg:text-6xl text-red-600" />,
      title: t("services.clinicCleaning.title"),
      description: t("services.clinicCleaning.desc"),
      features: t("services.clinicCleaning.features"),
      price: `${t("services.startingFrom")} $120`,
      rating: 5.0,
      whatsappMessage: t("services.clinicCleaning.whatsapp"),
    },
    {
      id: "officeCleaning",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <FaBriefcase className="text-4xl sm:text-5xl lg:text-6xl text-gray-600" />,
      title: t("services.officeCleaning.title"),
      description: t("services.officeCleaning.desc"),
      features: t("services.officeCleaning.features"),
      price: `${t("services.startingFrom")} $85`,
      rating: 4.9,
      whatsappMessage: t("services.officeCleaning.whatsapp"),
    },
    {
      id: "buildingCleaning",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaIndustry className="text-4xl sm:text-5xl lg:text-6xl text-orange-600" />,
      title: t("services.buildingCleaning.title"),
      description: t("services.buildingCleaning.desc"),
      features: t("services.buildingCleaning.features"),
      price: `${t("services.startingFrom")} $75`,
      rating: 4.8,
      whatsappMessage: t("services.buildingCleaning.whatsapp"),
    },
    {
      id: "elevatorMaintenance",
      img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <FaElevator className="text-4xl sm:text-5xl lg:text-6xl text-blue-500" />,
      title: t("services.elevatorMaintenance.title"),
      description: t("services.elevatorMaintenance.desc"),
      features: t("services.elevatorMaintenance.features"),
      price: `${t("services.startingFrom")} $200/month`,
      rating: 4.9,
      whatsappMessage: t("services.elevatorMaintenance.whatsapp"),
    },
    {
      id: "electricalMaintenance",
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      icon: <FaBolt className="text-4xl sm:text-5xl lg:text-6xl text-yellow-500" />,
      title: t("services.electricalMaintenance.title"),
      description: t("services.electricalMaintenance.desc"),
      features: t("services.electricalMaintenance.features"),
      price: `${t("services.startingFrom")} $65`,
      rating: 4.8,
      whatsappMessage: t("services.electricalMaintenance.whatsapp"),
    },
    {
      id: "plumbingMaintenance",
      img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaWrench className="text-4xl sm:text-5xl lg:text-6xl text-blue-600" />,
      title: t("services.plumbingMaintenance.title"),
      description: t("services.plumbingMaintenance.desc"),
      features: t("services.plumbingMaintenance.features"),
      price: `${t("services.startingFrom")} $80`,
      rating: 4.9,
      whatsappMessage: t("services.plumbingMaintenance.whatsapp"),
    },
    {
      id: "receptionStaff",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaUserTie className="text-4xl sm:text-5xl lg:text-6xl text-purple-500" />,
      title: t("services.receptionStaff.title"),
      description: t("services.receptionStaff.desc"),
      features: t("services.receptionStaff.features"),
      price: `${t("services.startingFrom")} $25/hr`,
      rating: 4.9,
      whatsappMessage: t("services.receptionStaff.whatsapp"),
    },
    {
      id: "corporateServices",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaCorporate className="text-4xl sm:text-5xl lg:text-6xl text-indigo-600" />,
      title: t("services.corporateServices.title"),
      description: t("services.corporateServices.desc"),
      features: t("services.corporateServices.features"),
      price: `${t("services.startingFrom")} $500/month`,
      rating: 5.0,
      whatsappMessage: t("services.corporateServices.whatsapp"),
    },
    {
      id: "supermarketCleaning",
      img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaShoppingCart className="text-4xl sm:text-5xl lg:text-6xl text-green-500" />,
      title: t("services.supermarketCleaning.title"),
      description: t("services.supermarketCleaning.desc"),
      features: t("services.supermarketCleaning.features"),
      price: `${t("services.startingFrom")} $300/day`,
      rating: 4.8,
      whatsappMessage: t("services.supermarketCleaning.whatsapp"),
    }, 
    {
      id: "fullSyndicManagement",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaCogs className="text-4xl sm:text-5xl lg:text-6xl text-gray-700" />,
      title: t("services.fullSyndicManagement.title"),
      description: t("services.fullSyndicManagement.desc"),
      features: t("services.fullSyndicManagement.features"),
      price: `${t("services.startingFrom")} $800/month`,
      rating: 5.0,
      whatsappMessage: t("services.fullSyndicManagement.whatsapp"),
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto  sm:px-6 lg:px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            {t("services.title")} <span className="text-blue-600">{t("services.titleHighlight")}</span>{" "}
            {t("services.titleEnd")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services?.slice(0, number).map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedService(index)}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                {/* Icon and Title */}
                <div className={`flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4 gap-4 `}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors duration-300">
                    <div className="text-xl sm:text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3  gap-4 `}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const message = `I need ${service.title} in Nador.`;
                      onWhatsAppClick(service.whatsappMessage)
                    }}
                    className={`flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex-1 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base  `}
                  >
                    <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
                    <span>{t("services.whatsapp")}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedService(index)
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
                  >
                    <span>{t("services.details")}</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {typeof number === 'number' && number !== null && (
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <button
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-green-400 to-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-base sm:text-lg"
            >
              {t("services.showall")}
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className={`bg-white rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-2xl lg:max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl `}>
            {/* Modal Header */}
            <div className={`flex justify-between items-center p-4 sm:p-6 lg:p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50  gap-2`}>
              <div className={`flex items-center space-x-4 sm:space-x-6 ${isRTL ? "space-x-reverse" : ""} flex-1 min-w-0`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  {services[selectedService].icon}
                </div>
                <div className={`${isRTL ? "text-right" : "text-left"} min-w-0 flex-1`}>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 line-clamp-2">
                    {services[selectedService].title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 sm:p-3 hover:bg-white/80 rounded-lg sm:rounded-xl transition-colors duration-300 shadow-md ml-2 sm:ml-4 flex-shrink-0"
              >
                <FaTimes size={20} className="sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Service Image */}
              <div className="mb-6 sm:mb-8">
                <img 
                  src={services[selectedService].img} 
                  alt={services[selectedService].title} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg" 
                />
              </div>

              <p className={`text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                {services[selectedService].description}
              </p>

              {/* Features */}
              <div className={`mb-8 sm:mb-10 ${isRTL ? "text-right" : "text-left"}`}>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  {t("services.whatsIncluded")}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg sm:rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300 gap-2"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 shadow-lg">
                <div className={`text-center mb-4 sm:mb-6 ${isRTL ? "rtl" : ""}`}>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Professional service with quality guarantee
                  </p>
                </div>
                <div className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 ${isRTL ? "sm:space-x-reverse" : ""}`}>
                  <button
                    onClick={() => onWhatsAppClick(services[selectedService].whatsappMessage)}
                    className={`flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex-1 font-bold shadow-lg text-sm sm:text-base ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
                    <span>{t("services.getQuote")}</span>
                  </button>
                  <button
                    onClick={() => window.open("tel:+1234567890", "_self")}
                    className={`flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 flex-1 font-bold shadow-lg text-sm sm:text-base ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <FaPhone size={20} className="sm:w-6 sm:h-6" />
                    <span>{t("services.callNow")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services