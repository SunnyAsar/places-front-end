import React from 'react'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/help" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/signOut" className="nav-link">Log Out</Link>
        </li>
      </ul>
    </div>
  )
}

export default SignedInLinks
