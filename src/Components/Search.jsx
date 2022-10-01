import React from "react";
import StarRatingp from "./StarRating";

export const Search = ({searching,rating,handelRating,handelSeartch}) => {
  return (
    <div>
      <form className=" searchDiv">
        <input type="text"  value={searching} onChange = {e=>handelSeartch(e.target.value)}  />
        <div className="etoilSearch">
         
          <StarRatingp  rating={rating} handelRating={handelRating}/>
        </div>
      </form>
    </div>
  );
};
