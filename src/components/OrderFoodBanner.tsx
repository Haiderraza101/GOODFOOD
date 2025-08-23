import Cart from "./Cart";
import { OrderFoodBannerProps } from "@/types/FoodOrder";
import FoodCard from "./FoodCard";
import Checkout from "./Checkout";
import FoodOrderBanner from "./FoodOrderBanner";
import AddressDetail from "./AddressDetail";


export default function OrderFoodBanner({foodData}:OrderFoodBannerProps){
  return (
    <div className="mr-10 sm:mr-0 overflow:hidden">
        <FoodOrderBanner/>
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-10 lg:gap-0 sm:gap-6 ">
<div className="col-span-2 ">
  <div className="lg:grid lg:grid-cols-3 flex flex-wrap sm:gap-2 sm:justify-around 
   gap-4 sm:p-10 p-5 sm:items-center">
  {foodData.map((food, index) => (
    <FoodCard key={index} food={food} />
  ))}
  </div>
</div>
     <div className="lg:flex lg:flex-col sm:flex gap-3 p-5 ">
           <div className="mr-10 sm:mr-0">
            <Cart />
           </div>
            
       
          
          <div className="mr-10 sm:mr-0">
              <Checkout />
              <AddressDetail/>
            </div>
          
        </div>
     
      </div>
    </div>
  )
}