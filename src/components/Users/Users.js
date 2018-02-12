import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    removeRecord(id) {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => {
                axios.get("http://localhost:3000/users")
                    .then(res => {
                        this.setState({users: res.data})
                    });
            });
    }

    addRecord() {
        let name = document.getElementById("name");
        axios.post("http://localhost:3000/users", {"name": name.value}).then(() => {
            name.value = "";
            axios.get("http://localhost:3000/users")
                .then(res => {
                    this.setState({users: res.data})
                });
        })
    }

    componentDidMount() {
        axios.get("http://localhost:3000/users")
            .then(res => {
                this.setState({users: res.data})
            })
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((res, key) =>
                            <tr key={key}>
                                <td>{res.id}</td>
                                <td id="name_input">{res.name}</td>
                                <td><Button bsStyle="danger" onClick={() => this.removeRecord(res.id)}>Delete
                                    row</Button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </Table>
                <input type="text" id="name"/>&nbsp;&nbsp;
                <Button onClick={() => this.addRecord()}>Add Record</Button>
            </div>
        );
    }
}

export default Users;