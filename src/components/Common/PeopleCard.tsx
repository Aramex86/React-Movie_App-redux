import React, {FC} from 'react';
import {AllMediaType} from '../../Types/Types';
import NoImage from '../../assets/noImage.png';

type PropsType = {
  name: string;
  photo: string;
  tapes: Array<AllMediaType>;
};

const PeopleCard: FC<PropsType> = ({name, photo, tapes}) => {
  const movies = tapes.map(
    (item) => `${item.title ? item.title : item.name} , `
  );

  return (
    <div className="card__wrap">
      <div className="card__wrap_img">
        {photo === null ? (
          <img src={NoImage} alt="" />
        ) : (
          <img src={`https://image.tmdb.org/t/p/w500${photo}`} alt="" />
        )}
      </div>
      <div className="card__wrap_desc">
        <span className="card__wrap_name">{name}</span>
        <br />
        <div className="card__wrap_tapes">{movies}</div>
      </div>
    </div>
  );
};

export default PeopleCard;
