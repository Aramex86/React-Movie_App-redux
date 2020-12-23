import React, { FC } from "react";
import { PopularType } from "../../Types/Types";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import Card from "../Common/Card";
import { Link } from "react-router-dom";

type PropsType = {
  popular: Array<PopularType>;
};

const Popular: FC<PropsType> = ({ popular }) => {
  return (
    <>
      <h1 className="heading">Popular Movies</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort />
          <Filter />
          <button className="btn btn--search_filter" disabled={true}>
            Search
          </button>
        </div>
        <div className="popularwrap__movielist">
          {popular.map((p) => (
            <>
              <Link
                to={`movie-card/${p.id}`}
                key={p.id}
                className="popularwrap__movielist-link"
              >
                <Card
                  poster={p.poster_path}
                  title={p.title}
                  voteAverage={p.vote_average}
                  realese={p.release_date}
                  firstAirDate={p.first_air_date}
                  name={p.name}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
