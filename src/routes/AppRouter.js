import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MovieDetail } from "../components/movie/MovieDetail";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" exact component={MovieDetail} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </>
    </Router>
  );
};
