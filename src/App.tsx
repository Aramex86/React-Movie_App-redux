import React from 'react';
import MovielistContainer from './components/Home/MovielistContainer';
import {Switch, Route} from 'react-router-dom';
import MovieCardContainer from './components/MovieCard/MovieCardContainer';
import withMovies from './Hoc/withmovies';
import WithHeaderFooter from './Hoc/withHeaderFooter';
import FullList from './components/FullActorsList/FullList';
import CardSocialAll from './components/MovieCard/CardSocial/CardSocialAll';
import CardMediaAll from './components/MovieCard/CardMedia/CardMediaAll';
import PosterStaffPage from './components/MovieCard/Poster/PosterStaffPage';
import ResultsPage from './components/SearchResultsPage/ResultsPage';
import NowPlaying from './components/Movies/NowPlaying';
import Popular from './components/Movies/Popular';
import Upcoming from './components/Movies/Upcoming';
import TopRated from './components/Movies/TopRated';
import PopularTv from './components/Tv/PopularTv';
import AiringToday from './components/Tv/AiringToday';
import OnTv from './components/Tv/OnTv';
import TopRatedTv from './components/Tv/TopRatedTv';

function App() {
  return (
    <div className="App">
      <WithHeaderFooter>
        <Switch>
          <Route exact path="/" component={MovielistContainer} />
          <Route
            path="/movie-card/:id"
            component={withMovies(MovieCardContainer)}
          />
          <Route exact path="/posterstaff/:id" component={PosterStaffPage} />

          <Route path="/actorslist/" component={withMovies(FullList)} />
          <Route
            exact
            path="/allreview/"
            component={withMovies(CardSocialAll)}
          />
          <Route exact path="/allmedia/" component={withMovies(CardMediaAll)} />
          <Route exact path="/sreachresults/" component={ResultsPage} />
          <Route exact path="/movies/popular" component={Popular} />
          <Route exact path="/movies/nowplaying" component={NowPlaying} />
          <Route exact path="/movies/upcoming" component={Upcoming} />
          <Route exact path="/movies/toprated" component={TopRated} />
          <Route exact path="/tv/popular" component={PopularTv} />
          <Route exact path="/tv/airingtoday" component={AiringToday} />
          <Route exact path="/tv/ontv" component={OnTv} />
          <Route exact path="/tv/toprated" component={TopRatedTv} />

        </Switch>
      </WithHeaderFooter>
    </div>
  );
}

export default App;
