import React, { Component } from 'react'
import styled from '@emotion/styled'
import signinBg from '../../assets/images/sig.jpg'

const FormArea = styled.div`

display:flex;
height:92.5vh;
background: url(${signinBg});
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

// Photo by Dino Reichmuth on Unsplash desert bus

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
          <form onSubmit={this.handleSubmit}>
          <h1 className="text-center text-warning"> - Hurry Up!</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            {/* <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-block btn-warning">Submit</button>
          </form>
        </div>
      </FormArea>
    )
  }
}

export default SignIn
