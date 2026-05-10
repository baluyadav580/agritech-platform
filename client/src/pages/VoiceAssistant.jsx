import { useState } from "react";

function VoiceAssistant() {

  const [text, setText] = useState("");

  const startListening = () => {

    const recognition =
      new window.webkitSpeechRecognition();

    recognition.lang = "en-US";

    recognition.onresult = (event) => {

      const speech =
        event.results[0][0].transcript;

      setText(speech);

      speakResponse(speech);

    };

    recognition.start();

  };

  const speakResponse = (speech) => {

    let response = "";

    if (speech.includes("weather")) {

      response =
        "Today's weather is sunny with moderate temperature.";

    }

    else if (speech.includes("crop")) {

      response =
        "Rice and wheat are suitable crops for this season.";

    }

    else {

      response =
        "Sorry, I could not understand your request.";

    }

    const synth =
      window.speechSynthesis;

    const utterance =
      new SpeechSynthesisUtterance(response);

    synth.speak(utterance);

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10 flex items-center justify-center">

      <div className="bg-white rounded-[40px] shadow-2xl p-10 max-w-4xl w-full text-center">

        <div className="text-8xl mb-5">
          🎤
        </div>

        <h1 className="text-5xl font-bold text-green-700 mb-4">

          Farmer Voice Assistant

        </h1>

        <p className="text-2xl text-gray-600 mb-10">

          Speak your farming questions

        </p>

        <button
          onClick={startListening}
          className="bg-green-700 hover:bg-green-800 text-white text-3xl font-bold px-10 py-5 rounded-2xl duration-300"
        >

          🎙 Start Speaking

        </button>

        {text && (

          <div className="mt-10 bg-gray-100 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold text-gray-700 mb-4">

              You Said:

            </h2>

            <p className="text-2xl text-gray-600">

              {text}

            </p>

          </div>

        )}

      </div>

    </div>

  );

}

export default VoiceAssistant;