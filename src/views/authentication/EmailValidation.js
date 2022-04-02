import React, { useEffect, useState } from "react";
import { Row, Button, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { validate } from "../../infrastructure/services/api/auth";
import Layout from "../components/Layout";

export default function EmailValidation() {
  const [activated, setActivated] = useState();

  useEffect(() => {
    const data = window.location.pathname.split("/");
    const token = { token: data[3] };
    const activate = validate(token).then((resp) => {
      console.log(resp);
      if (resp.error) {
        setActivated(false);
      } else {
        setActivated(true);
      }
    });
    toast.promise(activate, {
      loading: "Loading...",
      success: "Activate account success",
      error: "link activation has already expriry",
    });
  }, []);

  const activationSection = (
    <div>
      {activated && console.log(activated)}
      {activated && (
        <Container>
          <Row className="mt-5">
            <div
              className="shadow-sm  p-3 text-center rounded"
              style={{ marginTop: "10rem" }}
            >
              <h1 className="text-success">
                Activate Account success <br />
                Welcome to mineimages
              </h1>
              <hr />
              <Button className="btn-success" href="/auth/signin">
                Sign in
              </Button>
            </div>
          </Row>
        </Container>
      )}
      {!activated && (
        <Container>
          <Row className="mt-5">
            <div
              className="shadow-sm  p-3 text-center rounded"
              style={{ marginTop: "10rem" }}
            >
              <h1 className="text-warning">
                Account have been activated <br />
              </h1> 
            </div>
          </Row>
        </Container>
      )}
    </div>
  );
  return (
    <Layout>
      <div style={{marginBottom: "20rem"}}>{activationSection}</div>
    </Layout>
  );
}
