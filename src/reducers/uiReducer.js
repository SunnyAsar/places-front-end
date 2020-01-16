import { START_LOADER, STOP_LOADER, SET_ERRORS, CLEAR_ERRORS } from '../actions/actionConstants'

const UiState = {
  loading: false,
  errors: {}
}

const loading = (state = UiState, action) => {
  switch (action.type) {
    case START_LOADER:
      return { ...state, loading: true }
    case STOP_LOADER:
      return { ...state, loading: false }
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: {}
      }
    default:
      return UiState
  }
}

export default loading
