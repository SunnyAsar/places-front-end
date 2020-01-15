import axios from 'axios'
import * as jwt_decode from 'jwt-decode'
import { SET_ERRORS, SET_USER, START_LOADER, STOP_LOADER, CLEAR_ERRORS, UN_AUTHENTICATE_USER } from './actionConstants'
const BASE_URL = 'http://localhost:4000'

export const loginUser = (userData, history) => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: START_LOADER })
    axios.post(`${BASE_URL}/auth/login`, userData)
      .then(res => {
        const { data: { token } } = res
        localStorage.setItem('Token', token)
        axios.defaults.headers.common['Authorization'] = token
        dispatch(getUser())
        dispatch({ type: STOP_LOADER })
        history.push('/')
      })
      .catch((err) => {
        dispatch({ type: SET_ERRORS, payload: err.response.data })
        dispatch({ type: STOP_LOADER })
      })
  }
}

export const getUser = () => {
  console.log('getting user')
  return (dispatch) => {
    axios.get(`${BASE_URL}/user`, { headers: { Authorization: localStorage.Token } })
      .then(res => {
        console.log(res.data)
        dispatch({ type: SET_USER, payload: res.data })
      })
      .catch(err => {
        console.log(err.response.data)
        dispatch({ type: SET_ERRORS })
      })
  }
}

export const signUpUser = (userData, history) => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: START_LOADER })
    axios.post(`${BASE_URL}/users`, userData)
      .then(res => {
        console.log(res.data)
        dispatch({ type: STOP_LOADER })
        dispatch({ type: CLEAR_ERRORS })
        history.push('/login')
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: SET_ERRORS, payload: err.response.data.errors })
        dispatch({ type: STOP_LOADER })
      })
  }
}

export const logOutUser = () => {
  return (dispatch) => {
    console.log('going out .......')
    localStorage.removeItem('Token')
    // dispatch({ type: UN_AUTHENTICATE_USER })
    window.location.href = '/login'
  }
}
