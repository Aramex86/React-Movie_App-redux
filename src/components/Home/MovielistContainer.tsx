import React, { Component } from "react";
import { connect } from "react-redux";

import { MovieListType, PopularType } from "../../Types/Types";
import {
  getMoviesList,
  requestMovieList,
} from "../Store/Reducers/MovieListReducer";

import {
  isFetchingSelector,
  moviesSelector,
} from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import MovieList from "./Movielist";
import HeroSection from "./Hero";
import { popularSelector } from "../Store/Selectors/HomePageSelector";
import { requestPopular } from "../Store/Reducers/HomePageReducer";

type MapStateToPropsType = {
  movieList: Array<MovieListType>;
  isFetching: boolean;
  movies?: any;
  popularMovies: Array<PopularType>;
};

type MapDispatchPropsType = {
  getMoviesList: (movieList: Array<MovieListType>) => void;
  requestMovieList: () => void;
  requestPopular: () => void;
};

type OwnPropsType = {};

type PropsType = MapStateToPropsType &
  MapDispatchPropsType &
  OwnPropsType &
  AppStateType;

class MovielistContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestMovieList();
    this.props.requestPopular();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <HeroSection bgPopular={this.props.popularMovies} />
        <MovieList
          movieList={this.props.movieList}
          isFetching={this.props.isFetching}
        />
      </>
    );
  }
}

export let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    movieList: moviesSelector(state),
    isFetching: isFetchingSelector(state),
    popularMovies: popularSelector(state),
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { requestMovieList, getMoviesList, requestPopular })(
  MovielistContainer
);
