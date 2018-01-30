import React, { Component } from 'react';
import Time from './Header/Time'
import Mines from './Header/Mines'
import Rows  from './Header/Rows'
import Cols  from './Header/Cols'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mines: 10,
            rows: 10,
            cols: 10,
            timeControl: 'stop'
        }
    }
    render() {
      const { mines, rows, cols, timeControl } = this.state;

    return (
        <nav className="navbar navbar-inverse bg-primary fixed-top navbar-toggleable-md">
            <a className="navbar-brand" href="/">Bomber</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div className="nav-link">
                            <Mines quantity={mines} />
                        </div>
                    </li>
                    <li className="nav-item active">
                        <div className="nav-link">
                            <Rows quantity={rows} />
                        </div>
                    </li>
                    <li className="nav-item active">
                        <div className="nav-link">
                            <Cols quantity={cols} />
                        </div>
                    </li>
                    <li className="nav-item active">
                        <div className="nav-link" data-toggle="modal" data-target="#config-modal">
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link">
                            <Time control={timeControl} />
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}


export default Header;
