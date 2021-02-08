import React from "react";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

import { ResultsType } from "../../../Types/Types";
import { useState } from "react";

type PropsType = {
  reviews: Array<ResultsType>;
  title:string | undefined
};
type ParamsType = {
  id: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);
const CardMedia = ({ reviews = [],title }: PropsType) => {
  const classes = useStyles();
  let { id }: ParamsType = useParams();

  const moveToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }

  return (
    <div className="socialWrapp">
      <div className="socialWrapp__header">
        <h3 className="socialWrapp__header-heading">Social</h3>
        <ul className="socialWrapp__header-list">
          <li className="socialWrapp__header-item">
            <div className="socialWrapp__header-link socialWrapp__header-link--active">
              Reviews{" "}
              <span>
                {reviews.length === undefined
                  ? "NO REVIEWS YET"
                  : reviews.length}
              </span>
            </div>
          </li>
          {/* <li className="socialWrapp__header-item">
            <a href="#" className="socialWrapp__header-link">
              Discussions <span>6</span>
            </a>
          </li> */}
          {/*  */}
        </ul>
      </div>
      {reviews.length === 0
        ?<span style={{fontWeight:'bold',fontSize:'2rem'}}> We don't have any reviews for {title}.</span>
        : reviews.slice(0, 2).map((review) => (
            <div className="socialWrapp__reviews" key={review.id}>
              <div className="socialWrapp__reviews-header">
                <Avatar
                  style={{ marginRight: "15px" }}
                  className={classes.large}
                />
                <div>
                  <a href={review.url} target="_blank" rel="noreferrer">
                    <h3>
                      A review by {review.author}{" "}
                      <span>
                        <StarRateRoundedIcon style={{ fontSize: 20 }} />
                        6.0
                      </span>
                    </h3>
                  </a>
                  <span>
                    Written by <b>{review.author}</b> on 4 April 2017
                  </span>
                </div>
              </div>
              <div className="socialWrapp__reviews-body">
                <p>
                  {`${review.content.slice(0, 300)}...`}{" "}
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noreferrer"
                    className="socialWrapp__reviews-link"
                  >
                    read the rest
                  </a>
                </p>
              </div>
            </div>
          ))}
      {reviews.length === 0 ? (
        ""
      ) : (
        <h4 >
          <Link to={`/allreview/${id}`} onClick={moveToTop}>Read All Reviews</Link>
        </h4>
      )}
    </div>
  );
};

export default CardMedia;
