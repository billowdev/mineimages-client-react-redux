import React from "react";
import HomeImages from "../components/Home/HomeImages";

export default function Home() {
  return (
    <div classname="home-body">
      <header className="page-header d-flex align-items-center">
        <div className="container">
          <h1 className="fw-bold"> MineImages </h1>
          <h2> Welcome </h2>
        </div>
      </header>
      <section className="container">
        <div className="row justify-content-center">
          <section className="col-12 col-md-8">
            <img
              src={require('../assets/images/mineimageslogo.png')}
              className="avatar"
            />
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="submit" className="btn btn-outline-success">
                search
              </button>
            </div>
          </section>
        </div>
        <div className="row py-5 g-3">
          <section className="col-12 pb-3 text-center">
            <h3>รูปภาพ</h3>
          </section>
        </div>
      </section>
      <HomeImages></HomeImages>
    </div>
  );
}
