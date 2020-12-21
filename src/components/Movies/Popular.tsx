import React from "react";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";

const Popular = () => {
  return (
    <>
      <h1 className="heading">Popular Movies</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort />
          <Filter />
        </div>
        <div className="popularwrap__movielist">Movies</div>
      </div>
    </>
  );
};

export default Popular;
