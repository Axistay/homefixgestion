"use client"
import Layout from "../components/Layout.jsx"
import Contact from "../components/Contact.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"

function ContactPage() {
  const { t, isRTL } = useLanguage()

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
         
          <Contact />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
