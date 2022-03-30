import "./assets/css/style.css";
import React, { useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import ProfileEdit from "./components/Profile/Edit";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster 
        position="top-right"
        reverseOrder={false}
        />
      </div>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="profile" element={<Profile />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
