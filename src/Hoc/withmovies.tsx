import React from "react";
import {
  moviesSelector,
} from "../components/Store/Selectors/MovieSelector";
import { AppStateType } from "../components/Store/store";
import { connect } from "react-redux";
import { WithMoviePropsType } from "../Types/Types";
import { requestMovieList } from "../components/Store/Reducers/MovieListReducer";

let mapStateToPropsForMovie = (state: AppStateType) => {
  return {
    movieList: moviesSelector(state),
  };
};

const withMovies = (OriginalComponet: any) => {
  class NewComponent extends React.Component<WithMoviePropsType> {
    componentDidMount() {
      this.props.requestMovieList();
    }

    render() {
      return (
        <OriginalComponet
          movieList={this.props.movieList}
          match={this.props.match}
        />
      );
    }
  }

  let ConnectedWithMovies = connect(mapStateToPropsForMovie, {
    requestMovieList,
  })(NewComponent);
  return ConnectedWithMovies;
};

export default withMovies;
