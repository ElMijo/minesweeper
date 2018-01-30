import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Events } from '../../helpers/EventEmitter'

class Minefield extends Component {
    constructor(props) {
        super(props);
        let intValue = parseInt(props.value, 10);

        this.state = {
            value: props.value,
            isAcive: false,
            isMine: isNaN(intValue),
            isNumber: !isNaN(intValue)&&intValue>0,
            hasFlag: false
        }
    }

    onClick(event) {
        Events.emit('minefield.click');
        if (!this.state.hasFlag) {
            this.setState({isAcive: true});
        }
    }

    render() {
        const { value, isMine, isNumber, isAcive, hasFlag } = this.state;
        const style = { backgroundColor: isAcive ? 'gray' : 'inherit'}
        let content = ".";
        if (hasFlag) {
            content = <i className="fa fa-flag" aria-hidden="true"></i>
        } else if (isMine && isAcive) {
            content = <i className="fa fa-bomb" aria-hidden="true"></i>
            Events.emit('minefield.isMine');
        } else if (isNumber && isAcive) {
            content = <b>{value}</b>
        }
        return (
            <td className="text-center" style={style} onClick={this.onClick.bind(this)}>
                {content}
            </td>
        );
    }
}

Minefield.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Minefield;
