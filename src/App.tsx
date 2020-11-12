import React from "react";
import MovielistContainer from "./components/MovieList/MovielistContainer";
import { Switch, Route } from "react-router-dom";
import MovieCardContainer from "./components/MovieCard/MovieCardContainer";
import withMovies from "./Hoc/withmovies";
import WithHeaderFooter from "./Hoc/withHeaderFooter";

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
        </Switch>
      </WithHeaderFooter>
    </div>
  );
}

export default App;
