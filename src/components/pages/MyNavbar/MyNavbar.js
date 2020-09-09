import React from 'react';

class MyNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Joshua Medlen</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/about-me">Bio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Technologies">Tech</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
