import React, { Component, PropTypes } from 'react';
// Components
import Footer from './Layout/Footer';
import Header from './Layout/Header';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
