function MarketPrices() {

  const crops = [

    {
      name: "Rice",
      price: "₹2400 / Quintal",
      change: "⬆ +5%",
    },

    {
      name: "Wheat",
      price: "₹2100 / Quintal",
      change: "⬇ -2%",
    },

    {
      name: "Cotton",
      price: "₹7200 / Quintal",
      change: "⬆ +8%",
    },

    {
      name: "Maize",
      price: "₹1800 / Quintal",
      change: "⬆ +3%",
    },

  ];

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <div className="text-8xl mb-5">
            📈
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Smart Market Prices
          </h1>

          <p className="text-2xl text-gray-600">
            Live crop market trends for farmers
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {crops.map((crop, index) => (

            <div
              key={index}
              className="bg-white rounded-[35px] shadow-xl p-8 hover:scale-105 transition-all"
            >

              <h2 className="text-4xl font-bold text-green-700 mb-4">
                {crop.name}
              </h2>

              <p className="text-3xl text-gray-700 mb-3">
                {crop.price}
              </p>

              <p className="text-2xl font-bold">
                {crop.change}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default MarketPrices;