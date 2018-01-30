import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Cols extends Component {
    pad(value) {
        let val = value.toString();
        return (val.length < 2 ? "0" : "")+val;
    }

    render() {
        return (
            <div>
                <span id="cols">{this.pad(this.props.quantity)}</span>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
        );
    }
}

Cols.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default Cols;
