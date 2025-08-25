import Checkout from "@/components/Checkout";
import DishPerformance from "@/components/DishPerformance";
import EditMenu from "@/components/EditMenu";
import Menu from "@/components/Menu";
import NewDish from "@/components/NewDish";


export default function OrderFoodBanner(){
  return (
    
      <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-2 lg:gap-0 sm:gap-6 lg:mr-0 mr-10">
<div className="col-span-2">
       <Menu/>
       <EditMenu/>
       
</div>
     <div className="lg:flex lg:flex-col sm:flex gap-3 p-5  pr-5  pl-0
       sm:pl-5 items-center sm:ml-20 lg:ml-0 ">
           <div className="ml-8 sm:ml-0">
            <DishPerformance />
           </div>
            
      
          <div >
              <NewDish />
              
            </div>
          
        </div>
     
      </div>
    
  )
}