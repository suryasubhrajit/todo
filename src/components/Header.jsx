/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar variant='dark' expand="lg" className="mb-2 py-2 px-5 shadow-sm text-light border-bottom border-1 border-secondary shadow-sm">
                <Container fluid>
                    <Navbar.Brand href="#"><img alt='' src="shaadow-todo.png" style={{width:'50px', height:'50px'}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{color:'#fff'}} href="#action1">Home</Nav.Link>
                            <Nav.Link style={{color:'#959595'}} href="#action2">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header