'use client';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { reviews } from "../data/data";

export default function CustomerReview() {
  const [activeindex,setactiveindex] = useState<number>(0);
  const [screensize,setscreensize]=useState<"sm"|"md"|"lg"|"xl">("lg");

  useEffect(()=>{
    const handleresize = () => {
      if (window.innerWidth < 640) {
        setscreensize("sm");
      } else if (window.innerWidth < 1024) {
        setscreensize("md");
      } else if (window.innerWidth < 1280) {
        setscreensize("lg");
      } else {
        setscreensize("xl");
      }
    };
    handleresize();
    window.addEventListener("resize",handleresize);
    return () => window.removeEventListener("resize",handleresize);
  },[]);

  useEffect(()=>{
    const interval = setInterval(() => {
      setactiveindex((prev) => (prev+1)%reviews.length)
    }, 4000);
    return () => clearInterval(interval);
  },[]);

  const activereview = reviews[activeindex];
  const activeposition = activereview.positions[screensize];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 10%, #ffffff 30%, #c7d2fe 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        <div>
          {reviews.map((review,index)=>{
            const pos = review.positions[screensize];
            return (
              <motion.div
                whileHover={{scale:1.6}}
                animate={{ scale: index === activeindex ? 1.6 : 1 }} 
                key={review.id} 
                className={`absolute rounded-full overflow-hidden shadow-md cursor-pointer border-2 hidden sm:flex ${index === activeindex ? "border-indigo-500":"border-white"}`}
                style={{
                  width:"80px",
                  height:"80px",
                  left:`calc(50% + ${pos.x}px)`,
                  top:`calc(50% + ${pos.y}px)`
                }}
                onClick={() => setactiveindex(index)}>
                <Image
                  width={50}
                  height={50}
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          })}
        </div>
        <div className="absolute top-8 w-full flex justify-center text-xl sm:text-2xl font-bold tracking-tight ">
          <span className="text-indigo-500">Happy&nbsp;</span>
          <span className="text-gray-700">Customers</span>
        </div>
        <AnimatePresence mode="wait">
         <motion.div
  key={activereview.id}
  className="relative z-10 w-full max-w-xs sm:max-w-2xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl shadow-2xl p-6 sm:p-10 text-center"
  style={{
    transformOrigin: `${50 + activeposition.x}px ${50 + activeposition.y}px`
  }}
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.7 }}
  transition={{ duration: 0.6 }}
>
  <FaQuoteLeft className="text-3xl sm:text-4xl text-white/50 mx-auto mb-4" />
  <p className="text-base sm:text-lg leading-relaxed">
    {activereview.text}
  </p>
  <p className="mt-6 font-semibold text-teal-200 text-sm sm:text-base">
    {activereview.name}{" "}
    <span className="text-white/80 font-normal">
      ({activereview.company})
    </span>
  </p>
</motion.div>

        </AnimatePresence>
      </div>
    </div>
  );
}
