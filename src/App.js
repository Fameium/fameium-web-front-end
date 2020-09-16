import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Portfolio from '../src/components/pageComponents/portfolio/Portfolio'
import SignIn from '../src/components/pageComponents/signIn/SignIn'
import Productivity from '../src/components/pageComponents/productivity/Productivity'
import PtojectForm from '../src/components/pageComponents/ProjectForm/ProjectForm'
import GeneralStyles from './GeneralStyles'
import ProjectView from '../src/components/pageComponents/ProjectView/ProjectView'
import Test from './Test'

import api from './APIs/api'
import apiSupportFunctions from '../src/APIs/apiSupportFunctions'
const App = () => {

  const { post, get, patch, del } = api()
  const { base64 } = apiSupportFunctions
  const params = {
    tenant_id: 3
  }
  const header = {
    Authorization: 'token 9b145f632ad6935f53c34626c681282eb2e63cc6'
    // Authorization: 'Basic aGFyaUBmYW1laXVtLmNvbTpxd2VydHk='

  }
  //Basic aGFyaUBmYW1laXVtLmNvbTpxd2VydHk=
  //Basic RmFtZWl1bWRvdGNvbUBnbWFpbC5jb206I09wZW
  const body = {
    
    
  }
  get('productivity', params, header, body).then((res) => console.log(res)).catch((err) => console.log(err))



  return (
    <GeneralStyles>
      <Router>

        <Switch>

          <Route exact path='/' component={Portfolio} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/productivity' component={Productivity} />
          <Route exact path='/project/:id/edit' component={PtojectForm} />
          <Route exact path='/project/project' component={ProjectView} />
          <Route exact path='/productivity/new-project' component={PtojectForm} />
          <Route exact path='/test' component={Test} />


          <Route render={() => <Redirect to={{ pathname: "/" }} />} />

        </Switch>
      </Router>
    </GeneralStyles>
  );
}

export default App;
