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
import AddImages from "./user-images/AddImages";

import Admin from "./admin";
import Users from "./admin/components/Users";
import Orders from "./admin/components/Orders";
import Transactions from "./admin/components/Transactions";
import Images from "./admin/components/Images";
import Categories from "./admin/components/Categories";

export default () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/orders" element={<OrderHistory />} />

        <Route path="/profile/images" element={<UserImages />} />
        <Route path="/profile/images/upload" element={<AddImages />} />

        <Route path="/admin" element={<Admin />} exact />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route
          path="/admin/Transactions"
          element={<Transactions />}
        />
        <Route path="/admin/images" element={<Images />} />
        <Route path="/admin/categories" element={<Categories />} />

        <Route
          path="/authentication/activate/:token"
          exact
          element={<EmailValidation />}
        />
      </Routes>
    </Router>
  );
};
