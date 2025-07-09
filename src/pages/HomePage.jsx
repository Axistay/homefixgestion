import Layout from "../components/Layout.jsx"
import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import Contact from "../components/Contact.jsx"

function HomePage({ onWhatsAppClick }) {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-300 to-blue-500">
    <h1 className="text-2xl font-bold">Coming soon 😍😎</h1>

    </div>
    </>
    // <Layout>
    //   <div>
    //     <Hero />
    //     <Services number={3} onWhatsAppClick={onWhatsAppClick} />
    //     <Contact onWhatsAppClick={onWhatsAppClick} />
    //   </div>
    // </Layout>
  )
}

export default HomePage
