import React from 'react';
// import { Link } from 'react-router-dom';
import './MyFooter.scss';

class MyFooter extends React.Component {
  render() {
    return (
          <nav className="navbar navbar-light mt-auto">
            <div className="link-list-container">
              <ul className="navbar-nav link-list">
                {/* <li className="nav-item email">
                  <Link to="joshua246@gmail.com">joshua246@gmail.com</Link>
                  <a href="joshua246@gmail.com">Joshua246@gmail.com</a>
                </li> */}
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
