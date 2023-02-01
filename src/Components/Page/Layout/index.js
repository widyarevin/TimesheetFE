import { Link, Outlet } from "react-router-dom";
import React from "react";
import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  Image,
  For,
} from "react-bootstrap";

function index() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/timesheet">Timesheet Permonth</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/history">History</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/profile">Profile</Link>
            </Nav.Link>

            {/* <Nav.Link href="#features">Timesheet Form</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Daily Activity</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Profile</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default index;
