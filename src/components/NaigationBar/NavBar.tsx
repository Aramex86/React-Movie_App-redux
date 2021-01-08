import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {ImPlus} from 'react-icons/im';
import Select from 'react-select';
import {useDispatch, useSelector} from 'react-redux';
import {langSelector, transSelector} from '../Store/Selectors/LangSelector';
import {AppStateType} from '../Store/store';
import {requestLangs, requestTranslations} from '../Store/Reducers/LangReducer';
import {LangsType} from '../../Types/Types';
import {getSelectedLang} from '../Store/Reducers/HomePageReducer';

const NavBar = () => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [showlang, setShowlang] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState<
    LangsType | undefined | null
  >(null);

  const langs = useSelector((state: AppStateType) => langSelector(state));
  const translations = useSelector((state: AppStateType) =>
    transSelector(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestLangs());
    dispatch(requestTranslations());
    dispatch(getSelectedLang(selectedOption?.value));
  }, [selectedOption]);

  const languages: Array<LangsType> = [];

  const concatValues = (arr1: any, arr2: any) => {
    arr1.filter((item: any) => {
      for (let i = 0; i < arr2.length; i++) {
        if (item.iso_639_1 === arr2[i].slice(0, 2)) {
          languages.push({
            ...item,
            value: `${arr2[i]}`,
            label: `${item.english_name} (${arr2[i]})`,
          });
        }
      }
    });
  };
  concatValues(langs, translations);
  //console.log(selectedOption);

  const handleClick = () => {
    setShowToolTip(!showToolTip);
  };
  const showLang = () => {
    setShowlang(!showlang);
  };

  const showHideNav = () => {
    setShowMenu(!showMenu);
  };

  const screenWidth = window.innerWidth;

  return (
    <div className="navbarwrapp">
      <div className="navbarwrapp__container">
        <div className="navbarwrapp__left">
          <button onClick={showHideNav} className="btn btn--mobile">
            <span></span>
          </button>
          <div className="navbarwrapp__left__logo">
            <Link to="/">MOVIE-APP</Link>
          </div>
          {screenWidth < 665 && showMenu ? (
            <nav className="navbarwrapp__left__navbar navbarwrapp__left__navbar--mobile">
              <ul className="navbarwrapp__left__list navbarwrapp__left__list--mobile">
                <li className="navbarwrapp__left__list__item">
                  <span className="navbarwrapp__left__list__link">movies</span>
                  <ul className="dropdown-navbar">
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link
                        to="/movies/popular"
                        className="dropdown-navbar__link"
                      >
                        popular
                      </Link>
                    </li>
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link
                        to="/movies/nowplaying"
                        className="dropdown-navbar__link"
                      >
                        now playing
                      </Link>
                    </li>
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link
                        to="/movies/upcoming"
                        className="dropdown-navbar__link"
                      >
                        upcoming
                      </Link>
                    </li>
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link
                        to="/movies/toprated"
                        className="dropdown-navbar__link"
                      >
                        top rated
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbarwrapp__left__list__item">
                  <a href="#" className="navbarwrapp__left__list__link">
                    tv shows
                  </a>
                  <ul className="dropdown-navbar">
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link to="/tv/popular" className="dropdown-navbar__link">
                        popular
                      </Link>
                    </li>
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link
                        to="/tv/airingtoday"
                        className="dropdown-navbar__link"
                      >
                        airing today
                      </Link>
                    </li>
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link to="/tv/ontv" className="dropdown-navbar__link">
                        on air
                      </Link>
                    </li>
                    <li
                      className="dropdown-navbar__item"
                      onClick={() => setShowMenu(false)}
                    >
                      <Link to="/tv/toprated" className="dropdown-navbar__link">
                        top rated
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbarwrapp__left__list__item">
                  <a href="#" className="navbarwrapp__left__list__link">
                    people
                  </a>
                  <ul className="dropdown-navbar">
                    <li className="dropdown-navbar__item">
                      <Link
                        to="/people/popular"
                        className="dropdown-navbar__link"
                        onClick={() => setShowMenu(false)}
                      >
                        popular people
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbarwrapp__left__list__item">
                  <a href="#" className="navbarwrapp__left__list__link">
                    more
                  </a>
                  <ul className="dropdown-navbar">
                    <li className="dropdown-navbar__item">
                      <a href="#" className="dropdown-navbar__link">
                        discutions
                      </a>
                    </li>
                    <li className="dropdown-navbar__item">
                      <a href="#" className="dropdown-navbar__link">
                        leaderboard
                      </a>
                    </li>
                    <li className="dropdown-navbar__item">
                      <a href="#" className="dropdown-navbar__link">
                        suport
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          ) : (
            ''
          )}
          <nav className="navbarwrapp__left__navbar ">
            <ul className="navbarwrapp__left__list ">
              <li className="navbarwrapp__left__list__item">
                <a href="#" className="navbarwrapp__left__list__link">
                  movies
                </a>
                <ul className="dropdown-navbar">
                  <li className="dropdown-navbar__item">
                    <Link
                      to="/movies/popular"
                      className="dropdown-navbar__link"
                    >
                      popular
                    </Link>
                  </li>
                  <li className="dropdown-navbar__item">
                    <Link
                      to="/movies/nowplaying"
                      className="dropdown-navbar__link"
                    >
                      now playing
                    </Link>
                  </li>
                  <li className="dropdown-navbar__item">
                    <Link
                      to="/movies/upcoming"
                      className="dropdown-navbar__link"
                    >
                      upcoming
                    </Link>
                  </li>
                  <li className="dropdown-navbar__item">
                    <Link
                      to="/movies/toprated"
                      className="dropdown-navbar__link"
                    >
                      top rated
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navbarwrapp__left__list__item">
                <a href="#" className="navbarwrapp__left__list__link">
                  tv shows
                </a>
                <ul className="dropdown-navbar">
                  <li className="dropdown-navbar__item">
                    <Link to="/tv/popular" className="dropdown-navbar__link">
                      popular
                    </Link>
                  </li>
                  <li className="dropdown-navbar__item">
                    <Link
                      to="/tv/airingtoday"
                      className="dropdown-navbar__link"
                    >
                      airing today
                    </Link>
                  </li>
                  <li className="dropdown-navbar__item">
                    <Link to="/tv/ontv" className="dropdown-navbar__link">
                      on air
                    </Link>
                  </li>
                  <li className="dropdown-navbar__item">
                    <Link to="/tv/toprated" className="dropdown-navbar__link">
                      top rated
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navbarwrapp__left__list__item">
                <a href="#" className="navbarwrapp__left__list__link">
                  people
                </a>
                <ul className="dropdown-navbar">
                  <li className="dropdown-navbar__item">
                    <Link
                      to="/people/popular"
                      className="dropdown-navbar__link"
                    >
                      popular people
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navbarwrapp__left__list__item">
                <a href="#" className="navbarwrapp__left__list__link">
                  more
                </a>
                <ul className="dropdown-navbar">
                  <li className="dropdown-navbar__item">
                    <a href="#" className="dropdown-navbar__link">
                      discutions
                    </a>
                  </li>
                  <li className="dropdown-navbar__item">
                    <a href="#" className="dropdown-navbar__link">
                      leaderboard
                    </a>
                  </li>
                  <li className="dropdown-navbar__item">
                    <a href="#" className="dropdown-navbar__link">
                      suport
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbarwrapp__right">
          <ul className="navbarwrapp__right__list">
            <li className="navbarwrapp__right__list__item">
              <a
                href="#"
                className="navbarwrapp__right__list__link"
                onClick={handleClick}
              >
                <ImPlus />
              </a>
              {showToolTip ? (
                <div className="navbarwrapp__right__tooltip">
                  <span>
                    Can't find a movie or TV show?
                    <br /> Login to create it.
                  </span>
                </div>
              ) : (
                ''
              )}
            </li>
            <li className="navbarwrapp__right__list__item">
              <button
                className="btn btn--navbar"
                onClick={showLang}
                style={showlang ? {background: 'white', color: '#000'} : {}}
              >
                EN
              </button>
              {showlang ? (
                <div className="navbarwrapp__right__tooltip navbarwrapp__right__tooltip--lang">
                  <h3>Language Preferences</h3>
                  <Select
                    options={languages}
                    onChange={setSelectedOption}
                    defaultValue={selectedOption}
                  />
                </div>
              ) : (
                ''
              )}
            </li>
            <li className="navbarwrapp__right__list__item">
              <a href="#" className="navbarwrapp__right__list__link">
                <span>Login</span>
              </a>
            </li>
            <li className="navbarwrapp__right__list__item">
              <button className="btn btn--navbarsearch">
                <SearchOutlinedIcon
                  style={{color: '#1acee0', fontWeight: 'bold'}}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
