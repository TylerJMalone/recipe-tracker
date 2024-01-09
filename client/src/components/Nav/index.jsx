import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="#"><img src="client/src/assets/images/Spoons-logo.png" alt="Spoons Logo" width="100" height="45" /></a>
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search a Recipe" aria-label="Search">
        </input>
      <button className="btn" type="submit">Search</button>
    </form>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Donate/Buy</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign Up</a>
      </li>

    </ul>
  </div>
  </div>
</nav>
  )
};

export default Navbar;
