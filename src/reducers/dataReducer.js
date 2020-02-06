import { SET_ACTIVITIES, POST_ACTIVITY, SET_ACTIVITY, SET_COMMENTS, SET_COMMENT } from '../actions/actionConstants'

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
    case POST_ACTIVITY:
      return {
        ...state,
        activites: [...action.payload, ...activites]
      }
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case SET_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    default:
      return state
  }
}

export default activites
