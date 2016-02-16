import mod1 from './module1';
import mod2 from './module2';
mod1();
mod2();
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
  render () {
    return (
      <h2>I got hot sauce in my bag, swag.</h2>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app)
