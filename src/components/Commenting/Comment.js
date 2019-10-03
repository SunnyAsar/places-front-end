import React, { Component } from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
width:auto;
`

class Comment extends Component {
  render () {
    const { comment } = this.props
    return (
      <Card>
        <div>
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">{comment.author.first_name}</h5>
              <p className="card-text">{comment.content}</p>
              <h6 className="card-title float-right small">{comment.created_at}</h6>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default Comment
