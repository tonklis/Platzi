import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
//import data from '../api.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//logger educativo
const loggerEducativo = ({getState, dispatch}) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar esta acción', action)
  const returnValue = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return returnValue
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
      //loggerEducativo
    )
  )
);

const homeContainer = document.getElementById('home-container');

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer
);
