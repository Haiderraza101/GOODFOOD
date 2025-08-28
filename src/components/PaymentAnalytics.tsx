'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

const data: PieChartData[] = [
  {
    name: "Receive",
    value: 40,
    color: "#6C63FF", 
  },
  {
    name: "Send",
    value: 25,
    color: "#EC5A64", 
  },
  {
    name: "Deposit",
    value: 20,
    color: "#F9A825"
  },
  {
    name: "Withdraw",
    value: 15,
    color: "#C4C4C4", 
  },
];

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
  );
};

const CustomLegend = () => {
  return (
    <div className="flex  sm:flex-nowrap justify-center sm:gap-6 text-sm -mt-8">
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
  );
};

export default function PaymentAnalytics() {
  return (
    <div className="p-2 ">
      <div className="bg-white px-2 sm:px-6 lg:px-4 py-4 rounded-xl lg:max-w-sm sm:shadow-2xl lg:rounded-xl lg:pb-6">
        <div className="flex flex-col flex-wrap gap-5 justify-between items-center">
          <div className="text-sm font-semibold">Payment Analytics</div>
          <div className="text-sm text-[#7476d4] bg-gray-50 py-2 px-4 rounded-lg border border-gray-200 cursor-pointer mb-6 sm:mb-0">
            View Report
          </div>
        </div>

        <div className="text-sm text-gray-600 tracking-wide py-1">
          From 1-6 Dec, 2020
        </div>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="40%"
                innerRadius={40}
                outerRadius={70}
                activeShape={renderActiveShape}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          <CustomLegend />
        </div>
      </div>
    </div>
  );
}
