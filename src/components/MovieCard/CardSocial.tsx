import React from "react";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
//test
import test from "../../assets/testactor.jpg";

const CardMedia = () => {
  return (
    <div className="socialWrapp">
      <div className="socialWrapp__header">
        <h3 className="socialWrapp__header-heading">Social</h3>
        <ul className="socialWrapp__header-list">
          <li className="socialWrapp__header-item">
            <a
              href="#"
              className="socialWrapp__header-link socialWrapp__header-link--active"
            >
              Reviews <span>1</span>
            </a>
          </li>
          <li className="socialWrapp__header-item">
            <a href="#" className="socialWrapp__header-link">
              Discussions <span>6</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="socialWrapp__reviews">
        <div className="socialWrapp__reviews-header">
          <img src={test} alt="avatar" />
          <div>
            <h3>
              A review by Gimly{" "}
              <span>
                <StarRateRoundedIcon style={{ fontSize: 20 }} />
                6.0
              </span>
            </h3>
            <span>
              Written by <b>Gimly</b> on 4 April 2017
            </span>
          </div>
        </div>
        <div className="socialWrapp__reviews-body">
          <p>
            A tonally loyal adaptation of the 60's TV show. Some nonsensical
            moments and lacklustre scenes but Huston and Julia steal the thing
            with such fervour you can't help but enjoy yourself at least a
            little.
          </p>
          <i>Final rating:★★★ - I personally recommend you give it a go.</i>
        </div>
      </div>
      <h4>
        <a href="#">Read All Reviews</a>
      </h4>
    </div>
  );
};

export default CardMedia;
