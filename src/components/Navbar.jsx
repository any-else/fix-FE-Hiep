import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import ShopContextProvider from "../context/Shop_Context";
// import Shop
const Navbar = () => {
  const context = useContext(ShopContextProvider);

  return (
    <div className="navbar">
      {!context?.admin ? (
        !context?.logged ? (
          <div className="links">
            <Link to="/">Shop</Link>
            <Link to="/login"></Link>
          </div>
        ) : (
          <div className="links">
            <Link to="/shop">Shop</Link>
            <Link to="/cart"></Link>
          </div>
        )
      ) : (
        <div className="links">
          <Link to="/editInventory">Product</Link>
          <Link to="/editAdmin">Admin Profile</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
