import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  getOnCartrders,
  getOnCartrdersTotalItem,
  getOnCartrdersTotalPrice,
} from "../../application/selectors/cart";
import { pageLoaded } from "../../application/actions/ui";
import { getLoading } from "../../application/selectors/ui";
// import { loadOnCartOrders } from "../../application/actions/cart";
import { loadCheckout } from "../../application/actions/checkout";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteOrder } from "../../application/actions/orders";

function Cart() {
  const dispatch = useDispatch();
  const oncart = useSelector(getOnCartrders);
  const totalPrice = useSelector(getOnCartrdersTotalPrice);
  const totalItem = useSelector(getOnCartrdersTotalItem);
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);

  const numberWithCommas = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "คุณต้องการที่จะลบหรือไม่?",
      text: "หากลบแล้วสามารถกดสั่งซื้อใหม่ได้",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        denyButton: "order-3",
        confirmButton: "order-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrder(id));
        window.location.reload();
      }
    });
   
  };
  const handleCheckout = () => {
    Swal.fire({
      title: "คุณต้องการเช็คเอาท์?",
      text: "เมื่อทำการกดเช็คเอาท์กรุณาจ่ายเงินตามบิล",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        denyButton: "order-3",
        confirmButton: "order-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(loadCheckout);
      }
    });
  };

  function previewData() {
    return (
      <>
        {loading
          ? "Loading  images..."
          : oncart.map((item, key) => {
              return (
                <div className="card-body" key={key}>
                  <div className="row">
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm me-1 mb-2 float-end"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={()=>{handleDelete(item.id)}}
                      >
                        <FontAwesomeIcon className="nav-icon" icon={faXmark} />
                      </button>
                    </div>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={item["Image.pathWatermark"]}
                          className="w-100"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>{item["Image.name"]}</strong>
                      </p>
                      <p>{item["Image.detail"]}</p>
                      <p>{item["User.firstName"]}</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <p className="text-start text-md-center">
                        <strong>{numberWithCommas(item.price)}</strong>
                      </p>
                    </div>
                    <hr className="my-4" />
                  </div>
                </div>
              );
            })}
      </>
    );
    /* Add return before formData.map */
  }

  return (
    <Layout>
      <div>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            {oncart && (
              <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">
                        {totalItem == 0 ? (
                          <span>Cart item: 0</span>
                        ) : (
                          <span>Cart item:{`${totalItem}`}</span>
                        )}
                      </h5>
                    </div>
                    <div>
                      {oncart != [] ? (
                        previewData()
                      ) : (
                        <p className="text-center mt-3 mb-3">
                          ไม่มีรูปภาพในตะกร้าสินค้า
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products
                          {/* {totalPrice == 0 ? (
                            <span>0</span>
                          ) : (
                            <span>{`${numberWithCommas(totalPrice)}`}</span>
                          )} */}
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              <p className="mb-0">( VAT 7%)</p>
                            </strong>
                          </div>
                          <span>
                            {totalPrice == 0 ? (
                              <strong>0</strong>
                            ) : (
                              <>
                                <div>
                                  <span>{`${numberWithCommas(
                                    totalPrice
                                  )}`}</span>
                                </div>
                                <strong>{`${numberWithCommas(
                                  totalPrice + (totalPrice * 7) / 100
                                )}`}</strong>
                              </>
                            )}
                          </span>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="btn btn-success btn-lg btn-block"
                        onClick={handleCheckout}
                      >
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Cart;
