import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { GlobalStyle } from './components/GlobalStyled';
import Home from './screens/Home';
import Game from './screens/Game';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <div className="App">
        <GlobalStyle />
        <Header />
        <main>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/:gameId">
                <Game />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
