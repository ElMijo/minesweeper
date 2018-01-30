import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import Minefield from './Board/Minefield'

class Board extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const tbody = this.props.boardData.map((row, krow) => {
            return (<tr key={krow}>
                {row.map((col, ckey) => {
                    return <Minefield key={ckey} value={col} />
                })}
            </tr>) ;
        });
        return (
            <table className="table table-bordered">
                <tbody>
                    {tbody}
                </tbody>
            </table>
        );
    }
}

Board.propTypes = {
    boardData: PropTypes.array.isRequired
};

export default Board;
