import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/login" className="nav-link">LogIn</Link>
        </li>
        <li className="nav-item">
          <Link to='/signup' className="nav-link">SignUp</Link>
        </li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
