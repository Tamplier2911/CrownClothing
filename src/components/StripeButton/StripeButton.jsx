import React from "react";
import { stripeApiKey } from "../../environment";

// JS Rendering CSS
import { StripeCheckoutButton } from "./StripeButtonStyles";

const onToken = token => {
  console.log(token);
  if (token) {
    alert(`
  Success!
  name: ${token.card.name}
  email ${token.email}`);
  }
};

// value represented in cents
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const bulishebleKey = stripeApiKey;
  return (
    <StripeCheckoutButton
      lable="Buy Now"
      name="Crown Clothing"
      shippingAddress
      billingAddress={true}
      //   image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Purchase"
      token={onToken}
      stripeKey={bulishebleKey}
      className="stripe"
    />
  );
};

export default StripeButton;
