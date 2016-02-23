import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.goToPoop = this.goToPoop.bind(this);
  }

  goToPoop() {
    console.log('go to poop');
    return this.props.history.pushState('/blog/poop');
  }

  render() {
    return (
      <header style={{ border: '1px solid purple' }}>
        <ul>
          <li><Link to="" activeClassName="active">Home</Link></li>
          <li><Link to="contact/" activeClassName="active">Contact</Link></li>
          <li><IndexLink to="blog/" activeClassName="active">Blog</IndexLink></li>
          <li><Link to="with-header/" activeClassName="active">Home No Footer</Link></li>
          <li><Link to="with-header/blog/" activeClassName="active">Blog No Footer</Link></li>
        </ul>
        <button onClick={this.goToPoop}>Go To Poop Blog Post</button>
      </header>
    );
  }
}
