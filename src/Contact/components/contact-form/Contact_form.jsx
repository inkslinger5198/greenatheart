import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "./contact-form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Prepare the data to be sent
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toISOString(), // Add current date
      };

      // Replace with your server's endpoint
      const response = await axios.post('http://localhost:3000/submit-data', payload);

      console.log("Data successfully sent to the server!", response);

      setShowConfirmation(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setShowConfirmation(false), 5000);
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact_form">
      {showConfirmation && (
        <div className="confirmation">
          Thank you for contacting us!
        </div>
      )}
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          required
        />
        {/* Hidden field for date */}
        <input type="hidden" name="date" value={new Date().toISOString()} />

        <div className="contact-form-button">
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
