import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPowerOff,
  faUser,
  faImage,
  faShoppingCart,
  faRectangleList,
  faMoneyBill,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <>
      <nav className="side-bar">
        <div className="user-p">
          <img src={require("../../assets/images/mineimageslogo.png")} />
          <h4>Admin</h4>
        </div>
        <ul>
          <li>
            <Link className="Link" to="/admin">
              <div>
                <i>
                  <FontAwesomeIcon icon={faChartLine} />
                </i>
                <span>Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <div>
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span>User</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/orders">
              <div>
                <i>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
                <span>Orders</span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/admin/transactions">
              <div>
                <i>
                  <FontAwesomeIcon icon={faMoneyBill} />
                </i>
                <span>Transactions</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/images">
              <div>
                <i>
                  <FontAwesomeIcon icon={faImage} />
                </i>
                <span>Images</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/admin/categories">
              <div>
                <i>
                  <FontAwesomeIcon icon={faRectangleList} />
                </i>
                <span>Categories</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                console.log("Admin logout");
              }}
            >
              <i>
                <FontAwesomeIcon icon={faHome} />
              </i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                console.log("Admin logout");
              }}
            >
              <i>
                <FontAwesomeIcon icon={faPowerOff} />
              </i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
