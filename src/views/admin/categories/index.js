import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../application/actions/ui";
import { getAllImages } from "../../../application/selectors/admin";
import { deleteCategories, deleteImages, loadImages } from "../../../application/actions/admin";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadCategories } from "../../../application/actions/categories";
import { getAllCaterories } from "../../../application/selectors/categories";
import Swal from "sweetalert2";

export default function Categories() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleDelete = (e) => {
    const cateId = e.target.value

    Swal.fire({
      title: "คุณต้องการที่จะลบหรือไม่?",
      text: "หากลบคุณจะไม่สามารถกู้คืนได้",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        denyButton: "order-3",
        confirmButton: "order-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategories({id:cateId}));
      }
    });
  };
  const allCategories = useSelector(getAllCaterories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories);
  }, [dispatch]);

  const categoriesData = () => {
    return allCategories.map((item, key) => {
      return (
        <tr key={item.id}>
          <td>{key + 1}</td>
          <td>{item.name}</td>
          <td>{item.desc}</td>
          <td>
            <>
              <a href={`/admin/categories/update/${item.id}`}>
                <button className="btn btn-success">แก้ไข</button>
              </a>
            </>
          </td>
          <td>
            <button
              value={item.id}
              onClick={handleDelete}
              className="btn btn-warning"
            >
              ลบ
            </button>
          </td>
        </tr>
      );
    });
  };

  const tableSection = (
    <div className="container-fluid user-images">
      <div className="row mb-2">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title" style={{ lineHeight: "2.1rem" }}>
                รายชื่อ
              </h3>
              <Link
                to="/admin/images/add"
                className="btn btn-primary float-right"
              >
                เพิ่มข้อมูล
              </Link>
            </div>
            <div className="card-body">
              <h3 className="text-align-center">รายการประเภท</h3>
              <table
                id="example"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>ประเภท</th>
                    <th>รายละเอียด</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allCategories != [] ? (
                    categoriesData()
                  ) : (
                    <p className="mt-3 mb-3">Have no your image</p>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <th>NO.</th>
                    <th>ประเภท</th>
                    <th>รายละเอียด</th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">จัดการรูปภาพ</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">รูปภาพทั้งหมด</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">{tableSection}</div>
    </Layout>
  );
}
