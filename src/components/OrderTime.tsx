'use client'
import { PieChartData } from "@/types/PieChart";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";

const data:PieChartData [] = [
  {
    name:'Afternoon',
    value:40,
    color:'#7476d4',
    time:'1pm-4pm',
    orders:1890
  },
    {
    name:'Evening',
    value:32,
    color:'#a5a6f6',
    time:'4pm - 8pm',
    orders:1520 
  },
     {
    name:'Morning',
    value:28,
    color:'#c7c8fa',
    time:'8am - 12pm',
    orders:1320
  },
]

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 5}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.3))" }}
    />
  )
}

const CustomLegend = () => {
  return (
    <div className="flex justify-center gap-6 text-sm lg:-mt-12 -mt-8">
      {data.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-gray-700">
            {item.name} {item.value}%
          </span>
        </div>
      ))}
    </div>
  )
}

export default function OrderTime(){
  return (
    <div >
      <div className="lg:px-10 px-6">
       <div className="flex justify-between">
         <div className=" text-sm">
        Order Time
      </div>
        <div className="text-sm text-[#7476d4] bg-gray-50 py-2 rounded-lg px-4 border border-gray-200">
        View Report
      </div>
      </div>
      <div className="text-sm text-gray-600 tracking-wide py-1">
            From 1-6 Dec,2020
            </div>
            <div className="w-full h-64 lg:-mt-5">
             
        <ResponsiveContainer
        width="100%" height={260}>
          <PieChart
          >
            <Pie
             data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="40%"
          innerRadius={40}
          outerRadius={70}
           activeShape={renderActiveShape}>
          {

            data.map((entry,index)=>(
              <Cell
              key={`cell-${index}`}
              fill={entry.color}>

              </Cell>
            ))
          }

            </Pie>

            <Tooltip
            content={<CustomTooltip/>}>

            </Tooltip>

          </PieChart>
        </ResponsiveContainer>

         <CustomLegend />
         </div>
      </div>
      
    </div>
  )
}