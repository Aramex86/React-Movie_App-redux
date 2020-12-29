import React, {FC} from 'react';
import {AllMediaType} from '../../Types/Types';

type PropsType = {
  name: string;
  photo: string;
  tapes: Array<AllMediaType>;
};

const PeopleCard: FC<PropsType> = ({name, photo, tapes}) => {
  const movies = tapes.map((item) => (
    <span>{`${item.title? item.title: item.name},`} </span>
  ));

  console.log(movies);

  return (
    <div className="card__wrap">
      <div className="card__wrap_img">
        <img src={`https://image.tmdb.org/t/p/w500${photo}`} alt="" />
      </div>
      <div className="card__wrap_desc">
        <span className="card__wrap_name">{name}</span>
        <br />
        <div className="card__wrap_tapes" >
          {movies}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
