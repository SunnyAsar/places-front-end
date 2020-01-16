import React from 'react'
import styled from '@emotion/styled'

const SpinnerContainer = styled.div`
  padding: 40px;
  display:flex;
  height:100%;
  width:100%;
  opacity:0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  .spin-size {
    width: 5rem; 
    height: 5rem;
  }

`

const Loader = () => {
  return (
    <SpinnerContainer>
      <div className="spinner-border mt-5 text-warning spin-size" role="status">
        {/* <span class="sr-only">Loading...</span> */}
      </div>
    </SpinnerContainer>
  )
}
export default Loader
