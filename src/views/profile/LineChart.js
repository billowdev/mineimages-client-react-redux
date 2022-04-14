import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { benefitCompleteOrders } from "../../application/actions/profile";
import { getAllBenefit } from "../../application/selectors/profile";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
export default function LineChart() {
  const dispatch = useDispatch();
  const allBenefitData = useSelector(getAllBenefit);
  useEffect(() => {
    dispatch(benefitCompleteOrders);
  }, [dispatch]);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="mt-3">
            <Link
              to="/profile"
              className="btn btn-warning float-right"
            >
              กลับ
            </Link>
          </div>

          <h3 className="mt-5 text-center">รายได้จากการขายรูปภาพ</h3>
          <div className="mt-5 d-flex justify-content-center bd-highlight mb-3">
            <div style={{ width: 700 }}>
              <Line
                data={{
                  labels:
                    allBenefitData &&
                    allBenefitData.map((data) => data.updatedAt.split("T")[0]),
                  datasets: [
                    {
                      label: "price / orders",
                      data:
                        allBenefitData &&
                        allBenefitData.map((data) => data.price),
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
