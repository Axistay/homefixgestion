"use client"
import Layout from "../components/Layout.jsx"
import { useLanguage } from "../hooks/useLanguage.jsx"
import { FaUsers, FaAward, FaTools, FaHeart, FaShieldAlt, FaClock } from "react-icons/fa"

function AboutPage() {
  const { t, isRTL } = useLanguage()

  const features = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: t("about.features.expert"),
      description: t("about.features.expertDesc"),
    },
    {
      icon: <FaAward className="text-4xl text-yellow-500" />,
      title: t("about.features.quality"),
      description: t("about.features.qualityDesc"),
    },
    {
      icon: <FaTools className="text-4xl text-green-600" />,
      title: t("about.features.equipment"),
      description: t("about.features.equipmentDesc"),
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: t("about.features.care"),
      description: t("about.features.careDesc"),
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-600" />,
      title: t("about.features.insured"),
      description: t("about.features.insuredDesc"),
    },
    {
      icon: <FaClock className="text-4xl text-orange-600" />,
      title: t("about.features.emergency"),
      description: t("about.features.emergencyDesc"),
    },
  ]

  return (
    <Layout>
      <div className={`py-20 bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold text-gray-800 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t("about.title")} <span className="text-blue-600">Homefix Gestion</span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic leading-relaxed' : ''}`}>
              {t("about.subtitle")}
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className={`text-3xl font-bold text-gray-800 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                {t("about.storyTitle")}
              </h2>
              <p className={`text-gray-600 mb-4 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t("about.story1")}
              </p>
              <p className={`text-gray-600 mb-4 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t("about.story2")}
              </p>
              <p className={`text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t("about.story3")}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t("about.stats.experience")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
                  <div className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t("about.stats.customers")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">15000+</div>
                  <div className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t("about.stats.jobs")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
                  <div className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t("about.stats.rating")}
                  </div>
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
                <h3 className={`text-xl font-bold text-gray-800 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
            <h2 className={`text-3xl font-bold text-gray-800 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t("about.missionTitle")}
            </h2>
            <p className={`text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t("about.missionText")}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage