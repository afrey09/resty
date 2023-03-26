import { useReducer, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        ...state,
        loading: true,
        requestParams: action.payload
      };
    case 'FINISH_REQUEST':
      return {
        ...state,
        loading: false,
        data: action.payload,
        history: [
          ...state.history,
          {
            requestParams: { ...state.requestParams },
            data: action.payload
          }
        ],
      }
      case 'CHANGE_HISTORY':
        return {
          ...state,
          ...state.history[action.payload], //
        }
    default:
      return state;
  }
};

function App() {

  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState)

  const callApi = (requestParams) => {
    let action = {
      type: 'START_REQUEST',
      payload: requestParams
    }
    dispatch(action)
  }

  const changeHistory = (idx) => {
    let action = {
    type: 'CHANGE_HISTORY',
    payload: idx,
  }
    dispatch(action)
  }
  useEffect(() => {

    const getData = async () => {
      if (state.requestParams.method && state.requestParams.url) {
        let response = await axios(state.requestParams);
        const data = response.data;
        let action = {
          type: 'FINISH_REQUEST',
          payload: data,
        }
        dispatch(action);
      }
    }
    getData();
  }, [state.requestParams]);


  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History history={state.history} changeHistory = {changeHistory}/>
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
}


export default App;
