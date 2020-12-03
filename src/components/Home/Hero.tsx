import React from "react";
import { PopularType } from "../../Types/Types";

type PropsType = {
  bgPopular: Array<PopularType>;
};

const Hero: React.FC<PropsType> = ({ bgPopular }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const bgImages: Array<string> = bgPopular.map(
    (item) => `${baseUrl}${item.backdrop_path}`
  );

  const randomImg = bgImages[Math.floor(Math.random() * bgImages.length)];

  console.log(bgImages);
  console.log(randomImg);

  return (
    <div
      className="herowrapp__container"
      style={{
        background: `linear-gradient(to left, rgb(18 65 123 / 65%), rgb(29 101 162)), url(${randomImg}) center center / cover`,
      }}
    >
      <div className="hero_heading">
        <h1 className="hero_heading__big">Welcome</h1>
        <h3 className="hero_heading__subheading">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <div className="searchinput">
          <input type="text" placeholder='Search for a movie, tv show, person......'/>
          <button className='btn btn--hero'>Search</button>
      </div>
    </div>
  );
};

export default Hero;
//https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg
