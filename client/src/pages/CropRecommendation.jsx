import { useState } from "react";

function CropRecommendation() {

  const [soil, setSoil] = useState("");

  const [season, setSeason] = useState("");

  const [result, setResult] = useState("");

  const getRecommendation = () => {

    if (soil === "" || season === "") {

      alert("Please fill all details");

      return;

    }

    if (soil === "Black Soil" && season === "Winter") {

      setResult(
        "🌾 Wheat is highly recommended. Good moisture retention and cool climate support high yield."
      );

    }

    else if (soil === "Red Soil" && season === "Summer") {

      setResult(
        "🌽 Maize is recommended. Red soil and warm weather are ideal for maize farming."
      );

    }

    else if (soil === "Alluvial Soil" && season === "Monsoon") {

      setResult(
        "🍚 Rice is highly recommended because alluvial soil retains water efficiently."
      );

    }

    else {

      setResult(
        "🌱 Cotton can be grown successfully in these conditions."
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10 flex items-center justify-center">

      <div className="bg-white rounded-[40px] shadow-2xl p-10 max-w-4xl w-full">

        <div className="text-center mb-10">

          <div className="text-8xl mb-5">
            🌱
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Crop Recommendation AI
          </h1>

          <p className="text-2xl text-gray-600">
            Get smart crop suggestions for better farming
          </p>

        </div>

        <div className="space-y-6">

          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            className="w-full p-5 rounded-2xl border-2 border-gray-300 text-2xl"
          >

            <option value="">
              Select Soil Type
            </option>

            <option>
              Black Soil
            </option>

            <option>
              Red Soil
            </option>

            <option>
              Alluvial Soil
            </option>

          </select>

          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="w-full p-5 rounded-2xl border-2 border-gray-300 text-2xl"
          >

            <option value="">
              Select Season
            </option>

            <option>
              Summer
            </option>

            <option>
              Winter
            </option>

            <option>
              Monsoon
            </option>

          </select>

          <button
            onClick={getRecommendation}
            className="w-full bg-green-700 hover:bg-green-800 text-white text-3xl font-bold py-5 rounded-2xl duration-300"
          >

            Get Recommendation

          </button>

          {result && (

            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-3xl text-center mt-8 shadow-lg">

              <h2 className="text-4xl font-bold text-green-700 mb-4">
                🤖 AI Result
              </h2>

              <p className="text-2xl text-gray-700 leading-relaxed">
                {result}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default CropRecommendation;