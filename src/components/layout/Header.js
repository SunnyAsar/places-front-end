import React from 'react'
import SignedOutLinks from '../layout/SignedOutLinks'
import SignedInLinks from '../layout/SignedInLinks'
import styled from '@emotion/styled'
import Bg from '../../assets/images/bg2.jpg'
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

const Header = () => {
  return (
    <Block>
      <div className="container-fluid bg">
        <div className="right">
          <SignedInLinks/>
          <SignedOutLinks/>
        </div>
      </div>
    </Block>
  )
}

export default Header
