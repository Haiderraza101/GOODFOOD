'use client';
import { FiMenu, FiX } from "react-icons/fi";
import { act, useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [sidebaropen, setsidebaropen] = useState<boolean>(false);
  const [activeitem,setactiveitem]=useState<string>("Dashboard");

  return (
    <div>
      <div className="lg:hidden fixed top-4 left-4 z-50 ">
        <button
          onClick={() => setsidebaropen(!sidebaropen)}
          className="text-lg text-[#7476d4] cursor-pointer"
        >
          {sidebaropen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed z-40 inset-y-0 left-0 w-72 bg-gray-100 transform transition-transform duration-300 lg:fixed lg:h-screen lg:translate-x-0 ${
          sidebaropen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center space-x-2 border-b-2 border-b-gray-200 py-5 px-10 pt-5">
          <div className="w-7 h-7 rounded-full bg-[#7476d4] flex items-center justify-center ">
            <div className="text-white font-black text-medium">
              G
            </div>
          </div>

          <div className="text-[#7476d4]  font-[1000] tracking-wider text-sm">
            GOODFOOD
          </div>
        </div>

        <div className="text-gray-400 pt-10 pb-3 px-10 text-xs">
          MENU
        </div>
       <div className="flex flex-col cursor-pointer px-5 text-xs  max-h-1/2 gap-1">
      <Link
      href="/" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "Dashboard" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("Dashboard")
      }}
      >
  <div className={
    `
    ${activeitem==="Dashboard"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]
    -mt-0.5`
    
  }>
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth={1}>
        <rect width={18.5} height={18.5} x={2.75} y={2.75} strokeWidth={1.5} rx={6}></rect>
        <path strokeLinecap="round" strokeWidth={1.6} d="M7.672 16.222v-5.099m4.451 5.099V7.778m4.205 8.444V9.82"></path>
      </g>
    </svg>
  </div>
  <div className={
    `
    ${activeitem==="Dashboard"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
    Dashboard
  </div>
</Link>


 <Link
 href="/FoodOrder" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "FoodOrder" ? 'bg-[#7476d4]/10' : ''
        }
        -mt-1
        `
      }
      onClick={() =>{
        setactiveitem("FoodOrder")
      }}
      >
  <div className={
    `
    ${activeitem==="FoodOrder"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]
    `
    
    
  }>
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.99 1.99 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921"></path><circle cx={10.5} cy={19.5} r={1.5} fill="currentColor"></circle><circle cx={17.5} cy={19.5} r={1.5} fill="currentColor"></circle></svg>
  </div>
  <div className={
    `
    ${activeitem==="FoodOrder"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
    Food Order
  </div>
</Link>



 <Link
 href="#" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "ManageMenu" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("ManageMenu")
      }}
      >
  <div className={
    `
    ${activeitem==="ManageMenu"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]`
    
  }>
   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity={0.5}></path><path fill="currentColor" d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75"></path></svg>
  </div>
  <div className={
    `
    ${activeitem==="ManageMenu"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
    Manage Menu
  </div>
</Link>

    
    
 <Link
 href="#" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "CustomerReview" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("CustomerReview")
      }}
      >
  <div className={
    `
    ${activeitem==="CustomerReview"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]`
    
  }>
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M21.25 8.18a9.8 9.8 0 0 0-2.16-3.25a10 10 0 0 0-14.15 0a9.8 9.8 0 0 0-2.17 3.25A10 10 0 0 0 2.01 12a9.7 9.7 0 0 0 .74 3.77l-.5 3.65a1.95 1.95 0 0 0 1.29 2.26c.297.098.613.122.92.07l3.65-.54a9.8 9.8 0 0 0 3.88.79a10 10 0 0 0 9.24-13.82zM7.73 13.61a1.61 1.61 0 1 1 .001-3.22a1.61 1.61 0 0 1 0 3.22m4.28 0a1.61 1.61 0 1 1 .001-3.22a1.61 1.61 0 0 1 0 3.22m4.28 0a1.61 1.61 0 1 1 .001-3.22a1.61 1.61 0 0 1 0 3.22"></path></svg>
  </div>
  <div className={
    `
    ${activeitem==="CustomerReview"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
    Customer Review
  </div>
</Link>


       
       <div className="text-gray-400 pt-6 pb-2 px-5">
          OTHERS
        </div>
            <div className="flex flex-col gap-1 cursor-pointer">

               <Link
 href="#" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "Settings" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("Settings")
      }}
      >
  <div className={
    `
    ${activeitem==="Settings"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]`
    
  }>
   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"></path></svg>
  </div>
  <div className={
    `
    ${activeitem==="Settings"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
      Settings
  </div>
</Link>



               <Link
 href="#" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "Payments" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("Payments")
      }}
      >
  <div className={
    `
    ${activeitem==="Payments"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]`
    
  }>
   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M21.1 8.004q-.085-.005-.181-.004h-2.525c-2.068 0-3.837 1.628-3.837 3.75s1.77 3.75 3.837 3.75h2.525q.096.001.182-.004a1.755 1.755 0 0 0 1.645-1.628c.004-.06.004-.125.004-.185V9.817c0-.06 0-.125-.004-.185a1.755 1.755 0 0 0-1.645-1.628m-2.928 4.746c.532 0 .963-.448.963-1s-.431-1-.963-1c-.533 0-.964.448-.964 1s.431 1 .964 1"></path><path d="M20.918 17a.22.22 0 0 1 .221.278c-.2.712-.519 1.32-1.03 1.83c-.749.75-1.698 1.081-2.87 1.239c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87C2 15.099 2 13.644 2 11.806v-.112C2 9.856 2 8.4 2.153 7.26c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238C7.401 3 8.856 3 10.694 3h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.511.512.83 1.119 1.03 1.831a.22.22 0 0 1-.221.278h-2.524c-2.837 0-5.337 2.24-5.337 5.25s2.5 5.25 5.337 5.25zM5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></path></g></svg>
  </div>
  <div className={
    `
    ${activeitem==="Payments"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
      Payment
  </div>
</Link>


     <Link
 href="#" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "Accounts" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("Accounts")
      }}
      >
  <div className={
    `
    ${activeitem==="Accounts"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]`
    
  }>
   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path></svg>
  </div>
  <div className={
    `
    ${activeitem==="Accounts"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
      Accounts
  </div>
</Link>
      
      


     <Link
 href="#" className={
        `
        px-6 flex gap-4 p-2 group rounded-xl ${
          activeitem === "Help" ? 'bg-[#7476d4]/10' : ''
        }
        `
      }
      onClick={() =>{
        setactiveitem("Help")
      }}
      >
  <div className={
    `
    ${activeitem==="Help"? 'text-[#7476d4]':'text-gray-400' } group-hover:text-[#7476d4]`
    
  }>
   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-3q0-.425-.288-.712T12 12t-.712.288T11 13v3q0 .425.288.713T12 17m0-7q.425 0 .713-.288T13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10M6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21z"></path></svg>
  </div>
  <div className={
    `
    ${activeitem==="Help"? 'text-[#7476d4]':'text-gray-500' } group-hover:text-[#7476d4]`
  }>
      Help
  </div>
</Link>
        </div>
        </div>
      </div>
      
    </div>
  );
}
