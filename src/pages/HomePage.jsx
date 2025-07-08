import Layout from "../components/Layout.jsx"
import Hero from "../components/Hero.jsx"
import Services from "../components/Services.jsx"
import Contact from "../components/Contact.jsx"

function HomePage() {
  return (
    <Layout>
      <div>
        <Hero />
        <Services number={3} />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomePage
