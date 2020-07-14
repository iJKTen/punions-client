import { useEffect, useReducer } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const GameAction = Object.freeze({
  'open': 'open',
  'close': 'close',
  'error': 'error',
  'playerAdded': 'playerAdded'
})

const webSocketReducer = (state, action) => {
  switch (action.type) {
    case GameAction.open:
      return {
        ...state,
        status: GameAction.open
      }
    case GameAction.playerAdded:
      const data = JSON.parse(action.payload);
      return {
        ...state,
        status: GameAction.playerAdded,
        players: data.Attributes.players
      }
    case GameAction.close:
      return {
        ...state,
        status: GameAction.close
      }
    case GameAction.error:
      return {
        ...state,
        status: GameAction.error
      }
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

const useWebSocket = () => {
  const initialState = {
    status: 'initial',
    error: null
  }
  const [state, dispatch] = useReducer(webSocketReducer, initialState);
  const client = new W3CWebSocket('wss://re8n4hrtai.execute-api.us-east-1.amazonaws.com/dev/', 'echo-protocol');

  const sendMessage = (msg) => {
    client.send(JSON.stringify(msg));
  }

  useEffect(() => {
    client.onopen = () => {
    };

    client.onmessage = (e) => {
      const data = JSON.parse(e.data);
      dispatch({
        type: data.action,
        payload: e.data
      });
    }

    client.onclose = () => {
      console.log('closed');
    }

    client.onerror = (e) => {
      console.log('error', e)
    }

  }, [client.onopen, client.onmessage, client.onclose, client.onerror]);

  return {
    state,
    sendMessage
  }
}

export default useWebSocket;
