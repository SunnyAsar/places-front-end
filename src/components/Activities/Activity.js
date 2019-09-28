import React, { Component } from 'react'
import { connect } from 'react-redux'

class Activity extends Component {
  render () {
    const { activity } = this.props

    return (
      <div className="col-md-4 image-area mb-4">
        <div className="card mt-0">
          <img src="https://i.ytimg.com/vi/FOLHgoRcMHU/maxresdefault.jpg" className="rounded card-img-top" alt="..."/>
          <div className="card-body p-1">
            <div className="row p-1 justify-content-between">
              <span className="col-md-8">
                <h5 className=" h6 card-title mb-1 text-muted">{activity.name}</h5>
              </span>
              <span className="col-md-4 text-success bold">
                $250k
              </span>
            </div>
            <p className="h3 small card-text">Some quick example text to build </p>
            <a href="#" className="btn btn-outline-primary btn-sm">See it!</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Activity)
