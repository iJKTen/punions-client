import React from 'react';
import { Router } from '@reach/router';
import {GlobalStyle} from './components/GlobalStyled';
import Home from './screens/Home';
import Game from './screens/Game';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header></header>
      <main>
        <Router>
          <Home path="/" />
          <Game path="game/:gameId" />
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
