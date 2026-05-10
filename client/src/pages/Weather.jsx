import { useEffect, useState } from "react";

import axios from "axios";

function Weather() {

  const [weather, setWeather] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchWeather = async () => {

      try {

        const res = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=7e18af337ed5937cd35381df51127b6b&units=metric"
        );

        console.log(res.data);

        setWeather(res.data);

      }

      catch (err) {

        console.log(err);

        setError("Failed to load weather");

      }

    };

    fetchWeather();

  }, []);

  return (

    <div className="min-h-screen bg-[#eef5ea] p-10">

      <h1 className="text-5xl font-bold text-green-700 text-center mb-10">

        🌦 Weather Dashboard

      </h1>

      {error && (

        <p className="text-center text-red-600 text-3xl">

          {error}

        </p>

      )}

      {weather ? (

        <div className="bg-white max-w-3xl mx-auto rounded-3xl shadow-2xl p-10 text-center">

          <h2 className="text-4xl font-bold mb-6">

            {weather.name}

          </h2>

          <div className="text-7xl mb-6">

            ☀️

          </div>

          <p className="text-5xl font-bold text-green-700 mb-4">

            {weather.main.temp}°C

          </p>

          <p className="text-3xl text-gray-700 mb-4">

            {weather.weather[0].description}

          </p>

          <p className="text-2xl text-gray-600">

            Humidity: {weather.main.humidity}%

          </p>

        </div>

      ) : (

        !error && (

          <p className="text-center text-3xl">

            Loading weather...

          </p>

        )

      )}

    </div>

  );

}

export default Weather; 