import React from "react";
import Payment from "../components/Payment";

const Checkout = () => {
  const handlePaymentSuccess = (response) => {
    console.log("Payment successful:", response);
    alert("Payment successful! Thank you for your purchase.");
  };

  const handlePaymentFailure = (error) => {
    console.error("Payment failed:", error);
    alert("Payment failed. Please try again.");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="mb-4">Total Amount: $100</p>
      <Payment
        amount={100}
        currency="USD"
        onSuccess={handlePaymentSuccess}
        onFailure={handlePaymentFailure}
      />
    </div>
  );
};

export default Checkout;