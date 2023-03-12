import React from "react";
import Form from "../../components/Form/Form"

import './contact.css'

function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <div class="contact-links">
            <a href="https://www.linkedin.com/in/jonathangreenoj/" target="_blank" class="col-md-2 contact-details btn btn-primary">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/JXG052" target="_blank" class="col-md-2 contact-details btn btn-primary">
                <i class="fab fa-github"></i> Github
            </a>
            <a href="mailto:jxg0521@gmail.com" class="col-md-2 contact-details btn btn-primary">
                <i class="fas fa-at"></i> Send an email
            </a>
            <a href="tel:07809561335" class="contact-details col-md-2 btn btn-primary">
                <i class="fas fa-mobile-alt"></i> Call me
            </a>     
      </div>
      <Form />

    </div>
  );
}

export default Contact;
