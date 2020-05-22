import React from 'react';
import { Router } from '@reach/router';
import Home from './screens/Home';
import Game from './screens/Game';

function App() {
  return (
    <main>
      <Router>
        <Home path="/" />
        <Game path="game/:gameId" />
      </Router>
    </main>
  );
}

export default App;
