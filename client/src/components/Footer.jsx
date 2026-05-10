function Footer() {

  return (

    <footer className="bg-green-900 text-white py-10 px-6 mt-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>

          <h1 className="text-4xl font-bold mb-4">
            🌾 Agritech
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Smart farming platform helping farmers with AI,
            weather updates, crop monitoring, and market insights.
          </p>

        </div>

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col space-y-3 text-xl">

            <a href="/" className="hover:text-yellow-300">
              Home
            </a>

            <a href="/dashboard" className="hover:text-yellow-300">
              Dashboard
            </a>

            <a href="/weather" className="hover:text-yellow-300">
              Weather
            </a>

            <a href="/market" className="hover:text-yellow-300">
              Market Prices
            </a>

          </div>

        </div>

        <div>

          <h2 className="text-3xl font-bold mb-4">
            Contact
          </h2>

          <div className="space-y-3 text-xl text-gray-300">

            <p>📧 support@agritech.com</p>

            <p>📞 +91 9876543210</p>

            <p>📍 Hyderabad, India</p>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-lg text-gray-400">

        © 2026 Agritech Platform. All rights reserved.

      </div>

    </footer>

  );

}

export default Footer;