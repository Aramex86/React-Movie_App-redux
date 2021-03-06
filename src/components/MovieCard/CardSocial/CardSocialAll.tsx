import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { reviewsSelector } from "../../Store/Selectors/MovieSelector";
import { useParams } from "react-router";

import { AppStateType } from "../../Store/store";

import CardHeader from "../../Common/CardHeader";
import { requestReviews } from "../../Store/Reducers/MovieListReducer";
import Avatar from "@material-ui/core/Avatar";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CardHeaderAll from "../../Common/CardHeaderAll";

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

const CardSocialAll = () => {
  const classes = useStyles();
  const reviews = useSelector((state: AppStateType) => reviewsSelector(state));
  let { id }: ParamsType = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestReviews(Number(id)));
  }, [id, dispatch]);

  return (
    <div className="reviewswrap">
      <CardHeader />
      <CardHeaderAll />
      <div className="reviewsbody">
        <div className="reviewsbody__left">
          <span>Login to add a review</span>
        </div>
        <div className="reviewsbody__right">
          {reviews.map((review) => (
            <div className="socialWrapp__reviews" key={review.id}>
              <div className="socialWrapp__reviews-header">
                <Avatar
                  style={{ marginRight: "15px" }}
                  className={classes.large}
                  src={
                    review.author_details.avatar_path !== null
                      ? review.author_details.avatar_path.slice(1, -1)
                      : ""
                  }
                />

                <div>
                  <a href={review.url} target="_blank" rel="noreferrer">
                    <h3>
                      A review by {review.author}{" "}
                      <span>
                        <StarRateRoundedIcon style={{ fontSize: 20 }} />
                        {review.author_details.rating === null
                          ? "0.0"
                          : `${review.author_details.rating}.0`}
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
                  {`${review.content.slice(0, 400)}...`}{" "}
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
        </div>
      </div>
    </div>
  );
};

export default CardSocialAll;
