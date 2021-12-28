import React from "react";
import './navBar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar=()=>{
    return(
        <div className="container">
            <Navbar variant="dark">
                <Nav className="me-auto">
                    <div className="nav-2">
                    <Link className="nav-1" to="/Home">Home</Link>
                    <Link className="nav-1" to="/About">About</Link>
                    <Link className="nav-1" to="/Contact">Contact</Link>
                    <Link className="nav-1" to="/Login">Login</Link>
                    </div>
                </Nav>
            </Navbar>
        </div>
    );
}

export default NavBar;