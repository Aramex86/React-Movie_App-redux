import React from "react";
import { RecomandType } from "../../Types/Types";

import TodayRoundedIcon from '@material-ui/icons/TodayRounded';


  type PropsType={
    recomand:Array<RecomandType>
  }

const CardRecomand = ({recomand}:PropsType) => {
  return (
    <div className="recomandWrapp">
      <h3 className="recomandWrapp__heading">Recommendations</h3>
      <div className="recomandWrapp__cards">
        {recomand.slice(0,8).map(r=>
        <div className="recomandWrapp__cards-card" key={r.id}>
          <img src={`https://image.tmdb.org/t/p/w500${r.backdrop_path}`} alt="" />
          <div className="recomandWrapp__cards-info">
            <span>{r.name}</span>
        <span>{r.vote_average.toLocaleString().replace('.','') + '%'}</span>
          </div>
          <div className='recomandWrapp__cards-release'>
           <span><TodayRoundedIcon/> {r.first_air_date}</span>
          </div>
        </div>
          )}
      </div>
    </div>
  );
};

export default CardRecomand;
