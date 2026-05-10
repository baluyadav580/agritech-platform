import { useState } from "react";

function AiAssistant() {

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {

    if (question === "") {

      alert("Please enter a question");

      return;

    }

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/ai/ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
          }),
        }
      );

      const data = await response.json();

      setAnswer(data.answer);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Server Error");

    }

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] flex items-center justify-center px-6 py-10">

      <div className="bg-white/70 backdrop-blur-lg rounded-[40px] shadow-2xl p-10 max-w-4xl w-full border border-white/30">

        <div className="text-center mb-10">

          <div className="text-8xl mb-5">
            🤖
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">
            AI Farming Assistant
          </h1>

          <p className="text-2xl text-gray-600">
            Ask smart farming questions
          </p>

        </div>

        <div className="space-y-6">

          <textarea
            rows="4"
            placeholder="Ask about crops, fertilizers, diseases, irrigation..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-6 rounded-3xl border-2 border-gray-200 text-2xl focus:outline-none focus:border-green-600"
          />

          <button
            onClick={handleAsk}
            className="w-full bg-green-700 hover:bg-green-800 hover:scale-105 duration-300 text-white text-3xl font-bold py-5 rounded-3xl"
          >

            Ask AI Assistant

          </button>

          {loading && (

            <div className="bg-white p-6 rounded-3xl shadow-lg text-center">

              <div className="animate-pulse text-3xl font-bold text-green-700">

                🤖 AI is thinking...

              </div>

            </div>

          )}

          {answer && (

            <div className="bg-green-50 border-l-8 border-green-700 p-6 rounded-3xl mt-6">

              <h2 className="text-3xl font-bold text-green-700 mb-3">
                AI Response
              </h2>

              <p className="text-2xl text-gray-700 leading-relaxed">
                {answer}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default AiAssistant; 