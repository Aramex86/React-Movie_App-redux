import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  const slideToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footerwrapp">
        <div className="footerwrapp__movies">
          <h3>Movies</h3>
          <ul className="list">
            <li className="list__item">
              <Link
                to="/movies/popular"
                className="list__link"
                onClick={slideToTop}
              >
                Popular
              </Link>
            </li>
            <li className="list__item">
              <Link to="/movies/nowplaying" className="list__link" onClick={slideToTop}>
                Now Playing
              </Link>
            </li>
            <li className="list__item">
              <Link to="/movies/upcoming" className="list__link" onClick={slideToTop}>
                Upcoming
              </Link>
            </li>
            <li className="list__item">
              <Link to="/movies/toprated" className="list__link" onClick={slideToTop}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerwrapp__tv">
          <h3>TV Shows</h3>
          <ul className="list">
            <li className="list__item">
              <Link to="/tv/popular" className="list__link" onClick={slideToTop}>
                Popular
              </Link>
            </li>
            <li className="list__item">
              <Link to="/tv/airingtoday" className="list__link" onClick={slideToTop}>
                Airing Today
              </Link>
            </li>
            <li className="list__item">
              <Link to="/tv/ontv" className="list__link" onClick={slideToTop}>
                On Tv
              </Link>
            </li>
            <li className="list__item">
              <Link to="/tv/toprated" className="list__link" onClick={slideToTop}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerwrapp__people">
          <h3>People</h3>
          <ul className="list">
            <li className="list__item" onClick={slideToTop}>
              <Link to='/people/popular' className="list__link" >
                Popular People
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerwrapp__more">
          <h3>More</h3>
          <ul className="list">
            <li className="list__item">
              <a href="#" className="list__link">
                Discutions
              </a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">
                Leaderboard
              </a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">
                Suport
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/" className="logo">
        MOVIE-APP
      </Link>
    </footer>
  );
};

export default Footer;
