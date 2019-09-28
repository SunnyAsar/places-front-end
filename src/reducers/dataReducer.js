import { SET_ACTIVITIES } from '../actions/actionConstants'

const initialState = {
  activities: []
}

const activites = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    default:
      return state
  }
}

export default activites
