import React from "react";
import Button from "@material-ui/core/Button";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";
import { Link } from "react-router-dom";
import { MovieListType } from "../../Types/Types";
import { matchIdFunc } from "../Helper/mtchId";



type PropsType = {
  movieList: Array<MovieListType>;
  match?: any;
};

const cardHeader = {
  color: "#fff",
  backgroundColor: "#333",
  padding: "2rem 2rem",
  display: "flex",
  alignItems: "center",
};
const cardBtn = {
  minWidth: "30px",
  height: "40px",
  borderRadius: "100%",
  background: "rgb(51, 51, 51)",
  marginRight: "20px",
};

const MovieCardHeader = ({ movieList, match }: PropsType) => {
  const movieId = match.params.id;
  const movieList1 = matchIdFunc(movieList, movieId);
  const title = movieList1.map((t) => <h3 key={t.id}>{t.title}</h3>);
  return (
    <div style={cardHeader}>
      <div style={{ width: "50%" }}>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={cardBtn}
          >
            <ArrowBackOutlinedIcon />
          </Button>
          {title}
         
       </Link>
      </div>
      <div
        style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          size="small"
          color="primary"
          style={cardBtn}
        >
          <BookmarkBorderOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};

export default MovieCardHeader;
