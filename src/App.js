import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import Portfolio from '../src/components/pageComponents/portfolio/Portfolio'
import SignIn from '../src/components/pageComponents/signIn/SignIn'
import Productivity from '../src/components/pageComponents/productivity/Productivity'
import GeneralStyles from './GeneralStyles'
import ProjectForm from '../src/components/pageComponents/ProjectForm/ProjectForm'
import ProjectView from '../src/components/pageComponents/ProjectView/ProjectView'
import IdeaForm from '../src/components/pageComponents/IdeaForm/IdeaForm'
import IdeaView from '../src/components/pageComponents/IdeaView/IdeaView'
import GeneralProcesses from '../src/components/commonComponents/generalProcesses/GeneralProcesses'
import Test from './Test'
import MasterContextProvider from '../src/context/MasterContext'

const App = () => {

  const theme = createMuiTheme({
    palette: {
      secondary:{
        main: red[500]
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h4: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1.5rem",
        fontWeight: 600
      },
      h5: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1rem",
        fontWeight: 500
      },
      body2: {
        color: '#6B6B6B',
      }

    }
  });

  return (
    <GeneralStyles>
      <MasterContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <GeneralProcesses />
            <Switch>
              <Route exact path='/' component={Portfolio} />
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/productivity' component={Productivity} />

              <Route exact path='/productivity/project/:id/edit' component={ProjectForm} />
              <Route exact path='/productivity/project/:id/view' component={ProjectView} />
              <Route exact path='/productivity/project/new' component={ProjectForm} />
              
              <Route exact path='/productivity/idea/:id/edit' component={IdeaForm} />
              <Route exact path='/productivity/idea/:id/view' component={IdeaView} />
              <Route exact path='/productivity/idea/new' component={IdeaForm} />

              <Route exact path='/test' component={Test} />
              <Route render={() => <Redirect to={{ pathname: "/" }} />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </MasterContextProvider>
    </GeneralStyles>
  );
}

export default App;
