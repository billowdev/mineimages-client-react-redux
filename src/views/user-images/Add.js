// import React, { useEffect, useState } from "react";
// import { API_URL, token } from "../../infrastructure/services/api/config";
// import { useDispatch, useSelector } from "react-redux";
// import { Container } from "react-bootstrap";
// import Layout from "../components/Layout";
// import { getAllCaterories } from "../../application/selectors/categories";
// import { loadCategories } from "../../application/actions/categories";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCaterories } from "../../application/selectors/categories";
import { loadCategories } from "../../application/actions/categories";
import { uploadImage } from "../../application/actions/images";
import { getLoading } from "../../application/selectors/ui";
import Swal from "sweetalert2";
export default function AddImages() {
  const loading = useSelector(getLoading);
  const allCategories = useSelector(getAllCaterories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCategories);
  }, [dispatch]);

  const [fileInputState, setFileInputState] = useState("");
  const [PreviewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [fileData, setFileData] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState(1);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(event.target.value);
  };

  const handleSubmitFile = (event) => {
    event.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setFileData(reader.result);
      const data = {
        name: name,
        detail: detail,
        price: price,
        image: reader.result,
        CategoryId: category,
      };
      dispatch(uploadImage(data));
      setFileInputState("");
      setPreviewSource("");
    };
    reader.onerror = () => {
      console.log("Error");
    };
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  return (
    <Layout>
      <div className="container">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h5 className=" text-dark">จัดการรูปภาพ</h5>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/profile/images">รูปภาพ</Link>
                  </li>
                  <li className="breadcrumb-item active">เพื่มข้อมูล</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="content" style={{ marginBottom: "240px" }}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12  col-sm-10 col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title" style={{ lineHeight: "2.1rem" }}>
                      เพื่มข้อมูล
                    </h3>

                    <Link
                      to="/profile/images"
                      className="btn btn-warning float-right"
                    >
                      กลับ
                    </Link>
                  </div>
                  <form onSubmit={handleSubmitFile}>
                    <div className="card-body">
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="cat_name">ประเภทรูปภาพ</label>

                          <select
                            className="custom-select mb-3"
                            value={category}
                            onChange={(e) => {
                              setCategory(e.target.value);
                            }}
                          >
                            {allCategories &&
                              allCategories.map((value, idx) => (
                                <option key={idx} value={value.id}>
                                  {value.name}
                                </option>
                              ))}
                          </select>
                        </div>

                        <div className="form-group col-md-9">
                          <label htmlFor="p_name">ชื่อรูปภาพ</label>
                          <input
                            type="text"
                            class="form-control"
                            name="p_name"
                            id="p_name"
                            placeholder="ชื่อรูปภาพ"
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="price">ราคา / บาท</label>
                          <input
                            type="text"
                            className="form-control"
                            name="price"
                            id="price"
                            placeholder="ราคา"
                            onChange={(event) => {
                              setPrice(event.target.value);
                            }}
                          />
                        </div>

                        <div className="form-group col-sm-6">
                          <label htmlFor="customFile">รูปภาพ</label>
                          <div className="custom-file">
                            <input
                              id="fileInput"
                              type="file"
                              name="image"
                              onChange={handleFileInputChange}
                              value={fileInputState}
                              className="custom-file-input"
                            />

                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              เลือกรูปภาพ
                            </label>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="detail" className="form-label">
                            รายละเอียด
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            id="detail"
                            name="detail"
                            rows={5}
                            placeholder="รายละเอียด"
                            defaultValue={""}
                            onChange={(event) => {
                              setDetail(event.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                        name="submit"
                      >
                        บันทึกข้อมูล
                      </button>
                    </div>
                  </form>
                </div>
                <h5 className="text-center mt-4 mb-3"> preview </h5>
                <hr />
                {PreviewSource && (
                  <div className="text-center">
                    <img
                      className="mt-3"
                      src={PreviewSource}
                      alt="chosen"
                      style={{ height: "300px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
