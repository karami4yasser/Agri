import React from "react";
import Subtotal from "../components/Subtotal";
import { useStateValues } from "../components/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
function Checkout() {
  const [{ user, basket }, dispatch] = useStateValues();

  return (
    <div
      className="flex flex-col md:flex-row md:items-start   p-4 b h-max
     items-center"
    >
      <div className="checkout_left">
        <div>
          <h3>hello ,{user?.email}</h3>
          <h2 className="mr-">Your Shoping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
