import { FoodCardProps, OrderFoodBannerProps } from "@/types/FoodOrder";
import Image from "next/image";
export default function FoodCard({food}:FoodCardProps){

  return (
    <div>
      <div className="bg-white  w-full max-w-sm  pb-5 p-1 rounded-2xl border border-gray-200">
<div
  className="p-5 sm:p-2 max-h-100 rounded-2xl flex items-center justify-center bg-gray-200"
 
>
  <div className="w-[120px] h-[120px] flex items-center justify-center">
    <Image
      src={food.photourl}
      alt={food.name}
      width={120}
      height={120}
      className="object-contain"
    />
  </div>
</div>
        <div className="flex flex-col gap-1 ">
        <div className="flex items-center flex-wrap justify-between">
          <div className="p-2 font-medium text-sm
        tracking-wide text-gray-800">
          {food.name}
        </div>
        <div className="flex gap-1 items-center text-xs text-gray-500">
        <div
        className="text-yellow-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"/></svg>

        </div>
        <div >
          {food.rating}
        </div>
        <div className="text-xs">
          ({food.totalorders})
        </div>
        </div>
        </div>

        <div className="text-gray-500 text-xs px-2">
          {food.cuisinetype}
          </div>


      <div className="text-gray-500 text-xs flex gap-1 items-center px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3z"/></svg>
        <div>
          {food.deliverytime}
        </div>
        <div className="font-black mb-1">
          .
          </div>
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"/><path fill="currentColor" d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/></svg>
          </div>
          <div>
            {food.deliverprice}
          </div>
      </div>
      <div className="flex">
        <div className="text-xs p-2 bg-gray-200 w-1/2 rounded-full text-gray-800 z-10 cursor-pointer text-center border border-gray-300">
          Add to Cart
        </div>
        <div className="text-xs p-2 bg-white  w-1/2 rounded-r-full text-gray-800 -ml-2  border-r-1 border-r-gray-300 border-b-1 border-b-gray-300 border-t-1 border-t-gray-300 text-center">
         {food.price}
        </div>

      </div>
        </div>
        
        
      </div>
    </div>
  )
}