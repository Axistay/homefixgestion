"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaTools, FaBars, FaTimes, FaWhatsapp, FaPhone } from "react-icons/fa"
import { useLanguage } from "../hooks/useLanguage.jsx"
import LanguageSwitcher from "./LanguageSwitcher.jsx"
import logo from "../../public/logo.png" // 

function Header({ onWhatsAppClick, onCallClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, isRTL } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`fixed right-0 left-0 top-0 z-50 transition-all duration-300 max-h-[70px] ${(scrolled || isMenuOpen) ? "bg-yellow-400 shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 h-full">
        <div className={`flex justify-between items-center h-full min-h-[70px] gap-2 sm:gap-4`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-2 sm:space-x-3 flex-shrink-0 ${isRTL ? "space-x-reverse" : ""}`}>
            <div className="relative">
              <img 
                src={logo}
                alt="Homefix Gestion Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover shadow-md border-2 border-white hover:border-blue-300 transition-all duration-300 hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="jsm:text-lg xl:text-xl font-bold text-green-500 leading-tight whitespace-nowrap">
                Homefix Gestion
              </h1>
              <span className="text-xs text-gray-600 font-medium hidden sm:block">
                Home Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <nav className={`hidden lg:flex items-center space-x-4 xl:space-x-6 ${isRTL ? "space-x-reverse" : ""}`}>
            <Link
              to="/"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1 rounded-lg hover:bg-yellow-300 ${
                isActive("/") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md" : ""
              } ${isActive("/") ? "after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-blue-600 after:rounded-full" : ""}`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/services"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1 rounded-lg hover:bg-yellow-300 ${
                isActive("/services") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md" : ""
              } ${isActive("/services") ? "after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-blue-600 after:rounded-full" : ""}`}
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/about"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1 rounded-lg hover:bg-yellow-300 ${
                isActive("/about") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md" : ""
              } ${isActive("/about") ? "after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-blue-600 after:rounded-full" : ""}`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1 rounded-lg hover:bg-yellow-300 ${
                isActive("/contact") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md" : ""
              } ${isActive("/contact") ? "after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-blue-600 after:rounded-full" : ""}`}
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Desktop Action Buttons - Hidden on mobile and tablet */}
          <div className={`hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0 ${isRTL ? "space-x-reverse" : ""}`}>
            <button
              onClick={onCallClick}
              className={`flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 xl:px-4 xl:py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-xs xl:text-sm font-medium whitespace-nowrap shadow-md ${isRTL ? "space-x-reverse" : ""}`}
            >
              <FaPhone size={14} />
              <span>Call Now</span>
            </button>
            <button
              onClick={onWhatsAppClick}
              className={`flex items-center space-x-2 bg-green-500 text-white px-3 py-2 xl:px-4 xl:py-2 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 text-xs xl:text-sm font-medium whitespace-nowrap shadow-md ${isRTL ? "space-x-reverse" : ""}`}
            >
              <FaWhatsapp size={14} />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Tablet Action Buttons - Visible on medium screens only */}
          <div className={`hidden md:flex lg:hidden items-center space-x-2 flex-shrink-0 ${isRTL ? "space-x-reverse" : ""}`}>
            <LanguageSwitcher />
            <button
              onClick={onCallClick}
              className={`flex items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md`}
              title="Call Now"
            >
              <FaPhone size={16} />
            </button>
            <button
              onClick={onWhatsAppClick}
              className={`flex items-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-md`}
              title="WhatsApp"
            >
              <FaWhatsapp size={16} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 ml-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button - Visible on small screens only */}
          <div className={`md:hidden flex items-center space-x-2 flex-shrink-0 ${isRTL ? "space-x-reverse" : ""}`}>
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-4 border-t bg-yellow-500 border-yellow-500" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-4 px-2">
            <Link
              to="/"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-base py-3 px-4 rounded-lg hover:bg-yellow-300 hover:shadow-md transform hover:scale-105 ${isRTL ? "text-right" : "text-left"} ${
                isActive("/") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md scale-105" : ""
              } ${isActive("/") ? "before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-8 before:bg-blue-600 before:rounded-r-full" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/services"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-base py-3 px-4 rounded-lg hover:bg-yellow-300 hover:shadow-md transform hover:scale-105 ${isRTL ? "text-right" : "text-left"} ${
                isActive("/services") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md scale-105" : ""
              } ${isActive("/services") ? "before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-8 before:bg-blue-600 before:rounded-r-full" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/about"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-base py-3 px-4 rounded-lg hover:bg-yellow-300 hover:shadow-md transform hover:scale-105 ${isRTL ? "text-right" : "text-left"} ${
                isActive("/about") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md scale-105" : ""
              } ${isActive("/about") ? "before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-8 before:bg-blue-600 before:rounded-r-full" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-base py-3 px-4 rounded-lg hover:bg-yellow-300 hover:shadow-md transform hover:scale-105 ${isRTL ? "text-right" : "text-left"} ${
                isActive("/contact") ? "text-blue-600 font-semibold bg-yellow-300 shadow-md scale-105" : ""
              } ${isActive("/contact") ? "before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1 before:h-8 before:bg-blue-600 before:rounded-r-full" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            
            {/* Mobile Action Buttons */}
            <div className="flex space-x-3 gap-2 mt-4 pt-3 border-t border-yellow-500">
              <button
                onClick={() => {
                  onCallClick()
                  setIsMenuOpen(false)
                }}
                className={`flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex-1 text-sm font-medium shadow-md ${isRTL ? "space-x-reverse" : ""}`}
              >
                <FaPhone size={16} />
                <span>Call Now</span>
              </button>
              <button
                onClick={() => {
                  onWhatsAppClick()
                  setIsMenuOpen(false)
                }}
                className={`flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex-1 text-sm font-medium shadow-md ${isRTL ? "space-x-reverse" : ""}`}
              >
                <FaWhatsapp size={16} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header