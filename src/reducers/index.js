import { combineReducers } from 'redux'
import userReducer from './userReducer'
import uiReducer from './uiReducer'
import dataReducer from './dataReducer'
const rootReducer = combineReducers({
  user: userReducer,
  UI: uiReducer,
  data: dataReducer

})

export default rootReducer
