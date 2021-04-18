import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import "./styles.scss";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;
  return (
    <Layout>
      <div className="cartContainer">
        <Card headerLeft={`My Cart`} headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <div key={index} className="flexRow">
              <div className="cartProductContainer">
                <img src="" alt="" />
              </div>
              <div className="cartItemDetails">
                <div>
                  {cartItems[key].name} - qty - {cartItems[key].qty}
                </div>
                <div>Delivery in 3 - 5 days</div>
              </div>
            </div>
          ))}
        </Card>
        <Card style={{ width: "50rem" }}>Price</Card>
      </div>
    </Layout>
  );
}

export default CartPage;
