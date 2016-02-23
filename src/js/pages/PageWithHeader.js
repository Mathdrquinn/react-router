import React, { Component } from 'react';
// Components
import Header from '../components/Layout/Header'

export default class PageWithHeader extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
