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
import Edit from "./profile/Edit";
import OrderHistory from "./order-history";
import UserImages from "./user-images";
import AddImages from "./user-images/Add";

import Admin from "./admin";
import Users from "./admin/users";
// import UsersAdd from "./admin/users/UsersAdd";
// import UsersUpdate from "./admin/users/UsersUpdate";
import Orders from "./admin/orders";
// import OrdersUpdate from "./admin/orders/OrdersUpdate";
import Transactions from "./admin/transactions";
// import TransactionsUpdate from "./admin/transactions/TransactionsUpdate";
import Images from "./admin/images";
import ImagesUpdate from "./admin/images/ImagesUpdate";
import Categories from "./admin/categories";
import CategoriesUpdate from "./admin/categories/CategoriesUpdate";
import CategoriesAdd from "./admin/categories/CategoriesAdd";
import { Toaster } from "react-hot-toast";

export default () => {
  return (
    <Router>
      <>
        <Toaster />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<Edit />} />
          <Route path="/profile/orders" element={<OrderHistory />} />

          <Route path="/profile/images" element={<UserImages />} />
          <Route path="/profile/images/upload" element={<AddImages />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/Transactions" element={<Transactions />} />
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
