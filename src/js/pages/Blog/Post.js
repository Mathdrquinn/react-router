import React, { Component, PropTypes } from 'react';
// Components

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.params.post;
    this.state = { someText: 'just a little text...' };
    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    const someText = e.target.value;
    return this.setState({ someText });
  }

  render() {
    return (
      <div className="container">
        <h3>Post Title Here: {this.post}</h3>
        <h6>{this.state.someText}</h6>
        <input value={this.state.someText} onChange={this.changeText} />
      </div>
    );
  }
}

Post.propType = {
  params: PropTypes.object.isRequired,
  post: PropTypes.string.isRequired,
};
