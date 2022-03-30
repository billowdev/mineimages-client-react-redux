import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSignOut } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { uploadAvartar } from "../../../application/actions/profile";
import { getProfile } from "../../../application/selectors/profile";
import { loadProfile } from "../../../application/actions/profile";
import { getLoading } from "../../../application/selectors/ui";
import { updateProfile } from "../../../application/actions/profile";

import {Link} from 'react-router-dom'

export default function ProfileEdit() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  // const [email, setEmail] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [about, setAbout] = useState(null);

  const [addressLine1, setAddressLine1] = useState(null);
  const [addressLine2, setAddressLine2] = useState(null);
  const [city, setCity] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [country, setCountry] = useState(null);

  const handleUploadAvartar = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      imageUrl: `${profile.avartar}`,
      imageHeight: 300,
      imageAlt: `avartar ${profile.name}`,
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
        await dispatch(uploadAvartar(e.target.result));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdateProfile = (event) => {
    let updateUserData = { firstName, lastName, telephone, about };
    let updateUserAddress = {
      addressLine1,
      addressLine2,
      city,
      postalCode,
      country,
    };
    Object.keys(updateUserData).forEach((key) => {
      if (updateUserData[key] === null) {
        delete updateUserData[key];
      }
    });
    Object.keys(updateUserAddress).forEach((key) => {
      if (updateUserAddress[key] === null) {
        delete updateUserAddress[key];
      }
    });
    dispatch(updateProfile({ updateUserData, updateUserAddress }));
  };

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
          <Container className="item-center profile-body ">
            <div className="edit-section">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="account-settings">
                        <div className="user-profile">
                          <div className="user-avatar">
                            <img
                              src={profile.avartar}
                              alt="Maxwell Admin"
                            />
                          </div>

                          <div>
                            <Button
                              className="btn-change-image"
                              variant="btn btn-outline-success btn-sm"
                              onClick={handleUploadAvartar}
                            >
                              เปลี่ยนรูปภาพ <FontAwesomeIcon icon={faEdit} />
                            </Button>
                          </div>
                          <h5 className="user-name">
                            {profile.firstName}{" "}
                            {profile.lastName}
                          </h5>
                          <h6 className="user-email">
                            {profile.email}
                          </h6>
                        </div>
                        <div className="about">
                          <h5>Address</h5>
                          <p>
                            {profile.addressLine1}{" "}
                            {profile.addressLine2}{" "}
                            {profile.city}{" "}
                            {profile.postalCode}
                            <br /> {profile.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mb-2 text-primary">
                            Personal Details
                          </h6>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="fullName">First Name</label>
                            <input
                              defaultValue={profile.firstName}
                              type="text"
                              className="form-control"
                              id="fullName"
                              placeholder="Enter First name"
                              onChange={(event) => {
                                setFirstName(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="eMail">Last Name</label>
                            <input
                              defaultValue={profile.lastName}
                              type="email"
                              className="form-control"
                              id="eMail"
                              placeholder="Enter email ID"
                              onChange={(event) => {
                                setLastName(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="eMail">Email</label>
                            <input
                              value={profile.email}
                              type="email"
                              className="form-control"
                              id="eMail"
                              placeholder="Enter email ID"
                              required
                            />
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                              defaultValue={profile.telephone}
                              type="text"
                              className="form-control"
                              id="phoneInput"
                              placeholder="Enter phone number"
                              maxLength={10}
                              minLength={10}
                              required
                              onChange={(event) => {
                                setTelephone(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="about">
                          <div className="form-group">
                            <label htmlFor="phone">About</label>
                            <textarea
                              defaultValue={profile.about}
                              type="text"
                              className="form-control"
                              id="aboutTextArea"
                              placeholder="tell me about you"
                              maxLength={255}
                              required
                              onChange={(event) => {
                                setAbout(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h6 className="mt-3 mb-2 text-primary">Address</h6>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="AddressLine1">Address Line 1</label>
                            <input
                              defaultValue={profile.addressLine1}
                              type="text"
                              className="form-control"
                              id="addressLine1"
                              placeholder="Enter Street"
                              onChange={(event) => {
                                setAddressLine1(event.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="ciTy">Address Line 2</label>
                            <input
                              defaultValue={profile.addressLine2}
                              type="text"
                              className="form-control"
                              id="addressLine2"
                              placeholder="Enter City"
                              onChange={(event) => {
                                setAddressLine2(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="sTate">City</label>
                            <input
                              defaultValue={profile.city}
                              type="text"
                              className="form-control"
                              id="sTate"
                              placeholder="Enter State"
                              onChange={(event) => {
                                setCity(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="zIp">Zip Code</label>
                            <input
                              defaultValue={profile.postalCode}
                              type="text"
                              className="form-control"
                              id="zIp"
                              placeholder="Zip Code"
                              onChange={(event) => {
                                setPostalCode(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="zIp">country</label>
                            <input
                              defaultValue={profile.country}
                              type="text"
                              className="form-control"
                              id="zIp"
                              placeholder="Zip Code"
                              onChange={(event) => {
                                setCountry(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row gutters">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="text-right">
                            <Link to="/profile">
                              <button
                                type="button"
                                id="submit"
                                name="submit"
                                className="btn btn-secondary"
                              >
                                Cancel
                              </button>
                            </Link>
                            <button
                              type="button"
                              // id="submit"
                              onClick={handleUpdateProfile}
                              name="submit"
                              className="btn btn-primary"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
