import React, { Component } from 'react'
import axios from 'axios'

class PostReservation extends Component {
  state = {
    party_size: 1,
    reservation_date: '',
    info: ''

  }
  
  
  pay = (e) => {
    e.preventDefault()
    const BASE_URL = 'http://localhost:4000'
    const { id } = this.props.activity

    const data = { reservation: {
      ...this.state,
      activity_id: id,
    }}

    axios.post(`${BASE_URL}/reservations`, data ,{ headers: { Authorization: localStorage.Token } })
    .then(res => {
    const id = res.data.id
    const stripe = window.Stripe('pk_test_hSoWJ6eV9RaWZzsd0hVxsOWm00cDHABktc')
    stripe.redirectToCheckout({
      sessionId: `${id}`
    }).then(function (result) {
     console.log(result)
    })
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return(
      <div>
         <h4>Book a Vistit</h4>

         {this.props.activity.amount > 1 ?
            (
            <form>
            <div className="form-group">
              <label htmlFor="formControlRange">Party Of how many</label>
              <input type="number" name='party_size' onChange={this.handleChange} value={this.state.party_size} className="form-control" id="inputAddress" placeholder="The more the merrier remember..?"/>
            </div>

            <div className="form-group">
              <label htmlFor="inputAddress">When?</label>
              <input type="date" name='reservation_date' onChange={this.handleChange} value={this.state.reservation_date} className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Other Information</label>
              <textarea type="text" name='info' onChange={this.handleChange} value={this.state.info} className="form-control" id="inputAddress2" placeholder="Tell us any special needs you may have... "></textarea>
            </div>

            <div className='form-group'>
              <button className='btn btn-warning btn-block' onClick={this.pay}> Book </button>
            </div>
          </form>

           ) :
           (

            
          <div className='form-group'>
            <p>
              They say the best things in life are free, well that's true. We know you have been through alot and this is one the house, have a wonserful time and be refreshed
            </p>
            <button className='btn  btn-success btn-block' disabled>Yay! it Free! </button>
          </div>
           )
            
          }
         
         
      </div>
    )
  }

}

export default PostReservation