import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getImageById,
  getModalImages,
} from "../../../application/selectors/admin";
import { loadImagesById, updateImages } from "../../../application/actions/admin/images";

export default function ImagesUpdate() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdateData = () => {};
  const imageData = useSelector(getImageById);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState("");
  useEffect(() => {
    const id = window.location.pathname.split("/")[4];
    dispatch(loadImagesById(id));
  }, [dispatch]);

  const handleUpdate = ()=>{
    const id = window.location.pathname.split("/")[4];
    const data = {id, name, price, status, visible}
    dispatch(updateImages(data))
    navigate("/admin/images")
  }
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
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="form-group">
                                <label htmlFor="imgId">ID</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="imgId"
                                  placeholder="ID"
                                  disabled
                                  value={imageData && imageData.id}
                                />
                              </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="form-group">
                                <div className="text-center">
                                  <img
                                    src={imageData && imageData.pathOrigin} width="400px"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="form-group">
                                <label htmlFor="imgId">ชื่อ</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="imgName"
                                  placeholder="name"
                                  defaultValue={imageData && imageData.name}
                                  onChange={(event) => {
                                    setName(event.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="form-group">
                                <label htmlFor="imgId">ราคา</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="imgIPrice"
                                  placeholder="price"
                                  defaultValue={imageData&&imageData.price}
                                  onChange={(event) => {
                                    setPrice(event.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="form-group">
                                <label htmlFor="imgId">สถานะ</label>

                                <select
                                  className="custom-select mb-3"
                                  defaultValue={imageData&&imageData.status}
                                  onChange={(e)=>{setStatus(e.target.value)}}
                                >
                                  <option
                                    style={{ color: "green" }}
                                    disabled
                                    selected="selected"
                                  >
                                   {`${imageData&&imageData.status}`}
                                  </option>
                                
                                  <option>active</option>
                                  <option>inactive</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="form-group">
                                <label htmlFor="imgId">ระดับการมองเห็น</label>

                                <select
                                  className="custom-select mb-3"
                                  defaultValue={imageData&&imageData.visible}
                                  onChange={(e)=>{setVisible(e.target.value)}}
                                >
                                  <option
                                    style={{ color: "green" }}
                                    disabled
                                    selected="selected"
                                  >
                                     {`${imageData&&imageData.visible}`}
                                  </option>
                                
                                  <option>public</option>
                                  <option>private</option>
                                </select>
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
                        onClick={handleUpdate}
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
