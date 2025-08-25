import { CartData } from "@/types/FoodOrder"
import Image from "next/image"

const cartdata : CartData[] = [
    {
    name: "Cheeseburger",
    cuisinetype: "American",
    price: "$10",
    deliverytime: "25 mins",
    deliverprice: "$1.5",
    rating: "4.4",
    totalorders: 950,
     photourl:  "/cheeseburger.png",
    bgcolor: "#FDF3F4", 
  },
  {
    name: "Chicken Biryani",
    cuisinetype: "Pakistani",
    price: "$8",
    deliverytime: "35 mins",
    deliverprice: "$1",
    rating: "4.8",
    totalorders: 2000,
     photourl: "/chickenbiryani.png",
    bgcolor: "#FDF9F3",
  },
  {
    name: "Fried Chicken",
    cuisinetype: "American",
    price: "$11",
    deliverytime: "22 mins",
    deliverprice: "$1.5",
    rating: "4.4",
    totalorders: 1320,
     photourl: "/friedchicken.png",
    bgcolor: "#FDF9F3", 
  },
]
export default function Cart(){
  return (
    <div >
        <div className="pr-6 sm:pr-6 w-full  ">
        <div className="bg-white border border-gray-100 shadow-sm p-10 w-full rounded-2xl ml-3 ">
          <div className="flex justify-between">
            <div className="flex gap-4">
             <div className="text-indigo-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm4 20a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"/></svg>
            </div>
           
            <div className="text-gray-600">
              Your Cart
            </div>
            </div>
            
            <div>

            </div>
            <div className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><defs><path id="SVG1pzpbdYY" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/></defs><use fill-rule="evenodd" href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)"/></svg>
            </div>
            </div>
         <div className="py-6 flex flex-col gap-4 ">
  {cartdata.map((cart, index) => (
    <div
      key={index}
      className="flex items-center  flex-wrap justify-between bg-white rounded-xl p-3 shadow-sm border border-gray-200"
    >
      <div className="flex flex-wrap items-center gap-3">
       
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden">
          <Image
            src={cart.photourl}
            width={40}
            height={40}
            alt={cart.name}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="text-gray-700 font-medium text-sm">{cart.name}</div>
          <div className="flex items-center gap-2 mt-1">
            <button className="text-gray-600 bg-indigo-100 rounded-full p-1 hover:bg-indigo-200 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"
                />
              </svg>
            </button>

            <div className="text-gray-700 text-sm font-semibold">1</div>

            <button className="text-gray-600 bg-indigo-100 rounded-full p-1 hover:bg-indigo-200 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      <div className="text-gray-500 font-bold text-sm">{cart.price}</div>
    </div>
  ))}
</div>

        </div>
        <div>
          
        </div>
       </div>
    </div>
  )
}