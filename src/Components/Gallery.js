import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "../Css/Gallery.css";
import CardItemDog from "./CardItemDog";

export default function Gallery({ breeds }) {
  //console.log(breeds);
  const [search, setSearch] = useState(""); //Declare state search for store search key from search bar

  const searchHandler = (e) => {
    // This function is used to change state
    setSearch(e.target.value);
  };


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            className="form"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={searchHandler}
          />
        </div>
      </div>
      <Row>
        {/* Filter according to search key */}
        {Object.entries(breeds)
          .filter((breed,index) => breed[0].includes(search))
          .map((element,index) => (

            <Col md={2} style={{ paddingTop: "10px" }}>
              <CardItemDog key={index} breedType={element[0]} subBreed={element[1]} />
              {/* Render CardItemDog Component and pass breedType as props */}
            </Col>
            
          ))}
      </Row>
    </>
  );
}
