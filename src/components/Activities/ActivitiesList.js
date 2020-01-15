import React, { Component } from 'react'
import { fetchActivities } from '../../actions/dataActions'
import { connect } from 'react-redux'
import styled from  '@emotion/styled'
import Activity from './Activity'
import Loader from '../layout/Loader'
import { Redirect } from 'react-router-dom'
// import headerImage from '../../assets/images/header.jpg'
import home1 from '../../assets/images/reg.jpg'

import axios from 'axios'

const Content = styled.div`
  background: url(${home1});
  background-size: cover;
  background-position: center;
  height:50vh;
  .card{
    border: none;
  }
  .card-body{
    padding: 0
  }

  .overlay{
    height:100%;
    opacity:1;
    background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 1));
  }
  .description{
    line-spacing:20px;
    color:#484848;
    font-size: 18px;
  }
  .search{
    height: 40px;
  }
  .input{
    ::placeholder{
      color:silver;
      font-size:14px;
    }
  }
`

class ActivitiesList extends Component {
  componentDidMount () {
    this.props.fetchActivities()
  }

  render () {
    if (!localStorage.getItem('Token')) return <Redirect to='/login'/>
    const { user } = this.props
    const ActivityList = (this.props.activities.length > 0) ? (this.props.activities.map(activity => (<Activity activity={activity} key={activity.id} />))) : (this.props.loading) ? (<Loader/>) : (<h3>There are no Listing now!</h3>)
    return (
      <Content>
        <div className="overlay d-flex align-items-center text-center">
          <div className="container ">
            <h1 className="display-4 text-light">Top Activites. Curated Just for You.{this.props.user.first_name} { user.first_name }</h1>
            <p className="lead text-warning">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <div className="row justify-content-center sticky-top">
              <div className="col-md-6">
                <input type="text" name="query" className="form-control search input" id="inputEmail4" placeholder="Enter a County or City To find New Experiences..."/>
              </div>
              <div className="col-md-2 col-md-offset-3">
                <button className="btn btn-warning btn-sm btn-block search">Show Me</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 side">
              <h3 className="text-center text-dark">Let's fine tune </h3>
            </div>
            <div className="col-md-10">
              <div className="container-fluid">
                <div className="row mt-5 p-0">
                  {ActivityList}
                </div>
              </div>

            </div>
          </div>
        </div>

      </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.credentials,
    authenticated: state.user.authenticated,
    loading: state.UI.loading,
    activities: state.data.activities
  }
}

export default connect(mapStateToProps, { fetchActivities })(ActivitiesList)
