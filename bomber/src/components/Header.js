import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse bg-primary fixed-top">
            <a className="navbar-brand" href="/">Bomber</a>
        </nav>
    );
  }
}


export default Header;
