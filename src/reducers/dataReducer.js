import { SET_ACTIVITIES, SET_ACTIVITY } from '../actions/actionConstants'

const initialState = {
  activities: [],
  activity: null
}

const activites = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    case SET_ACTIVITY:
      return {
        ...state,
        activity: action.payload
      }
    default:
      return state
  }
}

export default activites
