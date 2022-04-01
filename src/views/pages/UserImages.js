import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function UserImages() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortColumnDirection, setSortColumnDirection] = useState("");

  const [search, setSearch] = useState("");

  const { API_URL, token } = require("../../utils/api");
  const fetchImageData = async () => {
    setLoading(true);

    var url = `${API_URL}/user/images?page=${page}&per_page=${perPage}&delay=1`;
    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    await axios
      .get(url, {
        method: "get",
        headers: { "access-token": token },
      })
      .then((response) => {
        return response;
      })
      .then((resp) => {
        console.log(resp.data.data.images);
        setData(resp.data.data.images);
        setTotalRows(resp.data.data.total);
        setLoading(false);
      });
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const handleSort = (column, sortDirection) => {
    setSortColumn(column.name);
    setSortColumnDirection(sortDirection);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchImageData();
  };

  const [checkState, setCheckState] = useState(false);
  //Edit data
  const handleEditImageForm = (e, image) => {
    e.preventDefault();
    setEditImageId(image.id);
    if (image.visible === "public") {
      setCheckState(true);
    } else {
      setCheckState(false);
    }
    const formValues = {
      id: image.id,
      name: image.name,
      detail: image.detail,
      price: image.price,
      visible: image.visible,
      status: image.status,
    };
    console.log(`checkstate ${checkState}`);
    setEditFormData(formValues);
  };

  //Get ID
  const [editImageId, setEditImageId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    detail: "",
    price: "",
    visible: "",
    status: "",
  });

  //Edit Form Data
  const handleEditFormClick = (input) => (e) => {
    e.preventDefault();
    setEditFormData({ ...editFormData, [input]: e.target.value });
    console.log("handle Edit form click");
  };

  const handleFormSave = (e) => {
    e.preventDefault();
    let visible;
    if (checkState) {
      visible = "public";
    } else {
      visible = "private";
    }
    const saveimage = {
      id: editImageId,
      name: editFormData.name,
      detail: editFormData.detail,
      price: editFormData.price,
      visible: visible,
      status: editFormData.status,
    };

    console.log(saveimage);
  };
  const handleDelete = (id) => {
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
        Swal.fire("Saved!", `ลบรูปภาพเรียบร้อย ${id}`, "success");
      }
    });
  };

  const columns = [
    {
      name: "image",
      selector: (row) => row.pathOrigin,
      cell: (row) => (
        <img src={row.pathOrigin} width={240} height={240} alt={row.name} />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "200px",
    },
    {
      name: "Detail",
      selector: (row) => row.detail,
      sortable: true,
      cell: (row) => <p>{row.detail}</p>,
      // width: "300px",
    },
    {
      name: "price",
      selector: (row) => row.price,
      sortable: true,
      width: "100px",
    },
    {
      name: "status",
      selector: (row) => row.status,
      cell: (row) => (
        <div>
          <span>{row.status}</span>
        </div>
      ),
      width: "100px",
    },
    {
      name: "visible",
      selector: (row) => row.visible,
      cell: (row) => (
        <div>
          <span>{row.visible}</span>
        </div>
      ),
      width: "100px",
    },
    {
      name: "",
      selector: (row) => row.id,
      cell: (row) => (
        <div>
          <button
            className="btn btn-success"
            value={row}
            data-bs-toggle="modal"
            data-bs-target="#editModalForm"
            onClick={(e) => {
              handleEditImageForm(e, row);
            }}
          >
            Edit
          </button>
        </div>
      ),
      width: "90px",
    },
    {
      name: "",
      selector: (row) => row,
      cell: (row) => (
        <div>
          <button
            className="btn btn-success"
            value={row.id}
            onClick={(e) => {
              handleDelete(row.id);
            }}
          >
            delete
          </button>
        </div>
      ),
      width: "120px",
    },
  ];

  useEffect(() => {
    fetchImageData();
  }, [page, sortColumn, sortColumnDirection, perPage]);
  return (
    <Layout>
      <Container>
        <form onSubmit={handleSearchSubmit}>
          <div class="input-group">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={handleSearchChange}
            />
            <button type="submit" class="btn btn-outline-primary">
              search
            </button>
          </div>
        </form>

        <div className="image-history align-content-end">
          <h3 className="text-align-center">MineImages</h3>
          <Link to="/profile/images/upload">
            <button class="btn btn-outline-primary" href="/">
              Upload Image
            </button>
          </Link>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <DataTable
            //   title="MineImages"
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            onSort={handleSort}
          />

          <div
            className="modal fade"
            id="editModalForm"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit image
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleFormSave}>
                    <div className="mb-3">
                      <label className="form-label">ID</label>
                      <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={editFormData.id}
                        required
                        onChange={handleEditFormClick("id")}
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editFormData.name}
                        required
                        onChange={handleEditFormClick("name")}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">detail</label>
                      <textarea
                        rows="4"
                        cols="50"
                        className="form-control"
                        name="detail"
                        value={editFormData.detail}
                        required
                        onChange={handleEditFormClick("detail")}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">price</label>
                      <input
                        type="number"
                        min="0"
                        max="9999999"
                        className="form-control"
                        name="price"
                        value={editFormData.price}
                        required
                        onChange={handleEditFormClick("price")}
                      />
                    </div>

                    <div name="visible" className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="visible"
                        checked={checkState}
                        onClick={() => {
                          setCheckState(!checkState);
                        }}
                      />
                      <label className="form-check-label" htmlFor="visible">
                        visible
                      </label>
                    </div>

                    <div className="modal-footer d-block">
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="btn btn-success float-end"
                      >
                        Save Row
                      </button>

                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="btn btn-danger float-start"
                        onClick={() => {
                          handleDelete(editFormData.id);
                        }}
                      >
                        Delete Row
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default UserImages;
