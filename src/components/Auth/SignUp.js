import React, { Component } from 'react'
import styled from '@emotion/styled'
import reg from '../../assets/images/reg.jpg'
import { connect } from 'react-redux'
import { apiSignUp } from '../../actions/authActions'
import { stop_loader } from '../../actions/loaderActions'

const FormArea = styled.div`
display:flex;
height:92.5vh;
background: url(${reg});
background-size:cover;
background-position: center;
justify-content: center;
.container{
  width:50%;
  margin:auto;
}
form{
  background:  rgba(0, 0, 0, 0.5);
  border-radius:5px;
  padding:30px;
  label{
    color: silver;
  }
  button{
    font-weight:600;
  }
}
`
// Photo by Philipp Kämmerer on Unsplash guy with hat

class SignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password:'',
    password_confirmation: ''

  }

  componentDidMount(){
    setTimeout(()=>{
      this.props.stopLoader()
    },1000)
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log({user:this.state})
    this.props.createUser({user:this.state})
    .then(
      this.setState({
        first_name: '',
        last_name: '',
        email: '',
        password:'',
        password_confirmation: ''
      })
    )
  }

  render () {
    return (
      <FormArea>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
          <h1 className="text-center text-warning"> Create an Account</h1>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">First Name</label>
                <input type="text" value={this.state.first_name}  onChange={this.handleChange} name="first_name" className="form-control" id="inputEmail4" placeholder="First Name"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Last Name</label>
                <input type="text" value={this.state.last_name}  onChange={this.handleChange} name="last_name" className="form-control" id="inputPassword4" placeholder="Last Name"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" value={this.state.email}  onChange={this.handleChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" value={this.state.password}  onChange={this.handleChange} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input type="password" value={this.state.password_confirmation}  onChange={this.handleChange} name="password_confirmation" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"/>
            </div>
            
            <button type="submit" className="btn btn-block btn-info">Let's Go</button>
          </form>
        </div>
      </FormArea>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(apiSignUp(user)),
    stopLoader: () => dispatch(stop_loader())
  }
}

export default connect(null, mapDispatchToProps)(SignUp)
