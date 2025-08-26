import Image from "next/image"
export default function Payment(){
  return (
    <div className=""> 
      <div className="p-2 bg-violet-50 min-h-screen">
        <div className="flex flex-wrap gap-6">

          <div className="bg-white p-6 shadow-2xl rounded-xl">
            <div className="flex pb-4 bg-white  justify-between">
              <div className="font-medium text-sm">
                Balance
              </div>
              <div className="text-blue-500 text-xs  cursor-pointer mt-1 ">
                Withdraw
              </div>
            </div>

            <div className="flex gap-2">
             <div className="font-bold text-xl">
               $5,382.36
             </div>
             <div className="text-gray-500 font-bold text-xs mt-2">
              USD
             </div>
            </div>

            <div className="flex text-gray-500 gap-2 text-xs pt-1">
             <div >
               Wallet Id
             </div>
             <div>
              24579485
              </div>
              <div className="p-1 bg-gray-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6"/><path d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9"/></g></svg>
              </div>
            </div>
          </div>


           <div className="bg-white py-6 px-3  shadow-2xl rounded-xl">
              <div className="font-medium">
                Quick Transfer
            </div>

            <div className="flex gap-5">
             <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div className="p-4 bg-yellow-500 rounded-full">

                <svg
                className="text-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M23 11v2H13v10h-2V13H1v-2h10V1h2v10z"/></svg>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  Transfer
               </div>

               <div className="text-xs text-gray-500">
                Manual
               </div>

               <div>
               </div>
               

               </div>

             </div>

                         <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div>

                <Image 
                className="rounded-full"
                src="/johndoe.png"
                width={50}
                height={50}
                alt="johndoe">

                </Image>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  John Doe
               </div>

               <div className="text-xs text-gray-500">
                25012487
               </div>

               <div>
               </div>
               

               </div>

             </div>


                       

 <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div>

                <Image 
                className="rounded-full"
                src="/sarahjohnson.png"
                width={50}
                height={50}
                alt="sarahjohnson">

                </Image>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  Sarah Johnson
               </div>

               <div className="text-xs text-gray-500">
                25026487
               </div>

               <div>
               </div>
               

               </div>

             </div>

             
 <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div>

                <Image 
                className="rounded-full"
                src="/davidsmith.png"
                width={50}
                height={50}
                alt="davidsmith">

                </Image>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  David Smith
               </div>

               <div className="text-xs text-gray-500">
                25013587
               </div>

               <div>
               </div>
               

               </div>

             </div>



                 <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div>

                <Image 
                className="rounded-full"
                src="/emilydavis.png"
                width={50}
                height={50}
                alt="Emilydavis">

                </Image>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  Emily Davis
               </div>

               <div className="text-xs text-gray-500">
                25023487
               </div>

               <div>
               </div>
               

               </div>

             </div>


            </div>
          </div>


         
           <div className="bg-white py-6 px-3  shadow-2xl rounded-xl">
              <div className="font-medium">
                 Deposit
            </div>

            <div className="flex gap-5">
             <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div className="p-4 bg-yellow-500 rounded-full">

                <svg
                className="text-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M23 11v2H13v10h-2V13H1v-2h10V1h2v10z"/></svg>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  Add Card
               </div>


               <div>
               </div>
               

               </div>

             </div>

                         <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div>

                <Image 
                className="rounded-full object-contain border border-gray-200 "
                src="/creditcard.png"
                width={60}
                height={60}
                alt="creditcard">

                </Image>

               </div>

               <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  Ac: ***6968
               </div>

               <div className="text-xs text-gray-500">
                Ex: 5/9/28
               </div>
               <div className="text-xs text-gray-500">
                CVV :695
               </div>

               <div>
               </div>
               

               </div>

             </div>

             
                         <div className="flex flex-col pt-5 gap-1 items-center justify-center">
               <div>

                <Image 
                className="rounded-full object-contain border border-gray-200 "
                src="/visacard.jpg"
                width={60}
                height={60}
                alt="visacard">

                </Image>

               </div>
                   

                    <div className="flex flex-col gap-0 items-center"> 
                <div className="text-sm">
                  Ac: ***8976
               </div>

               <div className="text-xs text-gray-500">
                Ex: 5/12/28
               </div>
               <div className="text-xs text-gray-500">
                CVV :876
               </div>
               </div>
               

              </div>
              </div>

        </div>

        </div>

        
      </div>
    </div>
  )
}