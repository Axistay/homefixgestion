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
      code: LANGUAGES.FR, 
      name: "Français", 
      flag: "https://flagcdn.com/w20/fr.png",
      flagAlt: "France flag"
    },
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
      code: LANGUAGES.AR, 
      name: "العربية", 
      flag: "data:image/png;base64,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",
      flagAlt: "Saudi Arabia flag"
    }
  ]
  
  const currentLanguage = languages.find(lang => lang.code === language)
  
  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-xl border border-gray-300 hover:bg-gray-50 hover:border-blue-400 transition-all duration-200  hover:shadow-md min-w-[140px]"
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