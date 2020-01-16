import React, { Component } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const Card = styled.div`
.card{
  // width: auto;
  margin: auto
}
.time{
  font-size: 11px;
}
.content{
 font-size: 14px; 
}
.card-title{
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 2px;
}
`

class Comment extends Component {
  render () {
    const { comment } = this.props
    return (
      <Card>
        <div>
          <div className="card border-primary mb-3 ">
            <div className="card-body p-2">
              <h6 className="card-title">{comment.author.first_name}</h6>
              <p className="content card-text mb-1">{comment.content}</p>
              <h6 className="time float-right text-secondary m-0">{moment(`${comment.created_at}`).fromNow()}</h6>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

export default Comment
