import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; 

const Dashboard = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Mehandi Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                         
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Dashboard Welcome Section */}
            <Container className="mt-5 text-center">
                <h1>Welcome to Mehandi Dashboard</h1>
                <p>Manage your Mehandi services and bookings from here.</p>
            </Container>
        </div>
    );
};

export default Dashboard;






