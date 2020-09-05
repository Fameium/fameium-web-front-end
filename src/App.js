import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Portfolio from '../src/components/pageComponents/portfolio/Portfolio'
import SignIn from '../src/components/pageComponents/signIn/SignIn'
import Productivity from '../src/components/pageComponents/productivity/Productivity'

const App = () => {
  return (
    <Router>

        <Switch>
          
          <Route exact path='/' component={Portfolio}/>
          <Route exact path='/sign-in' component={SignIn}/>
          <Route exact path='/productivity' component={Productivity}/>

          <Route render={() => <Redirect to={{pathname: "/"}} />} />
          
        </Switch>
    </Router>
  );
}

export default App;
