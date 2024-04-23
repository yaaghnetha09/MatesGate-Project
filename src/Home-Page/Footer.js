import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col">
            <h2>MATE'S GATE</h2>
            <p>
              A Home-Service website which connects people with professionals
              who cater to a wide array of home-related needs.
            </p>
          </div>
          <div className="col">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="aboutus">About Us</a>
              </li>
              <li>
                <a href="services">Services</a>
              </li>
              <li>
                <a href="features">Features</a>
              </li>
              <li>
                <a href="contacts">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              <a>Social Links</a>
            </h3>
            <div class="logo">
              <a href="https://www.facebook.com" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <hr className="hr1" />
          <p className="copyright">
            &copy; Copyright 2023 Mate's gate. All rights reserved!
          </p>
        </div>
      </div>
    </>
  );
}
