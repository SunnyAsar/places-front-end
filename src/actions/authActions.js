import { SIGN_IN, SIGN_UP, SIGN_UP_DONE, LOGIN, LOGOUT } from './actionConstants'
import AuthService from '../services/Auth'
import { start_loader, stop_loader } from './loaderActions'

export const signUpAction = (data) => ({
  type: SIGN_UP,
  data
})
export const signUpDoneAction = () => ({ type: SIGN_UP_DONE })

export const apiSignUp = (user) => {
  return async (dispatch) => {
    dispatch(start_loader())
    try {
      await AuthService.signUp(user).then(res => {
        if (res.status === 200) {
          console.log(res.data)
          window.location = '/logIn'
        }
        dispatch(stop_loader())
      })
    } catch (error) {
      console.log(error.response.data.errors)
      dispatch(stop_loader())
    }
  }
}
export const logInAction = (data) => ({
  type: LOGIN,
  data
})

export const apiSignIn = (user) => {
  return async (dispatch) => {
    dispatch(start_loader())
    try {
      await AuthService.signIn(user).then(res => {
        const { data: { token } } = res
        const { data: { user: { id, first_name, last_name, email, created_at } } } = res
        const loggedInuser = {
          token,
          id,
          first_name,
          last_name,
          email,
          created_at
        }

        if (res.status === 200) {
          console.log('login success')
          dispatch(logInAction(loggedInuser))
        }
      })
      dispatch(stop_loader())
    } catch (error) {
      console.log(error.response)
      dispatch(stop_loader())
    }
  }
}

export const logOutAction = () => {
  return (dispatch) => {
    dispatch(start_loader())
    setTimeout(() => {
      dispatch(stop_loader())
    }, 500)
    dispatch({ type: LOGOUT })
  }
}
