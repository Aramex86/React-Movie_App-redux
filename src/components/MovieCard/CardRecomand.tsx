import React from "react";
import testrec from "../../assets/recomadtest.jpg";

const CardRecomand = () => {
  return (
    <div className="recomandWrapp">
      <h3 className="recomandWrapp__heading">Recommendations</h3>
      <div className="recomandWrapp__cards">
        <div className="recomandWrapp__cards-card">
          <img src={testrec} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>Name</span>
            <span>57%</span>
          </div>
        </div>
        <div className="recomandWrapp__cards-card">
          <img src={testrec} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>Name</span>
            <span>57%</span>
          </div>
        </div>
        <div className="recomandWrapp__cards-card">
          <img src={testrec} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>Name</span>
            <span>57%</span>
          </div>
        </div>
        <div className="recomandWrapp__cards-card">
          <img src={testrec} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>Name</span>
            <span>57%</span>
          </div>
        </div>
        <div className="recomandWrapp__cards-card">
          <img src={testrec} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>Name</span>
            <span>57%</span>
          </div>
        </div>
        <div className="recomandWrapp__cards-card">
          <img src={testrec} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>Name</span>
            <span>57%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecomand;
