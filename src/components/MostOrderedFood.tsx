import { MonstOrderedFoodList } from "@/types/MostOrderedFood"
import Image from "next/image"

const data : MonstOrderedFoodList[] = [
  {
    picture:"/freshsalad.png",
    name:"Fresh Salad Bowl",
    price:'45.000'
  },
  {
    picture:"/chickennoodles.png",
    name:"Chicken Noodles",
    price:'75.000'
  },
  {
    picture:"/smoothiefruits.png",
    name:"Smoothie Fruits",
    price:'45.000'
  },
  {
    picture:"/hotchickenwings.png",
    name:"Hot Chicken Wings",
    price:'45.000'
  },
]

export default function MostOrderedFood(){
  return (
  
       <div className="px-8 pb-20">
      <div className="pt-8 pb-2 font-medium text-lg">
        Most Ordered Food
      </div>
      <div className="text-sm text-gray-500 mb-6 pb-2">
        The start of our menu choosen by most of you
      </div>
      <div>
        {
          data.map((data,index)=>(
            <div
            className="flex justify-between border-b border-b-gray-300 p-3
            items-center"
            key={index}>
              <div className="flex gap-2 items-center">
              <Image
              src={data.picture}
              height={60}
              width={60}
              alt={data.name}>

              </Image>
              <div className="sm:text-sm text-xs" >
                {data.name}
                </div>
                </div>
                <div className="text-gray-400 sm:text-sm text-xs">
                  IDR {data.price}
                  </div>
              </div>
          ))
        }
      </div>
      </div>
    
  )
}