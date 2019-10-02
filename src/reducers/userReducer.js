
import { SET_USER, UN_AUTHENTICATE_USER } from "../actions/actionConstants"

const initialState = {
  token: '',
  first_name: '',
  last_name: '',
  email: '',
  id: '',
  created_at: ''

}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case UN_AUTHENTICATE_USER:
      return {
        ...state,
        initialState
      }
    default:
      return initialState
  }
}

export default user
