import "./assets/css/style.css";
import React, { useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

// import Signin from "./components/Auth/Signin";
// import Signup from "./components/Auth/Signup";
// import ProfileEdit from "./components/Profile/Edit";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import Authentication from "./components/Auth/Authentication";
import Edit from "./components/Profile/Edit";
import Admin from "./Admin";
import Users from "./Admin/components/Users";
import Orders from "./Admin/components/Orders";
import Transactions from "./Admin/components/Transactions";
import Images from "./Admin/components/Images";
import Categories from "./Admin/components/Categories";
import OrderHistory from "./pages/OrderHistory";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import ImagesUpload from "./pages/UserImages";

function App() {
  return (
    <>
      <div>
        <Toaster 
        position="top-right"
        reverseOrder={false}
        />
      </div>
      <Routes>
            {/* <Route element={<Layout />} /> */}
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/Images" element={<ImagesUpload />} />
            
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Signin />} />

            <Route path="/profile/edit" element={<Edit />} exact />
            <Route path="/profile/orders" element={<OrderHistory />} exact />

            <Route path="/mineimages/admin" element={<Admin />} exact />
            <Route path="/mineimages/admin/users" element={<Users />} />
            <Route path="/mineimages/admin/orders" element={<Orders />} />
            <Route
              path="/mineimages/admin/Transactions"
              element={<Transactions />}
            />
            <Route path="/mineimages/admin/images" element={<Images />} />
            <Route
              path="/mineimages/admin/categories"
              element={<Categories />}
            />
             <Route
                path="/authentication/activate/:token"
                exact
                element={<Authentication />}
              />
          </Routes>
    </>
  );
}

export default App;
