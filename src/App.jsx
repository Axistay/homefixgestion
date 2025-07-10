import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "./hooks/useLanguage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ServicesPage from "./pages/ServicesPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // Centralized WhatsApp function
  const phoneNumber = "0618269179"
  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/212${phoneNumber.slice(1)}?text=${encodedMessage}`, "_blank")
  }

  return (
    <LanguageProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage onWhatsAppClick={openWhatsApp} />} />
              <Route path="/services" element={<ServicesPage onWhatsAppClick={openWhatsApp} />} />
              <Route path="/contact" element={<ContactPage onWhatsAppClick={openWhatsApp} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </LanguageProvider>
  )
}

export default App




