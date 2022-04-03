import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { InsertCategories, loadCategoriesById } from "../../../application/actions/admin";
import { getCategoriesById } from "../../../application/selectors/admin";
import Layout from "../components/Layout";

function Categories__Add() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
const handleFormSubmit =(e)=>{
	e.preventDefault()
	dispatch(InsertCategories({name,desc}))
	window.location.href("/admin/categories")
}
  const content = (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">เพิ่มประเภท</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/categories">ประเภท</Link>
                </li>
                <li className="breadcrumb-item active">เพิ่ม</li>
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
                    เพิ่มประเภท
                  </h3>
                  <Link
                    to="/admin/categories"
                    className="btn btn-warning float-right"
                  >
                    กลับ
                  </Link>
                </div>
                <form onSubmit={handleFormSubmit}>
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
						  onChange={(e)=>{setName(e.target.value)}}
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
						  onChange={(e)=>{setDesc(e.target.value)}}
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

export default Categories__update;
