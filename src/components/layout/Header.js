import React from 'react'
import SignedOutLinks from '../layout/SignedOutLinks'
import SignedInLinks from '../layout/SignedInLinks'
import styled from '@emotion/styled'
import Bg from '../../assets/images/bg2.jpg'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
// import logo from '../../assets/images/logo512.png'

// Photo by Miriam Höschele on Unsplash
const Block = styled.nav`
.bg{
  height:80vh;
  display:flex;
  justify-content:flex-end;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width:100%;
}
.right{
  display: flex;
  justify-content: space-evenly;
}
`

const Header = ({ authentication }) => {
  const Navigation = authentication.token ? <SignedInLinks/> : <SignedOutLinks/>
  return (
    <Block>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top justify-content-end">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/help" className="nav-item nav-link" >Help</Link>
              { Navigation }
            </div>
          </div>
        </nav>
      </div>
    </Block>
  )
}

const mapStateToProps = (state) => ({
  authentication: state.authentication
})

export default connect(mapStateToProps, null)(Header)
