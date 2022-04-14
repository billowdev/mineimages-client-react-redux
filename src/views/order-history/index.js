import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from "../../application/actions/orders";
import { getUserOrders } from "../../application/selectors/orders";
import Layout from "../components/Layout";

function OrderHistory() {
  const stateOrder = useSelector(getUserOrders);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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

  const orderData = () => {
    return stateOrder&&stateOrder.map((item, key) => {
      return (
        <tr key={item.id}>
          <td style={{ width: "10px" }}>{key + 1}</td>
          <td style={{ width: "250px" }}>
            <img src={item.Image.pathWatermark} width="200px" />
          </td>
          <td >{item.Image.name}</td>
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
    <Container className="user-images">
      <Row>
        <h3 className="text-align-center">ประวัติการสั่งซื้อ</h3>
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
            {stateOrder != [] ? (
              orderData()
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
      </Row>
    </Container>
  );

  useEffect(() => {
    var url = `?page=${page}&per_page=${perPage}&delay=1`;

    if (sortColumn) {
      url += `&sort_column=${sortColumn}&sort_direction=${sortColumnDirection}`;
    }
    if (search) {
      url += `&search=${search}`;
    }
    dispatch(loadOrders(url));
  }, [dispatch]);

  return (
    <Layout>
      {tableSection}
    </Layout>
  );
}

export default OrderHistory;
