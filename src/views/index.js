import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../application/actions/ui";
import { getLoading } from "../application/selectors/ui";
import Signin from './authentication/Signin'
import Signup from './authentication/Signup'
import EmailValidation from './authentication/EmailValidation'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import Edit from "./profile/Edit"
import OrderHistory from "./order-history";
import UserImages from "./user-images";
import AddImages from "./user-images/AddImages";


export default () => {
  const dispatch = useDispatch();

  // const loading = useSelector(getLoading);
  // useEffect(() => {
  //   dispatch(pageLoaded);
  // }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/orders" element={<OrderHistory />} />

        <Route path="/profile/images" element={<UserImages />} />
        <Route path="/profile/images/upload" element={<AddImages />} />

    
      
      </Routes>
    </Router>
  );
};
