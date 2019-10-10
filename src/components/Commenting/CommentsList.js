import React, { Component } from 'react'
import Comment from './Comment'
import PostComment from './PostComment'

class CommentList extends Component {
  render () {
    const { comments } = this.props
    const comment = comments.map(comment => <Comment comment={comment} key={comment.content} />)
    return (
      <div className="mb-5">
        <div className="col-md-12 pb-3 ">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <span>Join Us!   <i className="fa fa-comment-o fa-lg text-warning" aria-hidden="true"></i> {comments.length}</span>
            </div>
            <div className="col-md-6">
              <button type="button" className="btn btn-secondary btn-block" data-toggle="modal" data-target="#exampleModalCenter">Add a Comment</button>
            </div>

            <PostComment/>

          </div>
        </div>

        {comment}
      </div>
    )
  }
}

export default CommentList
