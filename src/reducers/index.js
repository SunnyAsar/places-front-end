import { combineReducers } from 'redux'
import { registerReducer, authenticationReducer } from './authReducer'
import loader from './loaderReducer'

const rootReducer = combineReducers({
  register: registerReducer,
  authentication: authenticationReducer,
  loader
})

export default rootReducer
