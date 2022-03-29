import React, { useContext } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUnlockAlt,
  faSignature,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import {signupAction} from '../../application/actions/auth';

export default function Signup() {
  const initialValues = {
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().min(8).max(100).required(" is required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    email: Yup.string().min(4).max(150).required(" is required"),
    firstName: Yup.string().max(60).required(" is required"),
    lastName: Yup.string().max(60).required(" is required"),
    telephone: Yup.string(10).max(10).required(" is required"),
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
	  console.log(data)
	  dispatch(signupAction(data))
  };

  return (
    <>
      <Container className="sign-up">
        <Row className="mt-5">
          <div className="col-lg-12"></div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <h3 className="text-center">Sign Up</h3>
              <Form>
                <div className="form-group">
                  <label>
                    First Name:
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faSignature} />
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="firstName"
                      placeholder="Your FirstName..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Last Name:
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faSignature} />
                    </div>
                    <Field
                      className="form-control"
                      type="text"
                      name="lastName"
                      placeholder="Your LastName..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Email:{" "}
                    <ErrorMessage
                      name="email"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    <Field
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="exsample@domain.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Password:
                    <ErrorMessage
                      name="password"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faUnlockAlt} />
                    </div>
                    <Field
                      className="form-control"
                      autoComplete="off"
                      type="password"
                      name="password"
                      placeholder="Your Password..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Password confirmation:{" "}
                    <ErrorMessage
                      name="passwordConfirmation"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faUnlockAlt} />
                    </div>
                    <Field
                      className="form-control"
                      autoComplete="off"
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Your Password..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>
                    Phone Number:
                    <ErrorMessage
                      name="telephone"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faMobile} />
                    </div>

                    <Field
                      className="form-control"
                      type="telephone"
                      name="telephone"
                      placeholder="your phone number Ex: 0912314455"
                      maxLength="10"
                    />
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button className="btn btn-success btn-block" type="submit">
                    Register
                  </button>
                </div>
              </Form>
            </Col>
          </Formik>
        </Row>
      </Container>
    </>
  );
}
