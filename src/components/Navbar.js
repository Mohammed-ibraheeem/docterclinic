import React from "react";
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./css/Navbar.css"
import logo from './Assets/download.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbars = () => {
    return (
        <Navbar expand="lg" >
            {/* <Container>*/}
            <Navbar.Brand>
                <img src={logo} alt='...' title="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-1 d-flex align-items-center  justify-content-between">
                <Nav className="me-auto">
                    <Link to='/home' href="#home" className="homme">Home</Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">FAQ'S</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Service Detalis</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Blog Detalis</NavDropdown.Item>
                    </NavDropdown>
                    <Link to='/Contact' href="#link" className="Contact">Contact Us</Link>
                    <Nav.Link href="#link"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link"><FontAwesomeIcon icon={faPhone} />   (+01) 999 888 777</Nav.Link>
                    <Nav.Link href="#link">
                        <button>Contact Us<span><FontAwesomeIcon icon={faChevronRight} />  </span></button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container>*/}
        </Navbar>
    )
}
export default Navbars;