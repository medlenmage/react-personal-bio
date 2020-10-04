import React from 'react';
// import { Link } from 'react-router-dom';
import './MyFooter.scss';

class MyFooter extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="link-list-container">
          <ul className="navbar-nav link-list">
            <li className="nav-item email">
              <a href="mailto:joshua246@gmail.com" className="links">Joshua246@gmail.com</a>
            </li>
            <li className="nav-item footer-listed">
              <a href="https://www.linkedin.com/in/joshuamedlen/" className="links">https://www.linkedin.com/in/joshuamedlen/</a>
            </li>
            <li className="nav-item footer-listed">
              <a href="https://twitter.com/magemedlen" className="links">https://twitter.com/magemedlen</a>
            </li>
            <li className="nav-item footer-listed">
              <a href="https://github.com/medlenmage" className="links">https://github.com/medlenmage</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MyFooter;
