import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
//test
import test from "../../assets/mediatest.jpg";

const CardMedia = () => {
  return (
    <div className="mediaWrapp">
      <div className="mediaWrapp__header">
        <h3 className="mediaWrapp__header-heading">Media</h3>
        <ul className="mediaWrapp__header-list">
          <li className="mediaWrapp__header-item">
            <a
              href="#"
              className="mediaWrapp__header-link mediaWrapp__header-link--active"
            >
              Most Popular <span>1</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Videos <span>4</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Backdrops <span>6</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Posters <span>12</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mediaWrapp__wrapper">
        <div className="mediaWrapp__wrapper-media">
          <img src={test} alt="" />

          <img src={test} alt="" />

          <img src={test} alt="" />

          <a href="#">
            View More <ArrowForwardRoundedIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
