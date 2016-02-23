import React, { Component, PropTypes } from 'react';
// Components

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>Blog</h1>
        {this.props.children}
      </div>
    );
  }
}

Blog.propTypes = {
  children: PropTypes.element.isRequired,
};
