import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "./hooks/useLanguage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ServicesPage from "./pages/ServicesPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
