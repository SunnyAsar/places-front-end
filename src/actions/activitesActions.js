import { FETCH_ACTIVITIES, START_LOADER, STOP_LOADER } from './actionConstants'
import { getAllActivities } from '../services/ActivitesService'
import { async } from 'q'

export const fetchActivities = () => {
  return (dispatch) => {
    try {
      getAllActivities().then(res => console.log(res))
      // dispatch({ type: FETCH_ACTIVITIES })
    } catch (error) {
      console.log(error)
    }
  }
}
