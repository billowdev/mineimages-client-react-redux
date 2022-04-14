import React from "react";
import {
  faChartLine,
  faPowerOff,
  faUser,
  faImage,
  faShoppingCart,
  faRectangleList,
  faMoneyBill,
  faHome,
  faBars,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <div className="brand-link">
        <img
          src={require("../../assets/images/mineimageslogo.png")}
          alt="logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">ADMIN</span>
      </div>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={require("../../assets/images/mineimageslogo.png")}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              MINEIMAGES
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faChartLine} />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faUser} />
                <p>ผู้ใช้</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/images" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faImage} />
                <p> รูปภาพ </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/categories" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faRectangleList} />
                <p> ประเภท </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/orders" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faShoppingCart} />
                <p> ออเดอร์ </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/confirm-orders" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faCheck} />
                <p> ยืนยันออเดอร์ </p>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/admin/transactions" className="nav-link ">
                <FontAwesomeIcon className="nav-icon" icon={faMoneyBill} />
                <p> Transactions </p>
              </Link>
            </li> */}
            <hr />
            <li className="nav-item">
              <a href="../" id="home" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faHome} />
                <p>หน้าหลัก</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="../" id="logout" className="nav-link">
                <FontAwesomeIcon className="nav-icon" icon={faPowerOff} />
                <p>ออกจากระบบ</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
