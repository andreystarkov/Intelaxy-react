import React, { Component } from 'react';
import Header from './components/Header/Header';
import Platform from './components/Platform/Platform';
import Vacancy from './components/Vacancy/Vacancy';
import Portfolio from './components/Portfolio/Portfolio';
import Comment from './components/Comment/Comment';
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
        <Comment />
        <Footer />
      </div>
    );
  }
}

export default App;
