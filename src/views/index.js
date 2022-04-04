import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../application/actions/ui";
import { getLoading } from "../application/selectors/ui";
import Signin from "./authentication/Signin";
import Signup from "./authentication/Signup";
import EmailValidation from "./authentication/EmailValidation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import Edit from "./profile/Edit";
import OrderHistory from "./order-history";
import UserImages from "./user-images";
import AddImages from "./user-images/Add";

import Admin from "./admin";
import Users from "./admin/users";
import Users__Add from "./admin/users/Users_Add";
import Users__Update from "./admin/users/Users_Update";
import Orders from "./admin/orders";
import Orders__Update from "./admin/orders/Orders_Update";
import Transactions from "./admin/transactions";
import Transactions__Update from "./admin/transactions/Transactions_Update";
import Images from "./admin/images";
import Images__Update from "./admin/images/Images__Update";
import Categories from "./admin/categories";
import Categories__Update from "./admin/categories/Categories__Update";
import Categories__Add from "./admin/categories/Categories__Add";
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
          <Route path="/admin/images/update/:id" element={<Images__Update />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route
            path="/admin/categories/update/:id"
            element={<Categories__Update />}
          />
          <Route path="/admin/categories/add" element={<Categories__Add />} />
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
