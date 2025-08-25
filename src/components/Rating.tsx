export default function Rating() {
  return (
    <div className="sm:px-8 px-2 pb-20">
      <div className="pt-8 pb-2 font-medium text-lg">
        Your Rating
      </div>
      <div className="text-sm text-gray-500 mb-6">
        Your feedback fuels our journey
      </div>

      <div className="relative flex items-center justify-center mt-15 lg:mt-10 xl:ml-20 pl-16 sm:pl-0">
        <div className="p-1 border-b-3 border-r-3 
        border-b-violet-500 border-r-violet-500 absolute -top-[20%] left-[10%] sm:-top-[10%]  sm:left-[17%] md:left-[25%]
        lg:-left-[20%]
         lg:-top-10
         xl:-left-10
         rounded-full">
        <div className=" w-28 h-28 rounded-full bg-violet-500 opacity-80 flex flex-col items-center justify-center text-white  ">
          <div className="text-lg font-bold">85%</div>
          <div className="text-sm">Hygiene</div>
        </div>
        </div>

       <div className="absolute -bottom-[20%] left-[10%]
       sm:left-[0%] md:left-[12%] md:-bottom-[18%]
       lg:left-16 
       lg:top-32
       xl:-left-25
       xl:top-20
       xl:-bottom-8
       lg:-bottom-20
        border-b-4 border-r-4 p-1 border-b-cyan-400 border-r-cyan-400 rounded-full">
        <div className=" w-32 h-32 rounded-full bg-cyan-400 flex flex-col items-center justify-center text-white ">
          <div className="text-lg font-bold">92%</div>
          <div className="text-sm">Packaging</div>
        </div>
        </div>

       <div className="p-1 border-b-4 border-r-4 rounded-full border-b-orange-400 border-r-orange-400">
         <div className="w-44 h-44 rounded-full bg-orange-400 flex flex-col items-center justify-center text-white ">
          <div className="text-2xl font-bold">85%</div>
          <div className="text-sm">Food Taste</div>
        </div>
       </div>
        
      </div>
    </div>
  );
}
