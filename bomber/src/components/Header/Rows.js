import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Rows extends Component {
    pad(value) {
        let val = value.toString();
        return (val.length < 2 ? "0" : "")+val;
    }

    render() {
        return (
            <div>
                <span id="rows">{this.pad(this.props.quantity)}</span>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
        );
    }
}

Rows.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default Rows;
