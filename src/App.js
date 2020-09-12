import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Portfolio from '../src/components/pageComponents/portfolio/Portfolio'
import SignIn from '../src/components/pageComponents/signIn/SignIn'
import Productivity from '../src/components/pageComponents/productivity/Productivity'
import PtojectForm from '../src/components/pageComponents/ProjectForm/ProjectForm'
import GeneralStyles from './GeneralStyles'

import Test from './Test'

const App = () => {
  return (
    <GeneralStyles>
      <Router>

        <Switch>

          <Route exact path='/' component={Portfolio} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/productivity' component={Productivity} />
          <Route exact path='/project/:id/edit' component={PtojectForm} />
          <Route exact path='/productivity/new-project' component={PtojectForm} />
          <Route exact path='/test' component={Test} />


          <Route render={() => <Redirect to={{ pathname: "/" }} />} />

        </Switch>
      </Router>
    </GeneralStyles>
  );
}

export default App;
