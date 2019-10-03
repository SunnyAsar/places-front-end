import { SET_ACTIVITIES, START_LOADER, STOP_LOADER, SET_ERRORS, SET_ACTIVITY } from './actionConstants'
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const fetchActivities = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADER })
    axios.get(`${BASE_URL}/activities`, { headers: { Authorization: localStorage.Token } })
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

export const fetchActivity = (id) => {
  return (dispatch) => {
    dispatch({ type: START_LOADER })
    axios.get(`${BASE_URL}/activities/${id}`, { headers: { Authorization: localStorage.Token } })
      .then(res => {
        dispatch({ type: SET_ACTIVITY, payload: res.data })
        dispatch({ type: STOP_LOADER })
      })
      .catch(err => {
        console.log(err.response)
        dispatch({ type: SET_ERRORS, payload: err.response.data })
        dispatch({ type: STOP_LOADER })
      })
  }
}
