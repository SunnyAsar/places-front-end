import { combineReducers } from 'redux'
import userReducer from './userReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  user: userReducer,
  UI: uiReducer

})

export default rootReducer
