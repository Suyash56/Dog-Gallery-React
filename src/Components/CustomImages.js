import React, { useState, useEffect } from "react";
import { Card, CardImg } from "reactstrap";
import { Row, Col } from "reactstrap";
import axios from "axios";

function CustomImages({ breedName, numberOfImages }) {
  const [images, setImages] = useState([]); //Declare state to store images

  {
    /* Fetch API of random images from breed collection in which name of breed and number image came from breed selection form */
  }

  const content = "Please Enter Valid Number Of Images!";

  const showWarning = () => {
    return <h4 style={{ marginRight: "20px" }}>{content}</h4>;
  };

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

  return (
    <>
      {images.length == numberOfImages ? (
        <h4 style={{ marginRight: "50px" }}>
          Showings "{breedName}" Images of "{numberOfImages}"
        </h4>
      ) : (
        ""
      )}

      <Row style={{ justifyContent: "space-around" }}>
        {/* Validation of number of images if numberOfImages is equal to array length then show Cards*/}

        {images.length == numberOfImages
          ? images.map((element) => {
              return (
                <Card style={{ width: "30%", height: "50%" }}>
                  <CardImg
                    top
                    width="10px"
                    height="100px"
                    src={element}
                    alt="Card image cap"
                  />
                </Card>
              );
            })
          : showWarning()}
      </Row>
    </>
  );
}

export default CustomImages;
