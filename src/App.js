import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import New from './components/New'
import All from './components/All';
import BeerDetails from './components/BeerDetails';
import Random from './components/Random'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact path="/beers"
          render={() => {
            return <All />;
          }}
        />
        <Route
          path="/new-beer"
          render={() => {
            return <New />;
          }}
        />
        <Route
          path="/beers/:beerId"
          render={(routeProps) => {
            return <BeerDetails {...routeProps}/>;
          }}
        />
        {/* <Route
          path="/random-beer"
          render={() => {
            return <Random />;
          }}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
