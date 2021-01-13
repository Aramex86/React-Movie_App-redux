import React, { Component } from "react";
import { connect } from "react-redux";
import {
  tvCastSelector,
  tvDetailsSelector,
  tvExternalSelector,
  tvKeywordsSelector,
  tvRecomandSelector,
  tvReviewsSelector,
  tvVideosSelector,
} from "../components/Store/Selectors/Tvselector";
import { AppStateType } from "../components/Store/store";
import {
  getTvDeatails,
  requestTvDetails,
  requestCredits,
  getCreditsTv,
  getTvReviews,
  requestTvReviews,
  requestVideos,
  getVideos,
  getRecomand,
  requestRecomand,
  requestKeywords,
  getKeywords,
  getExternal,
  requestExternal,
} from "../components/Store/Reducers/TvReducer";

//import MovieCrad from "./MovieCrad";
import CradHeader from "./TvCardHeader";
import CardPoster from "./PosterTv/CardPosterTv";
import CardActors from "./CardActors";
import CardSocial from "./CardSocial/CardSocial";
import CardMedia from "./CardMedia/CardMedia";
import CardRecomand from "./Recomandations/CardRecomand";
import CardInfo from "./CardInfo";
import PopupTrailer from "./PopupTrailer";
import { TvPropsType } from "../Types/Types";
import CurrentSeason from "./CurrentSeason/CurrentSeason";

type IState = {
  playTrailer: boolean;
};

class TvCardContainer extends Component<TvPropsType, IState> {
  state = {
    playTrailer: false,
  };

  componentDidMount() {
    const tvId = this.props.match.params.id;
    this.props.requestTvDetails(tvId);
    this.props.requestCredits(tvId);
    this.props.requestTvReviews(tvId);
    this.props.requestVideos(tvId);
    this.props.requestRecomand(tvId);
    this.props.requestKeywords(tvId);
    this.props.requestExternal(tvId);
  }
  componentDidUpdate(prevProps: TvPropsType) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const tvId = this.props.match.params.id;
      this.props.requestTvDetails(tvId);
      this.props.requestCredits(tvId);
      this.props.requestTvReviews(tvId);
      this.props.requestVideos(tvId);
      this.props.requestRecomand(tvId);
      this.props.requestKeywords(tvId);
      this.props.requestExternal(tvId);
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
    console.log(this.props);

    return (
      <div className="cardWrapper">
        <PopupTrailer
          videos={this.props.videos}
          playState={this.state}
          closePlay={this.closePlay}
        />
        <CradHeader />
        <CardPoster
          details={this.props.details}
          original_title={this.props.details?.name}
          release_date={this.props.details?.first_air_date}
          original_language={this.props.details?.original_language}
          genres={this.props.details?.genres}
          runtime={this.props.details?.episode_run_time}
          popularity={this.props.details?.popularity}
          overview={this.props.details?.overview}
          credits={this.props.credits}
          handaleplay={this.handaleplay}
        />
        <div className="cardWrapper__body">
          <div className="cardWrapper__body-left">
            <CardActors credits={this.props.credits} />
            <CurrentSeason />
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
              social={this.props.external}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    details: tvDetailsSelector(state),
    credits: tvCastSelector(state),
    reviews: tvReviewsSelector(state),
    videos: tvVideosSelector(state),
    recomand: tvRecomandSelector(state),
    keywords: tvKeywordsSelector(state),
    external: tvExternalSelector(state),
  };
};

export default connect(mapStateToProps, {
  requestTvDetails,
  getTvDeatails,
  requestCredits,
  getCreditsTv,
  getTvReviews,
  requestTvReviews,
  requestVideos,
  getVideos,
  getRecomand,
  requestRecomand,
  requestKeywords,
  getKeywords,
  getExternal,
  requestExternal,
})(TvCardContainer);
