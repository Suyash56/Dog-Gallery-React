import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../Css/CustomSearch.css";
import CustomImages from "./CustomImages";

export default function CustomSearch({ breeds }) {
  const [modal, setModal] = useState(false);

  const [breedName, setBreedName] = useState(""); // Declare state breedName to store breedName which is input from user

  const [numberOfImages, setNumberOfImages] = useState(0); // Declare state numberOfImages to store number of images which user wants

  const [ImageButtonClick, setImageButtonClick] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setImageButtonClick(false);
    setBreedName("");
    setNumberOfImages(0);
  };

  const handleBreed = (e) => {
    setImageButtonClick(false);
    setBreedName(e.target.value);
  };

  const handleNumberOfImages = (e) => {
    setImageButtonClick(false);
    setNumberOfImages(e.target.value);
  };

  const handleGetImageButtonClick = () => {
    setImageButtonClick(true);
  };

  return (
    <>
      <div>
        <button className="searchbtn" onClick={toggle}>
          Custom Search
        </button>
        <Modal isOpen={modal} toggle={toggle} style={{ top: "25%" }}>
          <ModalHeader
            toggle={toggle}
            style={{ textAlign: "center", backgroundColor: "lightgray" }}
          >
            Custom Search
          </ModalHeader>

          {/* Breed Selection Form */}

          <ModalBody>
            {/* Dropdown field to select a breed from the dog breeds list. */}
            <select onChange={handleBreed}>
              {Object.keys(breeds).map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
            {/* Number field to enter the number of images to load*/}
            <input
              type="number"
              value={numberOfImages}
              style={{ float: "right" }}
              onChange={handleNumberOfImages}
            />
            <div>
              <button
                onClick={handleGetImageButtonClick}
                className="getImageButton"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Get Images
              </button>
            </div>
          </ModalBody>

          {/* Image Section */}

          <ModalFooter>
            {ImageButtonClick === false ? (
              ""
            ) : (
              <CustomImages
                breedName={breedName}
                numberOfImages={numberOfImages}
              />
            )}
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
