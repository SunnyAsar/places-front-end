import React, { Component } from 'react'
import { fetchActivities } from '../../actions/activitesActions'
import { connect } from 'react-redux'
import styled from  '@emotion/styled'

const Content = styled.div`
.activity-item{
  width:150px;
}

`

class Activities extends Component {
  componentDidMount () {
    console.log('activities here')
    this.props.fetchAllActivities()
  }

  render () {
    return (
      <Content>
        <div>
          <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container">
              <h1 className="display-4">Top Activites. Curated Just for You.</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 ">
              <h3 className="text-center text-dark">Let's fine tune 😀 ✌️</h3>
            </div>
            <div className="col-md-8">
              <div className="row justify-content-between">
                <div className="col-md-8">
                  <input type="text" name="query" className="form-control" id="inputEmail4" placeholder="Search..."/>
                </div>
                <div className="col-md-2 col-md-offset-3">
                  <button className="btn btn-outline-info btn-sm btn-block">Sort</button>
                </div>
              </div>
              <div className="container">
                <div className="row mt-5">
                  <div className="col-md-3 image-area">
                    <div className="text-center activity-item" >
                      <img src="https://i.ytimg.com/vi/FOLHgoRcMHU/maxresdefault.jpg" height="100%" width="150%" className="rounded" alt="..."/>
                      <h5>The best food</h5>
                    </div>
                  </div>
                  <div className="col-md-3 image-area">
                    <div className="text-center activity-item" >
                      <img src="https://i.ytimg.com/vi/FOLHgoRcMHU/maxresdefault.jpg" height="100%" width="150%" className="rounded" alt="..."/>
                      <h5>The best food</h5>
                    </div>
                  </div>
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
  fetchAllActivities: () => dispatch(fetchActivities())
})
const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
