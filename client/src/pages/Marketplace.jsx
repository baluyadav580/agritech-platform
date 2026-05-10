function Marketplace() {

  const products = [

    {
      name: "Premium Wheat Seeds",
      price: "₹500",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
    },

    {
      name: "Organic Fertilizer",
      price: "₹750",
      image:
        "https://images.unsplash.com/photo-1589923188900-85dae523342b",
    },

    {
      name: "Smart Irrigation Kit",
      price: "₹2500",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },

    {
      name: "Pesticide Spray",
      price: "₹1200",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    },

  ];

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10">

      <div className="text-center mb-14">

        <div className="text-8xl mb-5">
          🛒
        </div>

        <h1 className="text-5xl font-bold text-green-700 mb-4">

          Farmer Marketplace

        </h1>

        <p className="text-2xl text-gray-600">

          Buy smart farming products online

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[35px] shadow-2xl overflow-hidden hover:scale-105 duration-300"
          >

            <img
              src={item.image}
              alt={item.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-6 text-center">

              <h2 className="text-3xl font-bold text-green-700 mb-4">

                {item.name}

              </h2>

              <p className="text-4xl font-bold text-gray-700 mb-6">

                {item.price}

              </p>

              <button
                className="bg-green-700 hover:bg-green-800 text-white text-2xl font-bold px-8 py-3 rounded-2xl"
              >

                Buy Now

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Marketplace;