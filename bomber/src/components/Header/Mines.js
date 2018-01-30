import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Mines extends Component {
    start() {
        this.counter = setInterval(() => {
            this.setState({counter: this.state.counter + 1, isStarted: true });
        }, 1000);
    }

    stop() {
        clearInterval(this.counter);
        this.setState({isStarted: false });
    }

    pad(value) {
        let val = value.toString();
        return (val.length < 2 ? "0" : "")+val;
    }

    render() {
        return (
            <div>
                <span id="mines">{this.pad(this.props.quantity)}</span> 
                <i class="fa fa-bomb" aria-hidden="true"></i>
            </div>
        );
    }
}

Mines.propTypes = {
    quantity: PropTypes.number.isRequired
};

export default Mines;
