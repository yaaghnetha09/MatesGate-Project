import React from "react";
import image from "./Images/main.jpg";
import img2 from "./Images/tourists.jpg";
import img1 from "./Images/img2.jpg";
import img3 from "./Images/healthcare.jpg";
import { useState } from "react";
import { useEffect } from "react";

export default function Content() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const textsToType = [
    "Home Services?",
    "Tourists Destination?",
    "Healthcare Facilities?",
    "All at ONE place!"
  ];

  useEffect(() => {
    if (currentTextIndex === textsToType.length) return;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        const currentText = textsToType[currentTextIndex];

        if (text.length === currentText.length) {
          setIsTyping(false);
        } else {
          setText((prevText) => currentText.substring(0, prevText.length + 1));
        }
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      const deletingInterval = setInterval(() => {
        if (text.length === 0) {
          setIsTyping(true);
          setCurrentTextIndex((prevIndex) =>
            prevIndex === textsToType.length - 1 ? 0 : prevIndex + 1
          );
        } else {
          setText((prevText) => prevText.slice(0, -1));
        }
      }, 80);

      return () => clearInterval(deletingInterval);
    }
  }, [currentTextIndex, text, isTyping, textsToType]);

  return (
    <>
      <div id="main">
        <div id="main1">
          <div className="container">
            <img
              src={image}
              alt="img"
              style={{
                borderRadius: "10px",
                height: "550px",
                width: "1150px",
                margin: "auto", // Align center horizontally
                display: "block",
                marginBottom: "20px"
              }}
            />
            <div className="console-container">
              <div
                className="console-underscore"
                id="cursor"
                style={{
                  color: "black",
                  fontSize: "40px",
                  fontFamily: "cursive"
                }}
              >
                <span id="text">{text}</span>|
              </div>
            </div>
          </div>

          <div
            className="class-card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ padding: "20px", textAlign: "center" }}>
              <b>Welcome to MatesGate!</b>
              <br />
              Welcome to Mate's Gate, your ultimate online destination where we
              cater to every aspect of your life. Whether you're in need of
              household assistance, looking to explore local attractions, or
              require access to medical services, we've got you covered. Our
              mission revolves around seamlessly integrating all facets of your
              day-to-day activities, travel adventures, and health maintenance.
              <br />
              Discover reliable home services, plan exciting outings, and
              prioritize your well-being with us. We understand the importance
              of convenience and satisfaction in your journey, whether you're at
              home or on the go. Join us in exploring a world of possibilities
              where convenience meets excellence, and where your needs are our
              top priority.
              <br />
              <b>Welcome aboard!</b>
            </div>
          </div>

          <div className="class-card">
            <div style={{ borderRadius: "10px" }}>
              <a href="#home_services">
                <img src={img1} alt="img" style={{ borderRadius: "10px" }} />
              </a>
            </div>
            <div style={{ padding: "20px" }}>
              <h2>
                <b>Home Services</b>
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  padding: "70px",
                  paddingTop: "20px"
                }}
              >
                <li>Experience seamless home management with Mate's Gate.</li>
                <li>
                  Comprehensive range of home services covering plumbing,
                  electrical repairs, gardening, and cleaning.
                </li>
                <li>
                  Trusted professionals equipped to handle all your home
                  maintenance needs.
                </li>
                <li>
                  Ensure your space remains comfortable and well-maintained.
                </li>
                <li>
                  Prioritize what truly matters, knowing your home is in good
                  hands.
                </li>
              </ul>
            </div>
          </div>

          <div className="class-card">
            <div style={{ padding: "20px" }}>
              <h2>
                <b>Tourist Hotspots</b>
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  padding: "70px",
                  paddingTop: "20px"
                }}
              >
                <li>Embark on unforgettable journeys with Mate's Gate.</li>
                <li>Curated guide to local tourist places.</li>
                <li>Explore attractions, landmarks, and activities.</li>
                <li>Plan adventures effortlessly.</li>
                <li>Make the most of your travel experiences.</li>
              </ul>
            </div>
            <div style={{ borderRadius: "10px" }}>
              <a href="#tourists_places">
                <img
                  src={img2}
                  alt="img"
                  style={{ borderRadius: "10px" }}
                  href="#Tourists"
                />
              </a>
            </div>
          </div>

          <div className="class-card">
            <div style={{ borderRadius: "10px" }}>
              <a href="#Healthcare_services">
                <img src={img3} alt="img" style={{ borderRadius: "10px" }} />
              </a>
            </div>
            <div style={{ padding: "20px" }}>
              <h2>
                <b>Healthcare Access</b>
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  padding: "70px",
                  paddingTop: "20px"
                }}
              >
                <li>Your well-being is our priority.</li>
                <li>
                  Connects you with reputable clinics and healthcare providers.
                </li>
                <li>Easily find medical services and schedule appointments.</li>
                <li>Access essential health information.</li>
                <li>
                  Ensuring healthcare is accessible and convenient for everyone.
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="class-card"> */}
          <div className="class-card-kk">
            <h1>Key Features</h1>
          </div>
          <div
            style={{ padding: "20px", display: "flex", paddingRight: "2px" }}
          >
            <div className="class-card-k">
              <h3>User-Friendly Interface</h3>Our platform prides itself on its
              intuitive user interface, designed for effortless navigation and
              accessibility.
              {/* Whether you're in search of home services, planning
              your next adventure, or exploring healthcare options, our
              interface ensures a seamless experience. With clear categorization
              and streamlined menus, finding what you need is simple and
              efficient. */}
            </div>
            {/* <br />
              <br /> */}
            <div className="class-card-k">
              <h3>Local Experts</h3>
              Connect with vetted home service professionals for expert
              assistance. Our network ensures reliability and quality service
              provision for your home needs.
            </div>
            {/* <br />
              <br /> */}
            <div className="class-card-k">
              <h3>Insights</h3> Explore detailed local tourist guides for
              insider tips on hidden gems and popular attractions, enriching
              your travel experience.
            </div>
            {/* <br />
              <br /> */}
            <div className="class-card-k">
              <h3>Directory</h3>Access essential healthcare information and
              contact details effortlessly through our comprehensive database.
            </div>
          </div>
          {/* </div> */}

          <div className="class-card">
            <div style={{ padding: "20px", textAlign: "center" }}>
              Mate's Gate is your go-to destination for a well-rounded and
              convenient lifestyle.
              {/* <br /> */}
              Explore, experience, and elevate your living with our integrated
              platform.
              {/* <br /> */}
              Join us in building a community that values efficiency,
              exploration, and well-being.
              {/* <br /> */}
              Incorporating these features, our platform embodies a holistic
              approach aimed at enhancing every aspect of your lifestyle
              journey.
              {/* <br /> */}
              Through seamless integration of convenience, reliability, and
              informed decision-making, we strive to elevate your experience to
              new heights.
              <br />
              <b>Start your journey with Mate's Gate today!</b>
            </div>
          </div>
        </div>
        {/* <div id="main2">
          <div style={{ position: "relative", padding: "10px", width: "100%" }}>
            <h2 style={{ textAlign: "center" }}>
              <b>UPDATES!!</b>
            </h2>
          </div>

          <div
            className="updates"
            style={{ position: "relative", width: "100%" }}
          >
            <ul>
              <li>Home Cleaning Service</li>
              <li>Emergency Medical Clinic</li>
              <li>Historical Landmarks Tour</li>
              <li>Pest Control Service</li>
              <li>Pediatric Clinic</li>
              <li>City Sightseeing Tour</li>
              <li>Gardening and Landscaping Service</li>
              <li>Dental Clinic</li>
              <li>Cultural Heritage Tour</li>
              <li>Plumbing Service</li>
              <li>Orthopedic Clinic</li>
              <li>Adventure Tours</li>
              <li>Electrical Repair Service</li>
              <li>Dermatology Clinic</li>
              <li>Nature Exploration Tours</li>
              <li>Interior Design Consultation</li>
              <li>Ophthalmology Clinic</li>
              <li>Food and Wine Tasting Tours</li>
              <li>HVAC Maintenance Service</li>
              <li>Mental Health Clinic</li>
              <li>Beach Resort Getaways</li>
              <li>Pet Care Services</li>
              <li>Women's Health Clinic</li>
              <li>Mountain Hiking Expeditions</li>
              <li>Handyman Services</li>
              <li>Fitness and Wellness Centers</li>
              <li>Couples Counseling Clinics</li>
              <li>Culinary Tours</li>
              <li>Laundry and Dry Cleaning Service</li>
              <li>Emergency Veterinary Clinic</li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
