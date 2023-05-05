import React from "react";
import "../style/navbar.css";


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Home
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
