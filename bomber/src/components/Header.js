import React, { Component } from 'react';
import Time from './Header/Time'
import Mines from './Header/Mines'
class Header extends Component {
  render() {
      const control = 'start';
    return (
        <nav className="navbar navbar-inverse bg-primary fixed-top navbar-toggleable-md">
            <a className="navbar-brand" href="/">Bomber</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div className="nav-link">
                            <Mines quantity="5" />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link">
                            <Time control={control} />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}


export default Header;
