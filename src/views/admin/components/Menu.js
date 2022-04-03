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
  } from "@fortawesome/free-solid-svg-icons";
  import { Link } from "react-router-dom";
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
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              TEST ADMIN
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
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
                    <p>หน้าหลัก</p>
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
                    <FontAwesomeIcon className="nav-icon" icon={faImage} />
                    <p> ประเภท </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/orders" className="nav-link">
                    <FontAwesomeIcon
                      className="nav-icon"
                      icon={faShoppingCart}
                    />
                    <p> ออเดอร์ </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/transactions" className="nav-link ">
                    <FontAwesomeIcon className="nav-icon" icon={faMoneyBill} />
                    <p> Transactions </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="../" id="logout" className="nav-link">
                    <i className="fas fa-sign-out-alt" />
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
