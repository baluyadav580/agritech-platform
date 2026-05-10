import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(

        "https://agritech-platform-qcrq.onrender.com",

        {
          email,
          password,
        }

      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login successful");

      navigate("/dashboard");

    }
catch (error) {

  console.log(error);

  alert(
    JSON.stringify(error.response?.data) ||
    "Login failed"
  );

}

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] flex items-center justify-center px-6">

      <form
        onSubmit={handleLogin}
        className="bg-white rounded-[40px] shadow-2xl p-10 max-w-2xl w-full"
      >

        <div className="text-center mb-10">

          <div className="text-7xl mb-4">
            🔐
          </div>

          <h1 className="text-5xl font-bold text-green-700">
            Login
          </h1>

        </div>

        <div className="space-y-6">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-5 rounded-2xl border-2 border-gray-300 text-2xl"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-5 rounded-2xl border-2 border-gray-300 text-2xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white text-3xl font-bold py-5 rounded-2xl"
          >

            Login

          </button>

        </div>

      </form>

    </div>

  );

}

export default Login;