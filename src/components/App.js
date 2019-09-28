import React from 'react';
import Header from './layout/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import Activities from './Activities/Activities'
// import axios from 'axios'

// const token = localStorage.getItem('Token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token
// }

function App () {
  return (
    <Router>
      <Header/>
      {/* <Loader /> */}
      <Switch>
        <Route exact path='/' component={Activities} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App
