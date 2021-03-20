import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../Css/CustomSearch.css";
import CustomImages from "./CustomImages";

export default function CustomSearch({ breeds }) {
  const [modal, setModal] = useState(false);

  const [breedName, setBreedName] = useState("");

  const [numberOfImages, setNumberOfImages] = useState(0);

  const [ImageButtonClick, setImageButtonClick] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setImageButtonClick(false);
    setBreedName("");
    setNumberOfImages(0);
  };

  const handleBreed = (e) => {
    setBreedName(e.target.value);
  };

  const handleNumberOfImages = (e) => {
    setNumberOfImages(e.target.value);
  };

  const handleGetImageButtonClick = () => {
    setImageButtonClick(!ImageButtonClick);
  };

  return (
    <>
      <div>
        <button className="searchbtn" onClick={toggle}>
          Custome Search
        </button>
        <Modal isOpen={modal} toggle={toggle} style={{ top: "25%" }}>
          <ModalHeader
            toggle={toggle}
            style={{ textAlign: "center", backgroundColor: "lightgray" }}
          >
            Custome Search
          </ModalHeader>
          <ModalBody>
            <select onChange={handleBreed}>
              {Object.keys(breeds).map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
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

          <ModalFooter>
            {ImageButtonClick === false ? (
              ""
            ) : (
              <CustomImages
                breedName={breedName}
                numberOfImages={numberOfImages}
                toggled={handleGetImageButtonClick}
              />
            )}
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
