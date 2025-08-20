import MostOrderedFood from "@/components/MostOrderedFood"
import Navbar from "@/components/Navbar"
import Order from "@/components/Order"
import OrderTime from "@/components/OrderTime"
import Rating from "@/components/Rating"
import Revenue from "@/components/Revenue"
import SideBar from "@/components/SideBar"

export default function App() {
  return (
    <div>
      <div>
        <SideBar />
        <div className="lg:ml-72 md:ml-10 sm:ml-10 ml-10 ">
          <Navbar />
          <div className="font-medium lg:px-10 lg:py-5 px-6 py-3 text-gray-700 ">
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
    </div>
  )
}
