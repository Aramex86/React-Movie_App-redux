import React, { Component } from "react";
import { connect } from "react-redux";

import { MovieListType } from "../../Types/Types";
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

type MapStateToPropsType = {
  movieList: Array<MovieListType>;
  isFetching: boolean;
  movies?: any;
};

type MapDispatchPropsType = {
  getMoviesList: (movieList: Array<MovieListType>) => void;
  requestMovieList: () => void;
};

type OwnPropsType = {};

type PropsType = MapStateToPropsType &
  MapDispatchPropsType &
  OwnPropsType &
  AppStateType;

class MovielistContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestMovieList();
  }

  render() {
    //console.log(this.props);
    return (
      <MovieList
        movieList={this.props.movieList}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    movieList: moviesSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { requestMovieList, getMoviesList })(MovielistContainer);
