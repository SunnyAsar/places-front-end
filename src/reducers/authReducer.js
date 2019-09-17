import { SIGN_UP, SIGN_UP_DONE, LOGIN, LOGOUT } from '../actions/actionConstants'

const intialState = {
  done: false
}

const registerReducer = (state = intialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {}
    case SIGN_UP_DONE:
      return {
        done: true,
        data: action.data
      }
    default:
      return intialState
  }
}

const initialLoginState = {
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  id: '',
  created_at: ''
}

const authenticationReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action)
      return action.data
    case LOGOUT:
      return {
        first_name: '',
        last_name: '',
        token: '',
        id: '',
        created_at: ''
      }
    default:
      return state
  }
}

export { registerReducer, authenticationReducer }
