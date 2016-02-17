import React, { Component } from 'react';
import { Link } from 'react-router';
// Components
import Footer from './Layout/Footer';
import Header from './Layout/Header';

export default class Layout extends Component {
  render() {
    // setTimeout(() => this.setState({ word: 'swagger'}), 2000);
    return (
      <div className='container'>
        <Header />
        <Link to=''>Home</Link>
        {' '}
        <Link to='contact'>Contact</Link>
        {' '}
        <Link to='blog'>Blog</Link>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
