import React, { FC, useState } from "react";
import HeroNav from "../Common/HeroNav";
import Streaming from "./Popular/Streaming";
import OnTv from "./Popular/OnTv";
import ForRent from "./Popular/ForRent";
import InTheater from "./Popular/InTheater";
import { PopularType } from "../../Types/Types";

export type PropsPopularMoviesType={
  popularMovies:Array<PopularType>
}




const Popular:FC<PropsPopularMoviesType> = ({popularMovies}) => {

  const [show,setShow]=useState('stream')

  const showValue=(value:string)=>{
    setShow(value)
  }

  return (
    <div className="popularwrapp">
      <div className="popular__header">
        <div className="popular__header__heading">
          <h2>What's Popular</h2>
        </div>
        <HeroNav
          show={show}
          showValue={showValue}
        />
      </div>
      <div className="popular__body">
        {show === 'stream' ? <Streaming  popularMovies={popularMovies}/> : ""}
        {show === 'onTv' ? <OnTv /> : ""}
        {show==='rent' ? <ForRent /> : ""}
        {show ==='theater' ? <InTheater /> : ""}
      </div>
    </div>
  );
};

export default Popular;