import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../../application/selectors/auth";

import { signinAction } from "../../application/actions/auth";

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const authStatus = useSelector(getStatus);

  const handleLogin = () => {
    const email = "lacakkarapon@gmail.com";
    const password = "12341234";
    dispatch(signinAction({ email, password }));
    console.log("hadnlelogin click");
  };
  const handleCheck = () => {
    console.log("auth state on Navbar", authStatus);
  };
  useEffect(() => {}, [dispatch]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MINEIMAGE REDUX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <>
                <Nav.Link href="">
                  <Button onClick={handleLogin}>Login</Button>
                </Nav.Link>
                {authStatus.isAuth ?  <Nav.Link href="">
                    <p> is login </p>
                  </Nav.Link> :  <Nav.Link href="">
                    <p> is not login </p>
                  </Nav.Link> }
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
