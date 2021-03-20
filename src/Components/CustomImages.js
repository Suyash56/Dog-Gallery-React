import React, { useState, useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import {Row,Col} from 'reactstrap'
import axios from "axios";

function CustomImages({ breedName, numberOfImages, toggled}) {
  
  const [images, setImages] = useState([]);
  console.log(breedName + numberOfImages);
  useEffect(() => {
    axios
      .get(
        `https://dog.ceo/api/breed/${breedName}/images/random/${numberOfImages}`
      )
      .then((response) => {
        console.log(response.data.message);
        setImages(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);
  console.log(images);

  return (
    <>
      <h4 style={{ marginRight: "50px" }}>Showings "{breedName}" Images of "{numberOfImages}"</h4>
      <Row>
      {images.map((element) => {
        return (
          <Card style={{width: "30%", height: "50%"}}>
            <CardImg
              top
              width="10px"
              height="100px"
              src={element}
              alt="Card image cap"
            />
          </Card>
        );
      })}
      </Row>
    </>
  );
}

export default CustomImages;
