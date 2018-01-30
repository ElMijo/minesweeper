import React, { Component } from 'react';
import Header from './components/Header'
import Board from './components/Board'
import ApiClient from './helpers/ApiClient'

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
    }
    componentDidMount() {
        const { rows, cols, mines } =  this.state
        const renderBoard = (board) => {
            this.setState({ board: board });
        }
        this.api.getBoard(rows, cols, mines)
            .then(res => {
                renderBoard(res.data.board);
            })
        ;
   }
  render() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Board boardData={this.state.board} />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
