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

function Services({ onWhatsAppClick }) {
  const [selectedService, setSelectedService] = useState(null)
  const { t, isRTL } = useLanguage()

  const services = [
    {
      id: "apartmentCleaning",
      img: "https://nextdaycleaning.com/wp-content/uploads/2019/10/apartment-cleaning-hero-iamge-1024x699.jpg",
      icon: <FaHome className="text-6xl text-blue-600" />,
      title: t("services.apartmentCleaning.title"),
      description: t("services.apartmentCleaning.desc"),
      features: t("services.apartmentCleaning.features"),
      price: `${t("services.startingFrom")} $89`,
      rating: 4.9,
      whatsappMessage: t("services.apartmentCleaning.whatsapp"),
    },
    {
      id: "villaCleaning",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaBuilding className="text-6xl text-green-600" />,
      title: t("services.villaCleaning.title"),
      description: t("services.villaCleaning.desc"),
      features: t("services.villaCleaning.features"),
      price: `${t("services.startingFrom")} $150`,
      rating: 4.9,
      whatsappMessage: t("services.villaCleaning.whatsapp"),
    },
    {
      id: "hotelCleaning",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaHotel className="text-6xl text-purple-600" />,
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
      icon: <FaHospital className="text-6xl text-red-600" />,
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
      icon: <FaBriefcase className="text-6xl text-gray-600" />,
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
      icon: <FaIndustry className="text-6xl text-orange-600" />,
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
      icon: <FaElevator className="text-6xl text-blue-500" />,
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
      icon: <FaBolt className="text-6xl text-yellow-500" />,
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
      icon: <FaWrench className="text-6xl text-blue-600" />,
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
      icon: <FaUserTie className="text-6xl text-purple-500" />,
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
      icon: <FaCorporate className="text-6xl text-indigo-600" />,
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
      icon: <FaShoppingCart className="text-6xl text-green-500" />,
      title: t("services.supermarketCleaning.title"),
      description: t("services.supermarketCleaning.desc"),
      features: t("services.supermarketCleaning.features"),
      price: `${t("services.startingFrom")} $300/day`,
      rating: 4.8,
      whatsappMessage: t("services.supermarketCleaning.whatsapp"),
    },
    {
      id: "syndicServices",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaUsers className="text-6xl text-teal-600" />,
      title: t("services.syndicServices.title"),
      description: t("services.syndicServices.desc"),
      features: t("services.syndicServices.features"),
      price: `${t("services.startingFrom")} $400/month`,
      rating: 4.9,
      whatsappMessage: t("services.syndicServices.whatsapp"),
    },
    {
      id: "fullSyndicManagement",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: <FaCogs className="text-6xl text-gray-700" />,
      title: t("services.fullSyndicManagement.title"),
      description: t("services.fullSyndicManagement.desc"),
      features: t("services.fullSyndicManagement.features"),
      price: `${t("services.startingFrom")} $800/month`,
      rating: 5.0,
      whatsappMessage: t("services.fullSyndicManagement.whatsapp"),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-20  `}>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8">
            {t("services.title")} <span className="text-blue-600">{t("services.titleHighlight")}</span>{" "}
            {t("services.titleEnd")}
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedService(index)}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                

              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className={`flex items-center space-x-4 mb-4 ${isRTL ? "space-x-reverse" : ""}`}>
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors duration-300">
                    <div className="text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Action Buttons */}
                <div className={`flex space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onWhatsAppClick(service.whatsappMessage)
                    }}
                    className={`flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex-1 justify-center font-semibold shadow-md hover:shadow-lg transform hover:scale-105 ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <FaWhatsapp size={16} />
                    <span className="text-sm">{t("services.whatsapp")}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedService(index)
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <span className="text-sm">{t("services.details")}</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${isRTL ? "rtl" : ""}`}>
            {/* Modal Header */}
            <div className={`flex justify-between items-center p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center space-x-6 ${isRTL ? "space-x-reverse" : ""}`}>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  {services[selectedService].icon}
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <h3 className="text-3xl font-bold text-gray-800">{services[selectedService].title}</h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-3 hover:bg-white/80 rounded-xl transition-colors duration-300 shadow-md"
              >
                <FaTimes size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Service Image */}
              <div className="mb-8">
                <img 
                  src={services[selectedService].img} 
                  alt={services[selectedService].title} 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg" 
                />
              </div>

              <p className={`text-gray-600 text-xl mb-8 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                {services[selectedService].description}
              </p>

              {/* Features */}
              <div className={`mb-10 ${isRTL ? "text-right" : "text-left"}`}>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">{t("services.whatsIncluded")}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300  gap-2`}
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                <div className={`text-center mb-6 ${isRTL ? "rtl" : ""}`}>
                  <p className="text-gray-600 text-lg">Professional service with quality guarantee</p>
                </div>
                <div className={`flex space-x-4 ${isRTL ? "space-x-reverse" : ""}`}>
                  <button
                    onClick={() => onWhatsAppClick(services[selectedService].whatsappMessage)}
                    className={`flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex-1 justify-center font-bold shadow-lg ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <FaWhatsapp size={24} />
                    <span>{t("services.getQuote")}</span>
                  </button>
                  <button
                    onClick={() => window.open("tel:+1234567890", "_self")}
                    className={`flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 flex-1 justify-center font-bold shadow-lg ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <FaPhone size={24} />
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