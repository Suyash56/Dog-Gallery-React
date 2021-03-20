import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import "../Css/Gallery.css";
import CardItemDog from "./CardItemDog";

export default function Gallery({ breeds }) {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
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
        {Object.keys(breeds)
          .filter((breeds) => breeds.includes(search))
          .map((element) => (
            <Col md={2} style={{ paddingTop: "10px" }}>
              <CardItemDog breedType={element} />
            </Col>
          ))}
      </Row>
    </>
  );
}
