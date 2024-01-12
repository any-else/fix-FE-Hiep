import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import EditAdmin from "./pages/admin/editProfileAdmin/editProfileAdmin.jsx";
import EditProduct from "./pages/admin/editProduct/editProduct.jsx";
import ShopContextProvider from "./context/Shop_Context.jsx";
import Navbar from "./components/Navbar.jsx";
import Shop from "./pages/shop/Shop.jsx";
import ShopAddtoCart from "./pages/shopAddtoCart/ShopAddtoCart.jsx";
import Cart from "./pages/cart/Cart.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<ShopAddtoCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editAdmin" element={<EditAdmin />} />
          <Route path="/editInventory" element={<EditProduct />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
