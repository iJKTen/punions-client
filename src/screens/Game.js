import React from 'react';
import AddPlayer from '../components/AddPlayer';
import { useParams } from 'react-router-dom';
import useWebSocket from '../Hooks/useWebSocket';

const Game = () => {
  const params = useParams();
  const { state, sendMessage } = useWebSocket();

  const addPlayer = (e) => {
    e.preventDefault();
    const msg = {
      "action": "addPlayerToGame",
      "payload": {
        "gameId": params.gameId,
        "player": {
          "name": "John Doe"
        }
      }
    }

    sendMessage(msg);
  };

  return (
    <div>
      <AddPlayer
        addPlayer={addPlayer}
      />
    </div>
  )
}

export default Game;
