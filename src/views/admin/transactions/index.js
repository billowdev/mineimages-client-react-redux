import React,{useState, useEffect} from "react";
import Layout from "../components/Layout";
// import 

export default function Transactions() {

  return (
    <Layout>
       <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5 className="m-0 text-dark">จัดการ Transactions</h5>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">Transactions ทั้งหมด</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content">{tableSection}</div> */}
    </Layout>
  );
}
