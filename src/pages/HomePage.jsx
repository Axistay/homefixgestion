import Layout from "../components/Layout.jsx"
import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import Contact from "../components/Contact.jsx"

function HomePage({ onWhatsAppClick }) {
  return (
    <Layout>
      <div>
        <Hero />
        <Services number={3} onWhatsAppClick={onWhatsAppClick} />
        <Contact onWhatsAppClick={onWhatsAppClick} />
      </div>
    </Layout>
  )
}

export default HomePage
