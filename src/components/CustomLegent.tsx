export default function CustomLegend(props:any){
  const {payload} = props;
return (
    <div className="flex gap-4 pt-2 mb-4">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-gray-700 text-sm">
            {entry.value === "last6" ? "Last 6 days" : "Last Week"}
          </span>
        </div>
      ))}
    </div>
  )

}