import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class Activity extends Component {
  render () {
    const { activity } = this.props
    // const name = activity.category.name !==  ? (activity.category.name) : 'general'
    // let image

    // axios.get(`http://localhost:4000${activity.thumbnail}`)
    // .then(res => {
    //   console.log(res.data)
    //   alert(`http://localhost:4000${activity.thumbnail}`)
    // })
    return (
      <div className="col-md-4 image-area mb-4">
        <div className="card mt-0">
          <img src={`http://localhost:4000${activity.thumbnail}`} className="rounded card-img-top" alt="Broken"/>
          <img src="https://i.ytimg.com/vi/FOLHgoRcMHU/maxresdefault.jpg" className="rounded card-img-top" alt="..."/>
          <div className="card-body p-1">
            <div className="row p-1 justify-content-between">
              <span className="col-md-7">
                <h5 className="small card-title mb-1 text-muted">{activity.city}</h5>
              </span>
              <span className="small col-md-5 text-dark bold">
                {activity.category}
              </span>
            </div>
            <div className="row p-1 justify-content-between">
              <span className="col-md-8">
                <h5 className=" h6 card-title mb-1 text-muted">{activity.name}</h5>
              </span>
              <span className="col-md-4 text-success bold">
                $250k
              </span>
            </div>
            <p className="h3 small card-text">Some quick example text to build </p>
            <Link to={`/activities/${activity.id}`} className="btn btn-outline-primary btn-sm">See it!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Activity)
