import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="primary" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Travely</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"> Packages</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Destinations</Nav.Link>
                        {user?.email && <>
                            <Nav.Link as={Link} to="/mylist">TourList</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/newservice">NewPackage</Nav.Link> </>}
                        {user?.email ?
                            <Button onClick={logOut} variant="secondary">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }

                        <br />




                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName} <br />  {user?.email}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;