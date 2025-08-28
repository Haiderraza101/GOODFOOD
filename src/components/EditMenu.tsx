import { foodData } from "@/app/data/data";
import EditFoodCard from "./EditFoodCard";

export default function EditMenu(){
  
  return (
    <div>
      <div className="pt-4  text-center text-gray-600 font-bold text-2xl">
        Edit Menu
      </div>
      
    <div className="grid grid-cols-1 sm:gap-4
       gap-4 px-5 sm:p-10 pt-4 ">
      {foodData.map((food, index) => (
        <EditFoodCard key={index} foodData={food} />
      ))}
      </div>

    </div>
  )
}