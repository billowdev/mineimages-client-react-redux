import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../application/actions/ui";
import { getAllImages } from "../../../application/selectors/admin";
import { loadImages } from "../../../application/actions/admin";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Images() {
  const dispatch = useDispatch();
  const allImagesData = useSelector(getAllImages);

  // const [loading, setLoading] = useState(false);

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortColumnDirection, setSortColumnDirection] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    var params = `order?page=${page}&per_page=${perPage}&delay=1`;

    if (sortColumn) {
      params += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      params += `&search=${search}`;
    }
  };

  const imagesData = () => {
    return allImagesData.map((item, key) => {
      return (
        <tr key={item.id}>
          <td style={{ width: "10px" }}>{key + 1}</td>
          <td style={{ width: "250px" }}>
            <img src={item.Image.pathWatermark} width="200px" />
          </td>
          <td>{item.Image.name}</td>
          <td style={{ width: "250px" }}>{item.Image.detail}</td>
          <td>{item.price}</td>
          <td>{item.status}</td>
          <td>
            {" "}
            <span>{`${item.createdAt.slice(0, 10)}  ${item.createdAt.slice(
              11,
              19
            )}`}</span>
          </td>
          <td>
            <div>
              <Link to={`/public-profile/${item.Image.UserId}`}>
                <Button className="btn-success">owner</Button>
              </Link>
            </div>
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
              <a href="form-create.php" className="btn btn-primary float-right">
                เพิ่มข้อมูล
              </a>
            </div>
            <div className="card-body">
              <h3 className="text-align-center">รายการภาพ</h3>
              <form onSubmit={handleSearchSubmit}>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={handleSearchChange}
                  />
                  <button type="submit" className="btn btn-outline-primary">
                    search
                  </button>
                </div>
              </form>

              <table
                id="example"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>ภาพ</th>
                    <th>ชื่อภาพ</th>
                    <th>รายละเอียด</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                    <th>วันที่</th>
                    <th>เจ้าของภาพ</th>
                  </tr>
                </thead>
                <tbody>
                  {allImagesData != [] ? (
                    imagesData()
                  ) : (
                    <p className="mt-3 mb-3">Have no your image</p>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <th>NO.</th>
                    <th>ภาพ</th>
                    <th>ชื่อภาพ</th>
                    <th>รายละเอียด</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                    <th>วันที่</th>
                    <th>เจ้าของภาพ</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    var url = `?page=${page}&per_page=${perPage}&delay=1`;

    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    dispatch(loadImages(url));
  }, [dispatch]);

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
      <div className="content">
      {tableSection}
      </div>
    </Layout>
  );
}
