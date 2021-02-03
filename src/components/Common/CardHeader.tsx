import React from "react";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";

const CardHeader = () => {
  return (
    <div className="cardheader__wrap">
      <nav className="menuWrapp">
        <ul className="menuWrapp__list">
          <li className="menuWrapp__item">
            <span>
              Overview <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              {/*    <a href="#" className='menuWrapp__drop-link'>main</a>
                 <a href="#" className='menuWrapp__drop-link'>alternative title</a>
                 <a href="#" className='menuWrapp__drop-link'>cast & crew</a>
                 <a href="#" className='menuWrapp__drop-link'>realese dates</a>
                 <a href="#" className='menuWrapp__drop-link'>translations</a>
                 <a href="#" className='menuWrapp__drop-link'>changes</a> */}
            </div>
          </li>
          <li className="menuWrapp__item">
            <span>
              Media <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              {/*  <a href="#" className='menuWrapp__drop-link'>backdrops</a>
                 <a href="#" className='menuWrapp__drop-link'>posters</a>
                 <a href="#" className='menuWrapp__drop-link'>videos</a> */}
            </div>
          </li>
          <li className="menuWrapp__item">
            <span>
              Fandom <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              {/*   <a href="#" className='menuWrapp__drop-link'>discussions</a>
                 <a href="#" className='menuWrapp__drop-link'>reviwes</a> */}
            </div>
          </li>
          <li className="menuWrapp__item">
            <span>
              Share <ArrowDropDownRoundedIcon />
            </span>
            <div className="menuWrapp__drop">
              {/*  <a href="#" className='menuWrapp__drop-link'>share link</a>
                 <a href="#" className='menuWrapp__drop-link'>facebook</a>
                 <a href="#" className='menuWrapp__drop-link'>twitter</a> */}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CardHeader;
