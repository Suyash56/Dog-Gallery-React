import React from "react";
import CustomSearch from "./CustomSearch";

export default function Header({breeds}) {
  return (
    <>
      <div className="header">
        <h1 className="title">Dog Gallery</h1>
        <CustomSearch breeds = {breeds}/>
      </div>
    </>
  );
}
