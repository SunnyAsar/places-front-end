import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const comment = comments.reverse().map(comment => <Comment comment={comment} key={comment.content} />)
    return (
      <div className="mb-5 row">
        <div className="col-md-12 pb-3 ">
          <div className="row justify-content-between">
            <div className="col-md">
              <span>Join Us!   <i className="fa fa-comment-o fa-lg text-warning" aria-hidden="true"></i> {comments.length}</span>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          {comment}
        </div>
      </div>
    )
  }
}

export default CommentList
