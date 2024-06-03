import React, { useState } from "react";


// Card component definition with destructured props
function Card({ title, description, price, tag, location, date, image }) {
  const [color, setColor] = useState(false); // State to manage the heart icon color

  return (
    <div className="w-[272px] flex-shrink-0 bg-white rounded-md p-2 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg custom-box-shadow">
      <div className="relative">
        <img
          src={image}
          alt="not loaded" 
          className="w-full h-[340px] object-cover rounded-sm"
        />
        <div className="absolute top-2 left-2 px-2 py-1 text-xs bg-yellow-300 rounded-3xl">
          {tag} {/* Tag displayed on top of the image */}
        </div>
        <div className="absolute top-1 right-2 px-2">
          <i
            className={`fa-solid fa-heart text-2xl cursor-pointer ${
              color ? "text-red-500" : "text-slate-200"
            }`}
            onClick={() => setColor(!color)} // Toggle the heart icon color on click
          ></i>
        </div>
      </div>

      <div className="p-2">
        <h5 className="text-lg font-bold line-clamp-2">{title}</h5> {/* Title of the card */}
        <p className="line-clamp-2">{description}</p> {/* Description of the card */}
        <p className="text-sm text-gray-500 font-bold">{price}</p> {/* Price of the item */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            <i className="fa-solid fa-location-dot m-2"></i> {location} {/* Location info with icon */}
          </span>
          <span>
            <i className="fa-regular fa-calendar-days"></i> {date} {/* Date info with icon */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
