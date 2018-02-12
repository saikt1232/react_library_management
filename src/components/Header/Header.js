import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="row">
            <div className="header-center">
                <h1>Welcome to Library Management</h1>
            </div>
            <Navbar>
                <Nav>
                    <NavItem eventKey={1} href="/users">
                        Users
                        </NavItem>
                    <NavItem eventKey={2} href="/books">
                        Books
                        </NavItem>
                </Nav>
            </Navbar>
            </div>
        );
    }
}

export default Header;
