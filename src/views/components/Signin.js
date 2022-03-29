import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import { signinAction } from "../../application/actions/auth";
import {
	Col,
	Row,
	Form,
	InputGroup,
  } from "react-bootstrap";

export default function Signin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(signinAction({ email, password }));
    console.log("hadnlelogin click");
  };

  return (<>
	<Container className="sign-in">
	  {/* <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
		Sign in
	  </h1> */}
	  <Row className="mt-5">
		<Col
		  lg={5}
		  md={6}
		  sm={12}
		  className="p-5 m-auto shadow-sm rounded-lg"
		>
		  <h3 className="text-center">Sign In</h3>
		  <Form>
			<Form.Group controlId="formBasicEmail">
			  <Form.Label>Email address</Form.Label>
			  <InputGroup
				onChange={(event) => {
				  setEmail(event.target.value);
				}}
			  >
				<InputGroup.Text>
				  <FontAwesomeIcon icon={faEnvelope} />
				</InputGroup.Text>
				<Form.Control
				  autoFocus
				  required
				  type="email"
				  placeholder="email"
				/>
			  </InputGroup>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
			  <Form.Label>Password</Form.Label>
			  <InputGroup
				onChange={(event) => {
				  setPassword(event.target.value);
				}}
			  >
				<InputGroup.Text>
				  <FontAwesomeIcon icon={faUnlockAlt} />
				</InputGroup.Text>
				<Form.Control
				  required
				  type="password"
				  placeholder="Password"
				/>
			  </InputGroup>
			</Form.Group>
			<Button
			  variant="btn btn-success btn-block mt-3 w-100"
			  type="button"
			  onClick={handleLogin}
			>
			  Login
			</Button>
			<p className="forgot-password text-right">
			  Forgot <a href="#">password?</a>
			</p>
		  </Form>
		</Col>
	  </Row>
	</Container>
	{/* <Footer /> */}
  </>)
}
