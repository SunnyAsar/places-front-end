import React, { Component } from 'react'
import styled from '@emotion/styled'

const FormArea = styled.div`
display:flex;
justify-content: center;
.container{
  width:50%;
  margin:auto;
}
`

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

handleChange = (e) => {
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
          <h1 className="text-center"> Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-block btn-outline-primary">Submit</button>
          </form>
        </div>
      </FormArea>
    )
  }
}

export default SignIn
