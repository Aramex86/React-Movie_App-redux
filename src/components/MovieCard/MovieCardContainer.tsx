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

class MovieCardContainer extends Component<WithMoviePropsType> {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.requestCredits(movieId);
    this.props.requestGenres();
  }

  render() {
    //console.log(this.props);
    return (
      <MovieCrad
        match={this.props.match}
        movieList={this.props.movieList}
        credits={this.props.credits}
        genres={this.props.genres}
      />
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
