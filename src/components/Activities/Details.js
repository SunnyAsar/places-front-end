import React, { Component } from 'react'
import headerImage from '../../assets/images/header.jpg'
import styled from '@emotion/styled'
import Loader from '../layout/Loader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchActivity } from '../../actions/dataActions'
import CommentsList from '../Commenting/CommentsList'

const Header = styled.div`
  background: url(${headerImage});
  background-size: cover;
  background-position: center;
  height:50vh;

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

  
 
`

class Detail extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.fetchActivity(id)
  }

  render () {
    const { activity } = this.props
    const comments = (activity && activity.comments.length > 0) ? (<CommentsList comments={ activity.comments }/>) : (<h3>There are no Review yes, Hey!, be the first!</h3>)
    return (activity === null) ? (<Loader/>) : (Object.entries(activity).length === 0) ? (<p>Something Horrible is happening</p>)
      : (
        <div>
          <Header className="this">
            <div className="overlay d-flex align-items-center text-center">
              <div className="container ">
                <h1 className="display-4 text-light">Top Activites. Curated Just for You. </h1>
                <p className="lead text-warning">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
            </div>
            <div className="row">

            </div>
            <div className="container pt-3">
              <div className="row mb-3 container">
                <p className="h4 pr-3"> <i className="fa fa-globe text-success" aria-hidden="true"></i>  <span className="text-secondary h5">{activity.country}</span></p>
                <p className="h4"> <i className="fa fa-thumb-tack text-warning" aria-hidden="true"></i>  <span className="text-secondary h5">{activity.city}</span></p>

                <p className="ml-5 h5">Strating: <span className="text-success h4">$25</span> </p>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <span className="h4">What You'll Experience</span>
                  <p className="p-3 description">
                    {activity.description}
                  </p>

                  <div className="row">
                    <h3> Guest Experience Review </h3>
                    <div className="row p-5">
                      <div>
                        {comments}
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <h3>Book a Vistit</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="formControlRange">Party Of how many</label>
                      <input type="range" className="form-control-range" id="formControlRange"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputAddress">When?</label>
                      <input type="date" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Other Information</label>
                      <textarea type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Header>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  activity: state.data.activity
  // comments: state.data.activity.comments
})

const mapDispatchToProps = (dispatch) => ({
  fetchActivity: (id) => dispatch(fetchActivity(id))
})

Detail.defaultProps = {
  likes: [],
  comments: []
}
Detail.propTypes = {
  comments: PropTypes.array,
  likes: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
