import React from "react";
import worker1 from "./images/worker1.jpg";
import worker2 from "./images/worker2.jpg";
import worker3 from "./images/worker3.jpg";
import "./workerpage.css";

class WorkerDetails extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="left">
            <h2>Plumbing Services</h2>
            <div class="ratings">
              <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              <span class="num-ratings">4.0</span>
              <span class="bookings">(1000+ Bookings)</span>
            </div>
            <div class="box">
              <h3>Our Promises</h3>
              <ul>
                <li>Verified Professionals</li>
                <li>Hassle-Free Booking</li>
                <li>Chat with our service person</li>
                <li>Decide the price at your convenience</li>
              </ul>
            </div>
          </div>

          <div class="right">
            <div class="cardd">
              <div>
                <img src={worker1} alt="Worker 1" />
              </div>
              <div class="worker-details">
                <p class="name">Ram Mohan</p>
                <p>Age: 30</p>
                <p>Gender: Male</p>
                <p>Average Price: Rs 478/-</p>
                <div class="ratings-worker">
                  <p>
                    Rating:{" "}
                    <span class="stars">
                      &#9733;&#9733;&#9733;&#9733;&#9734;
                    </span>{" "}
                    4.0 (56 reviews)
                  </p>
                </div>
              </div>
              <div class="actions">
                <button class="book">Connect</button>
                <button class="connect">Book</button>
              </div>
            </div>
            <div class="cardd">
              <img src={worker2} alt="Worker 2" />
              <div class="worker-details">
                <p class="name">Vishnu Sai Tej</p>
                <p>Age: 49</p>
                <p>Gender: Male</p>
                <p>Average Price: Rs 563/-</p>
                <div class="ratings-worker">
                  <p>
                    Rating:{" "}
                    <span class="stars">
                      &#9733;&#9733;&#9733;&#9733;&#9734;
                    </span>{" "}
                    4.67 (100+ reviews)
                  </p>
                </div>
              </div>
              <div class="actions">
                <button class="book">Connect</button>
                <button class="connect">Book</button>
              </div>
            </div>
            <div class="cardd">
              <img src={worker3} alt="Worker 3" />
              <div class="worker-details">
                <p class="name">Sai Krishn</p>
                <p>Age: 43</p>
                <p>Gender: Male</p>
                <p>Average Price: Rs 400/-</p>
                <div class="ratings-worker">
                  <p>
                    Rating:{" "}
                    <span class="stars">
                      &#9733;&#9733;&#9733;&#9733;&#9734;
                    </span>{" "}
                    3.87 (40 reviews)
                  </p>
                </div>
              </div>
              <div class="actions">
                <button class="book">Connect</button>
                <button class="connect">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkerDetails;
