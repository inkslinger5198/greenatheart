import React, { useState } from "react";
import "./paymentgateway.css";

const PaymentGateway = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !name || !address) {
      alert("Please enter all the required fields");
    } else {
      // Rest of your submit logic
      var options = {
        key: "rzp_test_pByDBEHYG6aZiG",
        // ... rest of your options
        prefill: {
          name: name, // using the state value
          email: "pulkitarajain14@gmail.com",
          contact: "9812007935",
        },
        notes: {
          address: address, // using the state value
        },
        // ... rest of your options
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="payment-gateway-container">
      <h1>Payment Gateway</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="address"
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            id="amount"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentGateway;
