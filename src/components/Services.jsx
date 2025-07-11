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

function Services({ onWhatsAppClick = () => { }, number }) {
  const [selectedService, setSelectedService] = useState(null)
  const { t, isRTL } = useLanguage()
  const navigate = useNavigate();

  const services = [
    {
      id: "homeCleaning",
      img: 'https://nextdaycleaning.com/wp-content/uploads/2020/02/House-Cleaning-Hacks-from-Professional-Cleaners.jpg',
      icon: <FaHome className="text-2xl lg:4xl  text-blue-600" />,
      title: t("services.homeCleaning.title"),
      description: t("services.homeCleaning.desc"),
      features: t("services.homeCleaning.features"),
      price: `${t("services.startingFrom")} $99`,
      rating: 4.9,
      whatsappMessage: t("services.homeCleaning.whatsapp"),
    },
    {
      id: "hotelCleaning",
      img: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ATVHHT4QLNEHTCNGHUVCZS2ESI.jpg&w=1440',
      icon: <FaHotel className="text-2xl lg:4xl  text-purple-600" />,
      title: t("services.hotelCleaning.title"),
      description: t("services.hotelCleaning.desc"),
      features: t("services.hotelCleaning.features"),
      price: `${t("services.startingFrom")} $200/day`,
      rating: 4.8,
      whatsappMessage: t("services.hotelCleaning.whatsapp"),
    },
    {
      id: "clinicCleaning",
      img: 'https://janiking.co.uk/wp-content/uploads/2022/07/jani-king-hospital-cleaning.jpg',
      icon: <FaHospital className="text-2xl lg:4xl  text-red-600" />,
      title: t("services.clinicCleaning.title"),
      description: t("services.clinicCleaning.desc"),
      features: t("services.clinicCleaning.features"),
      price: `${t("services.startingFrom")} $120`,
      rating: 5.0,
      whatsappMessage: t("services.clinicCleaning.whatsapp"),
    },
    {
      id: "officeCleaning",
      img: 'https://alpinemaintenance.com/wp-content/uploads/2020/08/office-cleaning-checklist.jpeg',
      icon: <FaBriefcase className="text-2xl lg:4xl  text-gray-600" />,
      title: t("services.officeCleaning.title"),
      description: t("services.officeCleaning.desc"),
      features: t("services.officeCleaning.features"),
      price: `${t("services.startingFrom")} $85`,
      rating: 4.9,
      whatsappMessage: t("services.officeCleaning.whatsapp"),
    },
    {
      id: "buildingCleaning",
      img: 'https://www.kyda.qa/img/services/high-rise-building-maintenance.jpg',
      icon: <FaIndustry className="text-2xl lg:4xl  text-orange-600" />,
      title: t("services.buildingCleaning.title"),
      description: t("services.buildingCleaning.desc"),
      features: t("services.buildingCleaning.features"),
      price: `${t("services.startingFrom")} $75`,
      rating: 4.8,
      whatsappMessage: t("services.buildingCleaning.whatsapp"),
    },
    {
      id: "supermarketCleaning",
      img: 'https://www.totalexpressvanlinesllc.com/wp-content/uploads/2023/10/b1a36f23bb5ccae5dc6adb6b3751e243.jpg',
      icon: <FaShoppingCart className="text-2xl lg:4xl  text-green-500" />,
      title: t("services.supermarketCleaning.title"),
      description: t("services.supermarketCleaning.desc"),
      features: t("services.supermarketCleaning.features"),
      price: `${t("services.startingFrom")} $300/day`,
      rating: 4.8,
      whatsappMessage: t("services.supermarketCleaning.whatsapp"),
    },
    
    {
      id: "fullSyndicManagement",
      img: 'https://casafacilities.ma/wp-content/uploads/2024/11/1634217402.jpeg',
      icon: <FaCogs className="text-2xl lg:4xl  text-gray-700" />,
      title: t("services.fullSyndicManagement.title"),
      description: t("services.fullSyndicManagement.desc"),
      features: t("services.fullSyndicManagement.features"),
      price: `${t("services.startingFrom")} $800/month`,
      rating: 5.0,
      whatsappMessage: t("services.fullSyndicManagement.whatsapp"),
    },
    {
      id: "elevatorMaintenance",
      img: 'https://www.kone.my/Images/existing-service-service-description-hero-image-1440x670_tcm94-19422.jpg',
      icon: <FaElevator className="text-2xl lg:4xl  text-blue-500" />,
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
      icon: <FaBolt className="text-2xl lg:4xl  text-yellow-500" />,
      title: t("services.electricalMaintenance.title"),
      description: t("services.electricalMaintenance.desc"),
      features: t("services.electricalMaintenance.features"),
      price: `${t("services.startingFrom")} $65`,
      rating: 4.8,
      whatsappMessage: t("services.electricalMaintenance.whatsapp"),
    },
    {
      id: "plumbingMaintenance",
      img: 'https://le-cdn.hibuwebsites.com/8c747e6788d84b5d985596bb606ebd70/dms3rep/multi/opt/big-blade-plumbing-and-rooter-hero-miscellaneous-plumbing-services-01-640w.jpg',
      icon: <FaWrench className="text-2xl lg:4xl  text-blue-600" />,
      title: t("services.plumbingMaintenance.title"),
      description: t("services.plumbingMaintenance.desc"),
      features: t("services.plumbingMaintenance.features"),
      price: `${t("services.startingFrom")} $80`,
      rating: 4.9,
      whatsappMessage: t("services.plumbingMaintenance.whatsapp"),
    },
    {
      id: "receptionStaff",
      img: 'https://j9g7u6e4.delivery.rocketcdn.me/wp-content/uploads/2023/02/reportage_photo_fromont_bries_low-1024x682.jpeg',
      icon: <FaUserTie className="text-2xl lg:4xl  text-purple-500" />,
      title: t("services.receptionStaff.title"),
      description: t("services.receptionStaff.desc"),
      features: t("services.receptionStaff.features"),
      price: `${t("services.startingFrom")} $25/hr`,
      rating: 4.9,
      whatsappMessage: t("services.receptionStaff.whatsapp"),
    },
    // {
    //   id: "corporateServices",
    //   img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   icon: <FaCorporate className="text-2xl lg:4xl  text-indigo-600" />,
    //   title: t("services.corporateServices.title"),
    //   description: t("services.corporateServices.desc"),
    //   features: t("services.corporateServices.features"),
    //   price: `${t("services.startingFrom")} $500/month`,
    //   rating: 5.0,
    //   whatsappMessage: t("services.corporateServices.whatsapp"),
    // },
    
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-teal-100 ">
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
                <div className={`flex justify-end md:justify-between   space-y-2 sm:space-y-0 sm:space-x-3  gap-4 `}>
                 <div className="hidden md:block w-1/2   ">
                 <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const message = `I need ${service.title} in Nador.`;
                      onWhatsAppClick(service.whatsappMessage)
                    }}
                    className={`flex gap-2 w-full items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex-1 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base  `}
                  >
                    <FaWhatsapp size={14} className="sm:w-4 sm:h-4" />
                    <span>{t("services.whatsapp")}</span>
                  </button>
                 </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedService(index)
                    }}
                    className="bg-gradient-to-r   from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
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
              className="bg-gradient-to-r from-teal-400 to-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold shadow-lg hover:from-yellow-400 hover:to-teal-400 transition-all duration-300 text-base sm:text-lg"
            >
              {t("services.showall")}
            </button>
          </div>
        )}
      </div>

   {/* Service Detail Modal */}
   {selectedService !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-300">
          <div className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-2xl lg:max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/50 animate-in zoom-in-95 duration-300 backdrop-blur-sm scrollbar-hide`}>


            {/* Modal Header */}
            <div className={`sticky top-0 z-50 bg-teal-200 backdrop-blur-sm border-b border-gray-200/30 flex justify-between items-center p-4 sm:p-6 gap-2 rounded-t-2xl sm:rounded-t-3xl`}>
              <div className={`flex items-center space-x-4 sm:space-x-6  gap-4 flex-1 min-w-0`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 border border-blue-200/50 hover:scale-105 transition-transform duration-300">
                  {services[selectedService].icon}
                </div>
                <div className={`  min-w-0 flex-1`}>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent line-clamp-2">
                    {services[selectedService].title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 sm:p-3 bg-white hover:bg-red-50 rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg ml-2 sm:ml-4 flex-shrink-0 border border-gray-200/50 hover:border-red-200 group"
              >
                <FaTimes size={20} className="sm:w-6 sm:h-6  text-red-500 border border-red-500 rounded-full  group-hover:text-red-500 transition-colors duration-300" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
              {/* Service Image */}
              <div className="mb-6 sm:mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={services[selectedService].img}
                  alt={services[selectedService].title}
                  className="w-full h-48 sm:h-56 lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              {/* Description */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50">
                <p className={`text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed ${isRTL ? "text-right" : "text-left"} font-medium`}>
                  {services[selectedService].description}
                </p>
              </div>

              {/* Features */}
              <div className={`${isRTL ? "text-right" : "text-left"}`}>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  {t("services.whatsIncluded")}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 sm:p-4 bg-gradient-to-r from-white to-blue-50/50 rounded-lg sm:rounded-xl border border-gray-200/50 hover:shadow-md hover:border-blue-200 transition-all duration-300 gap-2 group hover:scale-[1.02]"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300">
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
              <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-200/50 shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>
                
                <div className={`text-center mb-4 sm:mb-6 ${isRTL ? "rtl" : ""} relative z-10`}>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                    {t("services.qualityProfessional")}
                  </p>
                </div>
                
                <div className={`flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 ${isRTL ? "sm:space-x-reverse" : ""} relative z-10`}>
                  <button
                    onClick={() => onWhatsAppClick(services[selectedService].whatsappMessage)}
                    className={`flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-green-600 hover:via-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 font-bold shadow-md text-sm sm:text-base ${isRTL ? "space-x-reverse" : ""} relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <FaWhatsapp size={20} className="sm:w-6 sm:h-6 relative z-10" />
                    <span className="relative z-10">{t("services.getQuote")}</span>
                  </button>
                  
                  <button
                    onClick={() => window.open("tel:+212618269179", "_self")}
                    className={`flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 font-bold shadow-md text-sm sm:text-base ${isRTL ? "space-x-reverse" : ""} relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <FaPhone size={20} className="sm:w-6 sm:h-6 relative z-10" />
                    <span className="relative z-10">{t("services.callNow")}</span>
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