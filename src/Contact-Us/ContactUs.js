import * as React from "react";
import "./ContactUs.css"; // Import the CSS file for styling
// import Navbar from './navbar';
// import Footer from './footer';

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-content">
          <div className="contact-us-text">
            <h2><b>Contact Us</b></h2>
            <p style={{ marginTop: '30px' }}>
              We're here to help and answer any questions you might have .We
              look forward to hearing from you! Any form of help is highly
              appreciated and we eagerly wait to resolve all your problems.
            </p>
            <p>Feel free to reach out to us with any questions or inquirie.</p>
          </div>
          <i class="fa fa-location-arrow" aria-hidden="true">
            {" "}
            Delhi ,26 Aminabad Amantan 3rd Floor
          </i>
          <br></br>
          <i class="fa fa-phone" aria-hidden="true">
            {" "}
            +91 7018208486
          </i>
          <br></br>
          <i class="fa fa-envelope" aria-hidden="true">
            {" "}
            matesgate@gmail.com
          </i>

          <div className="contact-us-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqEJFpVIVZrhXMu1unZ2xAyV4i2de-0rfJQ9C2RU9Ng&s"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
