import React, { Component } from "react";
import { connect } from "react-redux";
import { WithMoviePropsType } from "../../Types/Types";

import {
  creditsSelector,
  detailsSelector,
  errorSelector,
  genresSelector,
  keywordsSelector,
  recomadSelector,
  reviewsSelector,
  viedoSelector,
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
  getReviwes,
  requestVideos,
  getVideos,
  requestRecomand,
  getRecomand,
  requestKeywords,
  getKeywords,
} from "../Store/Reducers/MovieListReducer";

//import MovieCrad from "./MovieCrad";
import CradHeader from "../Common/CardHeader";
import CardPoster from "./Poster/CardPoster";
import CardActors from "./CardActors";
import CardSocial from "./CardSocial/CardSocial";
import CardMedia from "./CardMedia/CardMedia";
import CardRecomand from "./Recomandations/CardRecomand";
import CardInfo from "./CardInfo";
import PopupTrailer from "./PopupTrailer";
import PageNotFound from "../Common/PageNotFound";

type IState = {
  playTrailer: boolean;
};

class MovieCardContainer extends Component<WithMoviePropsType, IState> {
  state = {
    playTrailer: false,
  };

  refetchData() {
    const movieId = this.props.match.params.id;
    this.props.requestCredits(movieId);
    this.props.requestGenres();
    this.props.requestDetails(movieId);
    this.props.requestReviews(movieId);
    this.props.requestVideos(movieId);
    this.props.requestRecomand(movieId);
    this.props.requestKeywords(movieId);
  }

  componentDidMount() {
    this.refetchData();
  }

  componentDidUpdate(prevProps: WithMoviePropsType) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.refetchData();
    }
  }

  handaleplay = () => {
    this.setState({
      playTrailer: true,
    });
  };

  closePlay = () => {
    this.setState({
      playTrailer: false,
    });
  };


  render() {
    console.log(
      this.props
    );
   
    return (
      <div className="cardWrapper">
        {this.props.errors ?<PageNotFound/>:
        <>
        <PopupTrailer
          videos={this.props.videos}
          playState={this.state}
          closePlay={this.closePlay}
        />
        <CradHeader />
        <CardPoster
          details={this.props.details}
          original_title={this.props.details?.original_title}
          release_date={this.props.details?.release_date}
          original_language={this.props.details?.original_language}
          genres={this.props.details?.genres}
          runtime={this.props.details?.runtime}
          popularity={this.props.details?.popularity}
          overview={this.props.details?.overview}
          credits={this.props.credits}
          handaleplay={this.handaleplay}
        />
        <div className="cardWrapper__body">
          <div className="cardWrapper__body-left">
            <CardActors credits={this.props.credits} />
            <CardSocial reviews={this.props.reviews} />
            <CardMedia
              details={this.props.details}
              videos={this.props.videos}
            />
            <CardRecomand recomand={this.props.recomand} />
          </div>
          <div className="cardWrapper__body-right">
            <CardInfo
              keywords={this.props.keywords}
              details={this.props.details}
            />
          </div>
        </div></>}
        {/* <PopupTrailer
          videos={this.props.videos}
          playState={this.state}
          closePlay={this.closePlay}
        />
        <CradHeader />
        <CardPoster
          details={this.props.details}
          original_title={this.props.details?.original_title}
          release_date={this.props.details?.release_date}
          original_language={this.props.details?.original_language}
          genres={this.props.details?.genres}
          runtime={this.props.details?.runtime}
          popularity={this.props.details?.popularity}
          overview={this.props.details?.overview}
          credits={this.props.credits}
          handaleplay={this.handaleplay}
        />
        <div className="cardWrapper__body">
          <div className="cardWrapper__body-left">
            <CardActors credits={this.props.credits} />
            <CardSocial reviews={this.props.reviews} />
            <CardMedia
              details={this.props.details}
              videos={this.props.videos}
            />
            <CardRecomand recomand={this.props.recomand} />
          </div>
          <div className="cardWrapper__body-right">
            <CardInfo
              keywords={this.props.keywords}
              details={this.props.details}
            />
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    credits: creditsSelector(state),
    genres: genresSelector(state),
    details: detailsSelector(state),
    reviews: reviewsSelector(state),
    videos: viedoSelector(state),
    recomand: recomadSelector(state),
    keywords: keywordsSelector(state),
    errors:errorSelector(state),
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
  getReviwes,
  requestVideos,
  getVideos,
  requestRecomand,
  getRecomand,
  requestKeywords,
  getKeywords,
})(MovieCardContainer);
