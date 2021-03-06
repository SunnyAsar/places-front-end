import React from 'react';
import Header from './layout/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import ActivitiesList from './Activities/ActivitiesList'
import Detail from './Activities/Details'
import AddActivty from './Activities/AddActivivty'

function App () {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={ActivitiesList} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={SignIn} />
        <Route path='/activities/:id' component={Detail} />
        <Route path='/activity/new' component={AddActivty} />
      </Switch>
    </Router>
  )
}

export default App
