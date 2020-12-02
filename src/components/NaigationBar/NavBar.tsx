import React from 'react'
import {Link} from 'react-router-dom';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const NavBar = () => {
  return (
    <div className='navbarwrapp'>
      <div className='navbarwrapp__container'>
          <div className='navbarwrapp__left'>
            <div className="navbarwrapp__left__logo">
              <Link to='/'>
             MOVIE-APP
              </Link>
            </div>
            <nav className="navbarwrapp__left__navbar">
              <ul className="navbarwrapp__left__list">
                <li className="navbarwrapp__left__list__item">
                  <a href="//#endregion" className="navbarwrapp__left__list__link">movies</a>
                  <ul className='dropdown-navbar'>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>popular</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>now playing</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>upcoming</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>top rated</a>
                      </li>
                  </ul>
                </li>
                <li className="navbarwrapp__left__list__item">
                  <a href="//#endregion" className="navbarwrapp__left__list__link">tv shows</a>
                  <ul className='dropdown-navbar'>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>popular</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>airing today</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>on tv</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>top rated</a>
                      </li>
                  </ul>
                </li>
                <li className="navbarwrapp__left__list__item">
                  <a href="//#endregion" className="navbarwrapp__left__list__link">people</a>
                  <ul className='dropdown-navbar'>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>popular people</a>
                      </li>
                  </ul>
                </li>
                <li className="navbarwrapp__left__list__item">
                  <a href="//#endregion" className="navbarwrapp__left__list__link">more</a>
                  <ul className='dropdown-navbar'>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>discutions</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>leaderboard</a>
                      </li>
                      <li className='dropdown-navbar__item'>
                        <a href="//#endregion" className='dropdown-navbar__link'>suport</a>
                      </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className='navbarwrapp__right'>
            <ul className='navbarwrapp__right__list'>
              <li className='navbarwrapp__right__list__item'>
                <a href="#" className='navbarwrapp__right__list__link'>
                <AddOutlinedIcon style={{color:'#fff'}}/>
                </a>
              </li>
              <li className='navbarwrapp__right__list__item'>
                <button className='btn btn--navbar'>EN</button>
              </li>
              <li className='navbarwrapp__right__list__item'>
              <a href="#" className='navbarwrapp__right__list__link'>
                <span>Login</span>
                </a>
              </li>
              <li className='navbarwrapp__right__list__item'>
              <button className='btn btn--navbarsearch'>
                <SearchOutlinedIcon style={{color:'#1acee0',fontWeight:'bold'}}/>
                </button>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default NavBar
