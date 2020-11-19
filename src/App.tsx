import React from "react";
import MovielistContainer from "./components/MovieList/MovielistContainer";
import { Switch, Route } from "react-router-dom";
import MovieCardContainer from "./components/MovieCard/MovieCardContainer";
import withMovies from "./Hoc/withmovies";
import WithHeaderFooter from "./Hoc/withHeaderFooter";
import FullList from "./components/FullActorsList/FullList";
import CardSocialAll from "./components/MovieCard/CardSocial/CardSocialAll";
import CardMediaAll from "./components/MovieCard/CardMedia/CardMediaAll";
import PosterStaffPage from "./components/MovieCard/Poster/PosterStaffPage";

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
          <Route
            path="/actorslist/"
            component={withMovies(FullList)}
          />
          <Route
            exact
            path="/allreview/"
            component={withMovies(CardSocialAll)}
          />
          <Route
            exact
            path="/allmedia/"
            component={withMovies(CardMediaAll)}
          />
          <Route
            
            path="/posterstaff/:id"
            component={PosterStaffPage}
          />
        </Switch>
      </WithHeaderFooter>
    </div>
  );
}

export default App;
