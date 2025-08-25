import Image from "next/image";

export default function NewDish() {
  return (
    <div className="p-2 w-full max-w-xs mx-auto">
      <div className="bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden ml-6 sm:ml-0 mt-10 sm:mt-0">
        
        <div className="relative h-28 flex items-center justify-center">
          <Image
            src="/addnewitem.jpg"
            alt="Add new dish"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="flex flex-col items-center gap-1 z-10">
            <div className="bg-white/20 p-2 rounded-full text-white shadow-md backdrop-blur-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z" />
              </svg>
            </div>
            <h2 className="text-white font-semibold text-sm">Add New Dish</h2>
          </div>
        </div>

        <div className="p-3 flex flex-col gap-2">
          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-1 focus-within:ring-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-indigo-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <input
              type="text"
              placeholder="Dish Name"
              className="w-full outline-none text-xs"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-1 focus-within:ring-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-[#7476d4] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1s-3 1.567-3 3.5S10.343 8 12 8zM5 22c0-3.866 3.582-7 8-7s8 3.134 8 7" />
            </svg>
            <input
              type="text"
              placeholder="Cuisine Type"
              className="w-full outline-none text-xs"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-1 focus-within:ring-indigo-400">
            <svg   
            className="w-3 h-3 text-[#7476d4] mr-2"
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="currentColor" d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.16 2.16 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133m-4.371 9.358a1.61 1.61 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.61 1.61 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153q.13 0 .257-.059q.292-.137.619-.33a1.62 1.62 0 0 1-.664 1.586"/></svg>
            <input
              type="number"
              placeholder="Price ($)"
              className="w-full outline-none text-xs"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-1 focus-within:ring-indigo-400">
            <svg 
            className="w-3 h-3 text-[#7476d4] mr-2"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 22V8h4v14zm7 0V2h4v20zm7 0v-8h4v8z"/></svg>
            <input
               type="text"
              placeholder="Performance (%)"
              className="w-full outline-none text-xs"
            />
          </div>

          <button className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium py-1.5 rounded-lg shadow flex items-center justify-center gap-1.5 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
}
