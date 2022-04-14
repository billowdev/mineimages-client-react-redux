import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getCompletedTransactions } from "../../../application/selectors/admin";
import { completedTransactions } from "../../../application/actions/admin/transactions";
import { loadUsers } from "../../../application/actions/admin/users";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

export default function Dashboard() {
  const dispatch = useDispatch();
  const completedTransactionData = useSelector(getCompletedTransactions);
  const userData = useSelector(getAllUsers);
  useEffect(() => {
    dispatch(completedTransactions);
  }, [dispatch]);
  return (
    <Layout>
      {/* {true &&
        console.log(
          userData.data.map((data) =>
            data.createdAt.split('T')[0]
            )
        )} */}
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
      <div className="container">
        <div className="row">
          <div className="col">
            <div >
              <LineChart
                chartData={{
                  labels:
                  completedTransactionData &&
                    completedTransactionData.map((data) =>
                    data.updatedAt.split('T')[0]
                    ),
                  datasets: [
                    {
                      label: "price / transactions",
                      data:
                        completedTransactionData &&
                        completedTransactionData.map((data) => data.totalPrice),
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                    },
                  ],
                }}
              />
            </div>
          </div>
         
          {/* <div className="col">
            <div style={{ width: 600 }}>
              <LineChart
                chartData={{
                  labels:
                    userData &&
                    userData.data.map((data) =>
                     (data.createdAt.split("-")[0])
                    ),
                  datasets: [
                    {
                      label: "user gain",
                      data:
                        userData &&
                        userData.data.map((data) => data.id),
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                    },
                  ],
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
