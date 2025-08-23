import MostOrderedFood from "@/components/MostOrderedFood"
import Order from "@/components/Order"
import OrderTime from "@/components/OrderTime"
import Rating from "@/components/Rating"
import Revenue from "@/components/Revenue"

export default function App() {
  return (
    <div>
      <div >
          <div className="font-medium lg:px-10 lg:py-5 sm:px-6 px-2 py-3 text-gray-700 ">
            Dashboard
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 ">
            
            <div className="lg:col-span-2 lg:border-r border-r-gray-300 pb-4
            lg:border-b border-b-gray-300 ">
              <Revenue />
            </div>

           
            <div className="lg:border-b border-b-gray-300">
              <OrderTime />
            </div>

          
            <div className="lg:border-r border-r-gray-300  ">
              <Rating/>
            </div>

            
            <div className="lg:border-r border-r-gray-300 ">
              <MostOrderedFood/>
              
            </div>

           
            <div >
              <Order/>
            </div>
          </div>
        </div>
      </div>
  )
}
