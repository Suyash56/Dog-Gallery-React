import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import "../Css/DisplaySubBreed.css";

export default function DisplaySubBreed({
  breedType,
  subBreed,
  isOpen,
  toggle,
}) {
  const [subBreedImage, setSubBreedImage] = useState([]); // Used to store random images from each subbreed

  const [randomBreedImages, setRandomBreedImages] = useState([]); // used to store random 3 images of dog breed

  const subbreed = [];
  useEffect(() => {
    {
      /* First fetch particular breed and after that fetch random images from each subbreed*/
    }
    subBreed.map((element) => {
      axios
        .get(`https://dog.ceo/api/breed/${breedType}/${element}/images/random`)
        .then((response) => {
          subbreed.push(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    setSubBreedImage(subbreed);
    {
      /* Fetch random 3 images from dog breed */
    }
    axios
      .get(`https://dog.ceo/api/breed/${breedType}/images/random/3`)
      .then((response) => {
        setRandomBreedImages(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <Modal isOpen={isOpen} toggle={toggle} style={{ top: "25%" }}>
          <ModalHeader
            toggle={toggle}
            style={{ textAlign: "center", backgroundColor: "lightgray" }}
          >
            Selected Dog Breed {breedType}
          </ModalHeader>

          {/* Show Sub Breeds section */}

          <ModalBody>
            <h3 style={{ marginLeft: "150px" }}>Sub Breeds</h3>
            <Row style={{ paddingTop: "10px",justifyContent: "space-around" }}>
              {subBreedImage.map((image) => {
                let arr = image.split("-");
                arr = arr[1].split("/");
                return (
                  <Card style={{ width: "30%", height: "50%" }}>
                    <CardImg
                      top
                      width="10px"
                      height="80px"
                      src={image}
                      alt="Card image cap"
                    />
                    <CardBody style={{ padding: "0em" }} height="50px">
                      <CardTitle tag="h5">{arr[0]}</CardTitle>
                    </CardBody>
                  </Card>
                );
              })}
              {/* If there is no sub breed then show message */}
              {subBreedImage.length === 0 && (
                <h5 style={{ backgroundColor: "red" }}>
                  No Sub Breeds
                </h5>
              )}
            </Row>
          </ModalBody>

          {/* Show More Images Section */}

          <ModalFooter>
            <h2 style={{ marginRight: "110px" }}>More Examples</h2>
            {randomBreedImages.map((image) => {
              return (
                <Card style={{ width: "30%", height: "50%" }}>
                  <CardImg
                    top
                    width="10px"
                    height="80px"
                    src={image}
                    alt="Card image cap"
                  />
                </Card>
              );
            })}
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
