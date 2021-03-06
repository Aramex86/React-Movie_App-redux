import React, {FC} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import NoPoster from '../../assets/comingSoon.jpg';

type PropsType = {
  poster: string | null;
  title: string;
  realese: number | string;
  voteAverage: number;
  name: string;
  firstAirDate: string;
};

const HomePageCard: FC<PropsType> = ({
  poster,
  title,
  realese,
  voteAverage,
  name,
  firstAirDate,
  //emptyArray,
}) => {
  let votes = voteAverage.toLocaleString().replace('.', '');
  if (votes.length < 2) {
    votes = votes + '0';
  }
  const voteNumber = parseInt(votes);

  const trailColorLine = (value: number) => {
    if (value < 30) {
      return '#fd1818';
    } else if (value > 30 && value < 70) {
      return '#ffff5d';
    } else {
      return '#50ff50de';
    }
  };

  const setTitle = () => {
    if (title === undefined) {
      return name.length >= 20 ? `${name.slice(0, 20)}...` : name;
    } else {
      return title.length >= 20 ? `${title.slice(0, 20)}...` : title;
    }
  };

  return (
    <div className="card__movie">
      <div className="card__movie-img">
        {poster === null ? (
          <img src={NoPoster} alt="pic" />
        ) : (
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="pic" loading='lazy'/>
        )}
      </div>
      <div className="card__movie-popular">
        <CircularProgressbar
          value={voteNumber}
          text={`${voteNumber}%`}
          background
          styles={buildStyles({
            textColor: '#fff',
            textSize: '3rem',
            strokeLinecap: 'red',
            backgroundColor: '#000',
            trailColor: '#3d543fba',
            pathColor: trailColorLine(voteNumber),
          })}
        />
      </div>
      <div className="card__movie-info">
        <h3 className="card__movie-info-title">
          {/* {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
          {name.length >= 20 ? `${name.slice(0, 20)}...` : name} */}
          {setTitle()}
        </h3>
        <span className="card__movie-info-realease">
          {realese ? realese : firstAirDate}
        </span>
      </div>
    </div>
  );
};

export default HomePageCard;
