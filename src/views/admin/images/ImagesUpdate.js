import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadState, saveState } from "../../helpers/Persist";
import { getModalImages } from "../../../application/selectors/admin";
import log from "../../../infrastructure/services/logger/console";
export default function ImagesUpdate() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(null);
  const handleUpdateData = () => {};

  useEffect(() => {
    loadState("updateDataImage");
  }, []);

  useEffect(() => {
    saveState(
      "updateDataImage",
      // dispatch(getImageById(window.location.pathname.split("/")[4]))
    );
  }, [dispatch]);
  return (
    <Layout>
      <div className="content">
        <div>
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h5 className="m-0 text-dark">จัดการรูปภาพ</h5>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/admin/images">รูปภาพ</Link>
                    </li>
                    <li className="breadcrumb-item active">แก้ไขข้อมูล</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12  col-sm-10 col-md-8">
                  <div className="card">
                    <div className="card-header">
                      <h3
                        className="card-title"
                        style={{ lineHeight: "2.1rem" }}
                      >
                        แก้ไขข้อมูล
                      </h3>
                      <Link
                        to="/admin/images"
                        className="btn btn-warning float-right"
                      >
                        กลับ
                      </Link>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                      <div className="card-body">
                        <form>
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mb-2 text-primary">Add User</h6>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label htmlFor="imgId">ID</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="imgId"
                                  placeholder="ID"
                                  disabled
                                  // value={}
                                  onChange={(event) => {
                                    // setFirstName(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                        name="submit"
                        onClick={(e) => {
                          handleUpdateData(e);
                        }}
                      >
                        อัปเดตข้อมูล
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
