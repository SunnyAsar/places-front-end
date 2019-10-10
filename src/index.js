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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export const Current = () => {
//   let current_user
//   if (localStorage.Token) {
//     const code = jwt_decode(localStorage.Token)
//     const { email, first_name, last_name, id } = code.userData
//     const user = {
//       id,
//       email,
//       first_name,
//       last_name,
//       exp: code.exp,
//       token: localStorage.Token
//     }
//     store.dispatch({ type: 'SET_USER', payload: user })
//     current_user = user
//   }
//   return current_user
// }
const user1 = localStorage.User
console.log(JSON.parse(user1))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
