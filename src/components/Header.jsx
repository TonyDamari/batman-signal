import React, { useContext, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../utils/auth";

const Header = () => {
    const { loggedIn, setLoggedIn, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            setLoggedIn(true);
            setToken(JSON.parse(localStorage.getItem("access_token")));
        }
    }, []);

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            collapseOnSelect
            className="mb-5"
        >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/panic/history">
                            <Nav.Link>History</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                {loggedIn && <Button onClick={logoutHandler}>Logout</Button>}
            </Container>
        </Navbar>
    );
};

export default Header;
