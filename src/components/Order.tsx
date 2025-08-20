'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "01", last6: 2, lastWeek: 3 },
  { day: "02", last6: 1.5, lastWeek: 3.5 },
  { day: "03", last6: 3, lastWeek: 2.5 },
  { day: "04", last6: 2.8, lastWeek: 3 },
  { day: "05", last6: 2, lastWeek: 2.7 },
  { day: "06", last6: 4, lastWeek: 3.2 }
];

export default function Order() {
  return (
    <div className=" p-6">
      
      <div className="flex justify-between items-center">
        <div className="text-sm">Order</div>
        <div className="text-sm text-[#7476d4] bg-gray-50 py-2 rounded-lg px-4 border border-gray-200 cursor-pointer">
          View Report
        </div>
      </div>

      <div className="text-2xl font-semibold mt-1">2.568</div>

     
      <div className="flex items-center gap-1 mt-1">
        <div className="text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 4v16m0 0l6-6m-6 6l-6-6"
            />
          </svg>
        </div>
        <div className="text-xs text-red-600 font-bold">2.1%</div>
        <div className="text-xs text-gray-400">vs last week</div>
      </div>

     
      <div className="text-sm text-gray-600 tracking-wide mt-2 mb-4">
        Sales from 1-6 Dec, 2020
      </div>

    
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day"
            tick={{fill:"#9CA3AF"}}
              axisLine={{ stroke: "#9CA3AF" }}
              tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="last6"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={false}
              name="Last 6 days"
            />
            <Line
              type="monotone"
              dataKey="lastWeek"
              stroke="#D1D5DB"
              strokeWidth={2}
              dot={false}
              name="Last Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#4F46E5]"></span>
          <span className="text-sm text-gray-700">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="text-sm text-gray-700">Last Week</span>
        </div>
      </div>
    </div>
  );
}
