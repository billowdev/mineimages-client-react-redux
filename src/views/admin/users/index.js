import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../../application/actions/admin/users";
import { getAllUsers } from "../../../application/selectors/admin";
import { updateUsers } from "../../../application/actions/admin/users";
import { deleteUsers } from "../../../application/actions/admin/users";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortColumnDirection, setSortColumnDirection] = useState("");
  const [search, setSearch] = useState("");

  const fetchUsersData = () => {
    setLoading(true);
    var url = `?page=${page}&per_page=${perPage}&delay=1`;
    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    dispatch(loadUsers(url));
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };

  const handleSort = (column, sortDirection) => {
    setSortColumn(column.firstName);
    setSortColumnDirection(sortDirection);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    fetchUsersData();
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchUsersData();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    fetchUsersData();
  }, [page, sortColumn, sortColumnDirection, perPage, dispatch]);

  const usersData = useSelector(getAllUsers);

  //Edit data

  const [editFormData, setEditFormData] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
    avartar: "",
    about: "",
    permission: "",
    status: "",
    createdAt: "",
    updatedAt: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // const [checkState, setCheckState] = useState(false);
  const [editDataId, setEditDataId] = useState(null);

  const handleEditDataForm = (e, data) => {
    e.preventDefault();
    setEditDataId(data.id);

    const formValues = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      telephone: data.telephone,
      avartar: data.avartar,
      about: data.about,
      permission: data.permission,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      addressLine1: data["Address.addressLine1"],
      addressLine2: data["Address.addressLine2"],
      city: data["Address.city"],
      postalCode: data["Address.postalCode"],
      country: data["Address.country"],
    };
    // console.log(formValues)
    setEditFormData(formValues);
  };

  // modal state data
  const handleEditFormClick = (input) => (e) => {
    e.preventDefault();
    setEditFormData({ ...editFormData, [input]: e.target.value });
  };

  const handleFormSave = async (e) => {
    e.preventDefault();
    const saveData = {
      id: editDataId,
      email: editFormData.email,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      telephone: editFormData.telephone,
      avartar: editFormData.avartar,
      about: editFormData.about,
      permission: editFormData.permission,
      status: editFormData.status,
      addressId: editFormData.addressId,
      addressLine1: editFormData.addressLine1,
      addressLine2: editFormData.addressLine2,
      city: editFormData.city,
      postalCode: editFormData.postalCode,
      country: editFormData.country,
    };
    dispatch(updateUsers(saveData));
    fetchUsersData();
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
        dispatch(deleteUsers(id));
        fetchUsersData();
      }
    });
  };

  const handleChangeStatus = (e, id) => {
    let state = "inactive";
    if (e.target.checked) {
      state = "active";
    }
    const user = { id:id, status: state };
    console.log(user);
    dispatch(updateUsers(user));
 
  };
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "280px",
    },
    {
      name: "firstName",
      selector: (row) => row.firstName,
      sortable: true,
      // width: "200px",
    },
    {
      name: "lastName",
      selector: (row) => row.lastName,
      sortable: true,
      // width: "200px",
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
      width: "200px",
    },
    {
      name: "telephone",
      selector: (row) => row.telephone,
      sortable: true,
      width: "120px",
    },
    {
      name: "about",
      selector: (row) => row.about,
      sortable: true,
      // width: "200px",
    },
    {
      name: "permission",
      selector: (row) => row.permission,
      sortable: true,
      // width: "200px",
    },
    {
      name: "status",
      selector: (row) => row.status,
      sortable: true,
      width: "90px",
      cell: (row) => (
        <div>
          <span>{row.status == "active" ? "active" : "inactive"}</span>
          <div name="status" className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="status"
              defaultChecked={row.status == "active" ? true : false}
              onChange={(e)=>{handleChangeStatus(e, row.id)}}
            />
          </div>
        </div>
      ),
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
              handleEditDataForm(e, row);
            }}
          >
            รายละเอียด
          </button>
        </div>
      ),
      width: "140px",
    },
  ];

  const contentSection = (
    <>
      <DataTable
        columns={columns}
        data={usersData.data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={usersData.total}
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
                อัปเดตล่าสุด{" "}
                {`${editFormData.updatedAt.slice(
                  0,
                  10
                )}  ${editFormData.updatedAt.slice(11, 19)}`}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="users-update-form">
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="url">ชื่อ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder="ชื่อ"
                        defaultValue={editFormData.firstName}
                        onChange={handleEditFormClick("firstName")}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="url">นามสกุล</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        placeholder="นามสกุล"
                        defaultValue={editFormData.lastName}
                        onChange={handleEditFormClick("lastName")}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="url">email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={editFormData.email}
                        // disabled
                        onChange={handleEditFormClick("email")}
                      />
                    </div>
                    <div className="form-group col-md-6 ">
                      <label htmlFor="url">permission</label>
                      <select
                        className="custom-select mb-3"
                        defaultValue={editFormData.permission}
                        onChange={handleEditFormClick("permission")}
                      >
                        <option
                          style={{ color: "green" }}
                          disabled
                          selected="selected"
                        >
                          {editFormData.permission}
                        </option>
                        <option>user</option>
                        <option>admin</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6 ">
                      <label htmlFor="url">status</label>
                      <select
                        className="custom-select mb-3"
                        defaultValue={editFormData.status}
                        onChange={handleEditFormClick("status")}
                      >
                        <option disabled selected="selected">
                          {editFormData.status}
                        </option>
                        <option>active</option>
                        <option>inactive</option>
                      </select>
                    </div>

                    <textarea
                      type="text"
                      // style={{ width: "1"}}
                      // width="100%"
                      className="form-group col-md-12"
                      name="name"
                      id="name"
                      placeholder="เกี่ยวกับ"
                      defaultValue={editFormData.about}
                      onChange={handleEditFormClick("about")}
                    />
                    <div className="form-group col-md-6">
                      <label htmlFor="url">addressLine1</label>
                      <input
                        type="text"
                        className="form-control"
                        name="addressLine1"
                        id="addressLine1"
                        placeholder="addressLine1"
                        value={editFormData.addressLine1}
                        onChange={handleEditFormClick("addressLine1")}
                        // disabled
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="url">addressLine2</label>
                      <input
                        type="text"
                        className="form-control"
                        name="addressLine2"
                        id="addressLine2"
                        placeholder="addressLine2"
                        value={editFormData.addressLine2}
                        onChange={handleEditFormClick("addressLine2")}

                        // disabled
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="url">city</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="city"
                        placeholder="city"
                        value={editFormData.city}
                        onChange={handleEditFormClick("city")}

                        // disabled
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="url">postalCode</label>
                      <input
                        type="text"
                        className="form-control"
                        name="postalCode"
                        id="postalCode"
                        placeholder="postalCode"
                        value={editFormData.postalCode}
                        onChange={handleEditFormClick("postalCode")}

                        // disabled
                      />
                    </div>
                    <div className="form-group col-md-9">
                      <label htmlFor="url">country</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        id="country"
                        placeholder="country"
                        value={editFormData.country}
                        onChange={handleEditFormClick("country")}
                      />
                    </div>
                  </div>
                </div>
              </form>

              <div className="modal-footer d-block">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-success float-end"
                  onClick={handleFormSave}
                >
                  บันทึก
                </button>
                <button
                  data-bs-dismiss="modal"
                  className="btn btn-danger float-start"
                  onClick={() => {
                    handleDelete(editDataId);
                  }}
                >
                  ลบ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Layout>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">จัดการผู้ใช้</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">ผู้ใช้ทั้งหมด</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-12">
            <div className="card">
              <form onSubmit={handleSearchSubmit}>
                <div className="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={handleSearchChange}
                  />
                  <button type="submit" class="btn btn-outline-success ms-2">
                    ค้นหา
                  </button>
                  <Link to="/admin/users/add">
                    <button class="btn btn-outline-success ms-2">เพิ่ม</button>
                  </Link>
                </div>
              </form>
              <div className="content">{contentSection}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
