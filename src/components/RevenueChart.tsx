'use client'

import { DataItem } from "@/types/BarChart"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import CustomLegend from "./CustomLegent"

const data:DataItem [] = [
  {
    id:"01",
    last6:40,
    lastweek:30
  },
  {
    id:"02",
    last6:30,
    lastweek:30
  },
  {
    id:"03",
    last6:40,
    lastweek:30
  },
  {
    id:"04",
    last6:40,
    lastweek:30
  },
  {
    id:"05",
    last6:50,
    lastweek:40,
  },
  {
    id:"06",
    last6:60,
    lastweek:20,
  },
  {
    id:"07",
    last6:40,
    lastweek:30,
  },
  {
    id:"08",
    last6:30,
    lastweek:40,
  },
  {
    id:"09",
    last6:50,
    lastweek:40,
  },
  {
    id:"10",
    last6:50,
    lastweek:40,
  },
  {
    id:"11",
    last6:55,
    lastweek:40,
  },
  {
    id:"12",
    last6:60,
    lastweek:20,
  },
]
export default function RevenueChart(){
  return (
    <div>
      <div className="w-full h-50 pt-3">
        <ResponsiveContainer
        width="100%"
        height="100%"
        >
          <BarChart
          
          data={data}
          >
            <CartesianGrid
            strokeDasharray="5 5 " vertical={false}
            stroke="#eee">
               </CartesianGrid>

              <XAxis dataKey="id" tick={{fill:"#9CA3AF"}}
              axisLine={{ stroke: "#9CA3AF" }}
              tickLine={false}
              ></XAxis>
              <YAxis hide>
              </YAxis>
              <Tooltip/>
              <Legend
              verticalAlign="bottom"
              height={36}
               wrapperStyle={{ paddingTop: "10px" }}
                formatter={(value: string) =>
              value === "last6" ? "Last 6 days" : "Last Week"
            }
            content={<CustomLegend/>}>
              </Legend>
 
              <Bar
            dataKey="last6"
            fill="#7476d4"
            radius={[0, 0, 0, 0]}
            barSize={8}
          />
           
            <Bar
            dataKey="lastweek"
            fill="#E5E7EB" 
            radius={[0, 0, 0, 0]}
            barSize={8}
          />



            
          </BarChart>

        </ResponsiveContainer>
        
      </div>
    </div>
  )
}