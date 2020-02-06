import {
  SET_ACTIVITIES,
  ADD_ACTIVITY,
  SET_ACTIVITY_CATEGORIES,
  START_LOADER,
  STOP_LOADER,
  SET_ERRORS,
  SET_ACTIVITY,
  SET_COMMENTS,
  SET_COMMENT
} from './actionConstants'
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

export const fetchCategories = () => {
  console.log('in the form')

  return (dispatch) => {
    axios
      .get(`${BASE_URL}/categories`, { headers: { Authorization: localStorage.Token } })
      .then((res) => {
        console.log(res.data)
        console.log('got the cats')
        dispatch({ type: SET_ACTIVITY_CATEGORIES, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err.response.data })
      })
  }
}

export const fetchActivities = () => (dispatch) => {
  dispatch({ type: START_LOADER })
  axios
    .get(`${BASE_URL}/activities`, { headers: { Authorization: localStorage.Token } })
    .then((res) => {
      dispatch({ type: SET_ACTIVITIES, payload: res.data })
      dispatch({ type: STOP_LOADER })
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch({ type: STOP_LOADER })
    })
}

export const fetchActivity = (id) => {
  return (dispatch) => {
    dispatch({ type: START_LOADER })
    axios
      .get(`${BASE_URL}/activities/${id}`, { headers: { Authorization: localStorage.Token } })
      .then((res) => {
        dispatch({ type: SET_ACTIVITY, payload: res.data })
        dispatch({ type: STOP_LOADER })
        dispatch(fetchActivityCommnets(id))
      })
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err.response.data })
        dispatch({ type: STOP_LOADER })
      })
  }
}

export const fetchActivityCommnets = (activityId) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/activities/${activityId}/comments`, { headers: { Authorization: localStorage.Token } })
      .then((res) => {
        console.log(res.data)
        dispatch({ type: SET_COMMENTS, payload: res.data })
      })
      .catch((err) => console.log(err.response.data))
  }
}

export const postComment = (data, activityId) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/activities/${activityId}/comments`, data, {
        headers: { Authorization: localStorage.Token }
      })
      .then((res) => {
        console.log(res.data)
        dispatch({ type: SET_COMMENT, payload: res.data })
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export const postActivity = (data) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/activities`, data, { headers: { Authorization: localStorage.Token } })
      .then((res) => {
        console.log(res.data)
        dispatch({ type: ADD_ACTIVITY, payload: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
