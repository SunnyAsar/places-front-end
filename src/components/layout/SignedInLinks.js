import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutAction } from '../../actions/authActions'

const SignedInLinks = ({ logOutUser }) => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/help" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <a onClick={logOutUser} className="nav-link">Log Out</a>
        </li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutAction())
})

export default connect(null, mapDispatchToProps)(SignedInLinks)
