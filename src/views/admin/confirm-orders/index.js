import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getAllOrders } from "../../../application/selectors/admin";
import { loadOrders } from "../../../application/actions/admin/orders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ConfirmOrders() {
  const dispatch = useDispatch();
  const allOrders = useSelector(getAllOrders);

  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortColumnDirection, setSortColumnDirection] = useState("");
  const [search, setSearch] = useState("");

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
    // fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    var url = `?page=${page}&per_page=${perPage}&delay=1`;
    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    dispatch(loadOrders(url));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const [viewFormData, setViewFormData] = useState({
    id: "",
    name: "",
    pathWatermark: "",
    price: "",
    status: "",
    visible: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleViewData = (e, data) => {
    e.preventDefault();

    const formValues = {
      id: data.id,
      name: data.name,
      pathWatermark: data.pathWatermark,
      price: data.price,
      status: data.status,
      visible: data.visible,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
    setViewFormData(formValues);
  };

  // modal state data
  // const handleViewFormClick = (input) => (e) => {
  //   e.preventDefault();
  //   setViewFormData({ ...viewFormData, [input]: e.target.value });
  // };

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "280px",
    },
    {
      name: "price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "status",
      sortable: true,
      selector: (row) => row.status,
      cell: (row) => (
        <div>
          <span>{row.status}</span>
        </div>
      ),
    },
    {
      name: "TransactionId",
      sortable: true,
      selector: (row) => row.TransactionId,
      cell: (row) => (
        <div>
          <span>{row.TransactionId}</span>
        </div>
      ),
    },
    {
      name: "",
      selector: (row) => row.ImageId,
      cell: (row) => (
        <div>
           <button
            className="btn btn-success me-3"
            value={row.Image}
            data-bs-toggle="modal"
            data-bs-target="#editModalForm"
            onClick={(e) => {
              handleViewData(e, row.Image);
            }}
          >
            รายละเอียด
          </button>

          <button
            className="btn btn-success"
            value={row.Image}
            data-bs-toggle="modal"
            data-bs-target="#editModalForm"
            onClick={(e) => {
              handleViewData(e, row.Image);
            }}
          >
            <FontAwesomeIcon className="nav-icon" icon={faCheck} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">จัดการออเดอร์</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">ออเดอร์ทั้งหมด</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <DataTable
        //   title="MineImages"
        columns={columns}
        data={allOrders.data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={allOrders.totalRows}
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
                {`${viewFormData.updatedAt.slice(
                  0,
                  10
                )}  ${viewFormData.updatedAt.slice(11, 19)}`}
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
                    <div className="form-group col-md-12">
                      <img src={viewFormData.pathWatermark} />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="url">id</label>
                      <input
                        type="text"
                        className="form-control"
                        name="ImageId"
                        id="ImageId"
                        placeholder="ชื่อ"
                        defaultValue={viewFormData.id}
                        disabled
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="url">ชื่อ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="ImageName"
                        id="ImageName"
                        placeholder="ชื่อ"
                        defaultValue={viewFormData.name}
                        disabled
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="url">price</label>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        id="price"
                        placeholder="price"
                        defaultValue={viewFormData.price}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </form>

              <div className="modal-footer d-block">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary float-end"
                  data-dismiss="modal"
                >
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
