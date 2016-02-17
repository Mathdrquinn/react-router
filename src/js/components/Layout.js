import React, { Component } from 'react';
// Components
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Main from './Layout/Main';

export default class Layout extends Component {
  render () {
    // setTimeout(() => this.setState({ word: 'swagger'}), 2000);
    return (
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
