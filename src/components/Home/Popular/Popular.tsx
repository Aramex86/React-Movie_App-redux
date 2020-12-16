import React, { FC, useState } from "react";
import HeroNav from "../../Common/HeroNav";
import Streaming from "./Streaming";
import OnTv from "./OnTv";
import ForRent from "./ForRent";
import InTheater from "./InTheater";
import { PopularType } from "../../../Types/Types";

type PropsPopularMoviesType = {
  popularMovies: Array<PopularType>;
};

export type PropsMovieComponentstype = {
  popularMovies: Array<PopularType>;
};

const Popular: FC<PropsPopularMoviesType> = ({ popularMovies }) => {
  const [show, setShow] = useState("stream");

  const showValue = (value: string) => {
    setShow(value);
  };

  return (
    <div className="popularwrapp">
      <div className="popular__header">
        <div className="popular__header__heading">
          <h2>What's Popular</h2>
        </div>
        <HeroNav show={show} showValue={showValue} />
      </div>
      <div className="popular__body is__faiding">
        {show === "stream" ? <Streaming popularMovies={popularMovies} /> : ""}
        {show === "onTv" ? <OnTv popularMovies={popularMovies} /> : ""}
        {show === "rent" ? <ForRent popularMovies={popularMovies} /> : ""}
        {show === "theater" ? <InTheater popularMovies={popularMovies} /> : ""}
      </div>
    </div>
  );
};

export default Popular;
