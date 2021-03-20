import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import "../Css/DisplaySubBreed.css";

export default function DisplaySubBreed({ breedType, isOpen,toggle }) {

  const [subBreedImage, setSubBreedImage] = useState([]);

  const [randomBreedImages, setRandomBreedImages] = useState([]);

  const s = [];
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breedType}/list`)
      .then((response) => {
        response.data.message.map((subBreed) => {
          axios
            .get(
              `https://dog.ceo/api/breed/${breedType}/${subBreed}/images/random`
            )
            .then((response) => {
              s.push(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
          setSubBreedImage(s);
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
            Selected Dog Breed Name
          </ModalHeader>
          <ModalBody>
            <h3 style={{ marginLeft: "150px" }}>Sub Breeds</h3>
            <Row style={{ paddingTop: "10px" }}>
              {subBreedImage.map((image) => {
                console.log(image);
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
                        <CardTitle tag="h5">{breedType}</CardTitle>
                      </CardBody>
                    </Card>
                );
              })}
            </Row>
          </ModalBody>
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
