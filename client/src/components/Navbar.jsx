import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">

      <div className="flex justify-around items-center py-4">

        <Link
          to="/"
          className="flex flex-col items-center text-green-700 font-bold"
        >
          <span className="text-3xl">🏠</span>
          <span>Home</span>
        </Link>

        <Link
          to="/ai"
          className="flex flex-col items-center text-green-700 font-bold"
        >
          <span className="text-3xl">🤖</span>
          <span>AI</span>
        </Link>

        <Link
          to="/weather"
          className="flex flex-col items-center text-green-700 font-bold"
        >
          <span className="text-3xl">☀️</span>
          <span>Weather</span>
        </Link>

        <Link
          to="/schemes"
          className="flex flex-col items-center text-green-700 font-bold"
        >
          <span className="text-3xl">📋</span>
          <span>Schemes</span>
        </Link>

        <Link
          to="/voice"
          className="flex flex-col items-center text-green-700 font-bold"
        >
          <span className="text-3xl">🎤</span>
          <span>Voice</span>
        </Link>

      </div>

    </div>

  );

}

export default Navbar;