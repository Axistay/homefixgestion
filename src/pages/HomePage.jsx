import Layout from "../components/Layout.jsx"
import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import Contact from "../components/Contact.jsx"
import { Helmet } from "react-helmet-async";
import React from "react";

function HomePage({ onWhatsAppClick }) {
  return (
    <Layout>
      <React.Fragment>
        <Helmet>
          <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Homefix Gestion",
    "image": "https://homefixgestion.com/logo.png",
    "url": "https://homefixgestion.com",
    "telephone": "+212618269179",
    "email": "info@homefixgestion.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "حي المطار، الناظور",
      "addressLocality": "Nador",
      "addressRegion": "Oriental",
      "postalCode": "62000",
      "addressCountry": "MA"
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "description": "Homefix Gestion هي شركة مغربية متخصصة في خدمات التنظيف والصيانة وتسيير العمارات والاستقبال في مدينة الناظور. نقدم حلولاً احترافية للمباني السكنية والتجارية بأعلى جودة وبأسعار مناسبة. اتصل بنا لخدمة موثوقة وسريعة.",
    "sameAs": [
      "https://www.facebook.com/homefixgestion",
      "https://www.instagram.com/homefixgestion"
    ]
  }
  `}</script>
        </Helmet>

        <div>
          <Hero />
          <Services number={3} onWhatsAppClick={onWhatsAppClick} />
          <Contact onWhatsAppClick={onWhatsAppClick} />
        </div>
      </React.Fragment>
    </Layout>
  )
}

export default HomePage
