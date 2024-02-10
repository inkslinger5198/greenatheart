import React, { useState } from "react";
import axios from "axios";
import "./member_form.css";

const MemberForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "", // Optional field
    location: "",
    purpose: "",
    
    
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If phoneNumber is not provided, set it explicitly to an empty string
    const finalFormData = {
      ...formData,
      phoneNumber: formData.phoneNumber || "",
      formType: 'member',
      date: new Date().toISOString()
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/submit-data', finalFormData);

      console.log("Data successfully sent to the server!", response);
      setShowConfirmation(true);
      setFormData({ name: "", email: "", purpose: "", location: "", phoneNumber: "" });
      setTimeout(() => setShowConfirmation(false), 5000);
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="member_form">
      {showConfirmation && <div className="confirmation">Thank you for joining us!</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location (Country, City)" required />
        <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="Purpose for Joining" required />
        <div className="member-form-button">
          <button type="submit" disabled={loading}>{loading ? "Joining..." : "Join"}</button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
