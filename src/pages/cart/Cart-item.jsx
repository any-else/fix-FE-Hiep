import React, { useContext } from "react";
import ShopContextProvider from "../../context/Shop_Context";

const CartItem = (props) => {
  const { id, nombre, precio, img1 } = props.data;
  const { cartItems, addToCart, removeFromCart } =
    useContext(ShopContextProvider);

  return (
    <div className="cartItem">
      <img src={img1} />
      <div className="description">
        <p>
          <b> {nombre} </b>
        </p>
        <p> ${precio} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
