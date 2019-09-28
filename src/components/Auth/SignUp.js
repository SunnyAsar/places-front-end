import React, { Component } from 'react'
import styled from '@emotion/styled'
import reg from '../../assets/images/reg.jpg'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// New stuff
import { signUpUser } from '../../actions/userActions'

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
    password_confirmation: '',
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUpUser({user:this.state}, this.props.history)
  }

  render () {
    // if(localStorage.getItem('Token')) return <Redirect to='/'/>
    const { UI: { loading, errors: {email, password, password_confirmation,first_name, last_name } }} = this.props
    

       const password_error = password ? ("is-invalid form-control") : ('form-control')
       const password_conf_error= password_confirmation ? ("is-invalid form-control") : ('form-control')
       const email_error= email ? ("is-invalid form-control") : ('form-control')
       const first_name_error= first_name ? ("is-invalid form-control") : ('form-control')
       const last_name_error= last_name ? ("is-invalid form-control") : ('form-control')
       const spinner = loading ? (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>) : ''


    return (
      <FormArea>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
          <h1 className="text-center text-warning"> Create an Account</h1>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">First Name</label>
                <input type="text" value={this.state.first_name}  onChange={this.handleChange} name="first_name" className={first_name_error} id="inputEmail4" placeholder="First Name"/>
                <div className="invalid-feedback">{first_name}</div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Last Name</label>
                <input type="text" value={this.state.last_name}  onChange={this.handleChange} name="last_name" className={last_name_error} id="inputPassword4" placeholder="Last Name"/>
                <div className="invalid-feedback">{last_name}</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" value={this.state.email}  onChange={this.handleChange} name="email" className={email_error} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <div className="invalid-feedback">{email}</div>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" value={this.state.password}  onChange={this.handleChange} name="password" className={password_error} id="exampleInputPassword1" placeholder="Password"/>
              <div className="invalid-feedback">{password}</div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input type="password" value={this.state.password_confirmation}  onChange={this.handleChange} name="password_confirmation" className={password_conf_error} id="exampleInputPassword2" placeholder="Confirm Password"/>
              <div className="invalid-feedback">{password_confirmation}</div>
            </div>
            
            <button type="submit" disabled={loading} className="btn btn-block btn-info"> { spinner } Let's Go</button>
          </form>
        </div>
      </FormArea>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (userData, history) => dispatch(signUpUser(userData, history))
  }
}
const mapStateToProps = (state) => ({
  UI: state.UI
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
