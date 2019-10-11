import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class Activity extends Component {
  render () {
    const { activity } = this.props
    // const name = activity.category.name !==  ? (activity.category.name) : 'general'
    // let image

    return (
      <div className="col-md-4 image-area mb-4">
        <div className="card mt-0">
          <img src={`http://localhost:4000${activity.thumbnail}`} className="rounded card-img-top" alt="Broken"/>
          <div className="card-body p-1">
            <div className="row">
              <div className="col-md-8 d-flex flex-row justify-content-start p-0">
                <div className="small card-title pr-2 text-muted">{activity.city}</div>
                <div className="">
                  <p className="">{activity.category}</p>
                </div>
              </div>
              <div className="col-md-4">
                <p>$250k</p>
              </div>
            </div>
            <div className="row mt-0">
              <span className="col-md">
                <h5 className=" h6 card-title mb-1 text-muted">{activity.name}</h5>
              </span>

            </div>
            <p className="h3 small card-text">Some quick example text to build </p>
            <Link to={`/activities/${activity.id}`} className="btn btn-outline-primary btn-block btn-sm">See it!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Activity)
