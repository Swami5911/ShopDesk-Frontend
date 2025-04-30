import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#00aeff" }}
    >
      {" "}
      {/* Light blue color */}
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/products"
              >
                Products
              </Link>
            </li>
            
            <li className="nav-item">
              <a className="nav-link text-white" href="/Inventory">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light btn-sm" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
