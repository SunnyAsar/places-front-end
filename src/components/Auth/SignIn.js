import React, { Component } from 'react'
import styled from '@emotion/styled'
import signinBg from '../../assets/images/sig.jpg'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// New stuff
import { loginUser } from  '../../actions/userActions'

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
    password: '',
    errors: {}
  }

componentWillReceiveProps(nextProps){
  if(nextProps.UI.errors){
    this.setState({
      errors: nextProps.UI.errors
    })
  }
}
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
handleSubmit = (e) => {
  e.preventDefault()
  console.log(this.state)
  const userData = { email: this.state.email, password: this.state.password }
  const { history } = this.props
  this.props.loginUser(userData,history)

}

  render () {

    if(localStorage.getItem('Token')) return <Redirect to='/'/>
    // const { UI: { loading, errors: { password,email } }}  = this.props 
    const { UI: { loading }}  = this.props 
    const { errors: { password,email }} = this.state
    const password_error = password ? ("is-invalid form-control") : ('form-control')
    const email_error = email ? ("is-invalid form-control") : ('form-control')
    const spinner = loading ? (<span className="spinner-border spinner-border-sm text-light"  role="status" aria-hidden="true"></span>) : ''
    return (
      <FormArea>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
          <h1 className="text-center text-warning"> - Hurry Up!</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className={email_error} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <div className="invalid-feedback">{email}</div>

              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className={password_error}
               id="exampleInputPassword1" placeholder="Password"/>
              <div className="invalid-feedback">{password}</div>

            </div>
            <button type="submit" disabled={loading} className="btn btn-block btn-warning"> {spinner} Submit</button>
          </form>
        </div>
      </FormArea>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  loginUser: (user, history) => dispatch(loginUser(user, history))
})

const mapStateToProps = (state) => ({
  userAccount: state.authentication,
  user: state.user,
  UI: state.UI
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
