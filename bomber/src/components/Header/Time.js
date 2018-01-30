import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

class Time extends Component {
    constructor(props) {
        super(props);
        this.counter = null;
        this.state = {
            counter: 0,
            isStarted: false,
        }
        this[props.control]()
    }

    start() {
        this.counter = setInterval(() => {
            this.setState({counter: this.state.counter + 1, isStarted: true });
        }, 1000);
    }

    stop() {
        if (this.state.isStarted) {
            clearInterval(this.counter);
            this.setState({isStarted: false });

        }
    }

    pad(value) {
        let val = value.toString();
        return (val.length < 2 ? "0" : "")+val;
    }

    render() {
        const seconds = this.state.counter % 60
        const minutes = parseInt(this.state.counter / 60)

        return (
            <div>
                <span id="minutes">{this.pad(minutes)}</span>:<span id="seconds">{this.pad(seconds)}</span>
            </div>
        );
    }
}

Time.propTypes = {
    control: PropTypes.oneOf(['start', 'stop']).isRequired
};

export default Time;
