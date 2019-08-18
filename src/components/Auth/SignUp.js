import React, { Component } from 'react'
import styled from '@emotion/styled'

const FormArea = styled.div`
display:flex;
justify-content: center;
width:50%;
margin:auto;
`

class SignUp extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password:'',
    password_confirmation: ''

  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <FormArea>
        <div className="container">
          <h1 className="text-center"> Create an Account</h1>
          <form onSubmit={this.handleSubmit}>
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
            
            <button type="submit" className="btn btn-block btn-outline-primary">Submit</button>
          </form>
        </div>
      </FormArea>
    )
  }
}

export default SignUp
