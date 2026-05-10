import { useState } from "react";

function Community() {

  const [post, setPost] = useState("");

  const [posts, setPosts] = useState([

    "🌾 Use drip irrigation to save water.",

    "☀ Best time for watering crops is early morning.",

  ]);

  const addPost = () => {

    if (post === "") {

      alert("Write something first");

      return;

    }

    setPosts([post, ...posts]);

    setPost("");

  };

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <div className="text-8xl mb-5">
            👨‍🌾
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">

            Farmer Community

          </h1>

          <p className="text-2xl text-gray-600">

            Share farming knowledge with others

          </p>

        </div>

        <div className="bg-white rounded-[35px] shadow-2xl p-8 mb-10">

          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Share your farming tip..."
            className="w-full h-40 p-5 rounded-2xl border-2 border-gray-300 text-2xl resize-none"
          />

          <button
            onClick={addPost}
            className="mt-6 bg-green-700 hover:bg-green-800 text-white text-2xl font-bold px-10 py-4 rounded-2xl"
          >

            Post

          </button>

        </div>

        <div className="space-y-6">

          {posts.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 text-2xl hover:scale-[1.02] duration-300"
            >

              {item}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Community;