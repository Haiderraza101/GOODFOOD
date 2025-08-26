import Image from "next/image"

const quickTransferUsers = [
  { name: "John Doe", wallet: "25012487", img: "/johndoe.png" },
  { name: "Sarah Johnson", wallet: "25026487", img: "/sarahjohnson.png" },
  { name: "David Smith", wallet: "25013587", img: "/davidsmith.png" },
  { name: "Emily Davis", wallet: "25023487", img: "/emilydavis.png" },
];

export default function QuickTransfer(){
  return (
    <div className="bg-white py-6 border  lg:border-gray-100 border-gray-200   px-3  rounded-xl col-span-1 
        sm:col-span-2 
        md:col-span-2 
        lg:col-span-2 
        xl:col-span-4">
              <div className="font-medium mb-5">Quick Transfer</div>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="p-4 bg-yellow-500 rounded-full">
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M23 11v2H13v10h-2V13H1v-2h10V1h2v10z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-0">
                    <div className="text-sm text-center">Transfer</div>
                  <div className="text-xs text-gray-500 text-center">Manual</div>
                  </div>
                  
                </div>
                {quickTransferUsers.map((user, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 min-w-[80px] ">
                    <Image
                      className="rounded-full"
                      src={user.img}
                      width={50}
                      height={50}
                      alt={user.name}
                    />
                    <div className="flex flex-col gap-0">
                    <div className="text-sm text-center">{user.name}</div>
                    <div className="text-xs text-gray-500 text-center">{user.wallet}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  )
}