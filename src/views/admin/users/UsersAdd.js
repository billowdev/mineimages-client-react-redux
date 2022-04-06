import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { dispatch } from "react-redux";
import { createUsers } from "../../../application/actions/admin/users";
import { useDispatch } from "react-redux";
export default function UsersAdd() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [about, setAbout] = useState(null);

  const [addressLine1, setAddressLine1] = useState(null);
  const [addressLine2, setAddressLine2] = useState(null);
  const [city, setCity] = useState(null);
  const [postalCode, setPostalCode] = useState(null);
  const [country, setCountry] = useState(null);

  const handleCreateUsers = () => {
    const user = { firstName, lastName, email, password, telephone, about };
    const address = { addressLine1, addressLine2, city, postalCode, country };
    dispatch(createUsers({ user, address }));
  };
  return (
    <Layout>
      <div className="container container-fluid">
        {/* <div className="container container-fluid item-center users-body "> */}
        <div className="row mb-2">
          <div className="edit-section">
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <form>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Add User</h6>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="fullName">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="First name"
                            onChange={(event) => {
                              setFirstName(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="lastName"
                            className="form-control"
                            id="lastName"
                            placeholder="last name"
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
                            type="email"
                            className="form-control"
                            id="eMail"
                            placeholder="Enter email "
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="password">password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter password"
                              maxLength={10}
                              minLength={100}
                              onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group">
                            <label htmlFor="passwordConfirm">
                              password confirmation{" "}
                              {password === passwordConfirm ? (
                                <></>
                              ) : (
                                <>
                                  <span style={{ color: "red" }}>
                                    password must be matching
                                  </span>
                                </>
                              )}
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="passwordConfirm"
                              placeholder="Enter passwordConfirm"
                              maxLength={10}
                              minLength={100}
                              onChange={(event) => {
                                setPasswordConfirm(event.target.value);
                              }}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input
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
                          <label htmlFor="zipcode">Zip Code</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zipcode"
                            placeholder="zipcod"
                            onChange={(event) => {
                              setPostalCode(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="country">country</label>
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            placeholder="country Code"
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
                          <Link to="/admin/users">
                            <button
                              type="button"
                              name="submit"
                              className="btn btn-secondary me-2"
                            >
                              ยกเลิก
                            </button>
                          </Link>
                          <button
                            type="submit"
                            id="submit"
                            onClick={(e) => {
                              handleCreateUsers(e);
                            }}
                            name="submit"
                            className="btn btn-primary"
                          >
                            เพิ่ม
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
