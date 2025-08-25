import { EditFoodCardProps } from "@/types/FoodOrder";
import Image from "next/image";

export default function FoodCard({ foodData }: EditFoodCardProps) {
  return (
    <div className="bg-white w-full flex flex-col sm:flex-row justify-between items-center p-2 rounded-3xl border border-gray-100 shadow hover:shadow-md transition-all duration-300 ml-5 sm:ml-0">
      <div className="flex gap-4 w-full  sm:w-auto">
        <div className="bg-indigo-50 p-3 rounded-2xl flex items-center justify-center">
          <Image
            src={foodData.photourl}
            alt={foodData.name}
            width={80}
            height={80}
            className="object-contain w-[80px] h-[80px]"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="text-base font-medium text-gray-900">
            {foodData.name}
          </div>

          <div className="flex items-center text-sm gap-3 text-gray-500 mt-1">
            <span>{foodData.cuisinetype}</span>
            <div className="flex items-center gap-1 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" />
              </svg>
              <span>{foodData.rating}</span>
            </div>
            <span className="font-semibold text-gray-800">
              {foodData.price}
            </span>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="p-2 rounded-full border border-gray-200 text-yellow-500 hover:bg-yellow-400 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="stroke-current"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 4.5l-4 4L7 10l-1.5 1.5l7 7L14 17l1.5-4l4-4M9 15l-4.5 4.5M14.5 4L20 9.5"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-200 text-red-500 hover:bg-red-500 hover:text-white transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 28 28"
                className="fill-current"
              >
                <path d="M11.5 6h5a2.5 2.5 0 0 0-5 0M10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565zM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-4 sm:mt-0">
        <button className="p-2 rounded-full hover:bg-indigo-100 text-indigo-600 transition cursor-pointer">
          ✏️
        </button>

        <button className="p-2 rounded-full hover:bg-yellow-200 text-yellow-500 transition cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>
        </button>

        <button className="p-2 rounded-full hover:bg-green-100 text-green-600 transition cursor-pointer">
          👁️
        </button>

      </div>
    </div>
  );
}
