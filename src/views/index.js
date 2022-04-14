import React from "react";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import EmailValidation from "./authentication/EmailValidation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import LineChart from "./profile/LineChart";
import Edit from "./profile/Edit";
import OrderHistory from "./order-history";
import UserImages from "./user-images";
import AddImages from "./user-images/Add";
import Cart from "./cart";

import Admin from "./admin";
import Users from "./admin/users";
import Orders from "./admin/orders";
import Transactions from "./admin/transactions";
import Images from "./admin/images";
import ImagesUpdate from "./admin/images/ImagesUpdate";
import Categories from "./admin/categories";
import CategoriesUpdate from "./admin/categories/CategoriesUpdate";
import CategoriesAdd from "./admin/categories/CategoriesAdd";
import ConfirmOrders from "./admin/confirm-orders";

import UsersAdd from "./admin/users/UsersAdd";
import { Toaster } from "react-hot-toast";


export default () => {
  return (
    <Router>
      <>
        <Toaster 
        position="top-right"
        reverseOrder={false}
        />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<Edit />} />
          <Route path="/profile/chart" element={<LineChart />} />
          
          <Route path="/profile/orders" element={<OrderHistory />} />

          <Route path="/profile/images" element={<UserImages />} />
          <Route path="/profile/images/upload" element={<AddImages />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/add" element={<UsersAdd />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/confirm-orders" element={<ConfirmOrders />} />
          <Route path="/admin/images" element={<Images />} />
          {/* <Route path="/admin/images/add" element={<Images__Add />} /> */}
          <Route path="/admin/images/update/:id" element={<ImagesUpdate />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route
            path="/admin/categories/update/:id"
            element={<CategoriesUpdate />}
          />
          <Route path="/admin/categories/add" element={<CategoriesAdd />} />
          <Route
            path="/authentication/activate/:token"
            exact
            element={<EmailValidation />}
          />
        </Routes>
      </>
    </Router>
  );
};
