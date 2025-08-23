import { FoodData } from "@/types/FoodOrder";
import Image from "next/image";
import { OrderFoodBannerProps } from "@/types/FoodOrder";
import FoodCard from "./FoodCard";
export default function OrderFoodBanner({foodData}:OrderFoodBannerProps){
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center lg:p-10 p-6">
        <div className="text-center lg:text-left">
          <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-600">
            Order Food Online
          </div>
           <div className="text-medium text-gray-400 py-4 max-w-md">
Your favorite cuisines, just a click away
          </div>
          
<div className="text-sm text-gray-400 py-2 max-w-md">
  Order now and enjoy fresh meals delivered to your doorstep. Choose from a
  variety of cuisines, freshly prepared with quality ingredients, and get your
  favorite dishes served hot and fast.
</div>

<div className="py-5">
  <div className="px-3 py-3 rounded-2xl bg-indigo-300 text-white font-semibold shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out text-center max-w-2xl lg:max-w-xs">
    Get Started
  </div>
  </div>
</div>

        <div className="mt-6 lg:mt-0">
          <Image
            src="/scooter.png"
            height={700}
            width={700}
            alt="Scooter"
            
          />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-10 lg:gap-0 sm:gap-6">
<div className="col-span-2 ">
  <div className="lg:grid lg:grid-cols-3 flex flex-wrap sm:gap-2 sm:justify-around 
   gap-4 p-10">
  {foodData.map((food, index) => (
    <FoodCard key={index} food={food} />
  ))}
  </div>
</div>
       <div className="">
        Hello
       </div>
      </div>
    </div>
  )
}