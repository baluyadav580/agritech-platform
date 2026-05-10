function Dashboard() {

  const stats = [

    {
      title: "Total Farmers",
      value: "12,450",
      icon: "👨‍🌾",
    },

    {
      title: "Active Crops",
      value: "8,920",
      icon: "🌾",
    },

    {
      title: "Weather Alerts",
      value: "125",
      icon: "☀️",
    },

    {
      title: "AI Predictions",
      value: "2,340",
      icon: "🤖",
    },

  ];

  const notifications = [

    "🌧 Heavy rain expected tomorrow",

    "🌾 Rice market prices increased by 5%",

    "☀ High temperature alert for crops",

    "🤖 AI recommends irrigation today",

  ];

  return (

    <div className="min-h-screen bg-[#eef5ea] px-6 py-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <div className="text-8xl mb-5">
            📊
          </div>

          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Smart Farming Dashboard
          </h1>

          <p className="text-2xl text-gray-600">
            Real-time agriculture analytics
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[35px] shadow-2xl p-8 text-center hover:scale-105 duration-300"
            >

              <div className="text-6xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold text-green-700 mb-3">
                {item.title}
              </h2>

              <p className="text-5xl font-bold text-gray-700">
                {item.value}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-14">

          <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">

            🔔 Smart Notifications

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {notifications.map((note, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-6 text-2xl hover:scale-105 duration-300"
              >

                {note}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;