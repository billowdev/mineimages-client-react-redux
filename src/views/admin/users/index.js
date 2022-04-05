import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../../application/actions/admin/users";
import { getAllUsers } from "../../../application/selectors/admin";

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
    sortable: true,
    width: "200px",
  },
  {
    name: "firstName",
    selector: (row) => row.firstName,
    sortable: true,
    width: "200px",
  },
  {
    name: "lastName",
    selector: (row) => row.lastName,
    sortable: true,
    width: "200px",
  },
  {
    name: "email",
    selector: (row) => row.email,
    sortable: true,
    width: "200px",
  },
  {
    name: "status",
    selector: (row) => row.status,
    sortable: true,
    width: "200px",
  },
];

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

  const dispatch = useDispatch();
  useEffect(()=>{
    fetchUsersData();
  }, [page, sortColumn, sortColumnDirection, perPage, dispatch])
  const usersData = useSelector(getAllUsers);
  const tableSection = (
    <DataTable
    //   title="MineImages"
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
  )
  return (
    <Layout>
      {true && console.log(usersData)}
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
      <div className="content">{tableSection}</div>
    </Layout>
  );
}
