import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages } from "../../../application/selectors/admin";
import { loadImages, updateImages } from "../../../application/actions/admin/images";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import log from "../../../infrastructure/services/logger/console";
import { loadState, saveState } from "../../helpers/Persist";

export default function Images() {
  const dispatch = useDispatch();
  const allImagesData = useSelector(getAllImages);

  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState("");
  const [sortColumnDirection, setSortColumnDirection] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = () => {
    setLoading(true);
    var params = `?page=${page}&per_page=${perPage}&delay=1`;

    if (sortColumn) {
      params += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      params += `&search=${search}`;
    }
    dispatch(loadImages(params));
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
    fetchData();
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  const handleChangeStatus = (e, id) => {
    let state = "inactive";
    if (e.target.checked) {
      state = "active";
    }
    const img = { id:id, status: state };
    // dispatch(updateImages(img));
 
  };
  const handleChangeVisible = (e, id) => {
    let state = "private";
    if (e.target.checked) {
      state = "public";
    }
    const img = { id:id, status: state };
  };

  const handleEditImages = ()=>{

  }
  window.onunload=()=>{
    window.localStorage.clear();
  }

  useEffect(() => {
    fetchData();
    saveState('allimagesdata', allImagesData)
  }, [page, sortColumn, sortColumnDirection, perPage, dispatch]);

  const columns = [
    {
      name: "Images",
      selector: (row) => row.pathOrigin,
      cell: (row) => (
        <img src={row.pathOrigin} width={140} height={140} alt={row.name} />
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
    },
    {
      name: "price",
      selector: (row) => row.price,
      sortable: true,
      width: "100px",
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <div>
        <div name="status" className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="status"
            value={row.status == "active" ? "inactive" : "active"}
            defaultChecked={row.status == "active" ? true : false}
            onClick={(e) => {
              handleChangeStatus(e, row.id);
            }}
          />
        </div>
      </div>
      ),
      width: "100px",
    },
    {
      name: "visible",
      selector: (row) => row.visible,
      cell: (row) => (
        <div>
          <div name="visible" className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="visible"
              value={row.visible == "public" ? "private" : "public"}
              defaultChecked={row.visible == "public" ? true : false}
              onClick={(e) => {
                handleChangeVisible(e, row.id);
              }}
            />
          </div>
        </div>
      ),
      width: "120px",
    },
    {
      name: "",
      selector: (row) => row.id,
      cell: (row) => (
        <div>
         <Link to={`/admin/images/update/${row.id}`}>
         <button
            className="btn btn-success"
            value={row}
            data-bs-toggle="modal"
            data-bs-target="#editModalForm"
          >
            แก้ไข
          </button>
         </Link>
        </div>
      ),
      width: "100px",
    },
  ];

  const contentSection = (
    <DataTable
    columns={columns}
    data={allImagesData.images}
    progressPending={loading}
    pagination
    paginationServer
    paginationTotalRows={allImagesData.total}
    onChangeRowsPerPage={handlePerRowsChange}
    onChangePage={handlePageChange}
    onSort={handleSort}
  />
  );

  return (
    <Layout>
      {true && console.log(allImagesData)}
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
