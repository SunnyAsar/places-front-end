import axios from 'axios'
import { SET_ERRORS, SET_USER, START_LOADER, STOP_LOADER, CLEAR_ERRORS, UN_AUTHENTICATE_USER } from './actionConstants'
const BASE_URL = 'http://localhost:4000'

export const loginUser = (userData, history) => {
  return (dispatch) => {
    dispatch({ type: START_LOADER })
    axios.post(`${BASE_URL}/auth/login`, userData)
      .then(res => {
        console.log(res.data)
        const { data: { token } } = res
        const { data: { user: { id, first_name, last_name, email, created_at } } } = res
        const userData = {
          token: token,
          first_name: first_name,
          last_name: last_name,
          email: email,
          id: id,
          created_at: created_at
        }
        localStorage.setItem('Token', token)
        dispatch({ type: STOP_LOADER })
        dispatch({ type: SET_USER, payload: userData })
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: SET_ERRORS, payload: err.response.data })
        dispatch({ type: STOP_LOADER })
      })
  }
}

export const signUpUser = (userData, history) => {
  return (dispatch) => {
    dispatch({ type: START_LOADER })
    axios.post(`${BASE_URL}/users`, userData)
      .then(res => {
        console.log(res.data)
        dispatch({ type: STOP_LOADER })
        // dispatch({ type: CLEAR_ERRORS })
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
    dispatch({ type: UN_AUTHENTICATE_USER })
    window.location.href = '/login'
  }
}
