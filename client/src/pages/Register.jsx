import { useState } from "react";

import axios from "axios";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
  "https://agritech-platform-qcrq.onrender.com/api/auth/register",
  {
    name,
    email,
    password,
  }
);

      alert(res.data.message);

      setName("");

      setEmail("");

      setPassword("");

    }

    catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] flex items-center justify-center px-6">

      <form
        onSubmit={handleRegister}
        className="bg-white rounded-[40px] shadow-2xl p-10 max-w-2xl w-full"
      >

        <div className="text-center mb-10">

          <div className="text-7xl mb-4">
            📝
          </div>

         <h1 className="text-5xl font-bold text-black">
  Register
</h1>
        </div>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-5 rounded-2xl border-2 border-gray-300 text-2xl"
            required
          />

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

            Register

          </button>

        </div>

      </form>

    </div>

  );

}

export default Register;