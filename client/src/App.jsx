import SchemeForm from "./pages/SchemeForm";
import { useState } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Sidebar from "./components/Sidebar";

import Footer from "./components/Footer";

import CropRecommendation from "./pages/CropRecommendation";

import Community from "./pages/Community";

import MarketPrices from "./pages/MarketPrices";

import DiseaseDetection from "./pages/DiseaseDetection";

import Profile from "./pages/Profile";

import VoiceAssistant from "./pages/VoiceAssistant";

import Schemes from "./pages/Schemes";

import Weather from "./pages/Weather";

import AiAssistant from "./pages/AiAssistant";

import Marketplace from "./pages/Marketplace";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "min-h-screen"
      }
    >

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 bg-black text-white px-6 py-3 rounded-2xl text-xl shadow-xl"
      >

        {darkMode ? "☀ Light" : "🌙 Dark"}

      </button>

      <Sidebar />

      <div className="lg:ml-[280px] min-h-screen">

        <Routes>


          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          
          <Route path="/scheme" element={<SchemeForm />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <Weather />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ai"
            element={
              <ProtectedRoute>
                <AiAssistant />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/voice"
            element={
              <ProtectedRoute>
                <VoiceAssistant />
              </ProtectedRoute>
            }
          />

          <Route
            path="/schemes"
            element={
              <ProtectedRoute>
                <Schemes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/marketplace"
            element={
              <ProtectedRoute>
                <Marketplace />
              </ProtectedRoute>
            }
          />

          <Route
            path="/market"
            element={
              <ProtectedRoute>
                <MarketPrices />
              </ProtectedRoute>
            }
          />

          <Route
            path="/disease"
            element={
              <ProtectedRoute>
                <DiseaseDetection />
              </ProtectedRoute>
            }
          />

          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />

          <Route
            path="/crop-ai"
            element={
              <ProtectedRoute>
                <CropRecommendation />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

      <Footer />

    </div>

  );

}

export default App;