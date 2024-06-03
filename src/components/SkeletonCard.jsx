import React from "react";

function SkeletonCard() {
  return (
    <div className="w-[272px] flex-shrink-0 ">
      <div className="relative">
      <img
      src=""
      alt=""
      
      className="w-full h-[340px] object-cover rounded-sm skeleton custom-box-shadow"
    />
       
       
      </div>

      <div className="p-2">
        <h5 className="skeleton skeleton-text"></h5>
        <p className=" skeleton skeleton-text"></p>
        <p className=" skeleton skeleton-text"></p>
        <div className=" skeleton skeleton-text">
          <span className=" skeleton skeleton-text">
           
          </span>
          <span className=" skeleton skeleton-text">
          
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
