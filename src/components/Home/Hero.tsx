import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { PopularType } from "../../Types/Types";
import { requestSearchMovie } from "../Store/Reducers/SearchReducer";
import { searchMoviesSelector } from "../Store/Selectors/SearchSelector";
import { AppStateType } from "../Store/store";

type PropsType = {
  bgPopular: Array<PopularType>;
};

const Hero: React.FC<PropsType> = ({ bgPopular }) => {
  const movieSearch = useSelector((state: AppStateType) =>
    searchMoviesSelector(state)
  );
  const dispatch = useDispatch();

  const [searchMovie, setSearchMovie] = useState("spider");

  useEffect(() => {
    dispatch(requestSearchMovie(searchMovie));
  }, []);

  const handldleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(e.target.value);
    <Redirect to="/sreachresults" />;
  };

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const bgImages: Array<string> = bgPopular.map(
    (item) => `${baseUrl}${item.backdrop_path}`
  );

  const randomImg = bgImages[Math.floor(Math.random() * bgImages.length)];

  return (
    <div
      className="herowrapp__container"
      style={{
        background: `linear-gradient(to left, rgb(18 65 123 / 65%), rgb(29 101 162)), url(${randomImg}) center center / cover`,
      }}
    >
      <div className="hero_heading">
        <h1 className="hero_heading__big">Welcome.</h1>
        <h3 className="hero_heading__subheading">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <div className="searchinput">
        <input
          type="text"
          placeholder="Search for a movie, tv show, person......"
          value={searchMovie}
          onChange={handldleChange}
        />
        <Link
          to="/sreachresults"
          className="btn btn--hero"
          onClick={() => dispatch(requestSearchMovie(searchMovie))}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Hero;
