import React, { FC } from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type PropsType={
    poster:string
    title:string
    realese:number
    popularity:number
}


const HomePageCard:FC<PropsType> = ({poster,title,realese,popularity}) => {

    const percent = Math.round( popularity);
    return (
        <div className='card'>
            <div className="card__img">
             <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt='pic'/>
            </div>
            <div className="card__popular">
            <CircularProgressbar
                    value={percent}
                    text={`${percent}%`}
                    styles={{
                      trail: { stroke: "#fff" },
                      text: { fill: "#000", fontSize: "28px" },
                      path: { stroke: `${percent < 30 ? "red" : "#4aff5d"}` },
                    }}
                  />
            </div>
            <div className="card__info">
    <h3 className='card__info__title'>{title}</h3>
    <span className="card__info__realease">{realese}</span>
            </div>
        </div>
    )
}

export default HomePageCard
