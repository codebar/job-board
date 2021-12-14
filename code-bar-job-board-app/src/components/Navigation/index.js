

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


import * as ROUTES from '../../constants/routes'



const NavigationBarJobBoardNonLoggedIn = () => {
    return (
        <Navbar bg="white" expand="lg">
        <Container>
            <Navbar.Brand href="https://www.codebar.io"><img id='header-logo' alt='codebar logo' src="https://codebar.io/assets/logo-7345316d16a39b0a5cda277d2cf4cbf3aed1031b9288c0696b8273771ee1fb20.png"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href={ROUTES.SIGN_UP}>Sign up</Nav.Link>
                <Nav.Link href={ROUTES.SIGN_IN}>Sign in</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

const NavigationBarJobBoardLoggedIn = ({currentUser, logOut}) => {

    return (
        
        <Navbar bg="white" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="https://www.codebar.io"><img id='header-logo' alt='codebar logo' src="https://codebar.io/assets/logo-7345316d16a39b0a5cda277d2cf4cbf3aed1031b9288c0696b8273771ee1fb20.png"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://codebar.io/donations/new">Donate</Nav.Link>
                        <Nav.Link href={ROUTES.LANDING}>Job Board</Nav.Link>
                        <Nav.Link href={ROUTES.MY_JOBS}>My Jobs</Nav.Link>
                        <Nav.Link href={ROUTES.SUBMIT_JOB}>Post a Job</Nav.Link>
                        <NavDropdown title="My Account" id="basic-nav-dropdown">
                            <NavDropdown.ItemText><p>Logged in as {currentUser.email}</p></NavDropdown.ItemText>
                            <NavDropdown.Item onClick={logOut}>Sign Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export {NavigationBarJobBoardNonLoggedIn, NavigationBarJobBoardLoggedIn};