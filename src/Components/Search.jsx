import React from "react";
import StarRatingp from "./StarRating";

// import './nav.js';

export const Search = ({ searching, rating, handelRating, handelSeartch }) => {
  return (
    <div className="divTotalSearch">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Dropdown
          </a>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <div>
          <form className=" searchDiv">
            <input
              type="text"
              value={searching}
              onChange={(e) => handelSeartch(e.target.value)}
            />
            <div className="etoilSearch">
              <StarRatingp rating={rating} handelRating={handelRating} />
            </div>
          </form>
        </div>
      </ul>
    </div>

    ////////////////////////////////////////////////////////////////////////////////////////////

    // <div>
    //   <form className=" searchDiv">
    //     <input type="text"  value={searching} onChange = {e=>handelSeartch(e.target.value)}  />
    //     <div className="etoilSearch">

    //       <StarRatingp  rating={rating} handelRating={handelRating}/>
    //     </div>
    //   </form>
    // </div>
  );
};
