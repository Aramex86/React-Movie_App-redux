import React from "react";
import NavBar from "./components/NaigationBar/NavBar";
import MovielistContainer from "./components/MovieList/MovielistContainer";
import { Switch, Route} from "react-router-dom";
import MovieCardContainer from "./components/MovieCard/MovieCardContainer";
import withMovies from "./Hoc/withmovies";




function App(){
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={MovielistContainer}/>
        <Route path='/movie-card/:id' component={withMovies(MovieCardContainer)}/>
      </Switch>

    </div>
  );
}

export default App;
