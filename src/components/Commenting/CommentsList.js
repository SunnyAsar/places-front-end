import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const comment = comments.map(comment => <Comment comment={comment} key={comment.content} />)
    return (
      <div className="mb-5">
        {comment}
      </div>
    )
  }
}

export default CommentList
