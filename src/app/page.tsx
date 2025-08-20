import Navbar from "@/components/Navbar"
import OrderTime from "@/components/OrderTime"
import Revenue from "@/components/Revenue"
import SideBar from "@/components/SideBar"

export default function App() {
  return (
    <div>
      <div>
        <SideBar />
        <div className="lg:ml-72 md:ml-10 sm:ml-10 ml-10 lg:max-h-screen">
          <Navbar />
          <div className="font-medium lg:px-10 lg:py-5 px-6 py-3 text-gray-700 ">
            Dashboard
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 ">
            
            <div className="lg:col-span-2 lg:border-r border-r-gray-300 pb-4
            lg:border-b border-b-gray-300 ">
              <Revenue />
            </div>

           
            <div className="bg-white">
              <OrderTime />
            </div>

          
            <div className="lg:border-r border-r-gray-300  ">
              Your rating
            </div>

            
            <div className="lg:border-r border-r-gray-300 ">
              Column 2 (row 2)
            </div>

           
            <div className="bg-gray-100 p-4 rounded-xl shadow">
              Column 3 (row 2)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
