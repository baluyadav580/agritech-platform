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

        "https://agritech-platform-qcrq.onrender.com/api/auth/login",

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
  placeholder="Enter Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{ color: 'black' }}
  className="text-black"
/>

<input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{ color: 'black' }}
  className="text-black"
/>
          <button
  style={{
    color: 'white',
    backgroundColor: 'green'
  }}
>
  Login
</button>
        </div>

      </form>

    </div>

  );

}

export default Login;