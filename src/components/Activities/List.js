import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActivities } from '../../actions/dataActions'
import { SET_ERRORS, SET_ACTIVITY, SET_COMMENTS, SET_COMMENT, FETCH_ACTIVITIES } from '../../actions/actionConstants'

class List extends Component {
  componentDidMount () {
    // this.props.fetchActivities()
    console.log('in List page')
  }

  render () {
    return (<h1>List page</h1>)
  }
}

export default connect(null, { fetchActivities })(List)
