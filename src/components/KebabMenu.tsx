export default function KebabMenu() {
  const kebabs = [
    { name: "Seekh Kebab", price: "$8" },
    { name: "Shami Kebab", price: "$6" },
    { name: "Chapli Kebab", price: "$9" },
    { name: "Doner Kebab", price: "$12" },
  ];

  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-indigo-50 border border-gray-100 shadow-md rounded-lg grid grid-cols-5 overflow-hidden">
        
        <div
          className="col-span-2 flex flex-col items-center justify-center py-6 bg-cover bg-center bg-no-repeat [clip-path:polygon(0%_0%,85%_0%,100%_10%,85%_33%,100%_43%,85%_66%,100%_76%,85%_100%,0%_100%)]"
          style={{ backgroundImage: "url('/menukebab.jpg')" }}
        >
          <div className="w-[65px] h-[50px] relative -top-4 left-0 z-10 [clip-path:polygon(0%_0%,100%_0%,100%_100%,85%_100%,0%_100%)]"></div>
        </div>
        <div className="col-span-3 p-3">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#7476d4] flex items-center justify-center">
              <div className="text-white font-bold text-[9px]">G</div>
            </div>
            <div className="text-[#7476d4] font-extrabold tracking-wider text-[10px]">
              GOODFOOD
            </div>
          </div>

          <div className="text-center font-bold text-[11px] text-gray-500 mb-1">
            Food Menu
          </div>

          <div className="text-gray-600 font-bold text-[11px] mb-1">Kebabs</div>

          {kebabs.map((kebab, index) => (
            <div
              key={index}
              className="flex gap-2 justify-between items-center py-[2px]"
            >
              <div className="text-gray-500 text-[10px]">{kebab.name}</div>
              <div className="flex-1 border-b border-gray-400 mx-2"></div>
              <div className="text-gray-500 text-[10px]">{kebab.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
