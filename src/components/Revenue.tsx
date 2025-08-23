import RevenueChart from "./RevenueChart";

export default function Revenue(){
  return (
    <div className="lg:px-10 sm:px-6 px-2 ">
      <div>
      
        <div className="flex justify-between">
         <div className=" text-sm">
        Revenue
      </div>
        <div className="text-sm text-[#7476d4] bg-gray-50 py-2 rounded-lg px-4 border border-gray-200">
        View Report
      </div>
      </div>
      <div className="text-xl font-medium -mt-3">
        IDR 7.852.000
        </div>
        <div className="flex py-1 gap-1 ">
          <div className="text-green-600 font-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16"><path fill="currentColor" d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"/><path fill="currentColor" d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0s-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15"/></svg>
          </div>
          <div className="text-xs text-green-600 font-black">
            2.1%
          </div>
          <div className="text-xs text-gray-400">
            vs last week
          </div>
          

        </div>
        <div className="text-sm text-gray-600 tracking-wide py-1">
            Sales from 1-12 Dec,2020
            </div>
        
      <RevenueChart/>
      </div>

      
       </div>
     
   
  )
}