import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Events } from '../../helpers/EventEmitter'

class ConfigModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mines: props.mines,
            rows: props.rows,
            cols: props.cols,
        }
    }
    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    onSaveConfig(event){
        const mines = parseInt(document.querySelector('#config-modal [name=mines]').value, 10);
        const rows = parseInt(document.querySelector('#config-modal [name=rows]').value, 10);
        const cols = parseInt(document.querySelector('#config-modal [name=cols]').value, 10);
        Events.emit('config-modal.save', mines, rows, cols);
    }
    render() {
        const style = { minWidth: '45px' }
        return (
            <div className="modal fade" id="config-modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={style}>
                                        <i className="fa fa-bomb" aria-hidden="true"></i>
                                    </div>
                                    <input value={this.state.mines} onChange={this.onChange.bind(this)} name="mines" type="number" className="form-control" placeholder="Minas" />
                                </div>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={style}>
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </div>
                                    <input value={this.state.rows} onChange={this.onChange.bind(this)} name="rows" type="number" className="form-control" placeholder="Filas" />
                                </div>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={style}>
                                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                    <input value={this.state.cols} onChange={this.onChange.bind(this)} name="cols" type="number" className="form-control" placeholder="Columnas" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" onClick={this.onSaveConfig.bind(this)} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ConfigModal.propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    mines: PropTypes.number.isRequired,
};

export default ConfigModal;
