import React from "react";

type PropsTypes = {
  movie: string
  desc: string
  title: string
  showTip:boolean
};

const movieInfoToolTip: React.FC<PropsTypes> = ({ movie, desc, title,showTip }) => {
  return (
    <div className={showTip?"tooltipwrap tooltipwrap--show":"tooltipwrap"}>
      <div className="tooltipwrap__img">
        <img src={`https://image.tmdb.org/t/p/w500/${movie}`} alt="poster" />
      </div>
      <div className="tooltipwrap__desc">
        <h2 className="tooltipwrap__desc__title">{title}</h2>
        <p className="tooltipwrap__desc__about">{desc}</p>
      </div>
    </div>
  );
};

export default movieInfoToolTip;
