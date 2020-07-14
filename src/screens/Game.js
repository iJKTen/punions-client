import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import AddPlayer from '../components/AddPlayer';
import { useParams } from 'react-router-dom';

const Game = () => {
  const params = useParams();
  // const [name, setName] = useState({ name: '' });
  const client = new W3CWebSocket('wss://re8n4hrtai.execute-api.us-east-1.amazonaws.com/dev/', 'echo-protocol');

  useEffect(() => {

    client.onopen = () => {
      console.log("WebSocket Client Connected!");
    };

    client.onmessage = (e) => {
      console.log(e, e.data);
    }

    client.onclose = () => {
      console.log('closed');
    }

    client.onerror = (e) => {
      console.log('error', e)
    }

  });

  const addPlayer = (e) => {
    e.preventDefault();
    console.log(params.gameId)
    const msg = {
      "action": "addPlayerToGame",
      "payload": {
        "gameId": params.gameId,
        "player": {
          "name": "John Doe"
        }
      }
    }
    console.log(JSON.stringify(msg))
    if (client.readyState === client.OPEN)
      client.send(JSON.stringify(msg));
  };

  return (
    <div>test
      <AddPlayer addPlayer={addPlayer} />
    </div>
  )
}

export default Game;
