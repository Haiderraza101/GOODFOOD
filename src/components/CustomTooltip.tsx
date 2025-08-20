export default function CustomTooltip({active,payload}:any){

  if (active && payload && payload.length){
    const {name,time,orders}=payload[0].payload
    return(
       <div className="bg-[#1a1a40] text-white px-4 py-3 rounded-lg shadow text-sm">
        <div className="font-medium">{name}</div>
        <div className="opacity-80">{time}</div>
        <div className="font-semibold text-lg">{orders} orders</div>
      </div>
    )
  }
  return null;
}