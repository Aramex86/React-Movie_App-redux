import React, { Component } from "react";
import { connect } from "react-redux";
import { WithMoviePropsType } from "../../Types/Types";

import { creditsSelector } from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import { requestCredits, getCredits } from "../Store/Reducers/MovieListReducer";

import MovieCrad from "./MovieCrad";

class MovieCardContainer extends Component<WithMoviePropsType> {
  componentDidMount() {
    const movieId = this.props.match.params.id;

    this.props.requestCredits(movieId);
  }

  render() {
   // console.log(this.props);
    return (
      <MovieCrad match={this.props.match} movieList={this.props.movieList} credits={this.props.credits}/>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    credits: creditsSelector(state),
  };
};

export default connect(mapStateToProps, { requestCredits, getCredits })(
  MovieCardContainer
);
