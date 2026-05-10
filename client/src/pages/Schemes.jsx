function Schemes() {

  return (

    <div className="min-h-screen bg-[#eef5ea] flex items-center justify-center px-6 py-10">

      <div className="bg-white rounded-[40px] shadow-xl p-10 max-w-6xl w-full">

        <div className="text-center mb-12">

          <div className="text-8xl mb-5">
            📋
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Government Schemes
          </h1>

          <p className="text-2xl text-gray-600">
            Agriculture support programs for farmers
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-green-50 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              PM-KISAN
            </h2>

            <p className="text-xl text-gray-600 mb-6">
              Financial assistance for farmers.
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-xl">
              View Details
            </button>

          </div>

          <div className="bg-green-50 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Crop Insurance
            </h2>

            <p className="text-xl text-gray-600 mb-6">
              Protection against crop losses.
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-xl">
              View Details
            </button>

          </div>

          <div className="bg-green-50 rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Soil Health Card
            </h2>

            <p className="text-xl text-gray-600 mb-6">
              Improve soil productivity.
            </p>

            <button className="bg-green-700 text-white px-6 py-3 rounded-2xl text-xl">
              View Details
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Schemes;