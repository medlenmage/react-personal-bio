import React from 'react';
import './App.scss';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h2>Personal Bio Site</h2>
      </div>
    );
  }
}

export default App;
