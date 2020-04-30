import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'

const App =  () => {
  const dispatch = useDispatch()
  return (
    <>
      <Switch>
        {/* <Route path = '/login' component = {Login}/>
        <Route exact path ='/' component = {LandingPage}/> */}
        <Redirect from = '*' to= '/login'/>
    </Switch>
    </>
  );
}

export default App;
