import React, { Component } from 'react';
import Header from './components/Header/Header';
import Platform from './components/Platform/Platform';
import Vacancy from './containers/Vacancy/Vacancy';
import Portfolio from './components/Portfolio/Portfolio';
import Technologies from './components/Technologies';
import Footer from './components/Footer/Footer';
import './sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Platform />
        <Portfolio />
        <Vacancy />
        <Technologies />
        <Footer />
      </div>
    );
  }
}

export default App;
