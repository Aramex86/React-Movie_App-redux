import React, { FC } from "react";
import { PropsMovieComponentstype } from "./Popular";
import Card from "../../Common/HomePageCard";
import { Link } from "react-router-dom";
import { AppStateType } from "../../Store/store";
import { fetchingSelector,  popularSelector } from "../../Store/Selectors/HomePageSelector";
import { useSelector } from "react-redux";
import Skeleton from '../../Common/Skeleton';
import { PopularType } from "../../../Types/Types";


const ForRent= () => {
  const fetching = useSelector((state: AppStateType) =>
    fetchingSelector(state)
  );
  const forRent = useSelector((state:AppStateType)=>popularSelector(state))

  const forRentCopy= forRent?.results;


  console.log(forRentCopy);
  const random=(arr:any)=>{
  return  [...arr].reverse()
  }

  random(forRentCopy)
  return (
    <>
      <div className="cardwrapp">
        {random(forRentCopy).map((movie) =>
          fetching ? (<Skeleton key={movie.id}/>
          ) : (
            <Link to={`movie-card/${movie.id}`} key={movie.id}>
              <Card
                poster={movie.poster_path}
                title={movie.title}
                realese={movie.release_date}
                voteAverage={movie.vote_average}
                name={movie.name}
                firstAirDate={movie.first_air_date}
              />
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default ForRent;
