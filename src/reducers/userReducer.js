
import { SET_USER, UN_AUTHENTICATE_USER } from '../actions/actionConstants'

const userState = {
  authenticated: false,
  credentials: {}
}

const user = (state = userState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        credentials: action.payload
      }
    case UN_AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: false,
        credentials: {}
      }
    default:
      return state
  }
}

export default user
