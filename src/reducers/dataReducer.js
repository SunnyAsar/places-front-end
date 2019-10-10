import { SET_ACTIVITIES, SET_ACTIVITY, SET_COMMENTS } from '../actions/actionConstants'

const initialState = {
  activities: [],
  activity: null,
  comments: []
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
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state
  }
}

export default activites
