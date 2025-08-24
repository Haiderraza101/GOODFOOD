export default function NewDish() {
  return (
    <div className="p-6 w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-100 shadow-lg rounded-2xl overflow-hidden">
        {/* Top Section with background and icon */}
        <div className="relative h-40 bg-indigo-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-indigo-100/30"></div>
          <div className="flex items-center gap-3 z-10">
            <div className="bg-indigo-400 p-3 rounded-full text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-xl">Add New Dish</h2>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Dish Name"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Cuisine Type"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Price ($)"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Performance (%)"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          <button className="bg-indigo-400 hover:bg-indigo-500 transition text-white font-semibold py-2 rounded-xl shadow-md">
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
}
