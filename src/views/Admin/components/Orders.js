import React, {useState} from 'react'
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Orders() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "260px",
    },
    {
      name: "image",
      selector: (row) => row.pathOrigin,
      cell: (row) => (
        <img src={row.pathOrigin} width={200} height={200} alt={row.name} />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
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
      // width: "200px",
    },
    {
      name: "status",
      selector: (row) => row.status,
      cell: (row) => (
        <div>
          <span>{row.status}</span>
        </div>
      ),
    },
  ];

  const [data, setData] = useState([]);
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
    // fetchImageData();
  };

  return (
	<>
	 <div className="body">
        <header>
          <Sidebar />
        </header>
        <section className="section">
          <h1>Orders</h1>
        </section>
      </div>
      <Footer />
	</>
  )
}
