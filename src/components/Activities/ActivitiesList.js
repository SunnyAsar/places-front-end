import React, { Component } from 'react'
import { fetchActivities } from '../../actions/dataActions'
import { connect } from 'react-redux'
import styled from  '@emotion/styled'
import Activity from './Activity'
import activites from '../../reducers/dataReducer'

const Content = styled.div`
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
    const ActivityList = (this.props.activities.length > 0) ? (this.props.activities.map(activity => (<Activity activity={activity} key={activity.id} />))) : (<h3>There are no Listing now!</h3>)
    // this.props.loading ? (<span className="spinner-border spinner-border-sm text-light"  role="status" aria-hidden="true"></span>) : ''
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
              <h3 className="text-center text-dark">Let's fine tune 😀 ✌️</h3>
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
  activities: state.data.activities
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList)
