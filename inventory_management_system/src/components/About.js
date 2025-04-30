import React from "react";
import background from "../img/bg.png";

export default function About() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        height: "100vh",
        overflow: "hidden",
        background: `url(${background}) no-repeat center center/cover`,
      }}
    >
      <div className="row justify-content-center align-items-center h-100">
        <div
          className="col-12 col-md-8 col-lg-6 bg-light text-center rounded p-5 shadow"
          style={{ opacity: 0.9 }}
        >
          <h1 className="display-4 text-primary mb-4">ShopDesk</h1>
          <h2 className="text-dark mb-3">Inventory Management System</h2>
          <p className="lead text-muted mb-4">
            Your one-stop solution for all your shopping needs. With ShopDesk,
            managing your inventory has never been easier.
          </p>
          <a href="/products" className="btn btn-primary btn-lg">
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
}
