import React from "react";
import MovielistContainer from "./components/Home/MovielistContainer";
import { Switch, Route } from "react-router-dom";
import MovieCardContainer from "./components/MovieCard/MovieCardContainer";
import withMovies from "./Hoc/withmovies";
import WithHeaderFooter from "./Hoc/withHeaderFooter";
import FullList from "./components/FullActorsList/FullList";
import CardSocialAll from "./components/MovieCard/CardSocial/CardSocialAll";
import CardMediaAll from "./components/MovieCard/CardMedia/CardMediaAll";
import PosterStaffPage from "./components/MovieCard/Poster/PosterStaffPage";
import ResultsPage from "./components/SearchResultsPage/ResultsPage";
import NowPlaying from "./components/Movies/NowPlaying";
import Popular from "./components/Movies/Popular";
import Upcoming from "./components/Movies/Upcoming";
import TopRated from "./components/Movies/TopRated";
import PopularTv from "./components/Tv/PopularTv";
import AiringToday from "./components/Tv/AiringToday";
import OnTv from "./components/Tv/OnTv";
import TopRatedTv from "./components/Tv/TopRatedTv";
import PopularPeople from "./components/People/Popular";
import TvCardContainer from "./TvCard/TvCardContainer";
import Collection from "./components/Collection/Collection";
import withSuspense from "./Hoc/withSuspense";

function App() {
  return (
    <div className="App">
      <WithHeaderFooter>
        <Switch>
          <Route exact path="/" component={MovielistContainer} />
          <Route
            path="/movie-card/:id"
            component={withSuspense(MovieCardContainer)}
          />
          <Route
            path="/tv-card/:id"
            component={withSuspense(TvCardContainer)}
          />
          <Route path="/collection/:id" component={withSuspense(Collection)} />

          <Route
            exact
            path="/posterstaff/:id"
            component={withSuspense(PosterStaffPage)}
          />

          <Route path="/actorslist/:id" component={withSuspense(FullList)} />
          <Route
            exact
            path="/allreview/:id"
            component={withSuspense(CardSocialAll)}
          />
          <Route
            exact
            path="/allmedia/:id"
            component={withSuspense(CardMediaAll)}
          />
          <Route
            exact
            path="/sreachresults/"
            component={withSuspense(ResultsPage)}
          />
          <Route
            exact
            path="/movies/popular"
            component={withSuspense(Popular)}
          />
          <Route
            exact
            path="/movies/nowplaying"
            component={withSuspense(NowPlaying)}
          />
          <Route
            exact
            path="/movies/upcoming"
            component={withSuspense(Upcoming)}
          />
          <Route
            exact
            path="/movies/toprated"
            component={withSuspense(TopRated)}
          />
          <Route exact path="/tv/popular" component={withSuspense(PopularTv)} />
          <Route
            exact
            path="/tv/airingtoday"
            component={withSuspense(AiringToday)}
          />
          <Route exact path="/tv/ontv" component={withSuspense(OnTv)} />
          <Route
            exact
            path="/tv/toprated"
            component={withSuspense(TopRatedTv)}
          />
          <Route
            exact
            path="/people/popular"
            component={withSuspense(PopularPeople)}
          />
          <Route
            exact
            path="/collection"
            component={withSuspense(Collection)}
          />
        </Switch>
      </WithHeaderFooter>
    </div>
  );
}

export default App;
