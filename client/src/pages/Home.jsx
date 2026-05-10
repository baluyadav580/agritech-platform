import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

const [darkMode, setDarkMode] = useState(false);
  
  return (

  <div
  className={`min-h-screen pb-32 transition-all duration-500 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-[#eef5ea] text-black"
  }`}
>
  <div className="flex justify-end max-w-6xl mx-auto pt-6 px-6">
    <div className="max-w-6xl mx-auto px-6 mt-6">

  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="p-4 rounded-2xl text-xl border-2 border-green-700"
  >

    <option>English</option>

    <option>Hindi</option>

    <option>Telugu</option>

    <option>Tamil</option>

    <option>Kannada</option>

  </select>

</div>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-black text-white px-6 py-3 rounded-2xl text-xl shadow-lg"
  >

    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}

  </button>

</div>
      <div className="bg-gradient-to-r from-green-800 via-green-600 to-lime-500 rounded-[40px] p-10 text-white shadow-xl max-w-6xl mx-auto mt-10">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    <div>

      <h1 className="text-6xl font-bold mb-6 leading-tight">

        Smart Farming <br />

        With AI Technology 🌾

      </h1>

      <p className="text-2xl mb-8 text-green-100">

        Empowering farmers with weather updates,
        AI assistance, voice support and smart farming tools.

      </p>

      <button className="bg-white text-green-700 text-2xl font-bold px-8 py-4 rounded-3xl">

        Explore Services

      </button>

    </div>

    <div className="flex justify-center">

      <img
  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
  alt="Farming"
  className="rounded-[40px] shadow-2xl w-full max-w-lg"
/>

    </div>

  </div>

</div>

      <div className="text-center mt-10">

        <div className="text-8xl mb-6">
          🌾
        </div>

        <h1 className="text-6xl font-bold text-green-700 mb-6">
          AgriTech
        </h1>
         <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          AI-Powered Government Scheme Discovery Platform
          for Indian Farmers
        </p>

      </div>

      <div className="bg-white rounded-[40px] shadow-lg p-8 mt-14 max-w-4xl mx-auto border border-gray-200">

        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🌐 Select Your Language
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <button className="border-4 border-gray-200 rounded-3xl py-8 text-center hover:border-green-600 transition-all">
            <h3 className="text-5xl font-bold text-gray-700 mb-3">
              తెలుగు
              </h3>
            <p className="text-2xl text-gray-500">
              Telugu
            </p>
          </button>

          <button className="border-4 border-gray-200 rounded-3xl py-8 text-center hover:border-green-600 transition-all">
            <h3 className="text-5xl font-bold text-gray-700 mb-3">
              हिन्दी
            </h3>
            <p className="text-2xl text-gray-500">
              Hindi
            </p>
          </button>
                    <button className="border-4 border-green-700 rounded-3xl py-8 text-center bg-green-50">
            <h3 className="text-5xl font-bold text-green-700 mb-3">
              English
            </h3>
            <p className="text-2xl text-green-700 font-semibold">
              English
            </p>
          </button>

        </div>

      </div>

      <div className="max-w-4xl mx-auto mt-10 space-y-6">

        <button
  onClick={() => navigate("/login")}
  className="w-full bg-green-700 hover:bg-green-800 text-white text-4xl font-bold py-7 rounded-3xl shadow-lg transition-all"
></button>
         <button
  onClick={() => navigate("/register")}
  className="w-full border-4 border-green-700 text-green-700 hover:bg-green-100 text-4xl font-bold py-7 rounded-3xl bg-white transition-all"
></button>

      </div>

      <div className="grid grid-cols-3 gap-6 text-center mt-16 max-w-5xl mx-auto">

        <div>
          <div className="text-6xl mb-4">👨‍🌾</div>
          <h3 className="text-2xl font-bold text-gray-700">140M+ Farmers</h3>
        </div>

        <div>
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-2xl font-bold text-gray-700">100+ Schemes</h3>
        </div>

        <div>
          <div className="text-6xl mb-4">🎤</div>
          <h3 className="text-2xl font-bold text-gray-700">Voice Support</h3>
        </div>

      </div>
      <div className="bg-white rounded-[40px] shadow-lg p-10 mt-16 max-w-5xl mx-auto border border-gray-200">

  <div className="text-center mb-8">

    <img
  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8"
  alt="AI Farming"
  className="rounded-3xl mb-5 h-52 w-full object-cover"
/>

    <h2 className="text-5xl font-bold text-green-700 mb-4">
      AI Farming Assistant
    </h2>

    <p className="text-2xl text-gray-600">
      Ask farming questions and get smart AI suggestions
    </p>

  </div>

  <div className="space-y-6">

    <input
      type="text"
      placeholder="Ask about crops, fertilizers, weather..."
      className="w-full p-6 rounded-3xl border-2 border-gray-200 text-2xl focus:outline-none focus:border-green-600"
    />

    <button className="w-full bg-green-700 hover:bg-green-800 text-white text-3xl font-bold py-5 rounded-3xl transition-all">

      Ask AI Assistant

    </button>

  </div>

</div>
<div className="bg-white rounded-[40px] shadow-lg p-10 mt-16 max-w-5xl mx-auto border border-gray-200">

  <div className="text-center mb-8">

    <div className="text-7xl mb-4">
      ☀️
    </div>

    <h2 className="text-5xl font-bold text-green-700 mb-4">
      Weather Updates
    </h2>

    <p className="text-2xl text-gray-600">
      Live farming weather information
    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

    <div className="bg-green-50 p-8 rounded-3xlhover:scale-105 duration-300">

      <h3 className="text-3xl font-bold text-gray-700 mb-3">
        Temperature
      </h3>

      <p className="text-5xl font-bold text-green-700">
        28°C
      </p>

    </div>

    <div className="bg-green-50 p-8 rounded-3xlhover:scale-105 duration-300">

      <h3 className="text-3xl font-bold text-gray-700 mb-3">
        Humidity
      </h3>

      <p className="text-5xl font-bold text-blue-700">
        65%
      </p>

    </div>

    <div className="bg-green-50 p-8 rounded-3xlhover:scale-105 duration-300">

      <h3 className="text-3xl font-bold text-gray-700 mb-3">
        Rain Chance
      </h3>

      <p className="text-5xl font-bold text-yellow-600">
        20%
      </p>

    </div>

  </div>

</div>
<div className="bg-white rounded-[40px] shadow-lg p-10 mt-16 max-w-6xl mx-auto border border-gray-200">

  <div className="text-center mb-10">

    <div className="text-7xl mb-4">
      📋
    </div>

    <h2 className="text-5xl font-bold text-green-700 mb-4">
      Government Schemes
    </h2>

    <p className="text-2xl text-gray-600">
      Explore agriculture support schemes for farmers
    </p>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="bg-green-50 p-8 rounded-3xl shadow-sm ">

      <h3 className="text-3xl font-bold text-green-700 mb-4">
        PM-KISAN
      </h3>

      <p className="text-xl text-gray-600 mb-6">
        Financial support scheme for farmers.
      </p>

      <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-xl">
        View Details
      </button>

    </div>

    <div className="bg-green-50 p-8 rounded-3xl shadow-sm">

      <h3 className="text-3xl font-bold text-green-700 mb-4">
        Crop Insurance
      </h3>

      <p className="text-xl text-gray-600 mb-6">
        Insurance protection for crop losses.
      </p>

      <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-xl">
        View Details
      </button>

    </div>

    <div className="bg-green-50 p-8 rounded-3xl shadow-sm">

      <h3 className="text-3xl font-bold text-green-700 mb-4">
        Soil Health Card
      </h3>

      <p className="text-xl text-gray-600 mb-6">
        Improve soil productivity and farming.
      </p>

      <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-xl">
        View Details
      </button>

    </div>

  </div>

</div>  
<div className="max-w-6xl mx-auto mt-16">

  <h2 className="text-5xl font-bold text-center text-green-700 mb-10">
    {
  language === "Hindi"
    ? "स्मार्ट खेती सेवाएं"
    : language === "Telugu"
    ? "స్మార్ట్ వ్యవసాయ సేవలు"
    : language === "Tamil"
    ? "ஸ்மார்ட் விவசாய சேவைகள்"
    : language === "Kannada"
    ? "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸೇವೆಗಳು"
    : "Smart Farming Services"
}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div
      onClick={() => navigate("/ai")}
      className="bg-white rounded-[35px] shadow-lg p-10 cursor-pointer hover:scale-105 transition-all"
    >

      <div className="text-7xl mb-5">
        🤖
      </div>

      <h3 className="text-4xl font-bold text-green-700 mb-3">
        AI Assistant
      </h3>

      <p className="text-2xl text-gray-600">
        Smart crop guidance and farming help
      </p>

    </div>

    <div
      onClick={() => navigate("/weather")}
      
      className="bg-white rounded-[35px] shadow-lg p-10 cursor-pointer hover:scale-105 transition-all"
      
    >

      <div className="text-7xl mb-5">
         <img
  src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b"
  alt="Weather"
  className="rounded-3xl mb-5 h-52 w-full object-cover"
/>
        ☀️
      </div>

      <h3 className="text-4xl font-bold text-green-700 mb-3">
        Weather Updates
      </h3>

      <p className="text-2xl text-gray-600">
        Live climate and rainfall predictions
      </p>

    </div>

    <div
      onClick={() => navigate("/schemes")}
      className="backdrop-blur-lg bg-white/70 border border-white/30 rounded-[35px] shadow-2xl p-10 cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300"
    >

      <div className="text-7xl mb-5">
        <img
  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
  alt="Government Schemes"
  className="rounded-3xl mb-5 h-52 w-full object-cover"
/>
        📋
      </div>

      <h3 className="text-4xl font-bold text-green-700 mb-3">
        Govt Schemes
      </h3>

      <p className="text-2xl text-gray-600">
        Farmer support programs and benefits
      </p>

    </div>

    <div
      onClick={() => navigate("/voice")}
      className="bg-white rounded-[35px] shadow-lg p-10 cursor-pointer hover:scale-105 transition-all"
    >

      <div className="text-7xl mb-5">
        <img
  src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
  alt="Voice Assistant"
  className="rounded-3xl mb-5 h-52 w-full object-cover"
/>
        🎤
      </div>

      <h3 className="text-4xl font-bold text-green-700 mb-3">
        Voice Assistant
      </h3>

      <p className="text-2xl text-gray-600">
        Ask farming questions using voice
      </p>

    </div>

  </div>

</div>

    </div>

  );

}

export default Home;