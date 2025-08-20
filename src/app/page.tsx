import Navbar from "@/components/Navbar"
import SideBar from "@/components/SideBar"
export default function App(){
  return (
    <div>
      <div >
        <SideBar/>
        <div className="lg:ml-72 md:ml-10 sm:ml-10 ml-10">
          <Navbar/>
          </div>
        
      </div>
    </div>
  )
}