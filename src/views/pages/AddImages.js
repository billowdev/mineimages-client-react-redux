import React, { useEffect, useState } from "react";
import { API_URL, token } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";
import { getAllCaterories } from "../../application/selectors/categories";
import { loadCategories } from "../../application/actions/categories";

function AddImages() {
  const dispatch = useDispatch();

  const [fileInputState, setFileInputState] = useState("");
  const [PreviewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [fileData, setFileData] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(event.target.value);
  };

  const handleSubmitFile = (event) => {
    event.preventDefault();
    const data = { name: name, detail: detail, price: price };
    console.log(`state: \n ${name}, ${detail}, ${price}, ${category}`);
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      setFileData(reader.result);
      //   uploadImage(reader.result);
      console.log("image upload", { imageFile: fileData });
    };
    reader.onerror = () => {
      console.log("Error");
    };
  };

  const uploadImage = async (image) => {
    try {
      //   await fetch(`${API_URL}/images/upload`, {
      //     method: "POST",
      //     body: JSON.stringify({ data: image }),
      //     headers: {
      //       "Content-Type": "application/json",
      //       "access-token": token,
      //     },
      //   });
      setFileInputState("");
      setPreviewSource("");
    } catch (err) {
      console.log(err);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const allCategories = useSelector(getAllCaterories);
  useEffect(() => {
    dispatch(loadCategories);
  }, [dispatch]);

  const content = (
    <Container
      class="container"
      style={{ marginBottom: "10rem", marginTop: "5rem" }}
    >
      {allCategories && console.log(allCategories)}
      <div className="row justify-content-center">
        <div class="col-md-6">
          <h1 className="text-center">เพิ่มรูปภาพ</h1>
          <form onSubmit={handleSubmitFile} className="form">
            <div className="col-md-12">
              <label htmlFor="name" className="form-label">
                ชื่อภาพ
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="ชื่อภาพ"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="price" className="form-label">
                ราคา
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="ราคา"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-12">
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
                onChange={(event) => {
                  setDetail(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="cat_name">ประเภทรูปภาพ</label>
              <select
                className="custom-select mb-3"
                name="cat_name"
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option disabled>Select Images Types</option>
                <option value="general">general</option>
                <option value="natural">natural</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className="form-input"
              />
            </div>{" "}
            {PreviewSource && (
              <img
                className="mt-3"
                src={PreviewSource}
                alt="chosen"
                style={{ height: "300px" }}
              />
            )}
            <div class="col-12">
              <button
                type="submit"
                name="submit"
                class="btn btn-primary d-block mx-auto"
              >
                เพิ่มข้อมูล
              </button>
            </div>
          </form>
          <a href="./">ย้อนกลับ</a>
        </div>
      </div>
    </Container>
  );
  return <Layout>{content}</Layout>;
}

export default AddImages;
