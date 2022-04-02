import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  NavItem,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus } from "../../application/selectors/auth";

import { Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faUser,
  faImage,
  faShoppingCart,
  faRectangleList,
  faGear,
  faRightToBracket,
  faRegistered,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";

import {
  signinAction,
  isAuthAction,
  signoutAction,
} from "../../application/actions/auth";
import "../assets/css/style.css";

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const handleLogout = () => {
    dispatch(signoutAction());
    window.location = "/";
  };

  useEffect(() => {
    dispatch(isAuthAction());
  }, [dispatch]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">MINEIMAGE REACT-REDUX-APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              {authStatus.isAuth && (
                <>
                  <Nav.Link href="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} /> CART
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <>
                        <FontAwesomeIcon icon={faUser} /> {authStatus.firstName}
                      </>
                    }
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      <FontAwesomeIcon icon={faGear} /> profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/profile/images">
                      <FontAwesomeIcon icon={faImage} /> Images
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/profile/orders">
                      <FontAwesomeIcon icon={faRectangleList} /> order history
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    {authStatus.isAuth && (
                      <>
                        <NavDropdown.Item onClick={handleLogout}>
                          <>
                            <FontAwesomeIcon icon={faPowerOff} /> logout
                          </>
                        </NavDropdown.Item>

                        {authStatus.permission == "admin" && (
                          <NavDropdown.Item href="/mineimages/admin">
                            <FontAwesomeIcon icon={faUnlockKeyhole} /> admin
                            panel
                          </NavDropdown.Item>
                        )}
                      </>
                    )}
                  </NavDropdown>
                </>
              )}

              <>
                {!authStatus.isAuth && (
                  <>
                    <Nav.Link href="/login">
                      <FontAwesomeIcon icon={faRightToBracket} />
                      Login
                    </Nav.Link>
                    <Nav.Link href="/register">
                      <FontAwesomeIcon icon={faRegistered} /> Register
                    </Nav.Link>
                  </>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
