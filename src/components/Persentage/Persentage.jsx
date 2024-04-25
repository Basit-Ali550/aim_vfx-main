import React from "react";
const stats = [
  {
    name: "MUCH FASTER",
    value: "20x",
    p: "Faster than hiring creatives in-house",
  },
  {
    name: "CUT COSTS",
    value: "50%",
    p: "Reduction in average of cost per asset",
  },
  {
    name: "Ship faster",
    value: "70%",
    p: " Lower turnaround time for digital assets",
  },
  { name: "Stress less", value: "9.6", p: "Average rating from customers." },
];

export default function Persntage() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-38">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div className=" px-4 py-6 sm:px-6 lg:px-8">
              <div>
                <div className="Teko font-[300] text-[20px] text-[#FFFF]">
                  {stat.name}
                </div>
                <span className="Teko font-[300] text-[80px] text-[#00FFFF]">
                  {stat.value}
                </span>
                <p className="font-[300] text-[#FFFF]">{stat.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
