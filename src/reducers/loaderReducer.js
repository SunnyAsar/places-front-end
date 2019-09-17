import { START_LOADER, STOP_LOADER } from '../actions/actionConstants'

const loader = (state = true, action) => {
  switch (action.type) {
    case START_LOADER:
      return true
    case STOP_LOADER:
      return false
    default:
      return state
  }
}

export default loader
