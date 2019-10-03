import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const comment = comments.map(comment => <Comment comment={comment} key={comment.content} />)
    return (
      <div className="mb-5">
        <div className="col-md-12 pb-3 ">
          <span>Join Us!   <i class="fa fa-comment-o fa-lg text-warning" aria-hidden="true"></i> {comments.length}</span>
        </div>

        {comment}
      </div>
    )
  }
}

export default CommentList
