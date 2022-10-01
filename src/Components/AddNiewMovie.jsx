import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-modal";

import StarRatingp from "./StarRating";

export const AddNiewMovie = ({ handelAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");

  const handelRating = (x) => setRating(x);

  const handelSubmit = (e) => {
    e.preventDefault();
    const theNiewMovie = {
      id: Math.random(),
      name,
      date,
      image,
      rating,
    };
   
    handelAdd(theNiewMovie);
      
    setDate('');
    setImage('');
    setName('');
    setRating('');
    closeModal()
   

  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add New Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <form>
          <label> MovieTitre</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} />
          <label> Movie Poster </label>
         <input type="text" value={image} onChange={e=>setImage(e.target.value)} />
         <label >  Movie Date</label>
         <input type="date"  value={date} onChange={e=>setDate(e.target.value)} />
         < StarRatingp />
         <div> 
          <button> Add</button>
          <button> Cancel</button>
         </div>
         

         </form> */}

        <Form className=" FormMovieAdd" onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MovieTitre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter titre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Movie Poster </Form.Label>
            <Form.Control
              type="text"
              placeholder="Movie Poster"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Movie Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Movie Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
      < StarRatingp rating={rating} handelRating={handelRating} />
      </Form.Group> */}
          <StarRatingp rating={rating} handelRating={handelRating} />

          <div className="btnForm">
            {" "}
            <Button variant="primary" type="submit">
              Add
            </Button>
            <Button variant="primary" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
