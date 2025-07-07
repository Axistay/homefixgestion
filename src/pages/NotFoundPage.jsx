import { Link } from "react-router-dom"
import Layout from "../components/Layout.jsx"
import { FaHome, FaTools } from "react-icons/fa"

function NotFoundPage() {
  return (
    <Layout>
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <FaTools className="text-8xl text-blue-600 mx-auto mb-8 animate-bounce" />
            <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oops! It looks like this page is under construction or doesn't exist. Let's get you back to safety!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <FaHome size={20} />
                <span>Go Home</span>
              </Link>
              <Link
                to="/services"
                className="flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 hover:scale-105"
              >
                <FaTools size={20} />
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
