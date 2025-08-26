export default function Balance(){
  return (
   
       <div className="bg-white p-6 rounded-xl border lg:border-gray-100 border-gray-200  col-span-1 
          sm:col-span-2 
          md:col-span-1 
          lg:col-span-2 
          xl:col-span-2">
        <div className="flex justify-between pt-2 pb-3">
          <div className="font-medium text-sm">Balance</div>
          <div className="text-blue-500 text-xs cursor-pointer mt-1">Withdraw</div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="flex gap-2">
            <div className="font-bold text-xl">$5,382.36</div>
            <div className="text-gray-500 font-bold text-xs mt-2">USD</div>
          </div>
          <div className="text-gray-400 text-xs mt-1">Available for transfer</div>
        </div>
        <div className="flex text-gray-500 gap-2 text-xs pt-1 flex-wrap">
          <div>Wallet Id</div>
          <div>24579485</div>
          <div className="p-1 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6"/>
                <path d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
   
  )
}