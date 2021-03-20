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

export default function CardItemDog({ breedType }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breedType}/images/random`)
      .then((response) => {
        setImage(response.data.message);
      });
  }, []);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
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
      <DisplaySubBreed
        breedType={breedType}
        isOpen={clicked}
        toggle={handleClick}
      />
    </>
  );
}
