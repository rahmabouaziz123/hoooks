import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const Detail = ({ infoData }) => {
  console.log(infoData);
  const { id } = useParams();
  // console.log(id)

  const item = infoData.find((el) => el.id == id);

  return (
    // <div>
    //   <h1> {item.name}</h1>

    //   <h1> {item.date}</h1>

    //   <img src={item.image} alt={item.image} />

    //   <p> {item.description}</p>

    //   <iframe
    //     width="853"
    //     height="480"
    //     src={item.video}
    //     title="One Wedding and a Funeral | Funny Clip | Classic Mr Bean"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowfullscreen
    //   ></iframe>
    // </div>

    <div className=" CardTotal" >
      <Card  className="cardDetail" style={{ width: "30rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title  className="textTitre  " >{item.name}</Card.Title>
          <Card.Text   className="textDetail">{item.description}</Card.Text>
          {/* <Button variant="primary">Ok</Button> */}

         <Card.Text> 
         <iframe
            width="450"
            height="400"
            src={item.video}
            title={item.name}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
         </Card.Text>
          <hr />
        </Card.Body>
       
        <Link to="/">  <Button variant="primary">Ok</Button> </Link>
      </Card>
    </div>
  );
};
