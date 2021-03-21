import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import DisplaySubBreed from "./DisplaySubBreed";
import "../Css/CardItemDog.css";

export default function CardItemDog({ breedType, subBreed }) {
  const [image, setImage] = useState(""); // Declare state image to store particular random image
  //Fetch random image from Breed collection
  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breedType}/images/random`)
      .then((response) => {
        setImage(response.data.message);
      });
  }, [breedType]);


  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //This function is used to handle if user clicked on particular image in gallery
    setClicked(!clicked);
  };

  return (
    <>
      <Card style={{ cursor: "pointer" }} onClick={handleClick}>
        <CardImg
          top
          width="10px"
          height="150px"
          src={image}
          alt="Card image cap"
        />
        <CardBody style={{ padding: "0em" }} height="50px">
          <CardTitle tag="h5">{breedType}</CardTitle>
        </CardBody>
      </Card>
      {/* Render DisplaySubBreed if user clicked on particular image */}
      <DisplaySubBreed
        breedType={breedType}
        subBreed={subBreed}
        isOpen={clicked}
        toggle={handleClick}
      />
    </>
  );
}
