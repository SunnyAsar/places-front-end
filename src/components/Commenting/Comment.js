import React, { Component } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const Card = styled.div`
// width:auto;
`

class Comment extends Component {
  render () {
    const { comment } = this.props
    return (
      <Card>
        <div>
          <div className="card border-primary mb-3 ">
            <div className="card-body p-3">
              <h5 className="card-title">{comment.author.first_name}</h5>
              <p className="card-text mb-2">{comment.content}</p>
              <h6 className=" float-right text-secondary m-0">{moment(`${comment.created_at}`).fromNow()}</h6>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default Comment
