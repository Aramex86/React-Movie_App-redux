import React, { Component } from "react";
import { connect } from "react-redux";
import { WithMoviePropsType } from "../../Types/Types";

import {
  creditsSelector,
  genresSelector,
} from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import {
  requestCredits,
  getCredits,
  getGenres,
  requestGenres,
} from "../Store/Reducers/MovieListReducer";

import MovieCrad from "./MovieCrad";
import MovieCardHeader from "./MovieCardHeader";
import CradHeader from "./CardHeader";
import CardPoster from "./CardPoster";
import CardActors from "./CardActors";
import  CardSocial  from "./CardSocial";
class MovieCardContainer extends Component<WithMoviePropsType> {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.requestCredits(movieId);
    this.props.requestGenres();
  }

  render() {
    console.log(this.props);
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
        <CardPoster />
        <CardActors />
        <CardSocial/>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    credits: creditsSelector(state),
    genres: genresSelector(state),
  };
};

export default connect(mapStateToProps, {
  requestCredits,
  getCredits,
  requestGenres,
  getGenres,
})(MovieCardContainer);
