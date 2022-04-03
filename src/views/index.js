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
import Orders from "./admin/orders/Orders";
import Transactions from "./admin/transactions";
import Images from "./admin/images/Images";
import Categories from "./admin/categories";
import Images__add from "./admin/images/Add";
import Images__update from "./admin/images/Update";
import Categories__Update from "./admin/categories/Categories__Update";

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

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/Transactions" element={<Transactions />} />
        <Route path="/admin/images" element={<Images />} />
        <Route path="/admin/images/add" element={<Images__add />} />
        <Route path="/admin/images/update/:id" element={<Images__update />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route
          path="/admin/categories/update/:id"
          element={<Categories__Update />}
        />

        <Route
          path="/authentication/activate/:token"
          exact
          element={<EmailValidation />}
        />
      </Routes>
    </Router>
  );
};
