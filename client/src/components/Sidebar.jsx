import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Sidebar() {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <>

      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 bg-green-700 text-white px-4 py-3 rounded-2xl text-2xl lg:hidden shadow-xl"
      >

        ☰

      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-green-800 text-white p-6 shadow-2xl z-40 transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >

        <h1 className="text-4xl font-bold mb-12 text-center">
          🌾 Agritech
        </h1>

        <div className="flex flex-col space-y-5 text-2xl">

          <Link
            to="/"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🏠 Home
          </Link>

          <Link
            to="/dashboard"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/weather"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            ☀️ Weather
          </Link>

          <Link
            to="/ai"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🤖 AI Assistant
          </Link>

          <Link
            to="/voice"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🎤 Voice Assistant
          </Link>

          <Link
            to="/market"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            📈 Market Prices
          </Link>

          <Link
            to="/marketplace"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🛒 Marketplace
          </Link>

          <Link
            to="/disease"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🌿 Disease Detection
          </Link>

          <Link
            to="/community"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            💬 Community
          </Link>

          <Link
            to="/crop-ai"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🌱 Crop AI
          </Link>

          <Link
            to="/schemes"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            🏛 Government Schemes
          </Link>

          <Link
            to="/profile"
            className="hover:bg-green-700 p-4 rounded-2xl duration-300"
          >
            👨‍🌾 Profile
          </Link>

          <button
            onClick={handleLogout}
            className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl text-2xl font-bold duration-300"
          >
<button
  onClick={() => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";

  }}
  className="w-full bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-4 rounded-2xl mt-6"
>

  Logout

</button>
            🚪 Logout

          </button>

        </div>

      </div>

    </>

  );

}

export default Sidebar;