function Profile() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10 flex items-center justify-center">

      <div className="bg-white rounded-[40px] shadow-2xl p-10 max-w-4xl w-full text-center">

        <div className="text-8xl mb-5">
          👨‍🌾
        </div>

        <h1 className="text-5xl font-bold text-green-700 mb-10">

          Farmer Profile

        </h1>

        <div className="space-y-8">

          <div className="bg-green-50 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold text-green-700 mb-3">

              Full Name

            </h2>

            <p className="text-2xl text-gray-700">

              {user?.name || "Farmer"}

            </p>

          </div>

          <div className="bg-green-50 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold text-green-700 mb-3">

              Email Address

            </h2>

            <p className="text-2xl text-gray-700">

              {user?.email || "No Email"}

            </p>

          </div>

          <div className="bg-green-50 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold text-green-700 mb-3">

              Farming Status

            </h2>

            <p className="text-2xl text-gray-700">

              Active Farmer 🌾

            </p>

          </div>

          <div className="bg-green-50 p-6 rounded-3xl">

            <h2 className="text-3xl font-bold text-green-700 mb-3">

              AI Insights

            </h2>

            <p className="text-2xl text-gray-700">

              Smart farming recommendations enabled 🤖

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;