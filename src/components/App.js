import React from 'react';
import Header from './layout/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import Loader from './layout/Loader'

function App () {
  return (
    <Router>
      <Header/>
      <Loader />
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App
