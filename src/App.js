import React, { Component } from 'react';
import Header from './components/Header/Header';
import Platform from './components/Platform/Platform';
import './sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Platform />
      </div>
    );
  }
}

export default App;
