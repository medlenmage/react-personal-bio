import React from 'react';
import './MyFooter.scss';

class MyFooter extends React.Component {
  render() {
    return (
      <div className="Footer">
        <nav className="navbar fixed-bottom navbar-light footer">
          <a className="navbar-brand" href="h">Fixed bottom</a>
        </nav>
      </div>
    );
  }
}

export default MyFooter;
