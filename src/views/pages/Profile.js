import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../application/selectors/profile";
import { loadProfile } from "../../application/actions/profile";
import { getLoading } from "../../application/selectors/ui";
import { pageLoaded } from "../../application/actions/ui";

import { Card } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";


export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(getProfile);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(loadProfile);
  }, [dispatch]);
  return (
    <>
    
      {loading ? (
        "Loading  profile..."
      ) : (
        <>
        <h1>{console.log(profile)}</h1>
        
          <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-3">
              <div className="btn-edit">
                <Link to="/profile/edit">
                  <Button className="btn-success btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Link>
              </div>

              <div className="d-flex align-items-center">
                <div className="image">
                  <img
                    src={profile.avartar}
                    className="rounded"
                    width="155"
                  />
                </div>

                <div className="ml-3 w-100">
                  {profile && (
                    <h4 className="mb-0 mt-0">{`${profile.firstName} ${profile.lastName}`}</h4>
                  )}

                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column">
                      <span class="articles">About</span>
                      <span class="number1">{profile.about}</span>
                    </div>
                  </div>
                  <div className="button mt-2 d-flex flex-row align-items-center">
                    <Link to="/profile/images">
                      <button className="btn btn-sm btn-outline-success w-100">
                        Images
                      </button>
                    </Link>
                    <Link to="/profile/orders">
                      <button class="btn btn-sm btn-success w-100 ml-2">
                        Order
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group-button">
                <Button
                  className="btn-logout"
                  variant="outline-success btn"
                  href="/"
                >
                  logout <FontAwesomeIcon icon={faSignOut} />
                </Button>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <Card style={{ width: "31rem" }}>
              <Card.Body>
                <Card.Title>address</Card.Title>
                <Card.Text>
                  {profile.addressLine1}
                  {profile.addressLine2}
                  {profile.city} {profile.postalCode}
                  {profile.country}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
      {/* <Footer /> */}
    </>
  );
}
