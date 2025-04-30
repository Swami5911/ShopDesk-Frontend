import React from "react";
import background from "../img/bg.png";

export default function Home() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        height: "100vh",
        overflow: "hidden",
        background: `url(${background}) no-repeat center center/cover`,
        display: "flex",
        flexDirection: "column", // Stack items vertically
        justifyContent: "space-between", // Space out the content and footer
      }}
    >
      <div
        className="text-center bg-light rounded p-5 shadow"
        style={{ maxWidth: "900px", opacity: 1.0, margin: "auto" }}
      >
        <h1 className="display-4 text-primary mb-4">Welcome to ShopDesk</h1>
        <p className="lead text-muted mb-4">
          Your one-stop solution for all your shopping needs.
        </p>
        <h2 className="text-dark mb-3">Go to Products Section</h2>
        <a href="/products" className="btn btn-primary btn-lg">
          Explore Products
        </a>
      </div>

      <footer
        className="footer text-center text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "10px 0" }}
      >
        <p className="mb-0">&copy; 2024 ShopDesk. All rights reserved.</p>
      </footer>
    </div>
  );
}
