import Layout from "../components/Layout.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";
import { Helmet } from "react-helmet-async";
import React from "react";

function HomePage({ onWhatsAppClick }) {
  return (
    <Layout>
      <React.Fragment>
        <Helmet>
          <title>Homefix Gestion | Nettoyage, Maintenance et Gestion Syndic à Nador</title>
          <meta
            name="description"
            content="Homefix Gestion est une entreprise marocaine spécialisée dans le nettoyage, la maintenance, la gestion syndic et l'accueil à Nador. Nous offrons des services professionnels, rapides et fiables pour les bâtiments résidentiels et commerciaux."
          />
          <meta
            name="keywords"
            content="nettoyage, maintenance, gestion syndic, agence d'accueil, nettoyage Nador, maintenance Nador, syndic Nador, Homefix Gestion, nettoyage professionnel, services immobiliers"
          />
          <meta name="robots" content="index, follow" />

          {/* Open Graph for Social Media */}
          <meta property="og:title" content="Homefix Gestion - Nettoyage, Maintenance et Gestion à Nador" />
          <meta
            property="og:description"
            content="Services professionnels de nettoyage, maintenance et gestion syndic à Nador. Contactez Homefix Gestion pour une qualité et rapidité garanties."
          />
          <meta property="og:image" content="https://homefixgestion.com/logo.png" />
          <meta property="og:url" content="https://homefixgestion.com" />
          <meta property="og:type" content="website" />

          {/* JSON-LD Structured Data */}
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
              "description": "Homefix Gestion est une entreprise marocaine spécialisée dans le nettoyage, la maintenance, la gestion syndic et l'accueil à Nador. Nous offrons des services professionnels, rapides et fiables pour les bâtiments résidentiels et commerciaux.",
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
  );
}

export default HomePage;
