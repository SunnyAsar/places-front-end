import React from 'react';
import Header from './layout/Header'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/signUp' component={SignUp} />
        <Route path='/logIn' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App
