import React, { Component } from 'react';
import Header from './components/Header/Header';
import './sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
      </div>
    );
  }
}

export default App;
