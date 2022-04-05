import React from "react";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">ข้อมูล</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">ข้อมูลทั้งหมด</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
}
