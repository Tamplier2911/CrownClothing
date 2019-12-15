import React from "react";
import axios from "axios";
import { stripeApiKey } from "../../environment";

// JS Rendering CSS
import { StripeCheckoutButton } from "./StripeButtonStyles";

// value represented in cents
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const bulishebleKey = stripeApiKey;

  const onToken = async token => {
    try {
      const res = await axios({
        method: "POST",
        url: "payment",
        data: {
          amount: priceForStripe,
          token: token
        }
      });

      alert(`Success! 
        name: ${res.data.success.billing_details.name} 
        email: ${token.email}
        amount: $${res.data.success.amount / 100}`);
      // console.log(res, "response success");
    } catch (error) {
      // const err = JSON.parse(error);
      /*
      alert(`Error! 
        error: ${err.name} 
        message: ${err.message}`);
      */
      // console.log(err, "response error");
      alert(
        `There was an issues with your payment, please try again. ${error.message}`
      );
    }

    // console.log(token, "token");
  };

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
