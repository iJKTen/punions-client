import { useReducer, useEffect} from 'react';

const HttpAction = Object.freeze({
  'send': 'SEND',
  'response': 'RESPONSE',
  'error': 'ERROR',
  'clear': 'CLEAR'
});

const httpReducer = (curState, action) => {
  switch(action.type) {
    case HttpAction.send:
      return { loading: true, error: null, data: null }
    case HttpAction.response:
      return { ...curState, loading: false, data: action.responseData }
    case HttpAction.error:
      return { loading: false, error: action.errorMessage }
    case HttpAction.clear:
      return { ...curState, error: null }
    default:
      throw new Error(`Unknown action of type ${action.type} passed.`);
  }
};

const useHttp = () => {
  const initialState = {
    loading: false,
    error: null,
    data: null
  }
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  useEffect(() => {
    const sendRequest = () => {
      dispatch({ type: HttpAction.send });
      
      fetch('https://xgjpf1gn11.execute-api.us-east-1.amazonaws.com/dev/v1/game/create', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        dispatch({ 
          type: HttpAction.response, 
          responseData: jsonData
        })
      })
      .catch((error) => {
        dispatch({
          type: HttpAction.error, 
          errorMessage: error.message
        })
      });
    };

    sendRequest();
  }, [])

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error
  }
}

export default useHttp;
