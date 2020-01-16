/* eslint-disable camelcase */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as jwt_decode from 'jwt-decode'
import { logOutUser, getUser } from './actions/userActions'

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

const token = localStorage.Token
if (token) {
  const decoded = jwt_decode(token)
  const now = Date.now()
  const token_time = decoded.exp * 1000
  if (token_time < now) {
    store.dispatch(logOutUser())
  } else {
    store.dispatch(getUser())
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
