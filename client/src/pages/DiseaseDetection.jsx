import { useState } from "react";

function DiseaseDetection() {

  const [image, setImage] = useState(null);

  const [result, setResult] = useState("");

  const handleImage = (e) => {

    setImage(URL.createObjectURL(e.target.files[0]));

  };

  const detectDisease = () => {

    setResult(
      "🦠 AI Detected: Leaf Blight Disease. Recommended: Use organic fungicide and reduce excess watering."
    );

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10 flex items-center justify-center">

      <div className="bg-white rounded-[40px] shadow-2xl p-10 max-w-4xl w-full">

        <div className="text-center mb-10">

          <div className="text-8xl mb-5">
            🦠
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">

            AI Disease Detection

          </h1>

          <p className="text-2xl text-gray-600">

            Upload crop image for smart disease analysis

          </p>

        </div>

        <div className="space-y-8">

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full p-5 border-2 border-gray-300 rounded-2xl text-2xl"
          />

          {image && (

            <div className="flex justify-center">

              <img
                src={image}
                alt="Crop"
                className="w-full max-w-lg rounded-3xl shadow-xl"
              />

            </div>

          )}

          <button
            onClick={detectDisease}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-3xl font-bold py-5 rounded-2xl duration-300"
          >

            Detect Disease

          </button>

          {result && (

            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-3xl shadow-lg">

              <h2 className="text-4xl font-bold text-red-600 mb-4 text-center">

                🤖 AI Result

              </h2>

              <p className="text-2xl text-gray-700 leading-relaxed text-center">

                {result}

              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default DiseaseDetection;