import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import './user.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            updatedName: this.props.res.name
        };

        this.handleChange = this.handleChange.bind(this);
    }

    removeRecord(id) {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                this.props.updateList();
            });
    }

    handleChange(event) {
        this.setState({ updatedName: event.target.value });

    }


    updateRecord() {
        console.log('updating name to : %s', this.state.updatedName);
        axios.put(`http://localhost:3000/users/${this.props.res.id}`, { "name": this.state.updatedName }).then(() => {
            this.setState({ updatedName: '' });
            this.props.updateList();
            this.setState({ showEdit: !this.state.showEdit });
        })

    }

    toggleEdit() {
        this.setState({ updatedName: this.props.res.name, showEdit: !this.state.showEdit });
    }


    render() {
        return (
            <tr>
                <td>{this.props.res.id}</td>
                <td id="name_input">
                    <span onClick={() => this.toggleEdit()} className={this.state.showEdit ? 'hidden' : 'show'}>{this.props.res.name}</span>
                    <input type="text" id="input-name" onChange={this.handleChange} className={this.state.showEdit ? 'show' : 'hidden'} value={this.state.updatedName} />
                </td>
                <td>
                    <Button bsStyle="danger" onClick={() => this.removeRecord(this.props.res.id)} className={this.state.showEdit ? 'hidden' : 'show'}>Delete
                                    row</Button>
                    <Button bsStyle="info" onClick={() => this.updateRecord()} className={this.state.showEdit ? 'show' : 'hidden'}>Save
                                    row</Button>
                    <Button bsStyle="info" onClick={() => this.toggleEdit()} className={this.state.showEdit ? 'show' : 'hidden'}>Cancel
                                    row</Button>
                </td>
            </tr>
        );
    }
}

export default User;