import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { EditMovie } from "./EditMovie";
import StarRatingp from "./StarRating";

export const MovieCard = ({ film, deleteMovie ,handelEdit }) => {
  // console.log(film);
  return (
    ////////////////////////////////////////////////////////

    <div>
      <figure className="image">
        <p>
          <h2 className="name"> {film.name}</h2>
        </p>
        <img src={film.image} alt="W3docs" />

        {/* <p className="rating"> {film.rating}</p> */}

        <div className="divratting">
          {" "}
          <StarRatingp rating={film.rating} />
          
        </div>

        <p className="dateinstant">{film.date} </p>

        <div className="btnDitDelete">
         <div> <Button
            as="input"
            type="submit"
            value="Delete"
            className="btnDelete"
            onClick={() => deleteMovie(film.id)}
          /></div>
{/* 
         <div>
         <Button
            as="input"
            type="submit"
            value="Edit"
            className="btnEdit"
           
          />
         </div> */}
         <EditMovie  handelEdit={handelEdit} movie={film} />
        </div>
        <figcaption>
          <h3>W3docs</h3>
        </figcaption>
      </figure>
    </div>
  );
};
