import React, { useState } from "react";
import axios from "axios";
import { loadScript } from "../utils/loadScript"; // Helper function to load Razorpay script

const Payment = ({ amount, currency, onSuccess, onFailure }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Step 1: Create a Razorpay order
      const response = await axios.post("https://freelancer-marketplace-backend-1.onrender.com/api/payment/create-order", {
        amount,
        currency,
        receipt: `receipt_${Date.now()}`,
      });

      const { order } = response.data;

      // Step 2: Load Razorpay script
      const razorpayScript = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!razorpayScript) {
        throw new Error("Razorpay SDK failed to load. Are you online?");
      }

      // Step 3: Initialize Razorpay payment
      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Freelance Marketplace",
        description: "Payment for services",
        order_id: order.id,
        handler: function (response) {
          // Handle successful payment
          onSuccess(response);
        },
        prefill: {
          name: "diwakar",
          email: "lokeshbsccomputerscience@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      // Step 4: Handle payment failure
      rzp.on("payment.failed", function (response) {
        onFailure(response);
      });
    } catch (error) {
      console.error("Payment error:", error);
      onFailure(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {loading ? "Processing..." : `Pay ${amount} ${currency}`}
      </button>
    </div>
  );
};

export default Payment;