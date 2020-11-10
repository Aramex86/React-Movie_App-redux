import React from "react";
import poster from "../../assets/testbanner.jpg";

import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CardPoster = () => {
const percent = 82;

  return (
    <div className="posterWrapp">
      <div className="posterWrapp__img">
        <img src={poster} alt="poster" />
      </div>
      <div className="posterWrapp__info">
        <div className="posterWrapp__info-heading">
          <h2>Joker <span>(2019)</span> </h2>
          <p>03/10/2019 (AU)Crime, Thriller, Drama - 2h 2m</p>
        </div>
        <div className="posterWrapp__info-actions">
          <ul className="posterWrapp__info-actions-list">
            <li className="posterWrapp__info-actions-item">
              <a href="#" className="posterWrapp__info-actions-link posterWrapp__info-actions-link--score">
              <div> <CircularProgressbar value={percent} text={`${percent}%`} styles={{trail:{stroke:'#fff'},text:{fill:'#fff',fontSize: '28px',},path:{stroke:'rgb(127, 247, 116)'}}}/></div>  User Score
              </a>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a href="#" className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled">
               <FormatListBulletedRoundedIcon/>
              </a>
              <div className='movieCrad__tolltip'>Login to create and edit custom lists</div>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a href="#" className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled">
                <FavoriteRoundedIcon/> 
              </a>
               <div className='movieCrad__tolltip'>Login to add this movie to your favourite list</div>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a href="#" className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled">
                <BookmarkRoundedIcon/>
              </a>
               <div className='movieCrad__tolltip'>Login to add this movie to your watchlist</div>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a href="#" className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled">
                <StarRoundedIcon/>
              </a>
               <p className='movieCrad__tolltip'>Login to rate this movie</p>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a href="#" className="posterWrapp__info-actions-link posterWrapp__info-actions-link--video">
            <PlayArrowRoundedIcon/> Play Trailer
              </a>
            </li>
          </ul>
        </div>
        <div className="posterWrapp__info-overview">
          <p>
            During the 1980s, a failed stand-up comedian is driven insane and
            turns to a life of crime and chaos in Gotham City while becoming an
            infamous psychopathic crime figure.
          </p>
        </div>
        <div className="posterWrapp__info-cast">
          <ul className="posterWrapp__info-cast-list">
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPoster;
