import React, { Component } from 'react'
import headerImage from '../../assets/images/header.jpg'
import styled from '@emotion/styled'
import Loader from '../layout/Loader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchActivity } from '../../actions/dataActions'
import CommentsList from '../Commenting/CommentsList'
import PostComment from '../Commenting/PostComment'
import PostReservation from '../Reservation/PostReservation'

const Header = styled.div`
  // background: url(${headerImage});
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
    const { activity, comments } = this.props
    const commentsList = (activity && comments.length > 0) ? (<CommentsList comments={ comments }/>) : (<h3>There are no Review yes, Hey!, be the first!</h3>)
    return (activity === null) ? (<Loader/>) : (Object.entries(activity).length === 0) ? (<p>Something Horrible is happening</p>)
      : (
        <div>
          <Header className="this" style={{ backgroundImage: `url(http://localhost:4000${activity.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh'
          }}>
            <div className="overlay d-flex align-items-center text-center">
              <div className="container ">
                <h1 className="display-4 text-light">{activity.name}</h1>
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
                    <div className="col-md-7">
                      <h4> Guest Experience Review </h4>
                    </div>
                    <div className="col-md-5 px-5">
                      <button type="button" className="btn btn-secondary btn-block" data-toggle="modal"   data-target="#exampleModalCenter">Add a Comment</button>
                      <PostComment/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="row p-5">
                      <div>
                        { commentsList }
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <PostReservation activity={activity} />
                  <div className="row">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8vxJvFqw5Uo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                  </div>
                </div>
              </div>
            </div>
          </Header>
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  activity: state.data.activity,
  comments: state.data.comments
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
