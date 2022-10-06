import React from "react";
import { Link } from "react-router-dom";
import StarRatingp from "./StarRating";

export const Search = ({ searching, rating, handelRating, handelSeartch }) => {
  return (
    <div className="divTotalSearch">
      <ul className="divUl" >
        <Link to="/"> Home </Link>

        <Link to="link1"> News </Link>



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

        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Dropdown
          </a>
          <div className="dropdown-content">
            
            <Link to="/link1"> Link1 </Link>

           
            <Link to="/link2"> Link2 </Link>

         
            <Link to="/link3"> Link3 </Link>
          </div>
        </li>

       
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
