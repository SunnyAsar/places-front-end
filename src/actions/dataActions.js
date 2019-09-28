import { SET_ACTIVITIES, START_LOADER, STOP_LOADER, SET_ERRORS } from './actionConstants'
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const fetchActivities = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADER })
    axios.get(`${BASE_URL}/activities`)
      .then(res => {
        console.log(res)
        dispatch({ type: SET_ACTIVITIES, payload: res.data })
        dispatch({ type: STOP_LOADER })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: SET_ERRORS, payload: err.response.data })
        dispatch({ type: STOP_LOADER })
      })
  }
}
