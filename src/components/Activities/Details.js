import React, { Component } from 'react'
import headerImage from '../../assets/images/header.jpg'
import styled from '@emotion/styled'
import Loader from '../layout/Loader'
import { connect } from 'react-redux'
import { fetchActivity } from '../../actions/dataActions'

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
                </div>
                <div className="col-md-4">
                  <h3>Book a Vistit</h3>
                  <form>
                    <div class="form-group">
                      <label for="formControlRange">Party Of how many</label>
                      <input type="range" class="form-control-range" id="formControlRange"/>
                    </div>

                    <div class="form-group">
                      <label for="inputAddress">When?</label>
                      <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Other Information</label>
                      <textarea type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></textarea>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row">
                <h3> Guest Experience Review </h3>
                <div>
                  {/* <form>
                    <div class="form-group">
                      <label for="formControlRange">Party Of how many></label>
                      <input type="range" class="form-control-range" id="formControlRange"/>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">When?</label>
                      <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Other Information</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-4">
                        <label for="inputState">Need of Pickup?</label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                     
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </form> */}

                </div>
              </div>

            </div>
          </Header>
        </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => ({
  activity: state.data.activity
})

const mapDispatchToProps = (dispatch) => ({
  fetchActivity: (id) => dispatch(fetchActivity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
