import React, { Component, PropTypes } from 'react'
//import PropTypes from 'prop-types';

import './Header.css'

//Header
export class Header extends Component {
  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.String
}

export default Header
