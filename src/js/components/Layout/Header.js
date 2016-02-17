import React, { Component } from 'react';
// Components
import Title from './Header/Title';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.changeWord = this.changeWord.bind(this);
  }

  changeWord(e) {
    const word = e.target.value;
    return this.props.changeWord(word);
  }

  render () {
    return (
      <header>
        <Title />
        <input value={this.props.word} onChange={this.changeWord} />
      </header>
    );
  }
}
