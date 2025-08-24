import { DishPerformanceData } from "@/types/ManageMenu";
import Image from "next/image";

const dishData: DishPerformanceData[] = [
  {
    name: "Cheeseburger",
    cuisinetype: "American",
    photourl: "/cheeseburger.png",
    performance: 78,
    bgcolor: "#FDF3F4",
  },
  {
    name: "Pizza Margherita",
    cuisinetype: "Italian",
    photourl: "/pizza.png",
    performance: 85,
    bgcolor: "#FFF4E5",
  },
  {
    name: "Chicken Biryani",
    cuisinetype: "Pakistani",
    photourl: "/chickenbiryani.png",
    performance: 92,
    bgcolor: "#FDF9F3",
  },
  {
    name: "Soup of the Day",
    cuisinetype: "Continental",
    photourl: "/phonoodlesoap.png",
    performance: 65,
    bgcolor: "#E5F7FF",
  },
];

export default function DishPerformance() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
        <h2 className="text-gray-700 font-bold text-lg mb-6 flex items-center gap-2">
          <svg
          className="text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H5v14h14zm-6.963 2.729c.271-.868 1.44-.95 1.85-.184l.052.11L15.677 12H17a1 1 0 0 1 .117 1.993L17 14h-1.993a1.01 1.01 0 0 1-.886-.524l-.052-.11l-.953-2.384l-1.654 5.293c-.259.828-1.355.953-1.807.255l-.06-.105L8.381 14H7a1 1 0 0 1-.117-1.993L7 12h1.994c.34 0 .654.17.84.449l.063.11l.388.776z"/></g></svg>
          <div className="text-gray-700">
             Dish Performance
          </div>
         
        </h2>

        <div className="flex flex-col gap-4">
          {dishData.map((dish, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl shadow-sm border border-gray-200 bg-white"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-gray-200 p-2">
                <Image
                  src={dish.photourl}
                  width={50}
                  height={50}
                  alt={dish.name}
                  className="object-contain"
                />
              </div>

              
              <div className="flex-1 flex flex-col ml-4">
                <span className="text-gray-700 font-semibold">{dish.name}</span>
                <span className="text-gray-500 text-sm">{dish.cuisinetype}</span>

              
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-indigo-400 h-2 rounded-full"
                    style={{ width: `${dish.performance}%` }}
                  ></div>
                </div>
              </div>

            
              <div className="ml-4 text-gray-600 font-bold">{dish.performance}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
