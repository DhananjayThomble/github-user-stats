import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  return (
    <Navbar bg="info" expand="md" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="text-white">
            GitUser Stats
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {context.user ? (
              // logged in
              <>
                <Nav.Link className="text-white">Logout</Nav.Link>
              </>
            ) : (
              // logged out
              <>
                <Nav.Link tag={Link} href="/signin" className="text-white">
                  SignIn
                </Nav.Link>
                <Nav.Link href="/signup" className="text-white">
                  SignUp
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
