import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import MyFooter from '../components/pages/MyFooter/MyFooter';
import BioPage from '../components/pages/BioPage/BioPage';
import Home from '../components/pages/Home/Home';
import ProjectsPage from '../components/pages/ProjectsPage/ProjectsPage';
import TechPage from '../components/pages/TechPage/TechPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
            <div className="container">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/About-Me" component={BioPage} />
                <Route path="/Projects" component={ProjectsPage} />
                <Route path="/Technologies" component={TechPage} />
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
            <MyFooter />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
