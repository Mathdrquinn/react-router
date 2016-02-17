import React, { Component } from 'react';
// Components
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Main from './Layout/Main';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { word: props.word };
    this.changeWord = this.changeWord.bind(this);
  }

  changeWord(word) {
    return this.setState({ word });
  }

  render () {
    // setTimeout(() => this.setState({ word: 'swagger'}), 2000);
    return (
      <div className='container'>
        <Header word={this.state.word} changeWord={this.changeWord}/>
        <h1>I got hot-sauce in my bag, {this.state.word}</h1>
        <Main />
        <Footer />
      </div>
    );
  }
}
