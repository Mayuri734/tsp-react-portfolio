// src/components/ContactMe.js
import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <section id="contact-me">
      <h2>Contact</h2>
      <p>I'd love to hear from you</p>
      <form>
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here"></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactMe;
