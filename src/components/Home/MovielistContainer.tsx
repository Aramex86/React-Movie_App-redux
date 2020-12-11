import React, {Component} from 'react';
import {connect} from 'react-redux';

import {MovieListType, PopularType, VideoType} from '../../Types/Types';
import {requestMovieList} from '../Store/Reducers/MovieListReducer';

import {
  isFetchingSelector,
  moviesSelector,
} from '../Store/Selectors/MovieSelector';
import {AppStateType} from '../Store/store';
import MovieList from './Movielist';
import HeroSection from './Hero';
import Popular from './Popular/Popular';
import {
  //homeVideosSelector,
  popularSelector,
} from '../Store/Selectors/HomePageSelector';
import {
  requestPopularMovies,
  //requestHomeMovies,
} from '../Store/Reducers/HomePageReducer';
import FreeToWatch from './FreeToWatch/FreeToWatch';
import Trailers from './LatestTrailers/Trailers';
import Tranding from './Tranding/Tranding';

type MapStateToPropsType = {
  movieList: Array<MovieListType>;
  isFetching: boolean;
  movies?: any;
  popularMovies: Array<PopularType>;
  //homeVideo: Array<VideoType>;
};

type MapDispatchPropsType = {
  requestMovieList: () => void;
  requestPopularMovies: (pagenr: any) => void;
};

type OwnPropsType = {};

type PropsType = MapStateToPropsType &
  MapDispatchPropsType &
  OwnPropsType &
  AppStateType;

class MovielistContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.requestMovieList();
    this.props.requestPopularMovies(Math.floor(Math.random() * 20) + 1);
  }

  render() {
    //console.log(this.props);
    return (
      <>
        <HeroSection bgPopular={this.props.popularMovies} />
        <Popular popularMovies={this.props.popularMovies} />
        <FreeToWatch />

        <Trailers />
        <Tranding />

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
>(mapStateToProps, {requestMovieList, requestPopularMovies})(
  MovielistContainer
);
