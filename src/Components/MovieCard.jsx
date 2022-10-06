import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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

        <div  className="dateinstant">{film.date} </div>

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

           {/* 05/10/2022 */}

           <Link to={`/product/${film.id}`}> <Button className="btnAdd" variant="primary">info</Button></Link>
        


        </div>
        <figcaption>
          <h3>New Movie</h3>
        </figcaption>
      </figure>
    </div>
  );
};
