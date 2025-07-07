"use client"
import Layout from "../components/Layout.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"
import { FaUsers, FaAward, FaTools, FaHeart, FaShieldAlt, FaClock } from "react-icons/fa"

function AboutPage() {
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Expert Team",
      description: "Licensed and certified professionals with years of experience",
    },
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our work",
    },
    {
      icon: <FaTools className="text-4xl text-green-600" />,
      title: "Modern Equipment",
      description: "State-of-the-art tools and techniques for best results",
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Customer Care",
      description: "Dedicated support and personalized service",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-600" />,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind",
    },
    {
      icon: <FaClock className="text-4xl text-orange-600" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency repair services",
    },
  ]

  return (
    <Layout>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">RepairPro</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for professional home repair services since 2009
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className={isRTL ? "text-right" : "text-left"}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2009, RepairPro has been serving the community with reliable, professional home repair
                services. What started as a small family business has grown into a trusted name in home maintenance and
                renovation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We believe that every home deserves quality care, and every customer deserves honest, transparent
                service. Our team of licensed professionals is committed to delivering exceptional results on every
                project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From emergency repairs to complete renovations, we approach every job with the same dedication to
                quality and customer satisfaction that has made us the preferred choice for thousands of homeowners.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">15000+</div>
                  <div className="text-gray-600">Jobs Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To provide exceptional home repair services that exceed customer expectations while building lasting
              relationships based on trust, quality, and reliability. We're not just fixing homes – we're helping
              families create safe, comfortable spaces they can enjoy for years to come.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
