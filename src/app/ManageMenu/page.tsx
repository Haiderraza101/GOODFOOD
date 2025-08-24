import Checkout from "@/components/Checkout";
import DishPerformance from "@/components/DishPerformance";
import Menu from "@/components/Menu";
import NewDish from "@/components/NewDish";


export default function OrderFoodBanner(){
  return (
    
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-2 lg:gap-0 sm:gap-6 ">
<div className="col-span-2">
       <Menu/>
</div>
     <div className="lg:flex lg:flex-col sm:flex gap-3 p-5  pr-0  pl-0
       sm:pl-5 items-center">
           <div >
            <DishPerformance />
           </div>
            
      
          <div >
              <NewDish />
              
            </div>
          
        </div>
     
      </div>
    
  )
}