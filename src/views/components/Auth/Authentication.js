import React, { useEffect, useState } from "react";
import {
  Row,
  Button,
  Container,
} from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Authentication() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = window.location.pathname.split("/");
    const token = { token: data[3] };
    // dispatch()
  }, [dispatch]);

  return (
    <div>
      {activated && <Container>
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
              <Button className="btn-success" href="/auth/signin">Sign in</Button>
            </div>
            
          </Row>
        </Container>}
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
              <hr />
              <Button className="btn-success" href="/auth/signin">Sign in</Button>
            </div>
            
          </Row>
        </Container>
      )}
    </div>
  );
}
