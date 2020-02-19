import React, { Component } from 'react'
import axios from 'axios'

class CompleteReservation extends Component {
  componentDidMount () {
    const BASE_URL = 'http://localhost:4000'
    const id = this.props.location.search.split('=')[1]
    axios
      .put(`${BASE_URL}/reservations/${id}`, { id }, { headers: { Authorization: localStorage.Token } })
      .then((res) => {
        setTimeout(() => {
          window.location = '/'
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  render () {
    return (
      <div>
        <h2 className="text-success text-center"> Thank you for your Booking, Payment Sucessful</h2>
        {console.log(this.props.location.search.split('=')[1])}
        <h4 className="flex-end pull-end">See More</h4>
      </div>
    )
  }
}

export default CompleteReservation
