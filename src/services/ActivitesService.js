import axios from 'axios'

const BASE_URL = 'http://localhost:4000'
// const token = localStorage.getItem('Token')
const getAllActivities = () => {
  return axios.get(`${BASE_URL}/activities`)
    .then(res => console.log(res))
}

export { getAllActivities }
