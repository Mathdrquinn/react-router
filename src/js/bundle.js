import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// Pages
import Blog from './pages/Blog';
import BlogHome from './pages/Blog/BlogHome';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PageWithHeader from './pages/PageWithHeader';
import Post from './pages/Blog/Post';
// Components
import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="contact/" component={Contact} />
      <Route path="blog/" component={Blog}>
        <IndexRoute component={BlogHome} />
        <Route path=":post" component={Post} />
      </Route>
    </Route>
    <Route path="with-header/" component={PageWithHeader}>
      <IndexRoute component={Home} />
      <Route path="blog/" component={Blog}>
        <IndexRoute component={BlogHome} />
        <Route path=":post/" component={Post} />
      </Route>
    </Route>
  </Router>,
  app);
