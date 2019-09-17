import React from 'react'
import { connect } from 'react-redux'
import loader from '../../reducers/loaderReducer'
import styled from '@emotion/styled'

const Spinner = styled.div`
  margin-top: 30px;
  display: inline-block;
  width: 84px;
  height: 84px;

  &:after {
    content: " ";
    display: block;
    width: 66px;
    height: 66px;
    margin: 1px;
    border-radius: 50%;
    border: 10px solid #0290ff;
    border-color: #0290ff transparent #0290ff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

// 
const SpinnerContainer = styled.div`
  padding: 40px;
  background-color: black;
  opacity:0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = ({ isLoading, children }) => {
  if (isLoading) return <SpinnerContainer><Spinner /></SpinnerContainer>
  return <div>{children}</div>
}
const mapStateToProps = (state) => ({
  isLoading: state.loader
})

export default connect(mapStateToProps, null)(Loader)
