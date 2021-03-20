import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "../Css/Gallery.css";
import CardItemDog from "./CardItemDog";

export default function Gallery({ breeds }) {
  const [search, setSearch] = useState(""); //Decalre state search for store serch key from searchbar

  const searchHandler = (e) => {
    // This function is used to change state
    e.preventDefault();
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
        {Object.keys(breeds)
          .filter((breeds) => breeds.includes(search))
          .map((element) => (
            <Col md={2} style={{ paddingTop: "10px" }}>
              <CardItemDog breedType={element} />{" "}
              {/* Render CardItemDog Component and pass breedType as props */}
            </Col>
          ))}
      </Row>
    </>
  );
}
