import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUnlockAlt,
  faSignature,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

import { SignupApi } from "../../infrastructure/services/api/auth";

// import { useDispatch } from "react-redux";
// import { loadSignup } from "../../application/actions/auth";
import Layout from "../components/Layout";
export default function Signup() {
  let navigate = useNavigate();
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

  const onSubmit = (data) => {
    const register = SignupApi(data).then((resp) => {
      if (resp) {
        Swal.fire({
          icon: "success",
          title: "Signup successfuly",
          text: `Email has send success please check your email`,
          footer: '<a href="/signin">login</a>',
        }).then(function () {
          window.location = "/";
        });
      }
    }).catch(()=>{
  
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: `email has already exist please try another`,
      });
    });
  };

  const signup = (
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
  );

  return (
    <>
      <Layout>{signup}</Layout>
    </>
  );
}
