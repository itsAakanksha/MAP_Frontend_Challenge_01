import React, { useState } from "react";
import image from "../assets/cardImage.jpg";

function Card({ title, description, price, tag, location, date, image }) {
  const [color, setColor] = useState(false);

  return (
    <div className="w-[272px]  flex-shrink-0 bg-white rounded-md p-2  transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg custom-box-shadow">
      <div className="relative">
        <img
          src={image}
          alt="not ok"
          
          className="w-full h-[340px] object-cover rounded-sm"
        />
        <div className="absolute top-2 left-2 px-2 py-1 text-xs bg-yellow-300 rounded-3xl">
          {tag}
        </div>
        <div className="absolute top-1 right-2 px-2 ">
          <i
            className={`fa-solid fa-heart text-2xl  cursor-pointer ${
              color ? "text-red-500" : "text-slate-200"
            }`}
            onClick={() => setColor(!color)}
          ></i>
        </div>
      </div>

      <div className="p-2">
        <h5 className="text-lg font-bold line-clamp-2">{title} </h5>
        <p className="line-clamp-2"> {description}</p>
        <p className="text-sm text-gray-500 font-bold"> {price}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            <i class="fa-solid fa-location-dot m-2"></i> {location}
          </span>
          <span>
            <i class="fa-regular fa-calendar-days"></i> {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
