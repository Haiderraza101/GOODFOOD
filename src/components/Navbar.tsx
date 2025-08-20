import Image from "next/image";
export default function Navbar() {
  return (
    <div >
      <div >
        <div className="flex justify-between items-center lg:p-4.5 p-3
        lg:pl-15 pl-10 lg:border-b-2 border-b-gray-200 relative">
          <div className="relative lg:w-[60%] md:w-[50%] w-[40%]">
          <input 
          placeholder="Search"
          className="w-full px-3 pr-10 bg-gray-100 rounded-[5px] text-medium p-1
          focus:outline-gray-300 placeholder-gray-400">
            
          </input>
          <div className="text-gray-300 absolute right-3 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
          </div>
        </div>
        <div className="flex sm:gap-4 gap-2 items-center justify-around sm:pr-10 pr-2">
        <div className="bg-[#ffefde] rounded-full p-2 hidden sm:flex">
         <Image
         src="/burger.png"
         width={25}
         height={20}
        
         >

         </Image>
        </div>
        <div className="sm:text-sm text-xs text-gray-600">
          <select >
           <option >
            Delicious Burger
          </option>
          </select>
          
          
        </div>
        <div className="relative">
          <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z"/></svg>
          <div className="absolute bg-red-500 p-1 rounded-full -top-0.5 left-2.5">

          </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
