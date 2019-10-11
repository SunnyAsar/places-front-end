import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postComment } from '../../actions/dataActions'

class PostComment extends Component {
  state = {
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value 
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { activityId } = this.props
    this.props.postComment({comment: this.state}, activityId)
    document.getElementById('closeBtn').click()

  }

  render () {
    return (
      <div>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Comment</label>
                    <textarea type="text" name="content" className="form-control" id="inputAddress2" required rows='6' value={this.state.content} onChange={this.handleChange} placeholder="Please tell us your candid experience"></textarea>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" id="closeBtn">Close</button>
                    <button type="submit" className="btn btn-outline-info" id="submitBtn">Comment!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment : (comment, activityId) => dispatch(postComment(comment, activityId))
  }
}

const mapStateToProps = (state) => {
  return {
    activityId: state.data.activity.id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment)
