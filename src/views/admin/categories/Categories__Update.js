import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import {
  loadCategoriesById,
  updateCategories,
} from "../../../application/actions/admin";
import { getCategoriesById } from "../../../application/selectors/admin";
import Layout from "../components/Layout";

function Categories__Update() {
  const id = window.location.pathname.split("/")[4];
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategoriesById);
  const [name, setName] = useState(categoryData.name);
  const [desc, setDesc] = useState(categoryData.desc);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = { id:id, name, desc }
    dispatch(updateCategories(data));
  };
  useEffect(() => {
    dispatch(loadCategoriesById(id));
  }, [dispatch]);

  const content = (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">จัดการสินค้า</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/categories">ประเภท</Link>
                </li>
                <li className="breadcrumb-item active">แก้ไขข้อมูล</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12  col-sm-10 col-md-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title" style={{ lineHeight: "2.1rem" }}>
                    แก้ไขข้อมูล
                  </h3>
                  <Link
                    to="/admin/categories"
                    className="btn btn-warning float-right"
                  >
                    กลับ
                  </Link>
                </div>
                <form id="categories-update-form" onSubmit={handleUpdate}>
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        <label htmlFor="url">ชื่อประเภท</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="ชื่อประเภท"
                          defaultValue={categoryData && categoryData.name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label htmlFor="url">รายละเอียด</label>
                        <textarea
                          type="text"
                          style={{ width: "100%", height: "200px" }}
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="ชื่อประเภท"
                          defaultValue={categoryData && categoryData.desc}
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      name="submit"
                    >
                      บันทึกข้อมูล
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Layout>
      <div className="content">{content}</div>
    </Layout>
  );
}

export default Categories__Update;
