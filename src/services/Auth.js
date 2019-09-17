import axios from 'axios'
const BASE_URL = 'http://localhost:4000'

const authService = {

  signUp: async (user) => {
    return axios.post(`${BASE_URL}/users`, user)
      .then(res => res)
  },

  signIn: async (user) => {
    return axios.post(`${BASE_URL}/auth/login`, user).then(res => res)
  }
}

export default authService
