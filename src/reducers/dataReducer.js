import {
  SET_ACTIVITY_CATEGORIES,
  SET_ACTIVITIES,
  ADD_ACTIVITY,
  SET_ACTIVITY,
  SET_COMMENTS,
  SET_COMMENT
} from '../actions/actionConstants'

const initialState = {
  categories: [],
  activities: [],
  activity: null,
  comments: []
}

const activites = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITY_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
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
    case ADD_ACTIVITY:
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
