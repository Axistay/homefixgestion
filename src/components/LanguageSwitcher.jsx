"use client"

import { useLanguage } from "../hooks/useLanguage.jsx"
import { LANGUAGES } from "../types/index.js"
import { FaGlobe, FaChevronDown } from "react-icons/fa"
import { useState } from "react"

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  
  const languages = [
    { 
      code: LANGUAGES.EN, 
      name: "English", 
      flag: "https://flagcdn.com/w20/us.png",
      flagAlt: "United States flag"
    },
    { 
      code: LANGUAGES.ES, 
      name: "Español", 
      flag: "https://flagcdn.com/w20/es.png",
      flagAlt: "Spain flag"
    },
    { 
      code: LANGUAGES.FR, 
      name: "Français", 
      flag: "https://flagcdn.com/w20/fr.png",
      flagAlt: "France flag"
    },
    { 
      code: LANGUAGES.AR, 
      name: "العربية", 
      flag: "https://flagcdn.com/w20/sa.png",
      flagAlt: "Saudi Arabia flag"
    },
  ]
  
  const currentLanguage = languages.find(lang => lang.code === language)
  
  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-yellow-100 shadow-xl border border-gray-300 hover:bg-gray-50 hover:border-blue-400 transition-all duration-200  hover:shadow-md min-w-[140px]"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <img 
          src={currentLanguage?.flag} 
          alt={currentLanguage?.flagAlt}
          className="w-5 h-auto rounded-sm border border-gray-200"
        />
        <span className="text-sm font-medium text-gray-700 flex-1">{currentLanguage?.name}</span>
        <FaChevronDown 
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} 
          size={12} 
        />
      </button>
      
      <div
        className={`absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[160px] z-50 transition-all duration-300 transform ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
        onMouseLeave={() => setOpen(false)}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code)
              setOpen(false)
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-all duration-150 ${
              language === lang.code 
                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            <img 
              src={lang.flag} 
              alt={lang.flagAlt}
              className="w-6 h-auto rounded-sm border border-gray-200"
            />
            <div className="flex-1">
              <span className="text-sm font-medium block whitespace-nowrap">{lang.name}</span>
              <span className="text-xs text-gray-500">{lang.code}</span>
            </div>
            {language === lang.code && (
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher