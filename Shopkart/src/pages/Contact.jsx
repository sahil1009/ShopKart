
import  { useState } from "react";
import { Navbar } from "../components/Navbar";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    orderId: "",
    message: "",
    help: [],
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle text inputs and textarea
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  // Handle multiple checkbox selections
  const handleHelpChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      help: checked
        ? [...prev.help, value]
        : prev.help.filter((item) => item !== value),
    }));

    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      orderId: "",
      message: "",
      help: [],
    });
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-block">
              <div className="info-icon">
                <img src="/icons/chat-icon.png" alt="Chat" />
              </div>

              <div>
                <h3>Chat with us</h3>
                <p>Our friendly team is here to help.</p>
                <strong>support@shopkart.com</strong>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <img src="/icons/contact-call.png" alt="Call" />
              </div>

              <div>
                <h3>Call us</h3>
                <p>Mon - Sat from 9AM to 6PM.</p>
                <strong>+91 98765 43210</strong>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <img src="/icons/location.png" alt="Location" />
              </div>

              <div>
                <h3>Visit our office</h3>
                <p>Come say hello at our office.</p>
                <strong>
                  123 Shopping Street,
                  <br />
                  Bangalore, Karnataka 560001
                </strong>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-section">
              <iframe
                src="https://www.google.com/maps?q=I.T.VEDANT&output=embed"
                title="I.T.VEDANT location"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h3>Follow us</h3>

              <div className="social-icons">
                <span>
                  <img src="/icons/contact-facebook.png" alt="Facebook" />
                </span>
                <span>
                  <img src="/icons/contact-twitter.png" alt="Twitter" />
                </span>
                <span>
                  <img src="/icons/contact-x.png" alt="X" />
                </span>
                <span>
                  <img src="/icons/contact-youtube.png" alt="YouTube" />
                </span>
                <span>
                  <img
                    src="/icons/contact-instagram.png"
                    alt="Instagram"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-content">
              <h1>
                Have a question?
                <br />
                We're here for <span>you!</span>
              </h1>

              <p className="form-intro">
                Tell us more about your query, suggestion, or feedback.
                <br />
                We'd love to hear from you and get back as soon as possible.
              </p>

              {submitted && (
                <p className="success-message" role="status">
                  Your message has been submitted successfully!
                </p>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Your name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Your email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="orderId">Order ID</label>
                  <input
                    id="orderId"
                    type="text"
                    name="orderId"
                    value={formData.orderId}
                    onChange={handleChange}
                    placeholder="Enter your order ID (optional)"
                  />
                </div>

                <div className="form-field message-field">
                  <label htmlFor="message">Your message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    maxLength={500}
                    required
                  />

                  <span className="character-count">
                    {formData.message.length}/500
                  </span>
                </div>

                {/* Help Options */}
                <div className="help-section">
                  <p>
                    How can we help you?{" "}
                    <span>Select all that apply</span>
                  </p>

                  <div className="help-options">
                    {[
                      "Order Issue",
                      "Return / Refund",
                      "Payment Help",
                      "Account Support",
                      "Product Inquiry",
                      "Other",
                    ].map((option) => (
                      <label key={option} htmlFor={`help-${option}`}>
                        <input
                          id={`help-${option}`}
                          type="checkbox"
                          value={option}
                          checked={formData.help.includes(option)}
                          onChange={handleHelpChange}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="contact-submit">
                  Send Message <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
