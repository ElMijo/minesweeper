import React, { Component } from 'react';
import Header from './components/Header'
import Board from './components/Board'
import ApiClient from './helpers/ApiClient'
import ConfigModal  from './components/Header/ConfigModal'
import { Events } from './helpers/EventEmitter'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mines: 10,
            rows: 10,
            cols: 10,
            board:[]
        }
        this.api = new ApiClient();
        this.saveConfig = this.saveConfig.bind(this);
    }
    componentWillMount() {
        Events.on('config-modal.save', this.saveConfig);
    }

    componentDidMount() {
        const { rows, cols, mines } =  this.state
        const renderBoardComponent = (board) => {
            this.setState({ board });
        }
        this.api.getBoard(rows, cols, mines)
        .then(res => {
            renderBoardComponent(res.data.board);
        })
        ;
    }

    saveConfig(mines, rows, cols) {
        if (this.state.mines !== mines || this.state.rows !== rows || this.state.cols !== cols) {
            const renderBoardComponent = (board) => {
                this.setState({ board, mines, rows, cols });
            }
            this.api.getBoard(rows, cols, mines)
                .then(res => {
                    renderBoardComponent(res.data.board);
                })
            ;
        }
    }
    render() {
        const { rows, cols, mines } = this.state;
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Board boardData={this.state.board} />
                        </div>
                    </div>
                </div>
                <ConfigModal rows={rows} cols={cols} mines={mines} />
            </div>
        );
  }
}

export default App;
