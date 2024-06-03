import Card from "./components/Card";
import data from "./data.js";
import SkeletonCard from "./components/SkeletonCard.jsx";
import { useState,useEffect } from "react";
export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center h-screen  items-center">
      <div className="w-full  ">
        <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-slate-200 scrollbar-thumb-hover  ">
        {
          isLoading ?  Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
          :
        
          data.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              price={card.price}
              tag={card.tag}
              location={card.location}
              date={card.date}
              image={card.samplePic}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
