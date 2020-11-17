import React, { Component } from "react";
import { connect } from "react-redux";
import { WithMoviePropsType } from "../../Types/Types";

import {
  creditsSelector,
  detailsSelector,
  genresSelector,
  reviewsSelector,
} from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import {
  requestCredits,
  getCredits,
  getGenres,
  requestGenres,
  getDeatails,
  requestDetails,
  requestReviews,
  getReviwes
} from "../Store/Reducers/MovieListReducer";

//import MovieCrad from "./MovieCrad";
import MovieCardHeader from "./MovieCardHeader";
import CradHeader from "./CardHeader";
import CardPoster from "./CardPoster";
import CardActors from "./CardActors";
import  CardSocial  from "./CardSocial/CardSocial";
import CardMedia from "./CardMedia";
import CardRecomand from './CardRecomand';
import CardInfo from "./CardInfo";
class MovieCardContainer extends Component<WithMoviePropsType> {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.requestCredits(movieId);
    this.props.requestGenres();
    this.props.requestDetails(movieId);
    this.props.requestReviews(movieId);

  }

  render() {
    //console.log(this.props);
    return (
      <div className="cardWrapper">
        {/* <MovieCardHeader movieList={this.props.movieList} match={this.props.match}/> */}
        {/* <MovieCrad
        match={this.props.match}
        movieList={this.props.movieList}
        credits={this.props.credits}
        genres={this.props.genres}
      /> */}
        <CradHeader />
        <CardPoster 
         poster_path={this.props.details?.poster_path}
         original_title={this.props.details?.original_title}
         release_date={this.props.details?.release_date}
         original_language={this.props.details?.original_language}
         genres={this.props.details?.genres}
         runtime={this.props.details?.runtime}
         popularity={this.props.details?.popularity}
         overview={this.props.details?.overview}
         credits={this.props.credits}
        />
        <div className='cardWrapper__body'>
        <div className='cardWrapper__body-left'>
        <CardActors credits={this.props.credits}/>
        <CardSocial reviews={this.props.reviews}/>
        <CardMedia/>
        <CardRecomand/>
        </div>
        <div className='cardWrapper__body-right'>
          <CardInfo/>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    credits: creditsSelector(state),
    genres: genresSelector(state),
    details: detailsSelector(state),
    reviews: reviewsSelector(state)
  };
};

export default connect(mapStateToProps, {
  requestCredits,
  getCredits,
  requestGenres,
  getGenres,
  requestDetails,
  getDeatails,
  requestReviews,
  getReviwes
})(MovieCardContainer);
