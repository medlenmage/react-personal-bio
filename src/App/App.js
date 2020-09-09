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

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
            <div className="container">
              <Switch>
                <PublicRoute path="/home" component={Home} />
                <PublicRoute path="/home" component={BioPage} />
                <PublicRoute path="/home" component={ProjectsPage} />
                <PublicRoute path="/home" component={TechPage} />
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
