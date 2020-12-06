import React, { Component } from "react";
import { connect } from "react-redux";

import { MovieListType, PopularType } from "../../Types/Types";
import {
  requestMovieList,
} from "../Store/Reducers/MovieListReducer";

import {
  isFetchingSelector,
  moviesSelector,
} from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import MovieList from "./Movielist";
import HeroSection from "./Hero";
import Popular from './Popular';
import { popularSelector } from "../Store/Selectors/HomePageSelector";
import { requestPopularMovies } from "../Store/Reducers/HomePageReducer";

type MapStateToPropsType = {
  movieList: Array<MovieListType>;
  isFetching: boolean;
  movies?: any;
  popularMovies: Array<PopularType>;
};

type MapDispatchPropsType = {
  requestMovieList: () => void;
  requestPopularMovies: () => void;
};

type OwnPropsType = {};

type PropsType = MapStateToPropsType &
  MapDispatchPropsType &
  OwnPropsType &
  AppStateType;

class MovielistContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestMovieList();
    this.props.requestPopularMovies();
  }

  render() {
   // console.log(this.props);
    return (
      <>
        <HeroSection bgPopular={this.props.popularMovies} />
        <Popular popularMovies={this.props.popularMovies}/>
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
>(mapStateToProps, { requestMovieList, requestPopularMovies })(
  MovielistContainer
);
