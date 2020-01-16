import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Activity extends Component {
  render () {
    const { activity } = this.props
    return (
      <div className="col-md-4 image-area mb-4">
        <div className="card mt-0 ">
          <img height='146' src={`http://localhost:4000${activity.thumbnail}`} className="rounded card-img-top" alt="Broken"/>
          <div className="card-body ">
            <div className="row px-2">
              <div className="col-md-8 d-flex flex-row justify-content-start ">
                <div className="pr-3">
                  <span className="small card-title">{activity.city}</span>
                </div>
                <div className="">
                  <span className="small card-title">{activity.category}</span>
                </div>
              </div>
              <div className="col-md-4">
                {activity.amount > 1
                  ? (<span className="text-success">$ {activity.amount}</span>)
                  : (<span className="text-success">Free</span>)
                }
              </div>
            </div>
            <div className="row mt-0 p-2 pt-0">
              <span className="col-md">
                <h5 className=" h6 card-title mb-1 text-dark bold">{activity.name}</h5>
              </span>
            </div>
            <Link to={`/activities/${activity.id}`} className="btn btn-outline-primary btn-block btn-sm">See it!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Activity)
