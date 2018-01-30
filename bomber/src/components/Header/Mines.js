import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Mines extends Component {
    pad(value) {
        let val = value.toString();
        return (val.length < 2 ? "0" : "")+val;
    }

    render() {
        return (
            <div>
                <span id="mines">{this.pad(this.props.quantity)}</span>
                <i className="fa fa-bomb" aria-hidden="true"></i>
            </div>
        );
    }
}

Mines.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default Mines;
