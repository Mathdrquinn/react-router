import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
// Pages
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
// Components
import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='contact' component={Contact}></Route>
      <Route path='Blog' component={Blog}></Route>
    </Route>
  </Router>,
  app);
