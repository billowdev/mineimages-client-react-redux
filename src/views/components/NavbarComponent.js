import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadAuth, loadSignout } from "../../application/actions/auth";
import { getAuthStatus } from "../../application/selectors/auth";
import { Link } from "react-router-dom";
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

import "../assets/css/style.css";

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const handleLogout = () => {
    dispatch(loadSignout);
    window.location = "/";
  };

  useEffect(() => {
    dispatch(loadAuth());
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
                        <FontAwesomeIcon icon={faUser} />{" "}
                        {authStatus.authState.firstName}
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
                        {authStatus.authState.persmission == "admin" ? (
                          <NavDropdown.Item href="/admin">
                            <FontAwesomeIcon icon={faUnlockKeyhole} /> admin
                            panel
                          </NavDropdown.Item>
                        ) : (
                          false
                        )}
                        <NavDropdown.Item onClick={handleLogout}>
                          <>
                            <FontAwesomeIcon icon={faPowerOff} /> logout
                          </>
                        </NavDropdown.Item>

                      </>
                    )}
                  </NavDropdown>
                </>
              )}

              <>
                {!authStatus.isAuth && (
                  <>
                    <Nav.Link href="/signin">
                      <FontAwesomeIcon icon={faRightToBracket} />
                      Signin
                    </Nav.Link>
                    <Nav.Link href="/signup">
                      <FontAwesomeIcon icon={faRegistered} /> Signup
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
