"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { LANGUAGES } from "../types/index.js"
import { translations } from "../data/translations.js"

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language")
    return (savedLang && Object.values(LANGUAGES).includes(savedLang)) ? savedLang : LANGUAGES.FR
  })

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.dir = language === LANGUAGES.AR ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key) => {
    const keys = key.split(".")
    let value = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const isRTL = language === LANGUAGES.AR

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
