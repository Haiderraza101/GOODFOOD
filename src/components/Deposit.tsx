import Image from "next/image";

export default function Deposit(){

  const depositCards = [
  
  { type: "Visa", account: "***6968", expiry: "5/9/28", cvv: "695", img: "/creditcard.png" },
  { type: "Visa", account: "***8976", expiry: "5/12/28", cvv: "876", img: "/visacard.png" },
];


    return (
      <div className="bg-white border lg:border-gray-100 border-gray-200 py-6 px-3  rounded-2xl col-span-1 
    sm:col-span-2 
    md:col-span-3 
    lg:col-span-2 
    xl:col-span-3 ">
          <div className="font-medium mb-5">Deposit</div>
          <div className="flex  justify-between ">

             <div className="flex flex-col items-center gap-2 min-w-[80px]">
               <div className="p-4 bg-yellow-500 rounded-full">
                    <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M23 11v2H13v10h-2V13H1v-2h10V1h2v10z"/>
                    </svg>
                  </div>

                  <div className="text-sm text-center">
                    Add Card
                  </div>
             </div>

            
            {depositCards.map((card, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 min-w-[80px]">

                <div className="rounded-full bg-gray-50">
                 
                  <Image
                    className="rounded-full object-contain border border-gray-200"
                    src={card.img}
                    width={50}
                    height={50}
                    alt={card.type}
                  />
                  </div>
                 <div className="flex flex-col">
                  <div className="text-sm text-center">{card.account || card.type}</div>
                {card.expiry &&
                <div className="flex gap-2">
                  <div className="text-[10px] text-gray-500 text-center">Ex: {card.expiry}</div>
                {card.cvv && <div className="text-[10px] text-gray-500 text-center">CVV: {card.cvv}</div>
}
                  </div> 
                }
                  </div>
                
              </div>
            ))}
          </div>
        </div>
    )
}


