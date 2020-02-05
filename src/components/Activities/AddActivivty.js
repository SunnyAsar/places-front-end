import React, { Component} from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
  width:70%;
  margin:auto;
`

class AddActivity extends Component {
  render () {
    return (
      <Content className='container'>
        <h1 className='text-center h3 pt-4 text-warning'> Add Activity</h1>
      </Content>
    )
  }
}

export default AddActivity
