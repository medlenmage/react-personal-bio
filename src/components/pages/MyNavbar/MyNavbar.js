import React from 'react';
import { Link } from 'react-router-dom';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand links" to="/home">Joshua Medlen</Link>
        <div className="link-list-container">
          <ul className="navbar-nav link-list">
            <li className="nav-item">
              <Link className="nav-link links" to="/about-me">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link links" to="/Technologies">Tech</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link links" to="/Projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
