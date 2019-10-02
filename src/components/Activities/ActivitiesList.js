import React, { Component } from 'react'
import { fetchActivities } from '../../actions/dataActions'
import { connect } from 'react-redux'
import styled from  '@emotion/styled'
import Activity from './Activity'
import Loader from '../layout/Loader'
import { Redirect } from 'react-router-dom'

const Content = styled.div`
with:100%;
.card{
  border: none;
}
.side{
  height: 80vh;
  background:pink;
}

`

class ActivitiesList extends Component {
  componentDidMount () {
    console.log('activities here')
    this.props.fetchActivities()
  }

  render () {
    if (!localStorage.getItem('Token')) return <Redirect to='/login'/>
    const ActivityList = (this.props.activities.length > 0) ? (this.props.activities.map(activity => (<Activity activity={activity} key={activity.id} />))) : (this.props.loading) ? (<Loader/>) : (<h3>There are no Listing now!</h3>)

    return (
      <Content>
        <div>
          <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container">
              <h1 className="display-4">Top Activites. Curated Just for You. </h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 side">
              <h3 className="text-center text-dark">Let's fine tune </h3>
            </div>
            <div className="col-md-9">
              <div className="row justify-content-between">
                <div className="col-md-8">
                  <input type="text" name="query" className="form-control" id="inputEmail4" placeholder="Search..."/>
                </div>
                <div className="col-md-2 col-md-offset-3">
                  <button className="btn btn-outline-info btn-sm btn-block">Sort</button>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row mt-5">
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

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: () => dispatch(fetchActivities())
})
const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.UI.loading,
  activities: state.data.activities
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList)
